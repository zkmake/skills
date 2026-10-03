# Style guide template

The shape of the project's `3D-STYLE.md`. Keep the headings; fill every section; write rules as the positive target ("rock is faceted, hard at every break"), each with the reason when it isn't obvious. Replace the guidance in _italics_. Keep it under ~200 lines: when a section outgrows that, move its detail to the code it describes and leave a pointer.

```md
# 3D style guide

_One line: what this world is and how it should feel._ Read before modelling or adding scene content; `/zk-model-pass` keeps it current.

## Survey

| Fact | Value | Source |
| --- | --- | --- |
| Stack | _vanilla three r1xx / R3F + drei, postprocessing_ | _package.json_ |
| Units | _1 unit = 1 m_ | |
| Renderer | _sRGB out, ACES, PCFSoft shadows 2048, bloom, DPR ≤ 2_ | _path_ |
| Game camera | _offset, fov, plays at 42–58 units from target_ | _path_ |
| Pixels per unit at play distance | _30–45 px at 1200 × 800_ | _measured_ |
| Shared materials | _factories and what each is for_ | _path_ |
| Palette | _where the colours live_ | _path_ |
| Multiplication | _what is instanced / batched / merged, and what merges skip_ | _paths_ |

## Look

_The art direction in a few lines: references, the value register (what carries the eye, what recedes), faceted vs smooth. What makes something look "of this world"._

## Palette and materials

_The palette's roles (ground, hero, accent, ink…). Which shared material each kind of surface uses. Which detail lives in shaders (and whether those are keyed to world or local space). Shader features with a fixed world size, and the surfaces they read wrong on._

## Natures

_One subsection per nature present in this project: machines, creatures, plants, ground and stone, plus any the project adds. Each: how it reads from the play camera, how it is built here, shading (faceted / creased, crease angle), what moves and about which pivot, how many there are. Only what differs from or sharpens the skill's generic natures._

## Budgets

| | Ceiling | Why |
| --- | --- | --- |
| Frame: triangles (one pass) | | _target hardware, fps_ |
| Frame: draw calls | | |
| Per instance, by nature | | _× how many the world holds_ |
| Far-copy error | _0.02 units (under a pixel at play distance)_ | |

## Construction

_The project's shape helpers (lathe, extrude, slab, tube…) and when to use each; "boxes stay boxes where the real thing is square". Draw-call rules: static things merged or baked, scatter instanced or batched, world-spanning scatter split into strips, moving parts as primitives._

## Pitfalls

_Look and build mistakes this project has made, one line each with the fix. Grows with every pass._

## Studio

- Start: _dev command_, then _URL of the studio entry_.
- Modes: _query params, one per object or family_.
- Views: _`play` plus the rest_; `?wire=1` wireframe; _`?lod=near|far` if far copies exist_.
- Helpers: `tris()`, `meshes()`, `census()`, `zfight(gap?, self?)`, `audit()`_, `lodReport(errors)`_.

## Pass log

| Date | Object | Tris one (before → after) | World's worth | Draws | Notes |
| --- | --- | --- | --- | --- | --- |
```
