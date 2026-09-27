---
name: model-pass
description: Remodel one three.js / R3F object at a time for silhouette, topology, triangle budget and z-fighting, measured in a model studio and verified with screenshots against the project's 3D style guide.
disable-model-invocation: true
---

# Model pass: one object at a time

Loop: **baseline → remodel → audit → distance → verify**, run on one object per pass. Every number is measured in the **studio**, never estimated; every claim of "fixed" is a studio screenshot or a helper's output.

Words used below:

- **Style guide**: the project's `3D-STYLE.md`, the single source of truth for how this world looks and what it may cost. Every pass reads it; every pass that learns something writes it back.
- **Studio**: a dev-only page that mounts one object at the origin, lit like the game, with camera **views** and console helpers (`tris`, `meshes`, `census`, `zfight`, `audit`).
- **Play view**: the studio view copied from the game's own camera (bearing, fov, distance). It is what the player sees, so it judges every trade.
- **Nature**: what kind of thing the object is (machine, creature, plant, ground). It decides how the object is built, shaded, animated and multiplied.
- **Fight**: a pair of parts with faces in one plane, facing the same way, overlapping. `zfight()` lists them.
- **Numbers table**: the before/after measurements that open every report.

Paths below are relative to this skill's directory: `assets/`, `scripts/`, `references/`.

## 0. Style guide and studio

Find the style guide: `3D-STYLE.md` at the root of the package that depends on `three`.

- **Missing**: this is the first run. Follow [references/setup.md](references/setup.md) end to end before touching any object. It surveys the project, settles the style with the user, builds the studio, and writes the style guide.
- **Present**: read it whole. Its _Studio_ section says how to start the studio and which views exist; its _Budgets_ and _Natures_ sections bound this pass.

Then settle the object with the user if they didn't name one. One object per pass; a family of variants (every tree kind) counts as one.

Done when the style guide is read and the studio renders in the headless browser ([references/verification.md](references/verification.md), _Screenshots_).

## 1. Baseline

- The object stands in the studio on its own, inside a group tagged `userData.studioObject`. If it has no mode yet, add one ([references/studio.md](references/studio.md), _Adding an object_).
- Look at every view's screenshot before trusting it. A view whose camera misses the object, sits inside it, or looks end-on measures nothing.
- Record, before editing a line: screenshots from a close view and the play view; `tris()`; draw calls from the stats readout; `zfight()`; `audit()`; and **how many of it the world holds**, counted from the real placement code, not guessed. A rare-looking object can be numerous: count before calling it cheap.

Done when the before-state is on disk: screenshots at absolute paths, and every row of the numbers table (step 5) filled for _Before_.

## 2. Remodel

Read the object's nature in the style guide, then its section in [references/natures.md](references/natures.md), before drawing a vertex. Read [references/gotchas.md](references/gotchas.md) once per session.

Whatever the nature:

- **Shape first.** The silhouette from the play view is what the player sees. Spend triangles where they change that outline or its shading; spend none on flat faces or hidden undersides. A lower count with a truer shape beats a higher one.
- **Topology for shading.** Even, well-proportioned faces whose edges follow the form: rings round a round thing, lines along a long one. A curved surface gets enough faces across it to shade smooth; a hard edge gets a crease (split normals); nothing in between. Weld what should be one surface.
- **Respect the fit.** Keep its proportions and every point other code reads: exported constants, colliders, pivots, attach points, hit points, animation.
- **One world.** Build from the style guide's shared materials and palette so it reads as part of the same place. Detail with no silhouette (rivets, planks, seams, grain) goes in the shader: zero triangles.
- Check the wireframe view: it shows the topology you meant.

Done when every part the object had is rebuilt or deliberately kept, and the close and play screenshots read as one object true to its nature and the style guide.

## 3. Audit

- `zfight()` returns `[]`. Fix each fight at the source: stand the smaller part ≥ 5 mm off, shorten it inside the larger one, or fit panels between each other rather than over each other's ends. A pair that is a real collision (one part through another) gets moved, not nudged. Merged geometry: run `zfight(0.004, true)` to check within one mesh.
- `audit()` returns `[]`: no NaN positions, no zero normals. Either lights a pixel NaN, and bloom smears that into a black block.
- Anything wrapping other geometry (a chain, rope, strap, vine) is built from the surface it hugs and checked close up for cutting through.

Done when both return `[]` and the close-up shows nothing passing through anything.

## 4. Distance

- Decide what the object is ever seen from, using the style guide's play distance.
- **Far copy**, when the object is seen both close and far: `window.lodReport([e1, e2, e3])` from `assets/lod.ts` shows what simplifying would leave. Something only ever seen from the play camera can ship the simplified mesh as its only geometry. Animated geometry keeps the rings its motion bends around. Near and far at the play view differ by a fraction of a percent of pixels (`scripts/compare.sh diff`).
- **Strips**: a static `InstancedMesh` or merged geometry spread over the whole world is culled as one, so every instance draws every frame. Split it with `chunked()` / `chunkedGeometry()` from `assets/chunked.ts`, unless its instances move. In `meshes()`, a world-spanning name with no `#<strip>` suffix is a mesh nothing culls.

Done when triangles at play distance × instance count are measured and at or below the baseline, or the increase is stated and justified against the style guide's budget.

## 5. Verify

Follow [references/verification.md](references/verification.md) for each item:

- One before/after comparison image (close and play views) sent to the user.
- If the pass added new kinds of geometry to anything that moves or glows, the black-frame probe in a visible browser: 0 black frames.
- The project's typecheck, lint, tests and build all green (commands from `package.json`).
- The style guide updated in place: a new rule, budget or pitfall this pass taught, and a row in its _Pass log_. The object's own notes (its doc comment or `AGENTS.md` bullet) updated if the project keeps them.
- The report to the user opens with the numbers table, on every pass and every follow-up tweak, with _Before_ as the state before this change:

  |                                                         | Before | After |
  | ------------------------------------------------------- | ------ | ----- |
  | Triangles, one (at play distance if it has a far copy)  |        |       |
  | How many the world holds                                |        |       |
  | Triangles, the world's worth                            |        |       |
  | Draw calls                                              |        |       |
  | `zfight()` pairs                                        |        |       |
  | `audit()`                                               |        |       |

  A row that doesn't apply says so rather than being dropped.

Done when the user has the comparison image, the numbers table, `zfight()` and `audit()` at `[]`, green checks, and the style guide carries what this pass learned.
