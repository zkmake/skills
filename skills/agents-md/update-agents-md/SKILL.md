---
name: update-agents-md
description: Audit and refresh the nearest AGENTS.md against recent code changes so its orientation stays accurate, prune stale task cruft, and offload deep detail into context files to keep the index light. Use when user says "update agents.md", "refresh agents.md", "sync agents.md", "audit agents.md", "clean up agents.md", "slim down agents.md", "update claude.md", "refresh claude.md", or asks to bring the AGENTS.md in the current app/package (or monorepo root) up to date with recent commits.
disable-model-invocation: true
---

# Update AGENTS.md

Refresh the AGENTS.md that scopes the user's current working directory so its claims match the code today. Claude Code 2.1.277+ reads this file when no project CLAUDE.md is on the path; other agents read it directly.

## Scope rules

- **Target file**: the closest `AGENTS.md` to `cwd` walking upward. Prefer the app/package-level file when `cwd` is inside one; only touch the monorepo root `AGENTS.md` when `cwd` is at the root (or no package-level file exists).
- **Legacy `CLAUDE.md`.** If no `AGENTS.md` exists in scope but a project `CLAUDE.md`, `.claude/CLAUDE.md`, or `CLAUDE.local.md` does, stop. Claude Code reads that file and ignores `AGENTS.md` while it remains. Ask the user to rename it to `AGENTS.md`, then continue this skill against the renamed file. Do not edit the `CLAUDE.md` in place.
- **Shadowing.** If the target `AGENTS.md` has a project `CLAUDE.md` in the same directory or any parent, flag it before editing. Claude Code will not load the `AGENTS.md` until that file is migrated.
- **Never invent an `AGENTS.md`**. If none exists in scope and there is no legacy `CLAUDE.md` to migrate, stop and tell the user.
- **Never touch** `~/.claude/CLAUDE.md` (global user instructions) or other packages' instruction files — single-package scope only.
- `## Task-specific plan` / scratch sections: prune, don't preserve. Entries for work that already landed are cruft — remove them (see the task-cruft sweep in step 5). Keep only entries for tasks still in flight; when you can't tell, keep and flag in the summary.

## Detect progressive-disclosure structure

Before doing anything else, check whether the target AGENTS.md is a thin **index** that defers deep content to a `context/` (or similar) directory of sibling `.md` files. Signals:

- A sibling directory named `context/`, `claude/`, `docs/claude/`, or similar containing multiple `*.md` files.
- The AGENTS.md body references those files (e.g. a "Where to read deeper" / "Load on demand" table mapping topics → file paths).
- The AGENTS.md itself is short (orientation only) and explicitly says deeper docs live elsewhere.

If those signals are present, treat the **whole tree** (AGENTS.md + every referenced context file) as the audit surface. Otherwise fall through to the flat single-file workflow.

When in progressive-disclosure mode, the index file's job is to:
1. Stay small — must-know facts only.
2. List every context file with a one-line "when to load" hint.
3. Match the actual files on disk exactly — no dangling references, no un-indexed files.

## Workflow

### 1. Locate the target AGENTS.md

```bash
pwd
git rev-parse --show-toplevel
```

Walk from `cwd` up to the repo root, collecting every `AGENTS.md` and every project `CLAUDE.md` (`CLAUDE.md`, `.claude/CLAUDE.md`, `CLAUDE.local.md`). Pick the deepest `AGENTS.md` that is an ancestor of `cwd`. Confirm the path with the user in one line before editing.

If the walk finds a project `CLAUDE.md` and no `AGENTS.md`, stop and offer the rename described in Scope rules. If both exist on the path, name the shadowing `CLAUDE.md` and wait for the user to migrate or explicitly continue for agents that read `AGENTS.md` anyway. Leave `~/.claude/CLAUDE.md` alone.

### 2. Find the last time it was meaningfully updated

```bash
git log -n 20 --format='%h %ad %s' --date=short -- <path/to/AGENTS.md>
```

Use the newest commit touching that file as the baseline `<since>`. If the file is untracked or has never been committed, treat `<since>` as the repo's initial commit and warn the user the audit will be large.

In progressive-disclosure mode, also pull the most-recent commit touching the context directory — if it's older than the index's baseline, some context files may be staler than the index suggests:

```bash
git log -n 5 --format='%h %ad %s' --date=short -- <path/to/context/>
```

### 3. Gather changes since baseline, scoped to the AGENTS.md's directory

Let `<dir>` = directory containing the target AGENTS.md.

```bash
git log --oneline <since>..HEAD -- <dir>
git diff --stat <since>..HEAD -- <dir>
git diff <since>..HEAD -- <dir>
```

If the diff is huge, prioritize: file tree changes, renamed/deleted files, new top-level exports, changed `package.json` (deps, scripts, name), changed schema/types files, changed entry points.

### 4. Parse the index into verifiable claims (and enumerate context files)

Read the index AGENTS.md top-to-bottom. Extract concrete claims that can be checked against code:

- **Directory map** entries (files that must exist with described responsibilities)
- **Commands** table (scripts that must exist in `package.json`)
- **Key deps** / versions (must match `package.json`)
- **Module names, exports, hooks, store actions, constants** (must exist where described)
- **Path aliases, conventions, entry points**
- **Schema field names / enum values** (when referenced)

Skip prose guidance, philosophy, and the `## Task-specific plan` section — those are not fact-checkable.

