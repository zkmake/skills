---
name: create-pr
description: Create a GitHub pull request with a Conventional Commits title and detailed summary body. Use when user says "create a PR", "open a pull request", "submit PR", or "make a PR".
disable-model-invocation: true
---

# Create PR

## Workflow

### 1. Assignee and labels

Before doing anything else, decide who to assign and which labels to apply.

- If the message that triggered this skill already names a GitHub username, use it.
- If it already names labels, use those.
- If either is missing, ask in one question and wait for the answer:
  - GitHub username to assign. They may say none.
  - Labels to apply. They may say none.

Do not invent a username or a default label. Only pass labels that already exist on the repo. If a named label is missing, say so and ask whether to skip it.

### 2. Gather context

Resolve the repo's default branch, then diff against it:

```bash
git branch --show-current
base=$(gh repo view --json defaultBranchRef --jq .defaultBranchRef.name)
git log --oneline "origin/${base}..HEAD"
git diff "origin/${base}...HEAD" --stat
git diff "origin/${base}...HEAD"
```

### 3. Push if needed

```bash
git status -sb
git rev-list --count @{u}..HEAD 2>/dev/null
```

If no upstream or unpushed commits exist, push:

```bash
git push -u origin HEAD
```

Do NOT force-push or amend commits.

### 4. Compose the PR title

Format: `type(scope): description`

- **type**: `feat` `fix` `refactor` `chore` `build` `docs` `test` `perf` `ci` `style` `hotfix`
- **scope**: affected package or area (e.g. `api`, `web`)
- **description**: imperative mood, lowercase, total title under 70 chars

Derive type and scope from the diff and commit log. Use the dominant type when commits span multiple types.

### 5. Compose the PR body

<pr-body-template>
## Summary

- <what changed and why — one bullet per logical group of changes>

## Commits

- `type(scope):` description
- (list each commit from git log)
</pr-body-template>

Omit the **Commits** section if there is only one commit.

Group Summary bullets by change type when there are 4+ mixed-type commits.

### 6. Create the PR

Use the default branch from step 2 as `--base`. Add `--assignee` only when the user named one. Repeat `--label` once per label they named; omit it when they named none.

```bash
gh pr create \
  --base "$base" \
  --assignee <username> \
  --label <label> \
  --title "type(scope): description" \
  --body "$(cat <<'EOF'
## Summary

- bullet 1
- bullet 2

## Commits

- `type(scope):` description
EOF
)"
```

### 7. Return the PR URL

Output the URL returned by `gh pr create`.
