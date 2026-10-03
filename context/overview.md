# Overview

What this repo is, how it's laid out, and where everything lives.

## Purpose

Personal collection of agent skills for Claude Code and other agents. Grown organically for day-to-day use; published to keep them versioned, recoverable, and installable anywhere. Consumers install with `npx skills add zkmake/skills` and pick skills from an interactive prompt.

## Directory map

| Path | Responsibility |
| --- | --- |
| `skills/<category>/<skill-name>/` | One skill per directory, grouped by category |
| `skills/<category>/<skill-name>/SKILL.md` | The skill itself: YAML frontmatter + instructions |
| `skills/github/gh-cli/references/` | Per-topic reference sheets the skill loads on demand (`pr.md`, `issues.md`, `actions.md`, `repo-release.md`, `core.md`) |
| `skills/3d/model-pass/` | `references/` per step (`setup.md` first run, `studio.md`, `natures.md`, `gotchas.md`, `verification.md`, `style-template.md`); `assets/` drop-in TS copied into the consumer project (`studio-helpers.ts`, `lod.ts`, `chunked.ts`); `scripts/` shell (`shot.sh`, `compare.sh`) |
| `skills/design/design-critique/` | `assets/critique-page.html` (page template: fill the `DATA` block per round); `references/` per step (`capture.md`, `page.md`) |
| `skills/edtech/us-math-standards/` | `references/` one sheet per branch (`landscape.md`, `frameworks.md`, `crosswalk.md`, `coverage.md`, `fit-review.md`, `curricula.md`, `pre-k.md`, `worksheet-design.md`, `licensing.md`, `research.md`, `sources.md`, `state-pages.md`, `competitors.md`, `mathness.md`) plus `references/states/<postal>.md`, one per crosswalked state; `assets/` the research TSV template and agent prompts; `data/` reusable TSVs (Common Core and the four own frameworks with our summaries, the per-state research crosswalks, state pre-K maps, curriculum unit maps); `standards-atlas.html` built by `scripts/atlas/build.ts` |
| `skills/game/three-game-starter/references/` | One reference sheet per game system, loaded per interview answer (`core-runtime.md`, `assets.md`, `rendering.md`, `audio.md`, `physics.md`, `performance.md`, `debug-tooling.md`) |
| `skills/react/tanstack-*/references/` | One reference sheet per branch of the library's surface, loaded on demand |
| `skills/styling/tailwind-to-stylex/references/` | One sheet per migration phase, loaded when the phase starts (`mapping.md`, `tooling.md`, `tokens.md`, `verification.md`, `gotchas.md`) |
| `README.md` | Install instructions + per-category tables listing every skill |
| `.claude-plugin/` | `plugin.json` (version + `skills` array, the plugin's contents) and `marketplace.json` (the `zkmake` marketplace listing the plugin) |
| `.changeset/` | Pending changesets + `config.json` (GitHub changelog, private package versioned and tagged) |
| `.github/workflows/release.yml` | On push to `main`: `npm run check`, then `changesets/action` opens the version PR or tags the release |
| `scripts/` | `sync-plugin-version.mjs` (package.json version → plugin.json, `--check` to verify), `check-skills.mjs` (directory, frontmatter, plugin.json and README agree) |
| `package.json` | Release tooling only: Changesets devDependencies and the `changeset` / `version` / `check` scripts |
| `LICENSE` | MIT |

## Categories

| Category | Skills |
| --- | --- |
| `3d` | `model-pass` |
| `agents-md` | `bootstrap-agents-md`, `update-agents-md` |
| `design` | `design-critique` |
| `edtech` | `us-math-standards` |
| `game` | `three-game-starter` |
| `github` | `create-pr`, `update-pr`, `gh-cli` |
| `media` | `optimize-audio` |
| `react` | `tanstack-query`, `tanstack-router` |
| `styling` | `tailwind-to-stylex` |
| `workflow` | `implement-plan-phase`, `zk-claude-artifact` |
| `writing` | `study-writing-style` |

## Gotchas

- `skills/github/gh-cli/evals/` exists but is empty — placeholder, nothing consumes it yet.
- README tables, link paths and `plugin.json`'s `skills` array are maintained by hand; `npm run check` verifies them against the directory tree.
- `.changeset/config.json` uses `@changesets/changelog-github`, which looks commits up on GitHub: `changeset version` fails locally on unpushed commits. Let CI run it.
- Changesets is pinned to v2 (`changeset tag`); v3 renamed it `git-tag`.

## Related

- `~/.claude/CLAUDE.md` — inherited user conventions (Conventional Commits, `zubin/` branch prefix, gh CLI preference); not repeated here.
- Sibling context: `context/skill-authoring.md` for the SKILL.md format.
