# skills

Personal collection of [agent skills](https://www.skills.sh/) for Claude Code and other agents. Grown organically for day-to-day use; published here to keep them versioned, recoverable, and installable anywhere.

## Install

**Claude Code**, as a plugin (every skill, versioned):

```bash
claude plugin marketplace add zkmake/skills
claude plugin install zkmake-skills@zkmake
```

Update with `claude plugin marketplace update zkmake && claude plugin update zkmake-skills@zkmake`.

Plugin skills are namespaced: `/zkmake-skills:model-pass`.

**Other agents**, or to pick individual skills:

```bash
npx skills add zkmake/skills
```

## Releases

Versioned with [Changesets](https://github.com/changesets/changesets); see [CHANGELOG.md](CHANGELOG.md) and the GitHub releases. Every change adds a changeset (`npx changeset`). On push to `main`, the release workflow opens a "chore: version skills" PR that bumps the version, writes the changelog and syncs `.claude-plugin/plugin.json`; merging it tags the release.

## Skills

### 3D

| Skill                                        | Description                                                                                                   |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [model-pass](skills/3d/model-pass)           | Remodel one three.js/R3F object at a time, measured and screenshot-verified in a model studio against the project's 3D style guide. |

### AGENTS.md

| Skill                                                        | Description                                                                                    |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| [bootstrap-agents-md](skills/agents-md/bootstrap-agents-md) | Author a new AGENTS.md scoped to the current app, package, or directory from scratch.          |
| [update-agents-md](skills/agents-md/update-agents-md)       | Audit and refresh the nearest AGENTS.md, prune task cruft, offload detail to context files.    |

### Design

| Skill                                                    | Description                                                                                                          |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [design-critique](skills/design/design-critique)        | Critique a site, app or game as an interactive page of annotated screenshots, findings and pickable ideas that copy out as a build prompt. |

### Edtech

| Skill                                                         | Description                                                                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [us-math-standards](skills/edtech/us-math-standards)          | US K–5 math standards for aligned content: Common Core, every state's own codes and crosswalks, Head Start pre-K, curricula, fit reviews and printable-sheet design. |

### Game

| Skill                                                          | Description                                                                                       |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [three-game-starter](skills/game/three-game-starter)           | Interview the user about their game's systems, then scaffold a pluggable three.js starter app.     |

### GitHub

| Skill                                        | Description                                                                                             |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [create-pr](skills/github/create-pr)         | Create a GitHub PR with a Conventional Commits title and detailed summary body.                          |
| [update-pr](skills/github/update-pr)         | Update the current PR title and summary to reflect recent changes on the branch.                         |
| [gh-cli](skills/github/gh-cli)               | Deep operational knowledge of the GitHub CLI, sourced from the official manual, with reference sheets.   |

### Media

| Skill                                            | Description                                                              |
| ------------------------------------------------ | ------------------------------------------------------------------------ |
| [optimize-audio](skills/media/optimize-audio)   | Shrink audio files by re-encoding with ffmpeg at lower bitrates/channels. |

### React

| Skill                                                    | Description                                                                                             |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [tanstack-query](skills/react/tanstack-query)           | TanStack Query best practices: keys, queryOptions, staleTime, mutations, invalidation, errors, SSR, tests. |
| [tanstack-router](skills/react/tanstack-router)         | TanStack Router best practices: file conventions, typed navigation, search-param state, loaders, context.   |

### Styling

| Skill                                                            | Description                                                                                      |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [tailwind-to-stylex](skills/styling/tailwind-to-stylex)         | Migrate a Tailwind CSS v4 codebase to StyleX via a phased, visually verified, pixel-identical workflow. |

### Workflow

| Skill                                                                | Description                                                                                     |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [artifact-report](skills/workflow/artifact-report)                   | Turn the session's findings and suggestions into a polished Claude artifact, with charts, diagrams and images where they clarify. |
| [implement-plan-phase](skills/workflow/implement-plan-phase)         | Implement a single phase of a plan file, verify it, update plan progress, and commit — then stop. |

### Writing

| Skill                                                            | Description                                                                                  |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [study-writing-style](skills/writing/study-writing-style)       | Study an author's blog and produce a detailed, quote-grounded writing-style guide.           |

## Layout

Each skill is a directory containing a `SKILL.md` (frontmatter: `name`, `description`) plus optional `references/` files, following the [Agent Skills](https://agentskills.io/) format:

```
skills/<category>/<skill-name>/SKILL.md
```

## License

MIT
