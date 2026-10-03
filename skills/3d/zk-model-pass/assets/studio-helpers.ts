import * as THREE from "three";

/**
 * Console helpers for the model studio. Copy into the project, then call once the scene exists:
 *
 *   vanilla: installStudioHelpers(scene)
 *   R3F:     const scene = useThree((s) => s.scene);
 *            useLayoutEffect(() => installStudioHelpers(scene), [scene]);
 *
 * Name every mesh and geometry (`mesh.name`, `geometry.name`): `meshes()` and `census()` report
 * by name, and "BufferGeometry 52k" tells you nothing.
 *
 * Every object under test sits inside a group tagged `userData.studioObject = "<name>"`.
 * `zfight()` audits only tagged parts, so the studio's ground and props never show up in it.
 *
 * Units: `gap` and the overlap margin assume one world unit = 1 m. Scale them if yours differ.
 */

type Tri = { id: number; part: number; n: THREE.Vector3; d: number; p: THREE.Vector3[] };

const triangleCount = (geometry: THREE.BufferGeometry) =>
  (geometry.index?.count ?? geometry.getAttribute("position")?.count ?? 0) / 3;

const tagOf = (object: THREE.Object3D) => {
  let at: THREE.Object3D | null = object;

  while (at && at.userData.studioObject === undefined) {
    at = at.parent;
  }

  return at ? String(at.userData.studioObject) : null;
};

const vertexIndex = (geometry: THREE.BufferGeometry, k: number) => geometry.index?.getX(k) ?? k;

/** Triangles one pass draws: visible meshes, instances counted. Shadow passes add roughly as much again. */
const tris = (scene: THREE.Scene) => {
  let total = 0;

  scene.traverseVisible((object) => {
    const mesh = object as THREE.Mesh;

    if (!mesh.isMesh) {
      return;
    }

    const batch = mesh as unknown as THREE.BatchedMesh;

    if (batch.isBatchedMesh) {
      const range = { start: 0, count: 0, vertexStart: 0, vertexCount: 0, indexStart: 0, indexCount: 0 };

      for (let id = 0; id < batch.maxInstanceCount; id++) {
        try {
          batch.getGeometryRangeAt(batch.getGeometryIdAt(id), range as never);
        } catch {
          continue;
        }

        total += (mesh.geometry.index ? range.indexCount : range.vertexCount) / 3;
      }

      return;
    }

    const instanced = mesh as THREE.InstancedMesh;

    total += triangleCount(mesh.geometry) * (instanced.isInstancedMesh ? instanced.count : 1);
  });

  return Math.round(total);
};

/** Every visible mesh: [name, triangles, instances, product], biggest product first. */
const meshes = (scene: THREE.Scene) => {
  const rows: [string, number, number, number][] = [];

  scene.traverseVisible((object) => {
    const mesh = object as THREE.InstancedMesh;

    if (!mesh.isMesh || (mesh as unknown as THREE.BatchedMesh).isBatchedMesh) {
      return;
    }

    const triangles = triangleCount(mesh.geometry);
    const count = mesh.isInstancedMesh ? mesh.count : 1;

    rows.push([mesh.name || mesh.geometry.type, triangles, count, triangles * count]);
  });

  return rows.sort((x, y) => y[3] - x[3]);
};

/**
 * Meshes whose geometry carries a NaN/infinite position or normal, or a zero-length normal on a
 * triangle with area. Any of these lights a pixel NaN, which bloom smears into a black block.
 */
const audit = (scene: THREE.Scene) => {
  const found: string[] = [];
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Vector3();

  scene.traverse((object) => {
    const mesh = object as THREE.Mesh;
    const position = mesh.isMesh ? mesh.geometry.getAttribute("position") : undefined;

    if (!position) {
      return;
    }

    const geometry = mesh.geometry;
    const normal = geometry.getAttribute("normal");
    let bad = 0;
    let zero = 0;

    const values = position.array as ArrayLike<number>;

    for (let i = 0; i < values.length; i++) {
      if (!Number.isFinite(values[i]!)) {
        bad += 1;
      }
    }

    if (normal) {
      const count = geometry.index?.count ?? position.count;

      for (let k = 0; k + 2 < count; k += 3) {
        const ids = [vertexIndex(geometry, k), vertexIndex(geometry, k + 1), vertexIndex(geometry, k + 2)];

        a.fromBufferAttribute(position, ids[0]!);
        b.fromBufferAttribute(position, ids[1]!);
        c.fromBufferAttribute(position, ids[2]!);

        const area = b.sub(a).cross(c.sub(a)).length();

        for (const v of ids) {
          const length = Math.hypot(normal.getX(v), normal.getY(v), normal.getZ(v));

          if (!Number.isFinite(length)) {
            bad += 1;
          } else if (length < 1e-4 && area > 1e-8) {
            zero += 1;
          }
        }
      }
    }

    if (bad > 0 || zero > 0) {
      found.push(`${mesh.name || geometry.type} (${tagOf(mesh) ?? mesh.parent?.name ?? ""}): nan ${bad}, zero-normals ${zero}`);
    }
  });

  return found;
};

