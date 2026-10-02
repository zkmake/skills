# Mathness: the reference implementation

Mathness! Math Worksheets (https://mathness.app/, repo `zkMake/edtech-apps`, app `apps-web/mathness-app`) is where everything in this skill was learned. Printable pre-K–5 sheets that look hand-made, each with a key laid out like the sheet and a parent guide; fully client-side; Cloudflare Pages. Read its `AGENTS.md` before changing it; this page is a map for reusing its ideas elsewhere.

## Where each idea lives

| Concept | Path (in `apps-web/mathness-app/`) |
| --- | --- |
| Common Core + Head Start pre-K | `src/standards/ccss.ts` |
| Own frameworks | `src/standards/md-2025.ts`, `tx-teks.ts`, `fl-best.ts`, `va-sol.ts` |
| Sets, places, `skillsOf`, `codeIn`, `mixGrade`, `rowPlace`, loading | `src/standards/sets.ts` |
| Editions (CC-code, crosswalked, next-year) | `src/standards/editions.ts`; crosswalks `src/standards/states/<st>.ts`; state pre-K `states/prek.ts` |
| Standards tests and exception lists | `src/standards/standards.test.ts` (`RANGE_`, `SHARED_`, `MORE_`, `MD_`, `GAP_`, `ART_EXTENSIONS`) |
| Skills, kit (`skillOf`, `withAlternative`, `withSection`, story makers, puzzles) | `src/skills/`, `src/skills/kit*.ts` |
| State-only and shared sheets | `src/skills/md-*.ts`, `tx-*.ts`, `states-shared*.ts`, `states-gaps.ts`, `states-art.ts`, `states-editions.ts` |
| Fit passes | `src/skills/states-fit.ts`, `states-fifth.ts` … `states-thirteenth.ts`, applied by `src/skills/passes.ts` |
| Engine: composer, `section`, rng, recipe, remix code, versions | `src/engine/` |
| Blocks (one way to draw a section), art | `src/blocks/`, `src/art/` |
| Page, marks, print CSS | `src/sheet/` (`sheet.css`, `marks.tsx`, `page.tsx`) |
| Hand-drawn ink (roughjs) | `src/ink/ink.tsx` |
| Exact equation checker | `src/math/evaluate.ts` |
| Parent guides | `src/guides/` |
| Curricula | `src/curricula/` |
| Drills | `src/drills/` |
| Static site: grade, skill, state, pre-K, drill pages, JSON-LD, share cards, PDFs | `src/site/`, `scripts/drill-pages.ts`, `scripts/share-images.ts` |
| Visitor's state guess | `functions/api/region.ts`, `src/builder/region-hint.tsx`, `src/site/your-state.ts` |
| Art audit, measuring, overflow sweep | `scripts/audit.sh`, `scripts/measure.sh`, `scripts/overflow-sweep.ts` (`bun run sweep`) |

**Not in any repo** (as of 2026-10-01): the crosswalk generator `gen.py` (with its `OVR`, `NAMES` and `EXPLICIT` tables and the fit-review links in `extra.tsv`), the fit-review dump test and the link and unlink scripts. They stayed in a session scratchpad the OS may clear. The research TSVs ship with this skill in `data/crosswalks/`, and their comment blocks are distilled into `states/*.md`.

## How it got here (2026)

| Dates | Phase | Outcome |
| --- | --- | --- |
| Jul 29 – Aug 10 | v1: react-pdf, K–8, topic → family → archetype taxonomy, 408 difficulty presets | stalled at 74/76 families, 123/136 topics; replaced |
| Sep 27–28 | rebuild: browser print, roughjs, K–5 Common Core, three hand-made showcase sheets first | all 148 Common Core K–5 standards covered by 149 skills ~2 hours after the standards-first builder landed |
| Sep 28 | standards sets as views; Maryland 2025 (from MSDE crosswalks); Texas, Florida, Virginia (inferred mappings) | every set complete the same day: 190 skills |
| Sep 28–29 | guides, drills, pre-K (Head Start, then Maryland's own) | |
| Sep 29–30 | static site for search: grade, skill, state, pre-K, drill pages, PDFs, share cards, JSON-LD; maker moved to `/maker/` | 1 indexable page → 339 sitemap URLs (~630 pages by Oct 1) |
| Sep 30 – Oct 1 | first fit reviews of the four own sets; range, shared, gap and art sheets | Texas 150 → 209 good of 256 |
| Oct 1 | 52 editions (15 Common Core-code, 37 crosswalks incl. 4 next-year) in ~5 hours, Hawaiʻi 2027–28 that night; 13 fit passes over 1,479 crosswalk rows; 5 more curricula (Eureka, IM, i-Ready, enVision, Go Math!); state pre-K for 5 states, then 8 more late that night (13 plus Maryland); a primary-source audit of every state's title, year and notes (26 of 57 sets corrected; 57 before Hawaiʻi 2027–28 was added) and publisher credits; skills loaded a grade at a time | 1,479 / 0 / 0 crosswalk fit (after two follow-ups to the 13th pass), 1,485 / 0 / 0 once Hawaiʻi 2027–28 was reviewed; 658 / 0 / 0 own-set fit; all three from re-reviews of touched rows after the last fresh reviews (1,361 / 116 / 2 and 617 / 41 / 0) |
| Oct 2 | the U.S. Virgin Islands as a Common Core-code edition (VISA 2021), the first territory served; state pre-K for 30 more states and DC (44 jurisdictions); North Carolina 2028–29 (`nc29`, 322 objectives) with two fit passes; "Which is more likely?" for grades 1–2; the atlas as a blog post on mathness.app | North Carolina 2028–29: 225 / 93 / 4 first, 316 / 6 / 0 in a second fresh review, 322 / 0 / 0 after the last six; 10,238 standards |

Numbers on 2026-10-02 (commit 1206bc4f): 267 skills (PK 20, K 35, 1 37, 2 37, 3 45, 4 48, 5 45); 60 sets (55 editions, 39 of them crosswalks); 10,396 standards (9,506 K–5 + 890 pre-K), every one with a sheet; 106 set-only sheets; 10 curricula (591 units; Into Math, Zearn, Bridges and Everyday Mathematics 4 added 2026-10-02); 160 drills in 47 families. Mathness's own `AGENTS.md` status line lagged the code (it said 259 skills); count from code when you report.

## Decisions worth copying

- Summaries in our own words; codes never quoted; the Common Core notice in the footer.
- Sets are views over one catalogue keyed by Common Core codes; content Common Core lacks carries its own set's code.
- Every standard in every set has a sheet, enforced by a test, before calling a set "supported".
- Fit is reviewed, not assumed; fresh full reviews periodically.
- One renderer for screen and print; no PDF library; site PDFs printed by Chrome at build time.
- Curricula: nominative use only, never printed.
- The data that grows (standards, curricula, guides, drill catalogue) sits outside the code-size budget; code is capped per part (core, maker UI, site) so growth can't be dodged by moving code around.
- Next year's standards ship beside this year's as their own edition.
