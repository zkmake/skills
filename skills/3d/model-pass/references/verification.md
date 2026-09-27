# Verification

How to see and measure. Screenshots are the evidence for every visual claim; numbers come from the studio helpers.

## Screenshots

Use `agent-browser` headless. `scripts/shot.sh` does the whole sequence:

```bash
scripts/shot.sh <session> "http://localhost:<port>/studio.html?windmill&view=play" /abs/path/before-play.png
```

It opens with `--args "--disable-gpu-vsync,--disable-frame-rate-limit"` (without them `requestAnimationFrame` stalls when the display sleeps and every shot is blank), sets a 1200 × 800 viewport, polls `#studio-stats` until a frame has drawn (up to 2 min for heavy scenes), then shoots and prints the stats.

- **Absolute output paths.** The agent-browser daemon's working directory is not yours; relative paths land elsewhere or fail.
- **One session per task**, closed at the end: `agent-browser --session <name> close`.
- **Helpers from the shell**: `agent-browser --session <name> eval 'JSON.stringify({tris: tris(), z: zfight(), audit: audit(), top: meshes().slice(0, 10)})'`.
- **Blank shot**: on a busy machine it is usually just not rendered yet. Wait longer before suspecting the code.
- **In-app browser panes** are unreliable for measuring: a hidden pane has a 0 × 0 canvas and no animation frames, and pages often pause on `document.hidden`. Use agent-browser.

## Before and after

- Shoot _before_ first, into the scratch directory. If the edit already happened, `git stash`, reshoot, `git stash pop`.
- One comparison image per pass, one row per view (close, play, any detail view), before on the left:

  ```bash
  scripts/compare.sh montage /abs/cmp.png before-close.png after-close.png before-play.png after-play.png
  ```

  Send it to the user.
- **Remodels** are judged by eye on the close and play rows: does it read as one object, true to its nature and the style guide?
- **Changes meant to be invisible** (far copies, strips, material refactors) are judged by pixel diff at the play view:

  ```bash
  scripts/compare.sh diff before-play.png after-play.png
  ```

  About 0.01% of pixels differing is identical; anything visible in the montage is not.

## Black-frame probe

For passes that add new kinds of geometry to anything that moves or glows. Headless browsers have not reproduced black frames; use a visible one.

1. Wire `blackFrameProbe()` from `assets/studio-helpers.ts` into the **game** (not the studio), right after the final render or composer pass. R3F: `const probe = useMemo(blackFrameProbe, [])`, then `useFrame(({ gl }) => probe(gl), N)` with N above the priority of the frame that renders. Any positive priority turns R3F's automatic render off, so an app with no positive-priority frame renders first in the same callback (see the probe's doc comment).
2. `agent-browser --session probe --headed open <game URL>` with postprocessing on; start play so the object moves on screen.
3. Reset `window.__frames = 0; window.__black = []`, wait ~10 s, read `__black.length` and `__frames`.
4. Pass: 0 black frames. A positive control (temporarily restoring a suspect) proves the setup catches them.
5. Remove the probe before committing.

## Checks

The project's own typecheck, lint, tests and build, taken from `package.json` scripts, all green before the report.
