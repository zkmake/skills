#!/usr/bin/env node
// Checks that every place naming a skill agrees with the directory tree:
// each skills/<category>/<name>/SKILL.md has frontmatter `name: <name>`, an entry in
// .claude-plugin/plugin.json's `skills` array, and a README link to its directory.
// Exits 1 listing every mismatch.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFileSync(join(repo, path), "utf8");

const onDisk = readdirSync(join(repo, "skills"), { withFileTypes: true })
  .filter((category) => category.isDirectory())
  .flatMap((category) =>
    readdirSync(join(repo, "skills", category.name), { withFileTypes: true })
      .filter((skill) => skill.isDirectory() && existsSync(join(repo, "skills", category.name, skill.name, "SKILL.md")))
      .map((skill) => `skills/${category.name}/${skill.name}`),
  )
  .sort();

const inPlugin = JSON.parse(read(".claude-plugin/plugin.json")).skills.map((path) => path.replace(/^\.\//, ""));
const readme = read("README.md");
const problems = [];

for (const path of onDisk) {
  const name = path.split("/").at(-1);
  const frontmatter = read(`${path}/SKILL.md`).match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
  const declared = frontmatter.match(/^name:\s*(.+)$/m)?.[1]?.trim();

  if (declared !== name) problems.push(`${path}/SKILL.md: frontmatter name is "${declared}", expected "${name}"`);
  if (!inPlugin.includes(path)) problems.push(`${path}: missing from .claude-plugin/plugin.json skills`);
  if (!readme.includes(`](${path})`)) problems.push(`${path}: no README link to it`);
}

for (const path of inPlugin) {
  if (!onDisk.includes(path)) problems.push(`.claude-plugin/plugin.json lists ${path}, which has no SKILL.md`);
}

if (problems.length > 0) {
  console.error(problems.join("\n"));
  process.exit(1);
}

console.log(`${onDisk.length} skills: directory, frontmatter, plugin.json and README agree`);
