# skills

Orientation index for coding tasks on this personal agent-skills collection (published as `zkmake/skills`, installed via `npx skills add zkmake/skills`). The deep content lives in `context/*.md` — load only what's relevant to the task at hand. Extend the "Task-specific plan" section at the bottom for the actual change.

## Must-know (always load this much)

- **Markdown repo, release tooling only.** No build step; the repo tree is the distribution: skill directories are copied verbatim into consumers' skill folders, and `.claude-plugin/` ships the same tree as a Claude Code plugin. `package.json` exists only for Changesets; `npm run check` verifies the skill lists agree.
- **Every skill change adds a changeset** (`npx changeset`, or a hand-written `.changeset/<slug>.md` bumping `zkmake-skills`). The release workflow does versioning, `CHANGELOG.md` and tags; never edit those by hand.
- **One skill per directory** at `skills/<category>/<skill-name>/SKILL.md`, following the [Agent Skills](https://agentskills.io/) format.
- **`description` frontmatter is the trigger surface.** It's what agents match against to decide when to invoke — the most load-bearing field in the repo. Write it with explicit trigger phrases.
- **Four places must agree**: directory name, frontmatter `name`, the README table link path, and the `skills` array in `.claude-plugin/plugin.json`. Both installers key off the directory path; `npm run check` catches drift.

## Where to read deeper (load on demand)

| Section | File | When to load |
| --- | --- | --- |
| Repo purpose, layout, category map, related files | `context/overview.md` | Onboarding, adding a category, touching README |
| SKILL.md authoring format and conventions | `context/skill-authoring.md` | Creating or editing any skill |

## Task-specific plan

(Extend below for the task at hand. Keep orientation section above unchanged.)

### Versioned releases (2026-09-27)

Adopted mattpocock/skills' setup: Changesets v2 (private `zkmake-skills` package, starts 0.0.0; first changeset is `major` → 1.0.0), `.claude-plugin/` plugin + `zkmake` marketplace, `release.yml` via `changesets/action`. Added `scripts/check-skills.mjs` since plugin.json is a fourth hand-kept skill list. Needs repo setting "Allow GitHub Actions to create and approve pull requests".

### Add model-pass skill (2026-09-27)

New `3d` category for three.js/R3F skills. `skills/3d/model-pass/` generalises keyboard-express's project-local `model-pass` (edtech-apps). First run writes `3D-STYLE.md` into the consumer project (survey → user-settled look/natures/budgets → studio → guide + AGENTS.md pointer); every pass reads and updates it. Assets are tested drop-in TS (typechecked against three + meshoptimizer; `zfight` checks neighbour buckets, has a same-mesh mode).

### Add tailwind-to-stylex skill (2026-08-24)

New `styling` category. `skills/styling/tailwind-to-stylex/`: SKILL.md drives a 7-phase migration (Baseline → Tooling → Tokens → Reset → Migrate → Lift → Teardown); `references/` holds one sheet per phase. Design decisions grilled + settled: ground-truth CSS from the project's own compiled Tailwind (never memorized tables), literal-then-lift, screenshot + computed-style diff gates, `light-dark()` tokens, sanctioned plain-CSS escape hatches, Astro hybrid (islands = StyleX, `.astro` = scoped styles on bridge vars, babel+postcss wiring primary). README + overview.md tables updated.

### Add zk-design-critique skill (2026-10-01)

New `design` category. `skills/design/zk-design-critique/` packages the critique loop run on edclub-experiences' Organize It! landing page: capture every state × shape → read the code for non-visual issues → ranked findings with evidence → ideas with previews in the subject's own look → publish `assets/critique-page.html` as a Claude artifact with a `db` picks store → user pastes the copied prompt → implement, then drop shipped ideas from the page. User-invoked. Before shots live in a durable round folder because an artifact can't copy files from its own earlier versions.

### Add us-math-standards skill (2026-10-02)

New `edtech` category. `skills/edtech/us-math-standards/` distils the Mathness worksheet site's standards work (edtech-apps `apps-web/mathness-app`, its commits, artifacts and session research): user-invoked reference skill. SKILL.md holds the vocabulary, rules and five workflows; `references/` one sheet per branch, `references/states/<postal>.md` one per crosswalked state (sources, code grammar, against-CCSS counts, next editions), the four own frameworks in `frameworks.md`; `assets/` the research TSV template and the research, fact-check and fit-review prompts. `data/` ships the research as reusable TSVs (frameworks, 38 crosswalks, state pre-K, curriculum unit maps); regenerate the framework, pre-K and curricula exports from the app's `src/` when it changes. `standards-atlas.html` is a visual overview built by `bun scripts/atlas/build.ts` from `references/landscape.md`, the state files and `data/` (map shapes, flags and enrollment in `scripts/atlas/`). Facts dated 2026-10-01; refresh via workflow E.

### Add zk-claude-artifact skill (2026-10-03)

`skills/workflow/zk-claude-artifact/`: user-invoked, task-agnostic version of the user's recurring "put all findings and suggestions in a nicely presented Claude artifact, with graphs, illustrations and images where they clarify" prompt. Five steps: inventory → shape (answer first) → visuals (form-per-item table, real data only) → build (host design guidance) → publish. Written with `writing-for-agents`.
