import * as THREE from "three";

/**
 * A static InstancedMesh (or merged geometry) spread over a large area is culled as one: its
 * bounding sphere spans the whole area, so every instance draws every frame, on screen or not,
 * in the shadow pass too. These split it into strips along one axis, each with its own bounds, so
 * three culls the strips out of view. A few more draw calls, far fewer triangles.
 *
 * Only for things built once and left alone. Anything that moves its instances each frame stays
 * whole. Tune `size` against the play camera's view width.
 */

type Axis = "x" | "z";

const matrix = new THREE.Matrix4();
const color = new THREE.Color();
const position = new THREE.Vector3();

/** Split an InstancedMesh into strips. Geometry and material are shared; the original's instance buffers are disposed. */
const chunked = (mesh: THREE.InstancedMesh, size: number, axis: Axis = "x"): THREE.Group => {
  const group = new THREE.Group();
  const strips = new Map<number, number[]>();

  group.name = mesh.name;

  for (let index = 0; index < mesh.count; index++) {
    mesh.getMatrixAt(index, matrix);
    position.setFromMatrixPosition(matrix);

    const strip = Math.floor(position[axis] / size);

    strips.set(strip, [...(strips.get(strip) ?? []), index]);
  }

  for (const [strip, members] of strips) {
    const piece = new THREE.InstancedMesh(mesh.geometry, mesh.material, members.length);

    piece.name = `${mesh.name}#${strip}`;
    piece.castShadow = mesh.castShadow;
    piece.receiveShadow = mesh.receiveShadow;
    piece.renderOrder = mesh.renderOrder;
    piece.layers.mask = mesh.layers.mask;

    members.forEach((from, to) => {
      mesh.getMatrixAt(from, matrix);
      piece.setMatrixAt(to, matrix);

      if (mesh.instanceColor) {
        mesh.getColorAt(from, color);
        piece.setColorAt(to, color);
      }
    });

    piece.instanceMatrix.needsUpdate = true;

    if (piece.instanceColor) {
      piece.instanceColor.needsUpdate = true;
    }

    piece.computeBoundingSphere();
    group.add(piece);
  }

  mesh.dispose();

  return group;
};

/**
 * Split one merged geometry into strips by where each triangle's middle falls. The strips share
 * the original's vertex buffers (uploaded once); only the indices are new.
 */
const chunkedGeometry = (geometry: THREE.BufferGeometry, size: number, axis: Axis = "x"): THREE.BufferGeometry[] => {
  const positions = geometry.getAttribute("position") as THREE.BufferAttribute | undefined;

  if (!positions) {
    return [];
  }

  const index = geometry.getIndex();
  const count = index ? index.count : positions.count;
  const vertex = (corner: number) => (index ? index.getX(corner) : corner);
  const along = (v: number) => (axis === "x" ? positions.getX(v) : positions.getZ(v));
  const strips = new Map<number, number[]>();

  for (let corner = 0; corner < count; corner += 3) {
    const a = vertex(corner);
    const b = vertex(corner + 1);
    const c = vertex(corner + 2);
    const strip = Math.floor((along(a) + along(b) + along(c)) / 3 / size);
    const members = strips.get(strip) ?? [];

    members.push(a, b, c);
    strips.set(strip, members);
  }

  const box = new THREE.Box3();
  const point = new THREE.Vector3();

  return [...strips.values()].map((members) => {
    const piece = new THREE.BufferGeometry();

    for (const [name, attribute] of Object.entries(geometry.attributes)) {
      piece.setAttribute(name, attribute);
    }

    piece.setIndex(members);
    box.makeEmpty();

    for (const member of members) {
      box.expandByPoint(point.fromBufferAttribute(positions, member));
    }

    piece.boundingBox = box.clone();
    piece.boundingSphere = box.getBoundingSphere(new THREE.Sphere());

    return piece;
  });
};

export { chunked, chunkedGeometry };
