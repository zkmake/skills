# zkmake-skills

## 2.0.0

### Major Changes

- [`5d2aadb`](https://github.com/zkmake/skills/commit/5d2aadb67694dda8c2c2fb98bb812befb3821c99) Thanks [@zkmake](https://github.com/zkmake)! - Rename `model-pass` to `zk-model-pass`: invoke it as `/zk-model-pass` (plugin: `/zkmake-skills:zk-model-pass`), and reinstall it with `npx skills add` under the new name. Projects whose `3D-STYLE.md` names `/model-pass` should point it at `/zk-model-pass`.

### Minor Changes

- [`49b92fa`](https://github.com/zkmake/skills/commit/49b92fa482c6e52e30610de4f94d8f77d6425d4d) Thanks [@zkmake](https://github.com/zkmake)! - Add `us-math-standards` (new `edtech` category): US K–5 math standards for building aligned content, distilled from Mathness. Covers Common Core, Head Start pre-K, the four own state frameworks (TEKS, B.E.S.T., SOL, MCCRS 2025), per-state reference files for every crosswalked state with sources and code grammar, how to build crosswalks, fit reviews, curriculum unit maps, licensing and printable-sheet design, with research and review prompts as assets.

- [`4052fc1`](https://github.com/zkmake/skills/commit/4052fc134ea7d70d4b9746429f4f71a9ad77de39) Thanks [@zkmake](https://github.com/zkmake)! - Add `zk-design-critique` (new `design` category): critique a site, app or game into an interactive page of annotated screenshots, ranked findings and pickable improvement ideas with visual previews, published as a Claude artifact whose picks copy out as a ready-to-paste implementation prompt.

### Patch Changes

- [`73a7059`](https://github.com/zkmake/skills/commit/73a7059ea237be0a9537d7c799d347c2ac724449) Thanks [@zkmake](https://github.com/zkmake)! - Add `zk-claude-artifact` (`workflow`): turn a session's findings and suggestions into a polished Claude artifact page, answer first, with charts, diagrams, screenshots and illustrations built from the session's real data wherever they clarify.

## 1.0.0

### Major Changes

- [`eb55e82`](https://github.com/zkmake/skills/commit/eb55e8245f352263a7209eb69e62e656496258bb) Thanks [@zkmake](https://github.com/zkmake)! - First versioned release. The collection now ships as a Claude Code plugin (`.claude-plugin/plugin.json` and `marketplace.json`) with Changesets-driven releases: each change carries a changeset, and the release workflow bumps the version, writes `CHANGELOG.md`, and tags the release. Skills included: `model-pass`, `bootstrap-agents-md`, `update-agents-md`, `three-game-starter`, `create-pr`, `gh-cli`, `update-pr`, `optimize-audio`, `tanstack-query`, `tanstack-router`, `tailwind-to-stylex`, `implement-plan-phase`, `study-writing-style`.
