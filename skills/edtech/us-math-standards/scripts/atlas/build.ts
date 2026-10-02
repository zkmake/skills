#!/usr/bin/env bun
// @ts-nocheck: a Bun script; the skills repo has no TypeScript setup.
// Builds ../../standards-atlas.html from this skill's own files: the jurisdiction and topic tables in
// references/landscape.md, the state files' Documents sections, data/ TSVs, and the map, flag and
// enrollment JSON beside this script. Figures that live only in prose (fit passes, curricula use) are
// set below with their source. Run: bun scripts/atlas/build.ts (from the skill's root).

import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ROOT = join(import.meta.dir, "..", "..");
const read = (p: string) => readFileSync(join(ROOT, p), "utf8");
const json = (p: string) => JSON.parse(read(p));

const AS_OF = "1 October 2026";

/* ---------- Jurisdictions ---------- */

const NAMES: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California", CO: "Colorado",
  CT: "Connecticut", DE: "Delaware", DC: "District of Columbia", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa", KS: "Kansas", KY: "Kentucky",
  LA: "Louisiana", ME: "Maine", MD: "Maryland", MA: "Massachusetts", MI: "Michigan", MN: "Minnesota",
  MS: "Mississippi", MO: "Missouri", MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire",
  NJ: "New Jersey", NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota",
  OH: "Ohio", OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island",
  SC: "South Carolina", SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
  PR: "Puerto Rico", GU: "Guam", VI: "U.S. Virgin Islands", DoDEA: "DoDEA",
};
const DISPLAY: Record<string, string> = { HI: "Hawaiʻi", DoDEA: "Defense Department schools" };
const NEXT_IDS: Record<string, string> = { WA: "wa27", SD: "sd27", LA: "la27", MN: "mn27", HI: "hi27", NC: "nc29" };
// The school year each next edition starts; `nc29` is named for the year 2028–29 ends.
const NEXT_YEAR: Record<string, string> = { nc29: "2028-29" };
const OWN_DOCS: Record<string, string> = {
  TX: "https://tea.texas.gov/laws-and-rules/sboe-rules-tac/sboe-tac-currently-effect/ch111a.pdf",
  FL: "https://cpalmsmediaprod.blob.core.windows.net/uploads/docs/standards/best/ma/mathbeststandardsfinal.pdf",
  VA: "https://www.doe.virginia.gov/teaching-learning-assessment/instruction/mathematics/standards-of-learning-for-mathematics",
  MD: "https://www.marylandpublicschools.org/about/Pages/DCAA/Math/revised-standards.aspx",
};
// What each own set adds, condensed from references/frameworks.md.
const OWN_NOTABLE: Record<string, string> = {
  TX: "bigger number ranges (to 120 in grade 1, a billion in grade 4); personal financial literacy every grade; coins in K–1; strip diagrams; stem-and-leaf plots",
  FL: "ordinals in K; coins and bills to $100 in grade 1; facts to 12 × 12; temperature and circle graphs in grade 3; reflex angles; × and ÷ by 0.1 and 0.01",
  VA: "calendar in K; making change to $5; customary weight and volume; elapsed time across noon; prime factorization; probability; letters for unknowns",
  MD: "official crosswalk to Common Core; content moved between grades (symmetry to grade 2); own pre-K; misleading graphs; triangle area in grade 4",
};
const CCSS_PDF = "https://corestandards.org/wp-content/uploads/2023/09/Math_Standards1.pdf";

type Kinds = { same: number; edited: number; moved: number; new: number };
type Row = {
  id: string; name: string; title: string; year: string; model: string; notable: string; next: string;
  file: string; doc?: string; kinds?: Kinds; rows?: number; nextKinds?: Kinds; nextRows?: number;
  enroll?: number; flag?: string;
};

const cells = (line: string) => line.split("|").slice(1, -1).map((c) => c.trim());
function table(section: string) {
  const text = read("references/landscape.md");
  const start = text.indexOf(section);
  const lines = text.slice(start).split("\n").filter((l) => l.startsWith("|"));
  const rows: string[][] = [];
  for (const l of lines.slice(2)) rows.push(cells(l));
  return rows;
}
const sectionLines = (section: string) => {
  const text = read("references/landscape.md");
  const s = text.indexOf(section);
  const e = text.indexOf("\n## ", s + 3);
  return text.slice(s, e === -1 ? undefined : e).split("\n");
};
const tableIn = (section: string) =>
  sectionLines(section).filter((l) => l.startsWith("|")).slice(2).map(cells);

