# Changesets

One file per change, describing what changed in which skill and the semver bump for the whole collection (`patch` for fixes and new skills, `minor` for new categories or behaviour changes to existing skills, `major` for renames or removals). Create one with `npx changeset`. On push to `main`, the release workflow turns pending changesets into a "chore: version skills" PR that bumps the version, writes `CHANGELOG.md`, and syncs `.claude-plugin/plugin.json`; merging it tags the release.
