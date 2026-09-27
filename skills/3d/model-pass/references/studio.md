# Studio

A dev-only page that mounts one object at the origin, lit and shaded exactly like the game, with named camera views and console helpers. Every pass measures here.

## Building it

Minimum parts:

1. **A second entry that never ships.** Vite: `studio.html` next to `index.html`, loading `src/studio.tsx` (or `.ts`). Vite serves every html file in dev, but `vite build` without `build.rollupOptions.input` takes only `index.html`, so the studio stays out of the build. If the config lists inputs, leave the studio out of them. Next.js or others: a dev-only route guarded by `process.env.NODE_ENV`.
2. **The game's look.** Reuse the game's renderer settings, lights, environment, fog, postprocessing and shared materials by importing them, never by copying values. A plain ground plane under the object keeps shadows and contact readable. Set `preserveDrawingBuffer: true` on the studio renderer.
3. **Modes.** A query param per object or family (`?tree`, `?station=depot`) mounts that thing alone at the origin inside a tagged group, the object's name in the tag:

   ```tsx
   <group userData={{ studioObject: "windmill" }}>
     <Windmill />
   </group>
   ```

   `zfight()` and `lodReport()` audit only tagged parts, so the ground and props never show up in them. A mode for scatter mounts a real slice of the world, generated from real seeds and placement code, with a seed that actually contains the rare pieces.
4. **Views.** A table of named camera poses per mode, picked by `?view=` and switchable by buttons in a corner. Always include `play`: the game camera's exact bearing, fov and distance, aimed at the object. Build views from one function:

   ```ts
   type View = { position: THREE.Vector3; target: THREE.Vector3; fov: number };

   // playOffset: the game camera's offset from its target; near: a close distance for this object.
   const objectViews = (centre: THREE.Vector3, near: number, playOffset: THREE.Vector3, playFov: number) => {
     const bearing = playOffset.clone().normalize();
     const at = (direction: THREE.Vector3, distance: number, fov = 42): View => ({
       position: centre.clone().addScaledVector(direction.clone().normalize(), distance),
       target: centre,
       fov,
     });

     return {
       play: at(bearing, playOffset.length(), playFov),
       game: at(bearing, near),
       side: at(new THREE.Vector3(0, 0.25, 1), near),
       front: at(new THREE.Vector3(1, 0.25, 0), near),
       back: at(new THREE.Vector3(-1, 0.25, 0), near),
       top: at(new THREE.Vector3(0.001, 1, 0), near),
     };
   };
   ```

   Modes add close views of their details (`cap`, `shed`, `hitch`). OrbitControls on top for free looking.
5. **Toggles.** `?wire=1` sets `wireframe` on every material; `?lod=near|far` pins the far-copy level when the project has one.
6. **Stats readout.** A `<div id="studio-stats">` filled after each render by `statsReadout(renderer)` from `assets/studio-helpers.ts`. Scripts poll it to know a frame has drawn.
7. **Helpers.** Copy `assets/studio-helpers.ts` into the project and call `installStudioHelpers(scene)` once the scene exists (R3F: in a `useLayoutEffect` inside `<Canvas>`, scene from `useThree`). It exposes `window.studioScene`, `tris()`, `meshes()`, `census()`, `zfight(gap?, self?)`, `audit()`. Projects with far copies also copy `assets/lod.ts` (needs `meshoptimizer`) and call `installLodReport(scene)`; projects with world-spanning scatter copy `assets/chunked.ts`. Adapt imports and lint style to the project; keep the behaviour.

Name every mesh and geometry the game builds. `meshes()` and `census()` report by name.

## Adding an object

Mirror an existing mode: a component rendering the object at the origin inside `<group userData={{ studioObject: "<name>" }}>`, a query param that mounts it alone, and a view set from `objectViews` centred on it. Screenshot every new view and look at it: a view that misses the object, starts inside it, or looks end-on is fixed before any measuring. Add the mode and its views to the style guide's _Studio_ section.

Merged or baked objects: keep the source parts in the scene (hidden) under the tag, so `zfight()` sees parts rather than one merged buffer, or run `zfight(0.004, true)` on the merge. Instanced and batched meshes are skipped by `zfight()`: mount one copy of the source geometry as a plain mesh to audit it.
