# Building a state crosswalk

A **crosswalk** maps every K–5 standard of one state, in the state's own code, to the Common Core codes it **carries** and the sheets for anything it **moved or added**. It lets one skill catalogue serve a state without writing a new set from scratch. Mathness built 38 (33 states plus five next-year editions), all of them on 2026-10-01: 6,006 rows in the app, after lettered sub-parts that restate Common Core were folded. Of the first 37 crosswalks' 5,856 app rows, 1,479 differ from Common Core or link another grade's sheet. Research files: one TSV per state, its rows followed by a long `#` comment block, turned into data by a generator.

## 1. Research the state (the TSV)

Start from [assets/crosswalk-template.tsv](../assets/crosswalk-template.tsv). One row per K–5 standard in the state's document order:

| Column | Meaning |
| --- | --- |
| `state_code` | the code exactly as the state writes it (`K.N.1.3`, `NY-K.CC.4`, `M.3.18`, `CC.2.4.3.A.3`) |
| `grade` | K–5 |
| `ccss` | Common Core codes whose content the row carries, comma-separated; may be another grade's |
| `kind` | `same` (Common Core's standard, any wording), `edited` (same standard, changed scope or detail), `moved` (Common Core content from another grade, or split/merged), `new` (no Common Core match) |
| `summary` | your own plain-language summary; required unless `same` |

Those 37 crosswalks' research files had 6,024 rows before folding: 4,546 `same`, 998 `edited`, 246 `moved`, 234 `new`.

The comment block (`#` lines after the rows) is where the research lives. Keep these sections in every file; future maintainers depend on them:

- **SOURCES (fetched YYYY-MM-DD)**: every document with its exact URL, publisher, adoption and implementation dates, and the agency page that says whether a revision is pending. Note mirrors and why (several agency sites, such as azed.gov, return a Cloudflare 403 to scripts; read the same PDF through a `https://web.archive.org/web/<timestamp>id_/<url>` copy).
- **Whether an official crosswalk exists.** Most states publish none (Oklahoma repealed Common Core in 2014 and publishes no crosswalk; Tennessee, Minnesota and South Dakota publish none). Then say plainly: "every ccss/kind value here is a judgement against the CCSS K–5 text."
- **STRANDS / HOW CODES ARE WRITTEN**: domain names and letters, code grammar with examples, how lettered parts are numbered, document typos ("3.GM 1.1" printed for 3.GM.1.1), row counts per grade, practice standards skipped.
- **CCSS STANDARDS THE STATE DROPPED**: Common Core content no row covers, often because it moved to grade 6 (Oklahoma drops all grade 5 fraction multiplication and division, and symmetry). A sheet mapped to a dropped standard is still a fine sheet, but not this state's grade-level work.
- **NOTABLE NON-CCSS CONTENT**: what the state adds or teaches earlier, by code.
- **UNCERTAIN / JUDGEMENT CALLS**: each loose mapping and why it was chosen.

Rules while mapping:

- Map to the content, never the code's look. **Many states' codes look like Common Core's but mean other content**: Tennessee K.MD.B.3 is coins; Alaska 3.MD.4 is Common Core's 3.MD.B.3; Wisconsin M.K.CC.B.6 is K.CC.B.5; Missouri, Louisiana 2025, Oregon, North Dakota, New Jersey, Kansas, Arizona and South Dakota all renumber inside Common Core-shaped codes. Iowa inserts its own rows marked `IA` (`K.CC.IA.A.1`). Read every row.
- Draft fast, then judge: a text-similarity pass against the Common Core text (≥ 0.9 → `same`) leaves the rest for a careful read.
- Validate before generating: unique codes; grade in K–5; `kind` in the enum; a summary on every non-`same` row (≤ 20 words); `new` rows carry no codes; `moved` rows reference another grade; `same` and `edited` rows include a same-grade code; short codes (`3.OA.1`) expanded to full (`3.OA.A.1`); and print the Common Core K–5 codes no row uses (the state's dropped list).
- Lettered parts that restate Common Core's parts fold into their standard; separately coded splits stay as rows (Arizona 1.MD.B.3a time / 1.MD.B.3b coins).
- One row may carry several codes from several grades; content more than one grade away from the row is `moved`.
- A row past K–5 Common Core (grade 6+ content such as Oklahoma's mean/median/mode, variables and inequalities) is `new`: no K–5 sheet carries it.
- Watch for adopted-but-not-yet-required editions and the date each takes effect; model them as a separate edition (§4).

## 2. Turn it into data

Each row becomes `[code, ccss, summary?, from?, grade?, domain?]`:

- `ccss`: the carried codes, from the TSV (empty for `moved` and `new`). A row with no summary of its own borrows the summary of its first `ccss` code, so that code must exist.
- `from`: sheet codes that serve content the row moved or added: Common Core codes for `moved` rows (in `from`, not `ccss`, so the Common Core code's own place stays at the row in its own grade: when several rows cite one code, a carrying row outranks a `from` row); for `new` rows, an existing sheet that fits (any skill's own code, from any set: Maryland's grade 1 coin sheet `1.GR.C.6` is linked from 33 of the 38 crosswalks) or a sheet written for the state (§3). Keep these redirections in one override table per state, and links added later by fit reviews in a separate file the generator merges, so regenerating from the TSVs never loses them.
- `grade`: only for codes that don't lead with their grade (Pennsylvania's `CC.2.4.3.A.3` is grade 3).
- `domain`: only for codes that name no domain (Minnesota's numeric `grade.strand.standard.benchmark`; its strand is the domain, and its 2022 kindergarten codes start with `0`: `0.2.4.1`). Otherwise derive the domain from the code's letters, then from the linked Common Core code.
- Strip notes meant for you ("; CCSS grade 6") from summaries before they reach a page.
- Mark every crosswalk row **links-only**: it gets sheets through `ccss` and `from`, never by its own code, because a state's code can equal another set's (Missouri's 5.DS.A.1 is also a Maryland code; New Jersey, Ohio and Massachusetts use Common Core-shaped codes).

Parse codes from any shape: grade = the first `K` or `1`–`5` segment (or the explicit column); domain = the letters after the grade if they name a domain, else the linked code's. Keep a table of new domain names (New Jersey M and DL; Georgia's strands; Washington 2026's Q, R, SR; South Dakota 2026's MF, F; Louisiana 2025's NOF, GL, DM; Minnesota 2022's DP, PR). Index short and prefixed forms for search (`3.OA.1`, `NY-3.OA.1`, `NC.3.OA.1`, `KY.3.OA.1`).

## 3. Sheets for what nothing covers

In order: link an existing sheet that truly fits (any set's) → add an activity to an existing sheet → write a new sheet. A sheet written only for a crosswalked state is filed under the state's code **with its postal prefix** (`OK.5.GM.1.3`, `NJ.4.DL.A.2`, `MN.4.3.3.1`) so it can't collide with another set's code, and its home is that row. Write a sheet several states need once, under one state's code, and cite it from the others. Details: [coverage.md](coverage.md).

## 4. Editions

- **Common Core in the state's own codes or name** (15 in Mathness: Connecticut, Delaware, DC, Illinois, Nevada, New Hampshire, New Mexico, Vermont, Hawaiʻi, Idaho, Maine, California, Michigan, Washington's current set, DoDEA): derive the set from Common Core's; slot any added standard after the one it extends and serve it from an existing sheet (California 2.NBT.7.1 → an estimation sheet; 5.OA.2.1 prime factors → a prime factorisation sheet). See [states/common-core-states.md](states/common-core-states.md).
- **Crosswalked** (38): the rows above, loaded on demand (an app shouldn't download 38 editions to use one; store each edition's row count for pickers before it loads).
- **Next school year's standards** as a separate edition beside the current one, with a `starts` year, its own URL (`/washington-2027-28/`), and hubs linking each other, so teachers can plan ahead. In Mathness as of 2026-10-01: Washington (WA Math 2026), South Dakota (2026), Louisiana (2025 revision), Minnesota (2022) and Hawaiʻi (revision approved June 2026), all required from 2027–28.

## 5. Verify

Tests: every row's codes are real (Common Core, Head Start, or some skill's own code); every row has a sheet; stored counts match; every state page's links and anchors land. Then fit-review the rows that differ from Common Core or link another grade's sheet ([fit-review.md](fit-review.md)). Rows identical to Common Core inherit its sheets; Mathness never fit-reviewed the other 4,377 of its 5,856 app rows separately, which is fine only if the Common Core sheets themselves have been reviewed.

Keep the TSVs, the generator, the override and extra-link tables, and the fit-review dump script **in the repo**. The TSVs ship in this skill's `data/crosswalks/`; Mathness's generator, tables and dump script were never committed ([mathness.md](mathness.md)).
