# Capture

How to get the screenshots and measurements a round is built on. Loaded by step 2.

## Browser

- Use a **headed** browser for anything WebGL, canvas or animation heavy. Headless and hidden panes throttle `requestAnimationFrame`, so a 3D scene can sit frozen mid-intro or render blank. An in-app browser pane that is hidden behaves the same way.
- Wait on a **ready signal** from the DOM (an element that only exists once the screen is interactive), polled in a loop, then add a short settle (1–2 s) for entrance animations. Fixed sleeps either waste time or catch a half-drawn frame.
- Reset persisted state before each capture that depends on it (localStorage progress, cookies, saved preferences), and set it explicitly to reach states like _all complete_.

## What to capture

Every **state** at every **shape**. A checklist to walk:

- The default first view, then each item/variant the screen cycles through.
- Empty, loading, error, and done/complete (all items finished) states.
- Hover and keyboard-focus on each kind of control; any tooltip.
- Every dialog and menu, open, including its inner pages.
- Transitions: the intro on load, the outro when leaving, and the **next screen** the user lands on. Seams between screens are where old styles survive.
- The loader, if there is one.

Shapes: desktop 1440×900, tablet portrait 768×1024, tablet landscape 1024×768, phone portrait 390×844, phone landscape 844×390. Narrow and short screens break different things; check both.

## Measure

- **Frame rate**: count `requestAnimationFrame` callbacks over 3 s on the main view; note the device pixel ratio.
- **Asset weight**: sizes of the models, textures, audio and fonts the screen loads (from the asset folder or the network panel).
- **Network**: list runtime requests to third-party hosts (CDN-hosted environment maps, fonts, analytics). `performance.getEntriesByType("resource")` lists them.

## Files

- Save originals as PNG in the durable round folder, named by state and shape (`desktop-bedroom.png`, `phone-landscape-done.png`).
- For the page, export JPEG copies: longest edge 1280 px for landscape shots at quality ~72, portrait phone shots at native width. Keep the originals; they are the _before_ for later rounds.
- Note each shot's pixel size: the page needs `w` and `h` for layout, and pins are percentages of the image.

## Pins

Place a pin at the centre of what the finding is about, as `[findingId, xPercent, yPercent]`. Open the image, find the element's pixel position, divide by the image size. One finding can pin several spots or several shots.