**In progressive-disclosure mode**, also build two sets:

- `indexed`: every context file path the index references (from the load-on-demand table and any inline links).
- `onDisk`: every `*.md` file actually present in the context directory.

Compare them:
- `indexed - onDisk` → broken references in the index (file moved or deleted).
- `onDisk - indexed` → orphan context files the index forgot to advertise.

Then read each context file in `onDisk` and extract its claims the same way you do for the index. Track which `<dir>`-relative paths each context file is responsible for so you can route diff findings to the right doc in step 6.

### 5. Verify each claim against the code

For every claim (in the index and every context file), read the referenced file(s) or run targeted `rg` / `Read`:

- File exists at claimed path? Still has the claimed responsibility?
- Script name / command still in `package.json`?
- Dep still listed at the stated version?
- Named export / action / constant still defined?
- Any **new** files, actions, hotkeys, scripts, deps in the diff that the doc should mention?

Produce an internal diff per file of:
- **Stale** claims (wrong, removed, renamed)
- **Missing** things that the diff introduced and that fit the doc's existing sections
- **Still accurate** (leave untouched)

**Task-cruft sweep.** Independently of the claim audit, scan the whole AGENTS.md for task-scoped residue that outlived its task:

- Completed entries in `## Task-specific plan` / scratch sections (verify against `git log` — if the described work landed, the entry is cruft).
- "TODO for this PR" / "for this task" notes, step-by-step plans for shipped features, migration checklists for migrations that completed.
- References to branches, PRs, or issues that are merged/closed (check with `gh` when cheap).

Mark verified-done items for removal in step 6. Anything ambiguous (task may still be in flight) stays and gets flagged in the report instead.

In progressive-disclosure mode, also decide for each diff finding **which file owns it**:
- Goes in an existing context file if its topic matches that file's "when to load" hint.
- Goes in the index only if it's must-know orientation (tiny, applies always).
- Needs a **new** context file when a sizeable new subsystem appeared and no existing file covers it.
- Triggers a **delete** of a context file when the system it documents was removed entirely.

### 6. Apply edits

Use `Edit` (not `Write`) for existing files so untouched sections stay byte-identical. Rules:

- Keep the existing structure, headings, and tone. Match surrounding style (tables vs bullets, code fences, column alignment).
- Fix stale claims in place; add new entries to the section they belong in.
- Do not reorganize, rewrite, or "improve" sections the user didn't ask about.
- Do not add time-sensitive notes ("as of April 2026", "recently added"). Write it as current truth.
- Do not add meta-commentary ("updated by script", "see commit X").
- Delete the task cruft marked in step 5. If a `## Task-specific plan` section empties out, leave the heading with its placeholder line (or whatever empty form the file used originally) so future tasks have somewhere to write.
- If you are unsure whether a change is a real shift or incidental, leave the doc as-is and flag it in the summary instead.

**Lighten the AGENTS.md itself.** After content edits, judge the file's weight. AGENTS.md is loaded into every session — it should carry orientation only. If any single topic occupies more than a few lines of deep detail (long command walkthroughs, schema dumps, exhaustive convention lists), move that detail out:

- Into the **existing** context file whose "when to load" hint covers the topic.
- Into a **new** context file when no existing one fits (create it, add its index row, per the progressive-disclosure rules above).
- **Flat single-file mode**: if the AGENTS.md has grown well past orientation size, restructure it into the progressive-disclosure shape — create a `context/` directory, move deep sections into topic files, and rewrite the AGENTS.md as a thin index with a must-know section and a load-on-demand table. Keep every fact; only relocate it.

Leave behind a one-line pointer in the index for anything moved. Never lighten by deleting accurate content — cruft gets deleted, detail gets relocated.

**Progressive-disclosure extras** — in addition to the rules above:

- **Index ↔ context must stay consistent.** Every entry in the "load on demand" table must point to a file that exists; every `*.md` in the context dir must appear in the table. Repair both directions.
- **Right-size the split.** If you find yourself adding more than a few lines of detail to the index for one topic, move that detail into the matching context file and keep the index entry to a single "when to load" line. Conversely, don't bloat the index with prose that belongs in a context file.
- **New context file**: use `Write` to create it. Match the style of sibling context files (heading level, file-tree fences, table conventions). Then `Edit` the index's load-on-demand table to add a row referencing it.
- **Delete context file**: remove the file with `rm`, then `Edit` the index to drop its row. Also grep the other context files for inbound links to the deleted file and fix any stragglers.
- **Rename / move**: update the path in the index row and in any inbound links from sibling context files.
- **Never leave a dangling reference** (index points to a missing file) or an **orphan** (context file not listed in the index).

### 7. Report

End with a short bullet list:

- **Updated**: stale claims you fixed (file\:line → old → new), keyed by which file (index vs each context file).
- **Added**: new entries you inserted and where. Call out any new context file you created and the table row that now indexes it.
- **Removed**: task cruft you deleted (with the evidence it was done), plus any context file you deleted and the table row you dropped.
- **Moved**: detail relocated out of the AGENTS.md into context files (topic → destination file).
- **Flagged (not applied)**: ambiguous shifts the user should eyeball.
- **Suggested next**: if the diff implies a subsystem with no coverage in any file, name it but don't add empty scaffolding.

Do not commit. Leave files staged-or-unstaged as the user had them.