/**
 * Pairs of tagged parts with faces in (nearly) one plane, facing the same way, overlapping: what
 * z-fights. World space. `gap` is how close two planes count as one; 4 mm is about what depth
 * precision loses at a ~50 m camera. Returns [pair, overlapping triangle count], worst first.
 * Instanced and batched meshes are skipped: audit their source parts standing as plain meshes.
 * `self` also checks triangles within one mesh, for merged geometry whose parts share a buffer.
 */
const zfight = (scene: THREE.Scene, gap = 0.004, self = false) => {
  scene.updateMatrixWorld(true);

  const parts: THREE.Mesh[] = [];
  const buckets = new Map<string, Tri[]>();
  const all: [Tri, number, number, number, number][] = [];
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Vector3();
  const QUANT = 40;
  const keyOf = (x: number, y: number, z: number, d: number) => `${x},${y},${z},${d}`;

  scene.traverse((object) => {
    const mesh = object as THREE.Mesh;

    if (
      !mesh.isMesh ||
      (mesh as THREE.InstancedMesh).isInstancedMesh ||
      (mesh as unknown as THREE.BatchedMesh).isBatchedMesh ||
      !mesh.geometry.getAttribute("position") ||
      tagOf(mesh) === null
    ) {
      return;
    }

    const part = parts.push(mesh) - 1;
    const geometry = mesh.geometry;
    const position = geometry.getAttribute("position");
    const count = geometry.index?.count ?? position.count;

    for (let k = 0; k + 2 < count; k += 3) {
      a.fromBufferAttribute(position, vertexIndex(geometry, k)).applyMatrix4(mesh.matrixWorld);
      b.fromBufferAttribute(position, vertexIndex(geometry, k + 1)).applyMatrix4(mesh.matrixWorld);
      c.fromBufferAttribute(position, vertexIndex(geometry, k + 2)).applyMatrix4(mesh.matrixWorld);

      const n = new THREE.Vector3().subVectors(b, a).cross(new THREE.Vector3().subVectors(c, a));

      if (n.length() / 2 < 1e-5) {
        continue;
      }

      n.normalize();

      const tri: Tri = { id: all.length, part, n, d: n.dot(a), p: [a.clone(), b.clone(), c.clone()] };
      const q = [Math.round(n.x * QUANT), Math.round(n.y * QUANT), Math.round(n.z * QUANT), Math.round(tri.d / gap)] as const;
      const key = keyOf(...q);

      buckets.set(key, [...(buckets.get(key) ?? []), tri]);
      all.push([tri, ...q]);
    }
  });

  // Overlap of two triangles in their shared plane: separating axes, with a margin so triangles
  // merely touching along an edge don't count.
  const margin = gap / 2;
  const overlaps = (s: Tri, t: Tri) => {
    const u = new THREE.Vector3().subVectors(s.p[1]!, s.p[0]!).normalize();
    const v = new THREE.Vector3().crossVectors(s.n, u);
    const flat = (q: THREE.Vector3) => [q.dot(u), q.dot(v)] as const;
    const P = s.p.map(flat);
    const Q = t.p.map(flat);
    const span = (points: (readonly [number, number])[], ax: number, ay: number) => {
      const values = points.map(([x, y]) => x * ax + y * ay);

      return [Math.min(...values), Math.max(...values)] as const;
    };

    for (const poly of [P, Q]) {
      for (let e = 0; e < 3; e++) {
        const [x1, y1] = poly[e]!;
        const [x2, y2] = poly[(e + 1) % 3]!;
        const length = Math.hypot(x2 - x1, y2 - y1) || 1;
        const ax = -(y2 - y1) / length;
        const ay = (x2 - x1) / length;
        const [p0, p1] = span(P, ax, ay);
        const [q0, q1] = span(Q, ax, ay);

        if (Math.min(p1, q1) - Math.max(p0, q0) < margin) {
          return false;
        }
      }
    }

    return true;
  };

  const nameOf = (part: number) => {
    const mesh = parts[part]!;
    const material = (Array.isArray(mesh.material) ? mesh.material[0] : mesh.material) as THREE.Material;
    const centre = new THREE.Box3().setFromObject(mesh).getCenter(new THREE.Vector3());

    return `${tagOf(mesh)}|${mesh.name || mesh.geometry.type}|${material.name || material.type}|${centre
      .toArray()
      .map((x) => x.toFixed(2))
      .join(",")}`;
  };

  const pairs = new Map<string, number>();

  // Look in every neighbouring bucket, so near-equal normals or offsets that round apart still meet.
  for (const [s, nx, ny, nz, dk] of all) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        for (let k = -1; k <= 1; k++) {
          for (let l = -1; l <= 1; l++) {
            for (const t of buckets.get(keyOf(nx + i, ny + j, nz + k, dk + l)) ?? []) {
              if (t.id <= s.id || (s.part === t.part && !self) || s.n.dot(t.n) < 0.999 || Math.abs(s.d - t.d) > gap || !overlaps(s, t)) {
                continue;
              }

              const pair = `${nameOf(s.part)}  <>  ${nameOf(t.part)}`;

              pairs.set(pair, (pairs.get(pair) ?? 0) + 1);
            }
          }
        }
      }
    }
  }

  return [...pairs].sort(([, x], [, y]) => y - x);
};

