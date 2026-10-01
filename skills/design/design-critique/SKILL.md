---
name: design-critique
description: "Critique the design of a site, app or game as an interactive page: annotated screenshots, ranked findings, and pickable improvement ideas with visual previews that copy out as a ready-to-paste implementation prompt. Re-run for a second round once the picks ship."
disable-model-invocation: true
---

# Design critique: findings you can pick from

One **round** is: **scope → capture → read → findings → ideas → page → publish**. The page is the deliverable. The user ticks the ideas they want, hits _Copy prompt_ and pastes it back; you implement those, then the page drops them.

Words used below:

- **Subject**: the site, app, game or screen being critiqued.
- **State**: one distinct thing the subject can show: each screen, variant or item, empty, loading, error, done/complete, hover/focus, open dialogs, transitions in and out, the hand-off to the next screen.
- **Shape**: a viewport the subject must work at. Default set: desktop 1440×900, tablet portrait 768×1024, phone portrait 390×844, phone landscape 844×390.
- **Finding**: one concrete problem, with evidence (a value, a file, a measurement) and a severity about how much it holds the design back.
- **Pin**: a numbered marker on a screenshot, placed in percentages of the image, pointing at a finding.
- **Idea**: one change that fixes one or more findings, with an impact, an effort, the files it touches, and a **preview**.
- **Preview**: a small before/after mock built in CSS from the subject's own visual language (its colours, type, button shapes), so the user judges the real look.
- **Pick**: an idea the user ticked. Picks save to the page so you can read them back.

Paths below are relative to this skill's directory: `assets/`, `references/`.

## 1. Scope

Settle with the user, only where it isn't already clear: which subject, how to run or reach it (dev server command, URL, build), and what it is for (audience, the one job of the screen). Read the project's agent docs (`AGENTS.md`, `CLAUDE.md`, context files) for the run command and conventions before asking.

Done when the subject renders in a browser you can drive.

## 2. Capture

Follow [references/capture.md](references/capture.md). Save every original screenshot to a **durable folder** inside the project (e.g. `plans/design-critique/round-<n>/`, or a path the user names): later rounds need the _before_ shots, and published pages cannot copy files from their own earlier versions.

Done when every state the subject can reach is captured at every shape, and frame rate plus asset weight are measured.

## 3. Read the code

Screenshots miss half the problems. Read the subject's code for what the eye can't see: sound (is there audio with no control, silent UI), network (runtime fetches from third-party CDNs, large uncompressed assets), accessibility (labels, focus order, contrast, `prefers-reduced-motion` honoured everywhere, not just in CSS), i18n (hardcoded strings), consistency with the screens either side of it (the hand-off into the next screen often keeps an old style).

Done when each of those areas has been checked against the actual files, with the evidence noted.

## 4. Findings

Write one finding per problem, ranked high → low. Each gets: an ID (`F1…`, or the next free letter for later rounds: `G1…` for round 2), a severity (`hi`, `md`, `lo`), a title that states the problem plainly, and evidence in the body: the measured value, the file and symbol, the screen size where it breaks. Pin every finding that shows on a screenshot.

Be relentless: look for hierarchy (what reads first), colour and contrast, type scale, spacing, depth and lighting, motion, feedback on every control, orientation (does the user know where they are and what's next), completion and reward, every shape, and the seams between screens.

Done when every capture has been studied against that list and every problem found has a finding with evidence. Expect roughly 10–15 in a first round.

## 5. Ideas

Write one or more ideas per finding. Each gets: an ID (`A1…`, matching the round), a title naming the change, a body saying exactly what changes (sizes, colours, behaviour), `fixes` (finding IDs), impact (`hi`/`md`/`lo`), effort (`S`/`M`/`L`), the files it would touch, and a **preview**. Group ideas by area (chrome, buttons and labels, scene/visuals, motion, screens, sound and reliability, comfort and polish), keeping 2–5 per group.

Where taste decides (shapes, palettes, layouts), offer **variants** as separate ideas so the user can choose between them.

Done when every finding is fixed by at least one idea, and every idea has a preview drawn in the subject's own visual language.

## 6. Page

Copy `assets/critique-page.html` and fill its `DATA` block following [references/page.md](references/page.md). Set the page's accent and display face to suit the subject. The rendering code below the data block stays as it is.

Look at the rendered page once (one screenshot of the local file) and fix what's broken: a preview that doesn't fill its box, clipped text, a pin off its target.

Done when the page renders with every shot, pin, finding and idea, and its script passes a syntax check.

## 7. Publish

Publish the page as a Claude artifact with the `db` capability so picks save for you to read back (details and the agent-neutral fallback in [references/page.md](references/page.md), _Publishing_). Seed the picks document, read it back once, and give the user the link with a short summary: the top three findings, and which quick-pick button selects the must-dos.

Done when the link is shared and the picks document reads back empty.

## After the picks come back

The user pastes a prompt that starts `Implement these <subject> ideas:`, followed by a line for each idea.

1. Implement each picked idea, verify it in the browser at the shapes it affects, run the project's checks, and commit (one commit per coherent group).
2. Update the page: remove the shipped ideas and the findings they fully fix, add a _Shipped since_ line naming them and the commit, refresh the screenshots that changed, and reset the picks document to empty.
3. Report what shipped, anything that deviated from the idea and why, and what's left on the page.

When the page runs out of ideas, offer the next round: either a before/after summary of everything that shipped (using the durable _before_ shots), or a fresh round 2 critique as a new page.