function kindsOf(tsv: string): { kinds: Kinds; rows: number } | undefined {
  const p = join(ROOT, "data/crosswalks", tsv);
  if (!existsSync(p)) return undefined;
  const k: Kinds = { same: 0, edited: 0, moved: 0, new: 0 };
  let rows = 0;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    if (!line || line.startsWith("#") || line.startsWith("state_code")) continue;
    const kind = line.split("\t")[3]?.trim() as keyof Kinds;
    if (kind in k) { k[kind]++; rows++; }
  }
  return { kinds: k, rows };
}
function firstDoc(file: string) {
  const p = join(ROOT, "references", file);
  if (!existsSync(p)) return undefined;
  const t = readFileSync(p, "utf8");
  const s = t.indexOf("## Documents");
  if (s < 0) return undefined;
  const m = t.slice(s).match(/https?:\/\/[^\s)`>]+/);
  return m?.[0].replace(/[.,;]+$/, "");
}

const flags: Record<string, string> = json("scripts/atlas/flags.json");
const enroll: Record<string, number> = json("scripts/atlas/enrollment.json").fall2023;
const ENROLL_NAME: Record<string, string> = { VI: "U.S. Virgin Islands", HI: "Hawaii" };

const ROWS: Row[] = tableIn("## Every jurisdiction").map(([id, title, year, model, notable, next]) => {
  const own = model === "own";
  const lower = id.toLowerCase();
  const file = own ? "frameworks.md" : existsSync(join(ROOT, "references/states", `${lower}.md`))
    ? `states/${lower}.md` : "states/common-core-states.md";
  const k = model === "xw" ? kindsOf(`${lower}.tsv`) : undefined;
  const n = NEXT_IDS[id] ? kindsOf(`${NEXT_IDS[id]}.tsv`) : undefined;
  return {
    id, name: DISPLAY[id] ?? NAMES[id] ?? id, title, year, model, notable: own ? OWN_NOTABLE[id] : notable, next,
    file, doc: own ? OWN_DOCS[id] : file.startsWith("states/") && file !== "states/common-core-states.md"
      ? firstDoc(file) : model === "cc" ? CCSS_PDF : undefined,
    kinds: k?.kinds, rows: k?.rows, nextKinds: n?.kinds, nextRows: n?.rows,
    enroll: enroll[ENROLL_NAME[id] ?? NAMES[id] ?? id], flag: flags[lower],
  };
});
const missing = Object.keys(NAMES).filter((id) => !ROWS.some((r) => r.id === id));
if (missing.length) throw new Error(`landscape.md lacks rows for ${missing.join(", ")}`);

/* ---------- Figures that live in prose (sources in the comments) ---------- */

// references/fit-review.md, and the coverage session's report of 2026-10-01: 1,479 crosswalk rows that
// differ from Common Core or link another grade's sheet, across the 37 crosswalks built that day.
const PASSES: [string, string, number, number, number][] = [
  ["First look", "all 37 crosswalks", 881, 531, 67],
  ["Passes 1–2", "better links, 30 activities", 1286, 184, 9],
  ["Pass 3", "drawing, children's own data", 1308, 162, 9],
  ["Pass 4", "finer measuring, chance, area", 1330, 144, 5],
  ["Pass 5", "Venn, timeline, histogram, writing", 1345, 129, 5],
  ["Pass 6", "drawn patterns, Celsius, angles", 1376, 98, 5],
  ["Pass 7", "next figure, curved shapes, pennies", 1394, 81, 4],
  ["Fresh review", "every row, a new reviewer", 1361, 116, 2],
  ["Pass 8", "money, units, models, links", 1409, 69, 1],
  ["Pass 9", "dollars, area models, number lines", 1432, 46, 1],
  ["Pass 10", "views, flips, making graphs", 1450, 29, 0],
  ["Pass 11", "the last one-offs", 1465, 14, 0],
  ["Pass 12", "time, estimates, fraction tiles", 1474, 5, 0],
  ["Pass 13", "left and right, patterns as sums", 1477, 2, 0],
  ["Follow-ups", "thick or thin, mixed numbers on bars", 1479, 0, 0],
  ["Hawaiʻi 2027–28", "6 more rows, the 38th crosswalk", 1485, 0, 0],
];
// Own sets: first reviews 2026-09-30 (rows incl. pre-K); fresh K–5 review 2026-10-01; after pass 13.
const OWN_FIT: [string, string, [number, number, number], [number, number, number], number][] = [
  ["TX", "Texas TEKS", [150, 102, 4], [226, 20, 0], 246],
  ["FL", "Florida B.E.S.T.", [125, 68, 1], [173, 11, 0], 184],
  ["MD", "Maryland MCCRS (2025)", [138, 38, 0], [151, 5, 0], 156],
  ["VA", "Virginia SOL", [44, 37, 1], [67, 5, 0], 72],
];
// RAND AIRS 2025 (RRA4594-1): share of elementary math teachers using each weekly; family totals overlap.
const CURRICULA: [string, string, number, boolean, string, number][] = [
  ["Eureka Math family", "Eureka 2015 mapped; Eureka Math², EngageNY", 20.4, true, "eureka", 40],
  ["i-Ready Classroom", "Curriculum Associates, 2024 mapped", 18.5, true, "i-ready", 34],
  ["enVision", "Savvas, ©2024 topics mapped", 16.8, true, "envision", 92],
  ["HMH family", "Go Math! ©2015 mapped; Into Math, Math Expressions", 12.7, true, "go-math", 71],
  ["Zearn", "often a supplement", 9.6, false, "", 0],
  ["Bridges in Mathematics", "The Math Learning Center", 9.1, false, "", 0],
  ["Illustrative Mathematics K–5", "all distributors; mapped", 6.4, true, "im", 50],
  ["Big Ideas Math", "Modeling Real Life", 4.3, false, "", 0],
  ["Reveal Math", "McGraw Hill", 4.0, false, "", 0],
  ["Everyday Mathematics 4", "McGraw Hill", 3.8, false, "", 0],
  ["Amplify Desmos Math", "national edition; mapped", 1.9, true, "amplify", 43],
];
for (const c of CURRICULA) {
  if (!c[3]) continue;
  const n = read(`data/curricula/${c[4]}.tsv`).trim().split("\n").length - 1;
  if (n !== c[5]) throw new Error(`${c[4]}: ${n} units in data, ${c[5]} here`);
}
const TIMELINE: [string, string, [string, string][]][] = [
  ["2026–27", "This school year", [
    ["MT", "Montana's standards (adopted 2025) in effect from July 2026"],
    ["MS", "Mississippi's 2025 standards, second year"],
    ["SC", "South Carolina's “2025” standards, second year"],
  ]],
  ["2027–28", "Next school year", [
    ["WA", "WA Math 2026 required. In Mathness."],
    ["SD", "South Dakota 2026 standards. In Mathness."],
    ["LA", "Louisiana's revised standards. In Mathness."],
    ["MN", "Minnesota 2022 standards. In Mathness."],
    ["HI", "Hawaiʻi's revision (approved June 2026). In Mathness."],
    ["KY", "Kentucky revision, tentatively; text not published"],
    ["UT", "Utah revision drafted; no adoption date"],
  ]],
  ["2028–29", "Further out", [
    ["NC", "North Carolina's new K–12 standards (adopted 1 Oct 2026). In Mathness."],
    ["MN", "Minnesota's updated early-learning indicators (ECIPs 2028), fall 2028"],
    ["ID", "Idaho review: recommendations to the Legislature in 2027"],
    ["TN", "Tennessee's current set runs to 2031–32"],
  ]],
];
// The coverage session's open items, in its priority order (2026-10-01).
const OPEN = [
  ["State pre-K for Texas, Florida and Virginia", "43 states and DC are mapped in their own pre-K codes; the three own sets still show Head Start's goals. Missouri, Arizona, New Hampshire and Washington have no codes to map; DoDEA follows a commercial framework"],
  ["Next standards when final", "Utah and Kentucky for 2027–28, North Carolina for 2028–29: one research file and one generated edition each"],
  ["Probability in grades 1–2", "Puerto Rico asks for it; nothing below grade 3 yet"],
  ["A Spanish edition", "Puerto Rico's standards are in Spanish; dual-language classrooms everywhere. The largest job here"],
  ["More curricula", "Bridges, Zearn, Into Math and Everyday Mathematics are next by use"],
];
const RESOURCES: [string, [string, string, string][]][] = [
  ["Standards", [
    ["Common Core State Standards for Mathematics (2010)", CCSS_PDF, "NGA Center and CCSSO"],
    ["Common Core public license", "https://www.thecorestandards.org/public-license/", "notice to show with any Common Core code"],
    ["Head Start ELOF (2015)", "https://headstart.gov/school-readiness/article/math-preschool", "preschool math goals P-MATH 1–10"],
    ["Texas TEKS, 19 TAC Ch. 111", OWN_DOCS.TX, "Texas Education Agency"],
    ["Florida B.E.S.T.", OWN_DOCS.FL, "via CPALMS"],
    ["Virginia SOL (2023)", OWN_DOCS.VA, "Virginia Department of Education"],
    ["Maryland MCCRS (2025)", OWN_DOCS.MD, "with grade crosswalks to Common Core"],
  ]],
  ["Data", [
    ["NCES Digest table 203.20", "https://nces.ed.gov/programs/digest/d24/tables/dt24_203.20.asp", "public school enrollment by state, fall 2023"],
    ["RAND American Instructional Resources Survey 2025", "https://www.rand.org/pubs/research_reports/RRA4594-1.html", "which curricula teachers use"],
    ["EdReports", "https://edreports.org/", "curriculum quality reviews"],
    ["CEMD district adoptions", "https://www.cemd.org/k-8-math-curriculum-quality-the-state-of-district-led-selection/", "who chose what"],
    ["us-atlas (map shapes)", "https://github.com/topojson/us-atlas", "US Census boundaries, ISC license"],
  ]],
  ["In this skill", [
    ["SKILL.md", "SKILL.md", "rules and workflows"],
    ["Landscape", "references/landscape.md", "every jurisdiction and the watch list"],
    ["Crosswalks", "references/crosswalk.md", "how to build one"],
    ["Fit review", "references/fit-review.md", "rubric, passes, prompts"],
    ["Curricula", "references/curricula.md", "unit maps and trademark care"],
    ["Data files", "data/README.md", "frameworks, 38 crosswalks, pre-K, curricula as TSV"],
  ]],
];

/* ---------- Derived totals ---------- */

const share = (m: string) => ROWS.filter((r) => r.model === m && r.id !== "PR" && r.id !== "VI" && r.id !== "GU" && r.id !== "DoDEA")
  .reduce((a, r) => a + (r.enroll ?? 0), 0);
const STATES_TOTAL = ["own", "xw", "cc"].reduce((a, m) => a + share(m), 0);
const SHARES = ["own", "xw", "cc"].map((m) => ({ m, n: share(m), pct: (100 * share(m)) / STATES_TOTAL }));
const COUNT = (m: string) => ROWS.filter((r) => r.model === m).length;
const topics = tableIn("## What states teach that Common Core doesn't");

/* ---------- Helpers ---------- */

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const md = (s: string) => esc(s).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
const fmt = (n: number) => n.toLocaleString("en-US");
const flagSvg = (r: { flag?: string; id: string }, cls = "flag") => r.flag
  ? `<svg class="${cls}" viewBox="0 0 30 20" aria-hidden="true">${r.flag}</svg>`
  : `<span class="${cls} badge" aria-hidden="true">${esc(r.id === "DoDEA" ? "DD" : r.id)}</span>`;
const MODEL_LABEL: Record<string, string> = { own: "Own set", xw: "Crosswalk", cc: "Common Core codes", "—": "Not yet" };
const modelKey = (m: string) => (m === "—" ? "none" : m);
const href = (path: string) => path.startsWith("http") ? path : path;

/* ---------- Page ---------- */

const paths: Record<string, string> = json("scripts/atlas/us-states.json");
const byName = Object.fromEntries(ROWS.map((r) => [NAMES[r.id], r]));
const mapPaths = Object.entries(paths).map(([name, d]) => {
  const r = byName[name];
  if (!r) throw new Error(`no row for map state ${name}`);
  const nxt = NEXT_IDS[r.id] ? " next" : "";
  return `<path class="st m-${modelKey(r.model)}${nxt}" data-id="${r.id}" d="${d}" tabindex="0" role="button" aria-label="${esc(r.name)}: ${esc(MODEL_LABEL[r.model])}"></path>`;
}).join("");

const DATA = ROWS.map((r) => ({
  id: r.id, name: r.name, title: r.title, year: r.year, model: modelKey(r.model), notable: md(r.notable),
  next: md(r.next), file: r.file, doc: r.doc, kinds: r.kinds, rows: r.rows, nextKinds: r.nextKinds,
  nextRows: r.nextRows, enroll: r.enroll, flag: r.flag ?? "",
}));

const kindBar = (k: Kinds | undefined) => {
  if (!k) return "";
  const t = k.same + k.edited + k.moved + k.new;
  return `<span class="kbar" role="img" aria-label="${k.same} same, ${k.edited} edited, ${k.moved} moved, ${k.new} new">${
    (["same", "edited", "moved", "new"] as const).map((x) => k[x] ? `<i class="k-${x}" style="flex:${k[x]}"></i>` : "").join("")
  }</span><span class="kpct">${Math.round((100 * (t - k.same)) / t)}%</span>`;
};

const xwSorted = ROWS.filter((r) => r.kinds).sort((a, b) => {
  const d = (k: Kinds) => (k.edited + k.moved + k.new) / (k.same + k.edited + k.moved + k.new);
  return d(b.kinds!) - d(a.kinds!);
});

const passMax = 1485;
const passRows = PASSES.map(([name, sub, g, p, m]) => `
  <div class="pass${name === "Fresh review" ? " fresh" : ""}${name === "Hawaiʻi 2027–28" ? " final" : ""}">
    <span class="pname">${esc(name)}<small>${esc(sub)}</small></span>
    <span class="stack" role="img" aria-label="${fmt(g)} good, ${fmt(p)} partial, ${fmt(m)} mismatch">
      <i class="s-good" style="flex:${g}"><b>${fmt(g)}</b></i>${p ? `<i class="s-part" style="flex:${p}">${p > 60 ? `<b>${fmt(p)}</b>` : ""}</i>` : ""}${m ? `<i class="s-miss" style="flex:${m}"></i>` : ""}
    </span>
  </div>`).join("");

const ownFit = OWN_FIT.map(([id, name, first, fresh, k5]) => {
  const r = ROWS.find((x) => x.id === id)!;
  const ft = first[0] + first[1] + first[2];
  return `<div class="card ownfit">
    <div class="own-h">${flagSvg(r)}<b>${esc(name)}</b><span class="mono">${k5} K–5 rows</span></div>
    ${[["First review", first, ft], ["Fresh review", fresh, k5], ["After pass 13", [k5, 0, 0], k5]].map(([lab, v, t]) => {
      const [g, p, m] = v as number[];
      return `<div class="own-row"><span>${lab}</span><span class="stack small" role="img" aria-label="${g} good, ${p} partial, ${m} mismatch"><i class="s-good" style="flex:${g}"></i>${p ? `<i class="s-part" style="flex:${p}"></i>` : ""}${m ? `<i class="s-miss" style="flex:${m}"></i>` : ""}</span><span class="mono pct">${Math.round((100 * g) / (t as number))}%</span></div>`;
    }).join("")}
  </div>`;
}).join("");

const curMax = 22;
const curBars = CURRICULA.map(([name, sub, v, mapped, file, units]) => `
  <div class="cbar">
    <span class="cname">${esc(name)}<small>${esc(sub)}</small></span>
    <span class="ctrack"><i class="cfill${mapped ? " mapped" : ""}" style="width:${((v / curMax) * 100).toFixed(1)}%"></i><b class="cval">${v}%</b></span>
    <span class="cunits">${mapped ? `<a href="data/curricula/${file}.tsv">${units} units</a>` : "<span class=muted>not mapped</span>"}</span>
  </div>`).join("");

const flagFor = (id: string) => flagSvg(ROWS.find((r) => r.id === id) ?? { id });
const topicRows = topics.map(([topic, where, status]) => {
  const tone = /gap/i.test(status) ? "gap" : /partial/i.test(status) ? "part" : "ok";
  const ids = [...new Set((where.match(/\b[A-Z]{2}\b/g) ?? []).filter((x) => NAMES[x]))];
  return `<tr><td><b>${md(topic)}</b></td><td><span class="chips">${ids.slice(0, 14).map((i) => `<span class="chip" title="${esc(NAMES[i])}">${flagFor(i)}${i}</span>`).join("")}</span><span class="where">${md(where)}</span></td><td><span class="pill p-${tone}">${tone === "ok" ? "Covered" : tone === "part" ? "Partial" : "Gap"}</span><span class="status">${md(status.replace(/^(covered|partial|gap)\b[;:,]?\s*/i, ""))}</span></td></tr>`;
}).join("");

const timeline = TIMELINE.map(([year, lab, items]) => `
  <li class="tl">
    <div class="tl-year"><b>${year}</b><span>${lab}</span></div>
    <ul>${items.map(([id, t]) => `<li>${flagFor(id)}<span>${esc(t)}</span></li>`).join("")}</ul>
  </li>`).join("");

const resources = RESOURCES.map(([h, items]) => `
  <div class="res"><h3>${h}</h3><ul>${items.map(([t, u, d]) => `<li><a href="${esc(href(u))}">${esc(t)}</a><span>${esc(d)}</span></li>`).join("")}</ul></div>`).join("");

// Maryland (its own set) plus every jurisdiction with a pre-K file in data/prek, A to Z by name.
const prekIds = ["MD", ...readdirSync(join(ROOT, "data/prek")).map((f) => f.replace(".tsv", "").toUpperCase())]
  .sort((a, b) => (DISPLAY[a] ?? NAMES[a]).localeCompare(DISPLAY[b] ?? NAMES[b]));
const PREK_STATES = prekIds.filter((id) => id !== "DC").length;
const terr = ROWS.filter((r) => ["PR", "GU", "VI", "DoDEA"].includes(r.id));

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Mathness Standards Atlas</title>
<meta name="description" content="Every US jurisdiction's K–5 math standards, how Mathness models each, and how well its sheets fit them. As of ${AS_OF}.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Andika:wght@400;700&family=Grandstander:wght@600;800&family=JetBrains+Mono:wght@500&display=swap">
<style>
/* Layout: a sheet of graph paper marked in the answer key's red pen; one reading column (max 76rem) with
   the map as the centrepiece and a detail card beside it; every chart drawn to scale from the data. */
:root {
  --paper: #f5f7fb; --sheet: #ffffff; --ink: #18203a; --muted: #5a6382; --rule: #dde2ee;
  --grid: rgba(43, 76, 170, 0.07); --pen: #cc2f25; --marker: #f6cd3c; --marker-soft: rgba(246, 205, 60, 0.45);
  --own: #2b46a8; --xw: #11806a; --cc: #9cb7e3; --none: #f1f2f6; --none-edge: #cc2f25;
  --good: #11806a; --part: #e0a91c; --miss: #cc2f25;
  --k-same: #c9d3e8; --k-edited: #6f8fd0; --k-moved: #e0a91c; --k-new: #cc2f25;
  --display: "Grandstander", ui-rounded, "Avenir Next", system-ui, sans-serif;
  --body: "Andika", ui-rounded, "Segoe UI", system-ui, sans-serif;
  --mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
  color-scheme: light;
}
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) {
  --paper: #0d1324; --sheet: #141c31; --ink: #e9edf6; --muted: #9ea8c2; --rule: #27304a;
  --grid: rgba(140, 170, 255, 0.06); --pen: #ff6b5e; --marker: #f6cd3c; --marker-soft: rgba(246, 205, 60, 0.28);
  --own: #6f8cff; --xw: #2fc29f; --cc: #36507f; --none: #1b2440; --none-edge: #ff6b5e;
  --good: #2fc29f; --part: #f2bd3a; --miss: #ff6b5e;
  --k-same: #2f3b5c; --k-edited: #5d7fd6; --k-moved: #f2bd3a; --k-new: #ff6b5e;
  color-scheme: dark; } }
:root[data-theme="dark"] {
  --paper: #0d1324; --sheet: #141c31; --ink: #e9edf6; --muted: #9ea8c2; --rule: #27304a;
  --grid: rgba(140, 170, 255, 0.06); --pen: #ff6b5e; --marker: #f6cd3c; --marker-soft: rgba(246, 205, 60, 0.28);
  --own: #6f8cff; --xw: #2fc29f; --cc: #36507f; --none: #1b2440; --none-edge: #ff6b5e;
  --good: #2fc29f; --part: #f2bd3a; --miss: #ff6b5e;
  --k-same: #2f3b5c; --k-edited: #5d7fd6; --k-moved: #f2bd3a; --k-new: #ff6b5e;
  color-scheme: dark;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } * { transition: none !important; animation: none !important; } }
body {
  margin: 0; color: var(--ink); font: 1rem/1.6 var(--body);
  background-color: var(--paper);
  background-image: linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 22px 22px;
}
.wrap { max-width: 76rem; margin: 0 auto; padding-inline: clamp(16px, 4vw, 40px); }
h1, h2, h3 { font-family: var(--display); line-height: 1.12; text-wrap: balance; margin: 0; }
h2 { font-size: clamp(1.6rem, 3.4vw, 2.3rem); font-weight: 800; }
h3 { font-size: 1.1rem; font-weight: 700; }
p { margin: 0; max-width: 68ch; }
a { color: inherit; text-decoration-color: color-mix(in oklab, var(--pen) 55%, transparent); text-underline-offset: 3px; }
a:hover { color: var(--pen); }
a:focus-visible, button:focus-visible, input:focus-visible, .st:focus-visible { outline: 3px solid var(--marker); outline-offset: 2px; border-radius: 4px; }
code, .mono { font-family: var(--mono); font-size: 0.86em; font-variant-numeric: tabular-nums; }
.muted { color: var(--muted); }
.eyebrow { font-family: var(--mono); font-size: 0.74rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
.hl { background: linear-gradient(transparent 58%, var(--marker-soft) 58%, var(--marker-soft) 92%, transparent 92%); padding-inline: 0.08em; }

/* Top bar */
.bar { background: #141b33; color: #f2f4fa; }
.bar .wrap { display: flex; align-items: center; gap: 14px; padding-block: 12px; flex-wrap: wrap; }
.brand { font-family: var(--display); font-weight: 800; font-size: 1.15rem; }
.bar .meta { color: #a9b3cf; font-size: 0.9rem; }
.bar nav { margin-left: auto; display: flex; gap: 14px; flex-wrap: wrap; font-size: 0.9rem; }
.bar nav a { color: #dfe5f6; text-decoration: none; }
.bar nav a:hover { color: var(--marker); }
.theme { font: inherit; font-size: 0.85rem; background: transparent; color: #dfe5f6; border: 1px solid #3a4568; border-radius: 999px; padding: 3px 12px; cursor: pointer; }

/* Hero: the report card */
.hero { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); gap: clamp(20px, 4vw, 48px); padding-block: clamp(32px, 6vw, 64px) 28px; align-items: center; }
.hero h1 { font-size: clamp(2.2rem, 5.4vw, 3.8rem); font-weight: 800; letter-spacing: -0.01em; }
.hero .lede { margin-top: 18px; font-size: 1.12rem; color: var(--muted); }
.hero .stamp { margin-top: 22px; display: inline-flex; gap: 10px; align-items: center; font-family: var(--mono); font-size: 0.8rem; color: var(--pen); border: 1.5px solid var(--pen); border-radius: 6px; padding: 4px 10px; transform: rotate(-1.5deg); }
.card { background: var(--sheet); border: 1px solid var(--rule); border-radius: 14px; box-shadow: 0 1px 0 var(--rule), 0 12px 30px -18px rgba(20, 30, 70, 0.35); }
.report { padding: 22px 24px; display: grid; gap: 14px; position: relative; }
.report::before { content: "Answer key"; position: absolute; top: -12px; right: 18px; font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; background: var(--pen); color: #fff; padding: 2px 10px; border-radius: 4px; }
.score { display: grid; grid-template-columns: auto 1fr; gap: 2px 16px; align-items: center; }
.score .ring { grid-row: span 2; width: 5.6rem; height: 3.4rem; display: grid; place-items: center; font-family: var(--display); font-weight: 800; font-size: 1.35rem; color: var(--pen); position: relative; font-variant-numeric: tabular-nums; }
.score .ring svg { position: absolute; inset: -6px -8px; width: calc(100% + 16px); height: calc(100% + 12px); overflow: visible; }
.score b { font-size: 1rem; }
.score small { color: var(--muted); font-size: 0.86rem; line-height: 1.35; }

section { padding-block: clamp(36px, 6vw, 56px); border-top: 1px dashed var(--rule); display: grid; gap: 20px; }
.head { display: grid; gap: 8px; }
.lede2 { color: var(--muted); }

/* Map */
.mapgrid { display: grid; grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr); gap: 20px; align-items: start; }
.mapbox { padding: 14px; }
.mapbox svg { width: 100%; height: auto; display: block; }
.st { stroke: var(--sheet); stroke-width: 1; cursor: pointer; transition: opacity 0.15s, filter 0.15s; }
.m-own { fill: var(--own); } .m-xw { fill: var(--xw); } .m-cc { fill: var(--cc); } .m-none { fill: var(--none); stroke: var(--none-edge); }
.st.next { stroke: var(--marker); stroke-width: 2.4; stroke-dasharray: 5 3; }
.st:hover, .st.sel { filter: brightness(1.15) saturate(1.1); }
.st.sel { stroke: var(--pen); stroke-width: 3; stroke-dasharray: none; }
.st.dim { opacity: 0.18; }
.legend { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
.legend button { font: inherit; font-size: 0.86rem; display: inline-flex; align-items: center; gap: 7px; padding: 4px 11px; border-radius: 999px; border: 1px solid var(--rule); background: var(--sheet); color: var(--ink); cursor: pointer; }
.legend button[aria-pressed="true"] { border-color: var(--ink); box-shadow: inset 0 0 0 1px var(--ink); }
.sw { width: 12px; height: 12px; border-radius: 3px; display: inline-block; }
.sw.own { background: var(--own); } .sw.xw { background: var(--xw); } .sw.cc { background: var(--cc); } .sw.none { background: var(--none); box-shadow: inset 0 0 0 1.5px var(--none-edge); }
.sw.next { background: transparent; box-shadow: inset 0 0 0 2px var(--marker); }
.extras { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
.ext { font: inherit; font-size: 0.86rem; display: inline-flex; gap: 8px; align-items: center; padding: 4px 10px 4px 6px; border-radius: 8px; border: 1px solid var(--rule); background: var(--sheet); color: var(--ink); cursor: pointer; }
.flag { width: 30px; height: 20px; border-radius: 3px; flex: none; box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12); display: inline-block; vertical-align: middle; }
.flag.badge { display: inline-grid; place-items: center; font: 700 0.6rem/1 var(--mono); background: var(--ink); color: var(--sheet); }
.detail { padding: 20px 22px; display: grid; gap: 12px; position: sticky; top: calc(env(safe-area-inset-top, 0px) + 12px); }
.detail .dh { display: flex; gap: 12px; align-items: center; }
.detail .bigflag { width: 60px; height: 40px; border-radius: 5px; box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15); flex: none; }
.detail .bigflag.badge { display: grid; place-items: center; font: 700 0.9rem/1 var(--mono); background: var(--ink); color: var(--sheet); }
.detail h3 { font-size: 1.5rem; }
.tag { display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 700; padding: 2px 10px; border-radius: 999px; }
.t-own { background: color-mix(in oklab, var(--own) 18%, transparent); color: var(--ink); box-shadow: inset 0 0 0 1px var(--own); }
.t-xw { background: color-mix(in oklab, var(--xw) 18%, transparent); color: var(--ink); box-shadow: inset 0 0 0 1px var(--xw); }
.t-cc { background: color-mix(in oklab, var(--cc) 35%, transparent); color: var(--ink); box-shadow: inset 0 0 0 1px var(--cc); }
.t-none { background: transparent; color: var(--ink); box-shadow: inset 0 0 0 1px var(--none-edge); }
.dl { display: grid; grid-template-columns: 6.5rem 1fr; gap: 6px 12px; font-size: 0.93rem; }
.dl dt { color: var(--muted); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.06em; padding-top: 2px; }
.dl dd { margin: 0; min-width: 0; }
.next-box { border-left: 3px solid var(--marker); padding: 6px 0 6px 12px; font-size: 0.93rem; }
.links { display: flex; flex-wrap: wrap; gap: 8px 16px; font-size: 0.9rem; }

/* Kinds bars */
.kbar { display: inline-flex; width: 100%; height: 12px; border-radius: 3px; overflow: hidden; vertical-align: middle; background: var(--k-same); }
.kbar i { display: block; height: 100%; }
.k-same { background: var(--k-same); } .k-edited { background: var(--k-edited); } .k-moved { background: var(--k-moved); } .k-new { background: var(--k-new); }
.kpct { font-family: var(--mono); font-size: 0.78rem; color: var(--muted); }
.kkey { display: flex; flex-wrap: wrap; gap: 6px 16px; font-size: 0.85rem; color: var(--muted); }
.kkey span { display: inline-flex; align-items: center; gap: 6px; }
.dist { padding: 16px 18px; display: grid; grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr)); gap: 8px 28px; }
.drow { display: grid; grid-template-columns: 30px 3.2rem 1fr 2.6rem; gap: 10px; align-items: center; font-size: 0.9rem; cursor: pointer; border-radius: 6px; padding: 2px 4px; }
.drow:hover { background: color-mix(in oklab, var(--marker) 18%, transparent); }
.drow b { font-family: var(--mono); font-size: 0.82rem; }

/* Share bar */
.share { display: grid; gap: 12px; }
.sharebar { display: flex; height: 46px; border-radius: 10px; overflow: hidden; border: 1px solid var(--rule); }
.sharebar span { display: grid; place-items: center; font-weight: 700; font-size: 0.95rem; color: #fff; min-width: 0; }
.sharebar .c-own { background: var(--own); } .sharebar .c-xw { background: var(--xw); } .sharebar .c-cc { background: var(--cc); color: var(--ink); }
.sharekey { display: grid; grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr)); gap: 14px; }
.sharekey div { display: grid; grid-template-columns: 14px 1fr; gap: 2px 10px; }
.sharekey .sw { margin-top: 5px; }
.sharekey strong { font-family: var(--display); font-size: 1.4rem; grid-column: 2; line-height: 1.1; }
.sharekey small { grid-column: 2; color: var(--muted); font-size: 0.86rem; }

/* Fit */
.passes { padding: 18px 20px; display: grid; gap: 7px; }
.pass { display: grid; grid-template-columns: minmax(8rem, 14rem) 1fr; gap: 14px; align-items: center; }
.pname { font-weight: 700; font-size: 0.92rem; line-height: 1.25; }
.pname small { display: block; font-weight: 400; color: var(--muted); font-size: 0.78rem; }
.stack { display: flex; height: 24px; border-radius: 5px; overflow: hidden; background: var(--rule); }
.stack.small { height: 12px; }
.stack i { display: grid; place-items: center; min-width: 0; overflow: hidden; }
.stack b { font-family: var(--mono); font-size: 0.74rem; color: #fff; white-space: nowrap; }
.s-good { background: var(--good); } .s-part { background: var(--part); } .s-miss { background: var(--miss); }
.pass.fresh .pname { color: var(--pen); }
.pass.final .stack { box-shadow: 0 0 0 2px var(--pen); }
.fitkey { display: flex; flex-wrap: wrap; gap: 6px 18px; font-size: 0.86rem; color: var(--muted); padding: 0 20px 16px; }
.fitkey span { display: inline-flex; gap: 6px; align-items: center; }
.owns { display: grid; grid-template-columns: repeat(auto-fit, minmax(15.5rem, 1fr)); gap: 14px; }
.ownfit { padding: 14px 16px; display: grid; gap: 8px; }
.own-h { display: flex; gap: 10px; align-items: center; }
.own-h .mono { margin-left: auto; color: var(--muted); font-size: 0.75rem; }
.own-row { display: grid; grid-template-columns: 6.6rem 1fr 2.6rem; gap: 10px; align-items: center; font-size: 0.82rem; color: var(--muted); }
.own-row .pct { text-align: right; color: var(--ink); }

/* Topics */
.tablebox { overflow-x: auto; }
table { border-collapse: collapse; width: 100%; font-size: 0.93rem; }
th, td { text-align: left; vertical-align: top; padding: 11px 12px; border-bottom: 1px solid var(--rule); }
th { font-family: var(--mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); font-weight: 500; }
tr:last-child td { border-bottom: 0; }
.chips { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 4px; }
.chip { display: inline-flex; align-items: center; gap: 4px; font: 500 0.7rem/1 var(--mono); padding: 2px 6px 2px 2px; border-radius: 5px; background: color-mix(in oklab, var(--rule) 55%, transparent); }
.chip .flag { width: 18px; height: 12px; border-radius: 2px; }
.chip .flag.badge { font-size: 0.45rem; }
.where { display: block; color: var(--muted); font-size: 0.84rem; }
.pill { display: inline-block; font-size: 0.76rem; font-weight: 700; padding: 1px 9px; border-radius: 999px; margin-bottom: 4px; }
.p-ok { box-shadow: inset 0 0 0 1px var(--good); color: var(--ink); background: color-mix(in oklab, var(--good) 15%, transparent); }
.p-part { box-shadow: inset 0 0 0 1px var(--part); color: var(--ink); background: color-mix(in oklab, var(--part) 18%, transparent); }
.p-gap { box-shadow: inset 0 0 0 1px var(--miss); color: var(--ink); background: color-mix(in oklab, var(--miss) 14%, transparent); }
.status { display: block; font-size: 0.86rem; color: var(--muted); }

/* Directory */
.tools { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
.tools input { font: inherit; padding: 7px 12px; border-radius: 8px; border: 1px solid var(--rule); background: var(--sheet); color: var(--ink); min-width: 0; width: min(22rem, 100%); }
.dir { display: grid; grid-template-columns: repeat(auto-fill, minmax(16.5rem, 1fr)); gap: 12px; }
.dcard { padding: 13px 15px; display: grid; gap: 8px; align-content: start; cursor: pointer; text-align: left; font: inherit; color: inherit; }
.dcard:hover { border-color: var(--ink); }
.dcard .top { display: flex; gap: 10px; align-items: center; }
.dcard .top b { font-size: 1rem; }
.dcard .top .tag { margin-left: auto; }
.dcard .t { font-size: 0.84rem; color: var(--muted); line-height: 1.35; }
.dcard .kk { display: grid; grid-template-columns: 1fr 2.6rem; gap: 8px; align-items: center; }

/* Pre-K, curricula, timeline, open, resources */
.two { display: grid; grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); gap: 16px; }
.prek { padding: 18px 20px; display: grid; gap: 12px; }
.prekflags { display: flex; flex-wrap: wrap; gap: 10px; }
.prekflags span { display: inline-flex; gap: 8px; align-items: center; font-size: 0.9rem; padding: 4px 10px 4px 5px; border: 1px solid var(--rule); border-radius: 8px; }
.cbars { padding: 18px 20px; display: grid; gap: 10px; }
.cbar { display: grid; grid-template-columns: minmax(9rem, 15rem) 1fr 5.5rem; gap: 12px; align-items: center; }
.cname { font-weight: 700; font-size: 0.92rem; line-height: 1.25; }
.cname small { display: block; font-weight: 400; color: var(--muted); font-size: 0.78rem; }
.ctrack { position: relative; height: 22px; background: color-mix(in oklab, var(--rule) 60%, transparent); border-radius: 5px; }
.cfill { display: block; height: 100%; border-radius: 5px; background: var(--muted); opacity: 0.55; }
.cfill.mapped { background: var(--own); opacity: 1; }
.cval { position: absolute; left: 8px; top: 50%; transform: translateY(-50%); font: 500 0.76rem var(--mono); color: var(--ink); mix-blend-mode: normal; }
.cfill.mapped + .cval { color: #fff; }
.cunits { font-size: 0.85rem; font-family: var(--mono); }
ol.tlwrap { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)); gap: 16px; }
.tl { background: var(--sheet); border: 1px solid var(--rule); border-radius: 14px; padding: 16px 18px; display: grid; gap: 10px; align-content: start; }
.tl-year b { font-family: var(--display); font-size: 1.5rem; display: block; }
.tl-year span { color: var(--muted); font-size: 0.85rem; }
.tl ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; font-size: 0.92rem; }
.tl li li, .tl ul li { display: grid; grid-template-columns: 30px 1fr; gap: 10px; align-items: start; }
ol.open { margin: 0; padding: 0; list-style: none; counter-reset: o; display: grid; gap: 10px; }
ol.open li { counter-increment: o; display: grid; grid-template-columns: 2.4rem 1fr; gap: 2px 12px; padding: 14px 16px; }
ol.open li::before { content: counter(o); grid-row: span 2; font-family: var(--display); font-weight: 800; font-size: 1.5rem; color: var(--pen); line-height: 1; }
ol.open span { color: var(--muted); font-size: 0.92rem; }
.resgrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr)); gap: 16px; }
.res { padding: 16px 18px; background: var(--sheet); border: 1px solid var(--rule); border-radius: 14px; }
.res ul { list-style: none; margin: 10px 0 0; padding: 0; display: grid; gap: 10px; }
.res li { display: grid; gap: 1px; font-size: 0.93rem; }
.res li span { color: var(--muted); font-size: 0.82rem; }
.notes { font-size: 0.9rem; color: var(--muted); display: grid; gap: 8px; }
.notes ul { margin: 0; padding-left: 1.1rem; display: grid; gap: 6px; }
footer { padding-block: 26px 48px; border-top: 1px dashed var(--rule); color: var(--muted); font-size: 0.84rem; display: grid; gap: 6px; }

@media (max-width: 900px) {
  .hero, .mapgrid { grid-template-columns: 1fr; }
  .detail { position: static; }
}
@media (max-width: 560px) {
  .pass, .cbar { grid-template-columns: 1fr; gap: 4px; }
  .cunits { justify-self: start; }
  .bar nav { display: none; }
}
</style>
</head>
<body>
<div class="bar"><div class="wrap">
  <span class="brand">Mathness!</span><span class="meta">Standards Atlas · K–5 · ${AS_OF}</span>
  <nav aria-label="Sections"><a href="#map">Map</a><a href="#fit">Fit</a><a href="#beyond">Beyond Common Core</a><a href="#states">States</a><a href="#curricula">Curricula</a><a href="#ahead">Ahead</a><a href="#resources">Resources</a></nav>
  <button class="theme" id="theme" type="button" aria-label="Switch light or dark">Light / dark</button>
</div></div>

<div class="wrap">
<header class="hero">
  <div>
    <span class="eyebrow">Coverage report · school year 2026–27</span>
    <h1>Every state's K–5 math, <span class="hl">matched sheet by sheet</span></h1>
    <p class="lede">All 50 states, DC and Defense Department schools have Mathness pages under their own name, ${COUNT("own") + COUNT("xw")} of them in their own codes. Every standard in every set has a printable sheet with an answer key, and a reviewer read each state row that differs from Common Core against what its sheets actually ask.</p>
    <span class="stamp">✓ checked against each state's own documents</span>
  </div>
  <div class="card report" aria-label="Headline figures">
    ${[
      ["1,485/1,485", "crosswalk rows fit fully", "state rows that differ from Common Core, across the first 38 crosswalks; North Carolina 2028–29 is under review"],
      ["658/658", "own-set rows fit fully", "Texas, Florida, Virginia and Maryland, K–5"],
      ["10,241", "standards, each with a sheet", "59 sets: Common Core, 4 own sets, 54 state editions"],
      ["267", "skills, pre-K to grade 5", "each a sheet, an answer key laid out like it, and a parent guide"],
    ].map(([n, b, s]) => `<div class="score"><span class="ring"><svg viewBox="0 0 120 70" aria-hidden="true"><path d="M8 37c0-17 25-30 54-30s52 12 52 28c0 18-24 29-55 29C29 64 7 54 9 33" fill="none" stroke="var(--pen)" stroke-width="2.4" stroke-linecap="round"/></svg>${n.includes("/") ? n.split("/")[0] : n}</span><b>${n.includes("/") ? `of ${n.split("/")[1]} ${b}` : b}</b><small>${s}</small></div>`).join("")}
  </div>
</header>

<section id="share">
  <div class="head"><span class="eyebrow">Where students are</span><h2>How each student's state is modelled</h2>
  <p class="lede2">Public-school students in the 50 states and DC, by how Mathness shows their state's standards (NCES, fall 2023, ${fmt(STATES_TOTAL)} students).</p></div>
  <div class="share">
    <div class="sharebar" role="img" aria-label="${SHARES.map((s) => `${s.pct.toFixed(0)}% ${MODEL_LABEL[s.m]}`).join(", ")}">
      ${SHARES.map((s) => `<span class="c-${s.m}" style="flex:${s.n}">${s.pct.toFixed(0)}%</span>`).join("")}
    </div>
    <div class="sharekey">
      <div><i class="sw own"></i><strong>${COUNT("own")} states</strong><small><b>Own set, fit-reviewed.</b> Their own codes and words, state-only sheets written, every row reviewed.</small></div>
      <div><i class="sw xw"></i><strong>${COUNT("xw")} states</strong><small><b>Crosswalk.</b> Every standard in the state's own code, mapped to Common Core and to sheets for what it adds. Six also have their next standards.</small></div>
      <div><i class="sw cc"></i><strong>${ROWS.filter((r) => r.model === "cc" && !["DC", "GU", "DoDEA"].includes(r.id)).length} states + DC + DoDEA</strong><small><b>Common Core codes</b> under the state's name, with any added standards slotted in. Guam uses Common Core's own pages.</small></div>
      <div><i class="sw none"></i><strong>${COUNT("—")} territories</strong><small><b>Not yet.</b> Puerto Rico (standards in Spanish) and the U.S. Virgin Islands (K–5 detail unreachable).</small></div>
    </div>
  </div>
</section>

<section id="map">
  <div class="head"><span class="eyebrow">The map</span><h2>Standards in effect for 2026–27</h2>
  <p class="lede2">Choose a state for its standards, its codes, how far it sits from Common Core and where its documents live. A dashed yellow edge marks a state whose next standards (2027–28, or 2028–29 for North Carolina) Mathness already models.</p></div>
  <div class="mapgrid">
    <div class="card mapbox">
      <svg viewBox="-60 0 1035 615" role="group" aria-label="Map of US states coloured by how Mathness models their standards">${mapPaths}</svg>
      <div class="legend" role="group" aria-label="Show one kind">
        <button type="button" data-f="all" aria-pressed="true">All</button>
        <button type="button" data-f="own" aria-pressed="false"><i class="sw own"></i>Own set</button>
        <button type="button" data-f="xw" aria-pressed="false"><i class="sw xw"></i>Crosswalk</button>
        <button type="button" data-f="cc" aria-pressed="false"><i class="sw cc"></i>Common Core codes</button>
        <button type="button" data-f="next" aria-pressed="false"><i class="sw next"></i>Next standards modelled</button>
      </div>
      <div class="extras" aria-label="Outside the 50 states">${terr.map((r) => `<button class="ext" type="button" data-id="${r.id}">${flagSvg(r)}${esc(r.name)}</button>`).join("")}</div>
    </div>
    <aside class="card detail" id="detail" aria-live="polite"></aside>
  </div>
</section>

<section id="fit">
  <div class="head"><span class="eyebrow">Fit review</span><h2>Every crosswalk row, read against its sheets</h2>
  <p class="lede2">A sheet existing for a standard is coverage. Fit means the sheet practises what the standard asks, at its grade. Reviewers read each of 1,479 state rows that reword Common Core or link another grade's sheet (1,485 once Hawaiʻi's 2027–28 rows joined) against every section its sheets show across 40 seeds. Each pass linked better sheets or added the missing activity, then the changed rows were reviewed again. Midway, a fresh reviewer re-read every row without the earlier verdicts and found the incremental reviews had drifted optimistic. North Carolina's 2028–29 crosswalk, added on 2 October, had its first review (225 good, 93 partial, 4 mismatch of 322 rows); its fix passes followed, and their final tally isn't in yet.</p></div>
  <div class="card">
    <div class="passes">${passRows}</div>
    <div class="fitkey"><span><i class="sw" style="background:var(--good)"></i>Good: the sheets practise all of it</span><span><i class="sw" style="background:var(--part)"></i>Partial: a named part is missing</span><span><i class="sw" style="background:var(--miss)"></i>Mismatch: the sheets don't practise it</span><span class="mono">bars to scale · ${fmt(passMax)} rows</span></div>
  </div>
  <div class="head"><h3>The four own sets</h3><p class="lede2">Every row of Texas, Florida, Virginia and Maryland, reviewed the same way. The first reviews saw only each sheet's topic; later ones saw every section.</p></div>
  <div class="owns">${ownFit}</div>
</section>

<section id="distance">
  <div class="head"><span class="eyebrow">Distance from Common Core</span><h2>How much of each state's set is its own</h2>
  <p class="lede2">Each crosswalked state's K–5 standards by kind, from the research files, sorted by the share that differs from Common Core.</p>
  <div class="kkey"><span><i class="sw k-same"></i>Same as Common Core</span><span><i class="sw k-edited"></i>Edited</span><span><i class="sw k-moved"></i>Moved from another grade</span><span><i class="sw k-new"></i>New content</span></div></div>
  <div class="card dist">${xwSorted.map((r) => `<div class="drow" data-id="${r.id}" role="button" tabindex="0" aria-label="${esc(r.name)}">${flagSvg(r)}<b>${r.id}</b>${kindBar(r.kinds)}</div>`).join("")}</div>
</section>

<section id="beyond">
  <div class="head"><span class="eyebrow">Content check</span><h2>Topics states teach that Common Core doesn't</h2>
  <p class="lede2">What the state research turned up, where it appears, and whether a sheet practises it. Money before grade 2 is the most common addition, in 34 states.</p></div>
  <div class="card tablebox"><table><thead><tr><th>Topic</th><th>Where</th><th>Mathness</th></tr></thead><tbody>${topicRows}</tbody></table></div>
</section>

<section id="states">
  <div class="head"><span class="eyebrow">State by state</span><h2>All ${ROWS.length} jurisdictions</h2></div>
  <div class="tools"><input id="q" type="search" placeholder="Find a state or a code style, e.g. NY- or M.3" aria-label="Find a state"><span class="muted" id="count"></span></div>
  <div class="dir" id="dir"></div>
</section>

<section id="prek">
  <div class="head"><span class="eyebrow">Before kindergarten</span><h2>Pre-K in states' own codes</h2></div>
  <div class="two">
    <div class="card prek"><p>Common Core starts at kindergarten. Pre-K sheets follow Head Start's Early Learning Outcomes Framework (2015), goals P-MATH 1–10, in every state not yet mapped. ${PREK_STATES} states and DC are mapped in their own pre-K codes, from their math or early-learning standards:</p>
      <div class="prekflags">${prekIds.map((id) => `<span>${flagFor(id)}${esc(NAMES[id])}</span>`).join("")}</div>
      <p class="muted" style="font-size:.88rem">Texas (Prekindergarten Guidelines 2022), Florida (4 years to kindergarten, 2017) and Virginia (2021) show Head Start's goals until mapped; Missouri, Arizona, New Hampshire and Washington have no pre-K codes to map, and DoDEA follows a commercial framework. Data: <a href="data/prek/">data/prek</a>.</p></div>
    <div class="card prek"><h3>Sheets read aloud</h3><p>Pre-K sheets are made to be read by a grown-up: 24pt answers, pictures 80–140pt, a picture cue beside every title (trace, circle, colour, line, draw), and answers made by circling, tracing or drawing, never writing.</p></div>
  </div>
</section>

<section id="curricula">
  <div class="head"><span class="eyebrow">Curricula</span><h2>The most-used programs, mapped unit by unit</h2>
  <p class="lede2">Share of US elementary math teachers who use each program at least weekly (RAND American Instructional Resources Survey 2025). Teachers name several, so family totals overlap. Blue is mapped: each unit links the sheets for the standards it teaches; only unit numbers and titles are shown, and no curriculum name ever prints.</p></div>
  <div class="card cbars">${curBars}</div>
</section>

<section id="ahead">
  <div class="head"><span class="eyebrow">Watch list</span><h2>Changes already on the way</h2></div>
  <ol class="tlwrap">${timeline}</ol>
  <div class="head"><h3>Open items, in order</h3></div>
  <ol class="open">${OPEN.map(([t, d]) => `<li class="card"><b>${esc(t)}</b><span>${esc(d)}</span></li>`).join("")}</ol>
</section>

<section id="resources">
  <div class="head"><span class="eyebrow">Resources</span><h2>Where everything comes from</h2>
  <p class="lede2">Each state's own documents are linked from its card above and listed in full in its state file.</p></div>
  <div class="resgrid">${resources}</div>
  <div class="notes"><ul>
    <li>Every summary is in our own words; standards are cited by code. Where a state publishes no crosswalk to Common Core (Texas, Florida, Virginia, most crosswalked states), the mapping is our judgement from the texts and says so.</li>
    <li>Titles and adoption years were checked against each state's primary sources on 1 October 2026. Less certain: Hawaiʻi's approval date, Louisiana 2025's grade 4–5 code layout, Michigan's bill, Guam's adoption year.</li>
    <li>Enrollment weights the picture; it isn't a count of Mathness users. Curriculum use counts teachers, not students.</li>
    <li>Flags are simplified drawings made for Mathness, not official artwork.</li>
  </ul></div>
</section>

<footer>
  <span>Mathness! Math Worksheets · mathness.app · Standards Atlas, ${AS_OF}. Built from the us-math-standards skill (scripts/atlas/build.ts).</span>
  <span>Common Core State Standards © Copyright 2010. National Governors Association Center for Best Practices and Council of Chief State School Officers. All rights reserved. Each state's standards belong to its education agency. Curriculum names identify programs only; Mathness is not affiliated with, sponsored or endorsed by any publisher or state agency.</span>
</footer>
</div>

<script>
const DATA = ${JSON.stringify(DATA)};
const LABEL = ${JSON.stringify({ own: "Own set", xw: "Crosswalk", cc: "Common Core codes", none: "Not yet" })};
const NEXT = ${JSON.stringify(NEXT_IDS)};
const byId = Object.fromEntries(DATA.map((d) => [d.id, d]));
const flag = (d, cls) => d.flag ? '<svg class="' + cls + '" viewBox="0 0 30 20" aria-hidden="true">' + d.flag + "</svg>" : '<span class="' + cls + ' badge" aria-hidden="true">' + (d.id === "DoDEA" ? "DD" : d.id) + "</span>";
const fmt = (n) => n == null ? "" : n.toLocaleString("en-US");
const kinds = (k) => { if (!k) return ""; const t = k.same + k.edited + k.moved + k.new;
  return '<span class="kbar">' + ["same", "edited", "moved", "new"].map((x) => k[x] ? '<i class="k-' + x + '" style="flex:' + k[x] + '"></i>' : "").join("") + "</span>"
    + '<span class="kpct">' + k.same + " same · " + k.edited + " edited · " + k.moved + " moved · " + k.new + " new</span>"; };
function show(id, scroll) {
  const d = byId[id]; if (!d) return;
  document.querySelectorAll(".st").forEach((p) => p.classList.toggle("sel", p.dataset.id === id));
  const nextHtml = d.next ? '<div class="next-box"><b>Next:</b> ' + d.next + (d.nextKinds ? '<div style="margin-top:8px">' + kinds(d.nextKinds) + "</div>" : "") + "</div>" : "";
  document.getElementById("detail").innerHTML =
    '<div class="dh">' + flag(d, "bigflag") + '<div><h3>' + d.name + '</h3><span class="tag t-' + d.model + '">' + LABEL[d.model] + "</span></div></div>"
    + '<dl class="dl"><dt>Standards</dt><dd>' + d.title + '</dd><dt>Adopted</dt><dd class="mono">' + d.year + "</dd>"
    + (d.notable ? "<dt>Beyond CCSS</dt><dd>" + d.notable + "</dd>" : "")
    + (d.kinds ? "<dt>Rows</dt><dd>" + kinds(d.kinds) + "</dd>" : "")
    + (d.enroll ? '<dt>Students</dt><dd class="mono">' + fmt(d.enroll) + " (fall 2023)</dd>" : "") + "</dl>"
    + nextHtml
    + '<div class="links">' + (d.doc ? '<a href="' + d.doc + '">Official document ↗</a>' : "") + '<a href="references/' + d.file + '">Notes in the skill</a>' + (d.kinds ? '<a href="data/crosswalks/' + d.id.toLowerCase() + '.tsv">Crosswalk data</a>' : "") + "</div>";
  if (scroll && innerWidth < 900) document.getElementById("detail").scrollIntoView({ behavior: "smooth", block: "nearest" });
}
document.querySelectorAll(".st, .ext, .drow").forEach((el) => {
  el.addEventListener("click", () => { show(el.dataset.id, true); if (el.classList.contains("drow")) document.getElementById("map").scrollIntoView({ behavior: "smooth" }); });
  el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); el.click(); } });
});
document.querySelectorAll(".legend button").forEach((b) => b.addEventListener("click", () => {
  document.querySelectorAll(".legend button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
  const f = b.dataset.f;
  document.querySelectorAll(".st").forEach((p) => {
    const d = byId[p.dataset.id];
    p.classList.toggle("dim", !(f === "all" || (f === "next" ? !!NEXT[d.id] : d.model === f)));
  });
}));
const dir = document.getElementById("dir");
function renderDir(q) {
  q = (q || "").trim().toLowerCase();
  const list = DATA.filter((d) => !q || (d.name + " " + d.id + " " + d.title + " " + d.notable).toLowerCase().includes(q))
    .sort((a, b) => a.name.localeCompare(b.name));
  dir.innerHTML = list.map((d) => '<button type="button" class="card dcard" data-id="' + d.id + '"><span class="top">' + flag(d, "flag") + "<b>" + d.name + '</b><span class="tag t-' + d.model + '">' + LABEL[d.model] + '</span></span><span class="t">' + d.title + " (" + d.year + ")</span>"
    + (d.kinds ? '<span class="kk"><span class="kbar">' + ["same", "edited", "moved", "new"].map((x) => d.kinds[x] ? '<i class="k-' + x + '" style="flex:' + d.kinds[x] + '"></i>' : "").join("") + '</span><span class="kpct">' + Math.round(100 * (1 - d.kinds.same / (d.kinds.same + d.kinds.edited + d.kinds.moved + d.kinds.new))) + "%</span></span>" : "")
    + (d.next ? '<span class="t" style="color:var(--ink)">Next: ' + d.next + "</span>" : "") + "</button>").join("");
  document.getElementById("count").textContent = list.length + " of " + DATA.length;
  dir.querySelectorAll(".dcard").forEach((c) => c.addEventListener("click", () => { show(c.dataset.id); document.getElementById("map").scrollIntoView({ behavior: "smooth" }); }));
}
document.getElementById("q").addEventListener("input", (e) => renderDir(e.target.value));
renderDir("");
const start = location.hash.slice(1).toUpperCase();
show(byId[start] ? start : "TX");
document.getElementById("theme").addEventListener("click", () => {
  const root = document.documentElement;
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
});
</script>
</body>
</html>
`;

writeFileSync(join(ROOT, "standards-atlas.html"), html);

// --artifact <file>: the same page for a claude.ai artifact, which supplies its own document skeleton
// and can't follow links into this folder, so skill files link to the repo on GitHub instead.
const at = process.argv.indexOf("--artifact");
if (at > 0) {
  const REPO = "https://github.com/zkmake/skills/blob/main/skills/edtech/us-math-standards/";
  const page = html
    .replace(/^<!doctype html>\n<html lang="en">\n<head>\n/, "")
    .replace(/<meta charset="utf-8">\n<meta name="viewport"[^>]*>\n/, "")
    .replace("</head>\n<body>\n", "")
    .replace(/<\/body>\n<\/html>\n$/, "")
    .replace(/href="((?:references|data|scripts)\/[^"]*|SKILL\.md)"/g, (_, p) => `href="${REPO}${p}"`)
    .replace(/'<a href="references\/' \+ d\.file/g, `'<a href="${REPO}references/' + d.file`)
    .replace(/'<a href="data\/crosswalks\/'/g, `'<a href="${REPO}data/crosswalks/'`);
  writeFileSync(process.argv[at + 1], page);
  console.log(`artifact page: ${process.argv[at + 1]}`);
}

/* ---------- --blog <file.ts>: the article on mathness.app ---------- */
// The atlas retold for teachers and parents, as a data module the site's shell wraps (Mathness:
// src/site/blog/). The site supplies the header, footer, fonts and dark mode (`html.dark`), so the
// atlas CSS is scoped under `.atlas` and its colours follow the site's slate palette; links go to
// each state's Mathness page and its official document, never into this skill.
const bl = process.argv.indexOf("--blog");
if (bl > 0) {
  const SLUG = "how-we-matched-every-state";
  const SITE_PATH: Record<string, string> = { DC: "/washington-dc/", DoDEA: "/dodea/", GU: "/#by-grade" };
  const slugify = (s: string) => s.toLowerCase().replace(/ʻ/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const sitePath = (id: string) => (["PR", "VI"].includes(id) ? "" : SITE_PATH[id] ?? `/${slugify(NAMES[id])}/`);
  const plain = (s: string) => s.replace(/\bG([1-5])–([1-5])\b/g, "grades $1–$2").replace(/\bG([1-5])\b/g, "grade $1");

  // Scope every rule under .atlas: tokens on .atlas itself, the page-level rules dropped.
  const css0 = /<style>\n([\s\S]*?)<\/style>/.exec(html)![1]
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/@media \(prefers-color-scheme: dark\) \{ :root:not\(\[data-theme="light"\]\) \{[\s\S]*?\} \}/, "")
    .replace(/:root\[data-theme="dark"\] \{[\s\S]*?\}/, "");
  const scope = (css: string): string => {
    let out = "", i = 0;
    while (i < css.length) {
      const open = css.indexOf("{", i);
      if (open < 0) break;
      const head = css.slice(i, open).trim();
      let depth = 1, j = open + 1;
      while (depth) { if (css[j] === "{") depth++; else if (css[j] === "}") depth--; j++; }
      const inner = css.slice(open + 1, j - 1);
      if (head.startsWith("@media")) out += `${head} { ${scope(inner)} }\n`;
      else {
        const sels = head.split(/,(?![^(]*\))/).map((s) => s.trim())
          .filter((s) => !/^(html|body)\b/.test(s) && !/^\.(bar|wrap|theme|brand)\b/.test(s) && !s.startsWith(".bar "));
        const scoped = sels.map((s) => (s === ":root" ? ".atlas" : `.atlas ${s}`));
        if (scoped.length) out += `${scoped.join(", ")} {${inner}}\n`;
      }
      i = j;
    }
    return out;
  };
  const css = scope(css0)
    .replace(/--display: "Grandstander"/, '--display: "Grandstander Variable"')
    .replace(/\.atlas \{([^}]*)--paper: #f5f7fb; --sheet: #ffffff; --ink: #18203a; --muted: #5a6382; --rule: #dde2ee;/,
      ".atlas {$1--sheet: var(--color-white, #fff); --ink: var(--color-slate-900, #0f172a); --muted: var(--color-slate-600, #475569); --rule: var(--color-slate-200, #e2e8f0);")
    + `.atlas { color: var(--ink); display: grid; gap: 0; }
.atlas .hero { padding-block: 8px 28px; }
.atlas section:first-of-type { border-top: 0; }
.atlas .steps { list-style: none; margin: 0; padding: 0; counter-reset: s; display: grid; grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr)); gap: 14px; }
.atlas .steps li { counter-increment: s; padding: 16px 18px; display: grid; grid-template-columns: 2.4rem 1fr; gap: 4px 12px; align-content: start; }
.atlas .steps li::before { content: counter(s); grid-row: span 3; font-family: var(--display); font-weight: 800; font-size: 1.7rem; color: var(--pen); line-height: 1; }
.atlas .steps h3 { font-size: 1.08rem; }
.atlas .steps p { font-size: 0.95rem; color: var(--muted); }
.atlas .steps .fig { font-family: var(--display); font-weight: 800; font-size: 1.15rem; color: var(--ink); }
.atlas .steps li:last-child:nth-child(3n + 1) { grid-column: 1 / -1; }
.atlas .owns { grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr)); }
.atlas .prek { align-content: start; }
.atlas .cta { display: flex; flex-wrap: wrap; gap: 10px; }
.atlas .cta a { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 999px; font-weight: 700; text-decoration: none; border: 1.5px solid var(--ink); }
.atlas .cta a.go { background: var(--ink); color: var(--sheet); }
html.dark .atlas {
  --pen: #ff6b5e; --marker-soft: rgba(246, 205, 60, 0.28);
  --own: #6f8cff; --xw: #2fc29f; --cc: #36507f; --none: #1b2440; --none-edge: #ff6b5e;
  --good: #2fc29f; --part: #f2bd3a; --miss: #ff6b5e;
  --k-same: #2f3b5c; --k-edited: #5d7fd6; --k-moved: #f2bd3a; --k-new: #ff6b5e;
}
`;

  const BLOG_DATA = DATA.map((d) => ({ ...d, notable: plain(d.notable), next: plain(d.next), site: sitePath(d.id), file: undefined }));
  const OWN_ROWS = OWN_FIT.reduce((a, r) => a + r[4], 0);
  const XW_ROWS = PASSES.at(-1)![2];
  const NEXT_PUBLIC = [
    ["Pre-K for Texas, Florida and Virginia", "43 states and DC already have pre-K in their own codes; these three still use Head Start's preschool goals"],
    ["New standards as they're adopted", "Utah and Kentucky for 2027–28, North Carolina for 2028–29, each once its text is published"],
    ["Probability in grades 1–2", "Puerto Rico asks for it; nothing below grade 3 yet"],
    ["Sheets in Spanish", "for Puerto Rico's standards and dual-language classrooms"],
    ["More curricula", "Bridges, Zearn, Into Math and Everyday Mathematics, by how many teachers use them"],
  ];
  const sources = RESOURCES.filter(([h]) => h !== "In this skill").map(([h, items]) => `
  <div class="res"><h3>${h}</h3><ul>${items.map(([t, u, d]) => `<li><a href="${esc(u)}" rel="noopener">${esc(t)}</a><span>${esc(d)}</span></li>`).join("")}</ul></div>`).join("");
  const curPublic = curBars.replace(/<a href="data\/curricula\/[^"]*">(\d+ units)<\/a>/g, "$1 mapped");
  const topicPublic = plain(topicRows).replace(/<span class="status">\(?\[?pre-k\.md\]?\)?<\/span>/g, "").replace(/\s*\(pre-k\.md\)/g, "");

  const body0 = `<style>${css}</style>
<article class="atlas">
<header class="hero">
  <div>
    <span class="eyebrow">Mathness! blog · ${AS_OF}</span>
    <h1>How we matched every state's math standards, <span class="hl">sheet by sheet</span></h1>
    <p class="lede">“Common Core aligned” is where most worksheet sites stop. But ${COUNT("own") + COUNT("xw")} states teach from standards of their own, with their own codes, their own wording and topics Common Core never asks for, like coins in kindergarten. Here is how we gave every state its own pages, wrote a sheet for every standard, and checked that each sheet practises what its standard asks.</p>
    <span class="stamp">✓ checked against each state's own documents</span>
  </div>
  <div class="card report" aria-label="Headline figures">
    ${[
      [fmt(XW_ROWS), `of ${fmt(XW_ROWS)} state rows fit their sheets`, "every row that differs from Common Core in the first 38 crosswalks; North Carolina 2028–29 is under review"],
      [fmt(OWN_ROWS), `of ${fmt(OWN_ROWS)} rows fit in Texas, Florida, Virginia and Maryland`, "K–5, the four states with standards all their own"],
      ["10,241", "standards, each with a sheet", "Common Core, 4 state frameworks and 54 state editions"],
      ["267", "skills, pre-K to grade 5", "each a sheet, an answer key laid out like it, and a guide for grown-ups"],
    ].map(([n, b, s]) => `<div class="score"><span class="ring"><svg viewBox="0 0 120 70" aria-hidden="true"><path d="M8 37c0-17 25-30 54-30s52 12 52 28c0 18-24 29-55 29C29 64 7 54 9 33" fill="none" stroke="var(--pen)" stroke-width="2.4" stroke-linecap="round"/></svg>${n}</span><b>${b}</b><small>${s}</small></div>`).join("")}
  </div>
</header>

<section id="how">
  <div class="head"><span class="eyebrow">How we did it</span><h2>Seven steps, every state</h2></div>
  <ol class="steps">
    <li class="card"><h3>One catalogue of sheets</h3><p>Every skill is written once. Each state's standards are a view over that catalogue: the same sheet prints Texas's code in Texas and Maryland's in Maryland, at the grade that state teaches it.</p><span class="fig">267 skills</span></li>
    <li class="card"><h3>Read each state's own documents</h3><p>Not summaries: the standards each state adopted, from its own department of education, with the official title, the year, how its codes work and when the next revision is due.</p><span class="fig">${ROWS.length} jurisdictions</span></li>
    <li class="card"><h3>Map every standard</h3><p>Each state standard is matched to Common Core as the same, edited, moved from another grade, or new. Texas, Florida, Virginia and Maryland, the furthest from Common Core, are modelled in full.</p><span class="fig">6,328 rows in 39 crosswalks</span></li>
    <li class="card"><h3>Write what's missing</h3><p>Where a state asks for something Common Core doesn't, we wrote the sheet: coins in kindergarten, thermometers, mean, median and mode in grade 5, saving goals.</p><span class="fig">106 sheets for state-only content</span></li>
    <li class="card"><h3>Check the fit, row by row</h3><p>A sheet existing isn't a sheet fitting. Every state row that differs from Common Core was read against everything its sheets show across 40 versions of each sheet, then rated good, partial or mismatch. We fixed what fell short and reviewed the changed rows again.</p><span class="fig">13 passes and a fresh review</span></li>
    <li class="card"><h3>Check the facts</h3><p>Every state's title, adoption year and notes were checked against primary sources: board minutes, state rules, the agency's own pages. That check corrected 26 of 57 sets and found an adoption the same day it happened.</p><span class="fig">Primary sources only</span></li>
    <li class="card"><h3>Keep watching</h3><p>Standards change. Five states' 2027–28 standards and North Carolina's 2028–29 are already in, beside the ones in classrooms now, and the next revisions are on a watch list.</p><span class="fig">6 next editions</span></li>
  </ol>
</section>

${/<section id="share">[\s\S]*?<\/section>/.exec(html)![0]
  .replace("How each student's state is modelled", "Where students are")
  .replace("<span class=\"eyebrow\">Where students are</span>", "<span class=\"eyebrow\">Who it reaches</span>")
  .replace("by how Mathness shows their state's standards", "by how their state's standards appear on Mathness")}

<section id="map">
  <div class="head"><span class="eyebrow">The map</span><h2>Find your state</h2>
  <p class="lede2">Choose a state for its standards, its codes, how far it sits from Common Core, and links to its worksheets and its official document. A dashed yellow edge marks a state whose next standards (2027–28, or 2028–29 for North Carolina) are already on Mathness.</p></div>
  ${/<div class="mapgrid">[\s\S]*?<\/aside>\n  <\/div>/.exec(html)![0]}
</section>

${/<section id="fit">[\s\S]*?<\/section>/.exec(html)![0]
  .replace("Every crosswalk row, read against its sheets", "Every state row, read against its sheets")
  .replace(/<p class="lede2">A sheet existing[\s\S]*?<\/p><\/div>/, `<p class="lede2">Coverage means a sheet exists for a standard. Fit means the sheet practises what the standard asks, at its grade. Each review read a state's wording against every section its sheets show, across 40 versions of each sheet. Each pass linked better sheets or added the missing activity; the changed rows were then reviewed again. Halfway, a fresh review started from scratch, without the earlier verdicts, and found the step-by-step reviews had grown too generous, so the bar went up for every pass after it. North Carolina's 2028–29 crosswalk, added on 2 October, had its first review (225 good, 93 partial, 4 mismatch of 322 rows); its fix passes followed, and their final tally isn't in yet.</p></div>`)
  .replace("Every row of Texas, Florida, Virginia and Maryland, reviewed the same way. The first reviews saw only each sheet's topic; later ones saw every section.", "Every K–5 row of Texas, Florida, Virginia and Maryland, reviewed the same way. The first reviews saw each sheet's topic; later ones saw every section of every sheet.")}

${/<section id="distance">[\s\S]*?<\/section>/.exec(html)![0]
  .replace("Each crosswalked state's K–5 standards by kind, from the research files, sorted by the share that differs from Common Core.", "Each state's K–5 standards by kind, sorted by the share that differs from Common Core. Choose one to see it on the map.")}

${/<section id="beyond">[\s\S]*?<\/section>/.exec(html)![0]
  .replace(/<tbody>[\s\S]*<\/tbody>/, `<tbody>${topicPublic}</tbody>`)
  .replace("What the state research turned up, where it appears, and whether a sheet practises it.", "What reading every state's standards turned up, where it appears, and whether a sheet practises it.")
  .replace(/<th>Mathness<\/th>/, "<th>On Mathness</th>")}

${/<section id="prek">[\s\S]*?<\/section>/.exec(html)![0]
  .replace(/ Data: <a href="data\/prek\/">data\/prek<\/a>\./, "")
  .replace("Pre-K sheets follow", "Our pre-K sheets follow")}

${/<section id="curricula">[\s\S]*?<\/section>/.exec(html)![0]
  .replace(/<div class="card cbars">[\s\S]*?<\/div>\n<\/section>/, `<div class="card cbars">${curPublic}</div>\n<p class="muted" style="font-size:.88rem">Program names identify the programs only. Mathness is not affiliated with, sponsored or endorsed by any of their publishers.</p>\n</section>`)
  .replace("Blue is mapped: each unit links the sheets for the standards it teaches; only unit numbers and titles are shown, and no curriculum name ever prints.", "Blue is mapped: each unit links the sheets for the standards it teaches, in the worksheet maker.")}

<section id="ahead">
  <div class="head"><span class="eyebrow">What's changing</span><h2>New standards already on the way</h2></div>
  <ol class="tlwrap">${timeline.replaceAll("In Mathness.", "On Mathness.")}</ol>
  <div class="head"><h3>What we're doing next</h3></div>
  <ol class="open">${NEXT_PUBLIC.map(([t, d]) => `<li class="card"><b>${esc(t)}</b><span>${esc(d)}</span></li>`).join("")}</ol>
</section>

<section id="sources">
  <div class="head"><span class="eyebrow">Sources</span><h2>Where everything comes from</h2>
  <p class="lede2">Each state's own document is linked from its card on the map.</p></div>
  <div class="resgrid">${sources}</div>
  <div class="notes"><ul>
    <li>Every summary on Mathness is in our own words; standards are cited by their codes. Where a state publishes no crosswalk to Common Core, the mapping is our judgement from the texts, and the site says so.</li>
    <li>Titles and adoption years were checked against each state's primary sources on ${AS_OF}.</li>
    <li>Enrollment weights the picture; it isn't a count of Mathness users. Curriculum use counts teachers, not students.</li>
    <li>Flags are simplified drawings made for Mathness, not official artwork.</li>
  </ul></div>
  <div class="cta"><a class="go" href="/#by-grade">Browse worksheets by grade</a><a href="/maker/">Make your own sheet</a></div>
  <p class="muted" style="font-size:.84rem">Common Core State Standards © Copyright 2010. National Governors Association Center for Best Practices and Council of Chief State School Officers. All rights reserved. Each state's standards belong to its education agency. Mathness is not affiliated with, sponsored or endorsed by any state agency or publisher named here.</p>
</section>
</article>
<script>(() => {
const A = document.querySelector(".atlas");
const DATA = ${JSON.stringify(BLOG_DATA).replace(/</g, "\\u003c")};
const LABEL = ${JSON.stringify({ own: "Own set", xw: "Crosswalk", cc: "Common Core codes", none: "Not yet" })};
const NEXT = ${JSON.stringify(Object.fromEntries(Object.entries(NEXT_IDS).map(([k, v]) => [k, `/${slugify(NAMES[k])}-${NEXT_YEAR[v] ?? "2027-28"}/`])))};
const byId = Object.fromEntries(DATA.map((d) => [d.id, d]));
const flag = (d, cls) => d.flag ? '<svg class="' + cls + '" viewBox="0 0 30 20" aria-hidden="true">' + d.flag + "</svg>" : '<span class="' + cls + ' badge" aria-hidden="true">' + (d.id === "DoDEA" ? "DD" : d.id) + "</span>";
const fmt = (n) => n == null ? "" : n.toLocaleString("en-US");
const kinds = (k) => { if (!k) return "";
  return '<span class="kbar">' + ["same", "edited", "moved", "new"].map((x) => k[x] ? '<i class="k-' + x + '" style="flex:' + k[x] + '"></i>' : "").join("") + "</span>"
    + '<span class="kpct">' + k.same + " same · " + k.edited + " edited · " + k.moved + " moved · " + k.new + " new</span>"; };
const detail = A.querySelector("#detail");
function show(id, scroll) {
  const d = byId[id]; if (!d) return;
  A.querySelectorAll(".st").forEach((p) => p.classList.toggle("sel", p.dataset.id === id));
  const nextHtml = d.next ? '<div class="next-box"><b>Next:</b> ' + d.next + (d.nextKinds ? '<div style="margin-top:8px">' + kinds(d.nextKinds) + "</div>" : "") + (NEXT[d.id] ? ' <a href="' + NEXT[d.id] + '">Its ' + NEXT[d.id].slice(-8, -1).replace("-", "–") + ' pages</a>' : "") + "</div>" : "";
  detail.innerHTML =
    '<div class="dh">' + flag(d, "bigflag") + '<div><h3>' + d.name + '</h3><span class="tag t-' + d.model + '">' + LABEL[d.model] + "</span></div></div>"
    + '<dl class="dl"><dt>Standards</dt><dd>' + d.title + '</dd><dt>Adopted</dt><dd class="mono">' + d.year + "</dd>"
    + (d.notable ? "<dt>Beyond CCSS</dt><dd>" + d.notable + "</dd>" : "")
    + (d.kinds ? "<dt>Rows</dt><dd>" + kinds(d.kinds) + "</dd>" : "")
    + (d.enroll ? '<dt>Students</dt><dd class="mono">' + fmt(d.enroll) + " (fall 2023)</dd>" : "") + "</dl>"
    + nextHtml
    + '<div class="links">' + (d.site ? '<a href="' + d.site + '"><b>' + (d.id === "GU" ? "Common Core worksheets" : d.name + " worksheets") + " →</b></a>" : "") + (d.doc ? '<a href="' + d.doc + '" rel="noopener">Official standards ↗</a>' : "") + "</div>";
  if (scroll && innerWidth < 900) detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
A.querySelectorAll(".st, .ext, .drow").forEach((el) => {
  el.addEventListener("click", () => { show(el.dataset.id, true); if (el.classList.contains("drow")) A.querySelector("#map").scrollIntoView({ behavior: "smooth" }); });
  el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); el.click(); } });
});
A.querySelectorAll(".legend button").forEach((b) => b.addEventListener("click", () => {
  A.querySelectorAll(".legend button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
  const f = b.dataset.f;
  A.querySelectorAll(".st").forEach((p) => {
    const d = byId[p.dataset.id];
    p.classList.toggle("dim", !(f === "all" || (f === "next" ? !!NEXT[d.id] : d.model === f)));
  });
}));
const start = location.hash.slice(1).toUpperCase();
show(byId[start] ? start : "TX");
})();</script>`;

  // Class names the site already uses (the sheets' `.card`, `.stack`, `.stamp`; Tailwind's `ring`)
  // get an `at-` prefix, in class attributes and in the scoped CSS.
  const CLASH = /^(card|ring|stack|stamp)$/;
  const body = body0
    .replace(/class="([^"]*)"/g, (_, c: string) => `class="${c.split(" ").map((t) => (CLASH.test(t) ? `at-${t}` : t)).join(" ")}"`)
    .replace(/\.(card|ring|stack|stamp)(?![\w-])/g, ".at-$1")
    .replace("every row, a new reviewer", "every row, from scratch")
    // mathness.app's spelling: "color", but its guides say a sheet "practises" a skill.
    .replace(/\bmodelled\b/g, "modeled").replace(/\bjudgement\b/g, "judgment")
    .replace(/\bcolour(s|ed)?\b/g, "color$1").replace(/\bColour\b/g, "Color");
  const out = `// Generated by the us-math-standards skill's scripts/atlas/build.ts --blog (zkmake/skills); rebuild there,
// don't edit here. The standards atlas as of ${AS_OF}, retold for the blog.
export const STANDARDS_POST = {
  slug: ${JSON.stringify(SLUG)},
  title: "How we matched every state's math standards",
  about: "How Mathness! gave every state its own worksheet pages: reading each state's standards, mapping 6,328 rows, writing sheets for what states add, and checking each fit.",
  date: "2026-10-01",
  body: ${JSON.stringify(body)},
};
`;
  writeFileSync(process.argv[bl + 1], out);
  // In the app's own format, so a rebuild with no changes leaves no diff.
  Bun.spawnSync(["npx", "oxfmt", process.argv[bl + 1]], { cwd: dirname(process.argv[bl + 1]) });
  console.log(`blog module: ${process.argv[bl + 1]} (${(out.length / 1024).toFixed(0)} KB)`);
}
console.log(`standards-atlas.html: ${ROWS.length} jurisdictions, ${xwSorted.length} crosswalk bars, ${(html.length / 1024).toFixed(0)} KB`);
