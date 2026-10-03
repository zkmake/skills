# First run: style guide and studio

Runs once per project, when no `3D-STYLE.md` exists. It produces the two things every later pass stands on: the **style guide** (what this world looks like and costs) and the **studio** (where it is measured). Work in order; each step feeds the next.

## 1. Survey

Read the project; change nothing. Fill every _Survey_ fact in [style-template.md](style-template.md), each with the file it came from:

- **Stack**: vanilla three or R3F (plus drei, postprocessing, physics), the three version, the bundler and dev command, the package manager.
- **Units**: what one world unit is (metres unless the code says otherwise). The helpers' gaps assume metres.
- **Renderer**: output colour space, tone mapping, shadows (type, map size), postprocessing (bloom especially: it turns NaN pixels into black blocks), antialiasing, DPR cap.
- **Game camera**: position relative to its target, fov, near/far, and the distance range it actually plays at. From that, pixels per world unit at play distance at a 1200 × 800 viewport. This number decides what detail is ever visible.
- **Materials and palette**: shared material factories, palette constants, custom shaders (which are keyed to world space, which to local), texture use.
- **Multiplication**: what is instanced (`InstancedMesh`), batched (`BatchedMesh`), merged (`mergeGeometries` / bakes), and what is placed one by one. What merge steps skip (text, animated parts).
- **Objects**: every distinct modelled thing, its nature, and how many the world holds.
- **Look today**: screenshots of the running game from its own camera (see [verification.md](verification.md), _Screenshots_; a game may need a click or key to start). Look at them before writing a word about the style.

Done when every _Survey_ fact is filled with a source path or marked "none", and the screenshots are on disk.

## 2. Settle the style

Draft the style guide's _Look_, _Natures_ and _Budgets_ sections from what the survey found: most projects already have a style, only unwritten. Then settle it with the user, one round per message, each question carrying the default the survey suggests in parentheses. Accept "defaults" for the rest of a round.

**Round 1: the look**
- The world in one line, plus any references (games, artists, photos)?
- Palette and value register: which colours carry the eye, which recede (e.g. bleached ground, saturated hero)?
- Faceted low-poly, smooth, or mixed by nature?

**Round 2: construction**
- Per nature present in this project: faceted or creased, smooth or hard-edged, and the crease angle (32°)?
- Surface detail (rivets, planks, grain, strata) in shaders or in geometry (shaders)?
- Any nature this project has that [natures.md](natures.md) lacks (vehicles, architecture, characters, UI-in-world)?

**Round 3: cost**
- Target hardware and frame rate (mid laptop, 60 fps)?
- Frame budget: triangles per frame and draw calls (derive from the survey's current counts)?
- Per-instance ceilings for anything multiplied by hundreds?

With a greenfield project and no look to infer, propose one concrete direction from the game's premise and camera, and let round 1 correct it.

Done when the user approves the drafted _Look_, _Natures_ and _Budgets_.

## 3. Build the studio

Follow [studio.md](studio.md): a dev-only entry, lit like the game, one mode for an existing object, the play view, the stats readout, and the helpers from `assets/studio-helpers.ts`.

Done when, in the headless browser, the studio shows that object from the play view and `tris()`, `zfight()` and `audit()` all return values from `agent-browser eval`.

## 4. Write the style guide

Write `3D-STYLE.md` at the root of the package that depends on `three`, from [style-template.md](style-template.md): the survey facts, the settled look, natures and budgets, the studio's start command and views, and today's numbers from `tris()` / `meshes()` on the play view as the first _Pass log_ row.

Add one pointer line to the project's `AGENTS.md` (or `CLAUDE.md` when that is what it has), so every agent doing 3D work reaches the guide, not only this skill:

```md
- 3D look, natures, budgets and the model studio: read `3D-STYLE.md` before modelling or adding scene content.
```

Done when the style guide exists with no empty sections, the pointer line is in place, and the user has seen the guide. Return to SKILL.md step 0 if the user named an object to pass.