/**
 * Black-frame probe: samples a 3×3 grid of the drawing buffer after each render and counts frames
 * where 3+ samples are pure black. Temporary: wire it in, measure, remove it.
 *
 *   R3F:     useFrame(({ gl }) => probe(gl), N)   // N above the priority of the frame that renders
 *   vanilla: call probe(renderer) right after composer.render() / renderer.render()
 *
 * In R3F any positive useFrame priority turns the automatic render off. An app with no
 * positive-priority frame renders first in the same callback:
 *   useFrame(({ gl, scene, camera }) => { gl.render(scene, camera); probe(gl); }, 1)
 *
 * Read `window.__black.length / window.__frames`; reset both to start a measurement.
 */
const blackFrameProbe = () => {
  const pixel = new Uint8Array(4);
  const probe = window as unknown as { __frames?: number; __black?: number[] };

  return (renderer: THREE.WebGLRenderer) => {
    const context = renderer.getContext();
    let black = 0;

    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        context.readPixels(
          Math.floor((context.drawingBufferWidth * i) / 4),
          Math.floor((context.drawingBufferHeight * j) / 4),
          1,
          1,
          context.RGBA,
          context.UNSIGNED_BYTE,
          pixel,
        );

        if (pixel[0]! < 4 && pixel[1]! < 4 && pixel[2]! < 4 && pixel[3]! > 250) {
          black += 1;
        }
      }
    }

    probe.__frames = (probe.__frames ?? 0) + 1;

    if (black >= 3) {
      (probe.__black ??= []).push(probe.__frames);
    }
  };
};

/** Geometries by triangle count, grouped by name (or uuid): where a budget goes. [geometry, meshes using it, triangles each, total]. */
const census = (scene: THREE.Scene) => {
  const rows = new Map<string, [string, number, number, number]>();

  scene.traverse((object) => {
    const mesh = object as THREE.Mesh;

    if (!mesh.isMesh || !mesh.geometry.getAttribute("position")) {
      return;
    }

    const geometry = mesh.geometry;
    const key = geometry.name || `${geometry.type}:${geometry.uuid.slice(0, 6)}`;
    const triangles = triangleCount(geometry);
    const count = (mesh as THREE.InstancedMesh).isInstancedMesh ? (mesh as THREE.InstancedMesh).count : 1;
    const row = rows.get(key) ?? [key, 0, triangles, 0];

    row[1] += count;
    row[3] += triangles * count;
    rows.set(key, row);
  });

  return [...rows.values()].sort((x, y) => y[3] - x[3]);
};

/**
 * Writes "<calls> calls · <triangles> tris" into `#studio-stats` after a render, so a script can
 * poll that element to know a frame has drawn. Counts every pass (shadows included); `tris()` is one pass.
 *
 *   R3F:     useFrame(({ gl }) => statsReadout(gl))   // priority 0: shows the previous frame's counts
 *   vanilla: call statsReadout(renderer) after rendering
 *
 * Keep it at priority 0 in R3F: a positive priority turns the automatic render off. If the studio
 * already renders in a positive-priority frame, call it there, right after the render.
 */
const statsReadout = (renderer: THREE.WebGLRenderer) => {
  const element = document.getElementById("studio-stats");

  if (element) {
    element.textContent = `${renderer.info.render.calls} calls · ${renderer.info.render.triangles.toLocaleString()} tris`;
  }
};

const installStudioHelpers = (scene: THREE.Scene) => {
  Object.assign(window, {
    studioScene: scene,
    tris: () => tris(scene),
    meshes: () => meshes(scene),
    audit: () => audit(scene),
    census: () => census(scene),
    zfight: (gap?: number, self?: boolean) => zfight(scene, gap, self),
  });
};

export { audit, blackFrameProbe, census, installStudioHelpers, meshes, statsReadout, triangleCount, tris, zfight };
