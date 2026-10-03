import { MeshoptSimplifier } from "meshoptimizer";
import * as THREE from "three";
import { mergeVertices } from "three/addons/utils/BufferGeometryUtils.js";

/**
 * Machine-made far copies: weld a geometry, then simplify it with meshoptimizer's edge collapse to
 * within `error` world units of the full surface. Hard edges survive: a creased geometry carries
 * split normals there, which `weld` keeps split and the simplifier treats as seams. The far copy
 * shares the full copy's vertex buffers under a shorter index.
 *
 * Needs `meshoptimizer` (its wasm is embedded; nothing is fetched). Pick `error` from the style
 * file's play-camera distance: under a pixel there is invisible.
 */

await MeshoptSimplifier.ready;

const triangleCount = (geometry: THREE.BufferGeometry) =>
  (geometry.index?.count ?? geometry.getAttribute("position").count) / 3;

/** An indexed copy with coincident vertices merged. Every attribute must agree, so creases stay split. */
const weld = (geometry: THREE.BufferGeometry) => {
  const welded = mergeVertices(geometry.index ? geometry.toNonIndexed() : geometry, 1e-5);

  welded.name = geometry.name;

  return welded;
};

/** A simplified copy of an indexed geometry, or `null` if it would save under 10%. */
const simplify = (geometry: THREE.BufferGeometry, error: number) => {
  const index = geometry.index;

  if (!index) {
    throw new Error("lod: simplify takes an indexed geometry; weld it first");
  }

  const [indices] = MeshoptSimplifier.simplify(
    new Uint32Array(index.array),
    geometry.getAttribute("position").array as Float32Array,
    3,
    0,
    error,
    ["ErrorAbsolute", "Prune"],
  );

  if (indices.length >= index.count * 0.9) {
    return null;
  }

  const far = new THREE.BufferGeometry();

  for (const [name, attribute] of Object.entries(geometry.attributes)) {
    far.setAttribute(name, attribute);
  }

  far.setIndex(new THREE.BufferAttribute(indices, 1));
  far.name = `${geometry.name}:far`;

  return far;
};

/**
 * `window.lodReport([0.01, 0.02, 0.03])`: per tagged object, triangles in full and simplified to
 * each error. What a far copy would save, before one is wired in.
 */
const installLodReport = (scene: THREE.Scene) => {
  Object.assign(window, {
    lodReport: (errors: number[]) => {
      const rows: Record<string, number[]> = {};

      scene.traverse((object) => {
        const mesh = object as THREE.Mesh;

        if (!mesh.isMesh || !mesh.geometry.getAttribute("position")) {
          return;
        }

        let at: THREE.Object3D | null = mesh;

        while (at && at.userData.studioObject === undefined) {
          at = at.parent;
        }

        if (!at) {
          return;
        }

        const tag = String(at.userData.studioObject);
        const welded = weld(mesh.geometry);
        const counts = [triangleCount(welded), ...errors.map((e) => triangleCount(simplify(welded, e) ?? welded))];

        rows[tag] = (rows[tag] ?? counts.map(() => 0)).map((sum, k) => sum + counts[k]!);
        welded.dispose();
      });

      return rows;
    },
  });
};

export { installLodReport, simplify, triangleCount, weld };
