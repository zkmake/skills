---
name: us-math-standards
description: "US K–5 math standards for building aligned content (Common Core, every state's own codes and crosswalks, Head Start pre-K, curricula, fit reviews, printable-sheet design), distilled from Mathness."
disable-model-invocation: true
---

# US K–5 math standards

Everything learned building Mathness (mathness.app), a generated worksheet site aligned to Common Core, four own state frameworks, 53 state editions and six curricula, condensed for reuse. Facts are as of **2026-10-01**: standards change every school year, so check the watch list in [references/landscape.md](references/landscape.md) before quoting a state's current set.

## Words used here

- **Set**: one standards framework as a view over your catalogue: grades → domains → standards, each in the set's own code with your own one-line summary. Common Core is one set; each state is another.
- **Own set**: a state framework written from scratch with its own codes and wording (Texas TEKS, Florida B.E.S.T., Virginia SOL, Maryland MCCRS 2025). Modelled in full and fit-reviewed row by row.
- **Crosswalk**: a state's every standard, in its own code, mapped to the Common Core codes it **carries** (same content, maybe another grade) and the sheets for what it **moved** or **added** (`from`). Rows are **links-only**: a row finds sheets through its mapped codes, never by its own code string.
- **Edition**: a derived set: Common Core under a state's name, a crosswalked state, or next school year's standards beside this year's.
- **Home**: the one row a set-only sheet is filed under (its own code), which fixes its grade and place in every set.
- **Coverage**: a sheet exists for a standard (enforced by a test). **Fit**: the sheets practise what the standard asks at its grade (judged by a reviewer): **good**, **partial** (a named part missing, or only a sheet 2+ grades off), **mismatch**.
- **Fresh review**: a fit review of every row with no earlier verdicts, the check on drifting incremental reviews.
- **Pass**: one batch of fit fixes (links, alternatives, sheets) followed by a re-review of only the rows it touched. Mathness numbered its crosswalk passes 1–13; "closed in pass 9" means that pass's re-review found the row good.
- **Alternative**: an activity offered in place of one of a sheet's sections (the seed picks one), adding coverage without lengthening the page.
- **gen.py, OVR, NAMES, EXPLICIT, extra.tsv** (named in the state files): Mathness's crosswalk generator; its per-state table of sheets for moved and new rows; its edition titles; its list of states whose rows carry their grade explicitly; and the links fit reviews added, merged at generation. None is in a repo ([mathness.md](references/mathness.md)).
- **Representation**: what a standard's wording requires beyond its topic: a model, a letter for the unknown, a drawing, an explanation, a unit of measure.

## Rules for every task

1. **Codes plus your own words.** Cite standards by code; describe them in your own plain-language summaries; never reproduce official text. Show the Common Core copyright notice ([references/licensing.md](references/licensing.md)).
2. **One catalogue, many views.** A sheet carries one stable code; every set maps onto the catalogue. Never fork sheets per state.
3. **Print the viewer's set.** A sheet prints the code and grade of the set the teacher chose, because content moves grades between sets.
4. **Map content, never code shapes.** Tennessee's K.MD.B.3 is coins; many states renumber inside Common Core-shaped codes. Read every row.
5. **Mark inferred mappings.** Only Maryland among the own sets publishes an official Common Core crosswalk; most states publish none. Where the mapping is your judgement, record it as such and name the source documents with URLs and fetch dates.
6. **Every standard in every set has a sheet** before you call a set supported, enforced by a test, with no "coming soon".
7. **Coverage is not fit.** At 100% coverage only 881 of Mathness's 1,479 crosswalk rows that differ from Common Core (60%) were good. Fit-review before claiming alignment, and run a fresh review before calling it done.
8. **Read each standard's representation.** A symbols-only sheet for a "use a model" or "draw" standard is partial.
9. **Answers are computed and checked independently**; sheets are black-and-white first and fit one page ([references/worksheet-design.md](references/worksheet-design.md)).
10. **Name curricula by unit number and title only**, in plain text, with a "not affiliated" note, never on anything that prints.
11. **Say what a number counts**: K–5 or with pre-K, all rows or those differing from Common Core, which review. Count from data, not from docs.

## Load the reference for your branch

| Task | Load |
| --- | --- |
| Which standards a state uses; how to model it; what states add beyond Common Core; what's changing | [landscape.md](references/landscape.md), then `references/states/<postal>.md` (lowercase postal code, e.g. `ok.md`; next-year editions inside the state's file; Texas, Florida, Virginia and Maryland in frameworks.md; the Common Core-code jurisdictions, PR and VI in `states/common-core-states.md`) |
| Common Core, Head Start, Texas, Florida, Virginia, Maryland: structure, codes, counts | [frameworks.md](references/frameworks.md) |
| Building or updating a crosswalk for a state | [crosswalk.md](references/crosswalk.md) + the state file + [assets/crosswalk-template.tsv](assets/crosswalk-template.tsv) |
| Data model for many sets; closing a gap; set-only sheets; tests | [coverage.md](references/coverage.md) |
| Fit review: rubric, dump, pass loop, fix ladder | [fit-review.md](references/fit-review.md) + [assets/fit-review-prompt.md](assets/fit-review-prompt.md) |
| Pre-K frameworks and read-aloud sheets | [pre-k.md](references/pre-k.md) |
| Mapping curriculum units; which curricula matter | [curricula.md](references/curricula.md) |
| Designing generated sheets, keys, levels, checks, print | [worksheet-design.md](references/worksheet-design.md) |
| Extending to grades 6–8 | [middle-grades.md](references/middle-grades.md) |
| Licenses, notices, trademarks, state copyright | [licensing.md](references/licensing.md) |
| Site pages, SEO, labelling codes, the visitor's state | [state-pages.md](references/state-pages.md) |
| Competitors and auditing against one | [competitors.md](references/competitors.md) |
| Researching a state: primary sources, sites that block scripts, mirrors, agent prompts, fact-checking, enrollment data, other countries | [research.md](references/research.md) + [assets/crosswalk-research-prompt.md](assets/crosswalk-research-prompt.md), [assets/fact-check-prompt.md](assets/fact-check-prompt.md) |
| Every source URL in one place | [sources.md](references/sources.md) |
| Reusable data: Common Core and the own frameworks with our summaries, the research TSVs behind all 38 crosswalks (33 states + 5 next-year), state pre-K maps, curriculum unit maps (TSV) | [data/README.md](data/README.md) |
| A visual overview to share with people: map, fit passes, distance from Common Core, topics, curricula, watch list | [standards-atlas.html](standards-atlas.html), rebuilt by `bun scripts/atlas/build.ts` after editing `landscape.md`, the state files or `data/` |
| Working in the Mathness repo itself, or reusing its code | [mathness.md](references/mathness.md) |

## Workflows

### A. Align a catalogue to standards from scratch

1. Model Common Core K–5 (148 standards, plus Head Start's 10 pre-K goals if you serve pre-K) as the first set, every row with your own summary. Done when the set has 148 rows by grade and domain and a test checks every code's grade and domain.
2. Give every sheet one stable code and write sheets until every Common Core standard has one, reading each standard's representation. Done when the every-standard-has-a-sheet test passes and each sheet's checks, fit and no-repeat tests pass ([worksheet-design.md](references/worksheet-design.md)).
3. Add sets in order of reach: the four own sets cover ~21% of US public-school students and need state-only sheets; the 33 crosswalked states reach ~53%; Common Core-code editions are nearly free. Done per set when its every-standard test passes.
4. Fit-review, close gaps, fresh-review (workflow C).

### B. Add a state

1. Read `references/states/<postal>.md` and [landscape.md](references/landscape.md): its model (own set, crosswalk, Common Core codes), documents, code grammar, next edition.
2. Fetch the state's own current documents and the agency page that says whether a revision is adopted or pending; compare with the state file and record anything that changed (date, URL).
3. Common Core-code state: derive an edition; slot any added standards after the standard they extend. Crosswalk: fill a research TSV from the template, every row, with its header sections ([crosswalk.md](references/crosswalk.md)); validate; generate. Own set: transcribe every row and map carries and partial covers ([frameworks.md](references/frameworks.md), _Mapping a framework_).
4. Serve rows nothing covers by the gap ladder ([coverage.md](references/coverage.md)), with postal-prefixed codes for crosswalked-state sheets.
5. Done when: every row has a sheet (test), every cited code is real (test), stored counts match, state pages render with the publisher credit, and the rows that differ from Common Core or link another grade's sheet meet workflow C's step 5.

### C. Fit review and close gaps

1. Dump every linked sheet's section titles and instructions across 40 seeds and every level; batch rows (~250 per reviewer) with the Common Core summaries they carry ([fit-review.md](references/fit-review.md)).
2. Run fresh reviewers in parallel with the prompt in [assets/fit-review-prompt.md](assets/fit-review-prompt.md). Done when every row has a verdict in a TSV and the counts add up to the row total.
3. Triage every non-good row down the fix ladder; implement one pass in its own file; render and inspect every new section, sheet and key, several seeds; check worst-case page fill; run tests and a real-browser overflow sweep.
4. Re-review only touched rows with their earlier verdicts and the list of what changed; merge verdicts. Repeat 3–4.
5. Done when a **fresh full review** (no earlier verdicts) shows no mismatches and every remaining partial is listed with what's missing and why it stays open.

### D. Map a curriculum

Follow [curricula.md](references/curricula.md): pin the edition, find lesson-level standard tags, choose a filter that fits the publisher's tagging, expand standards to sheets, record sources, add unit reviews, test. Done when every unit lists real skills of its grade, its review fits a page, and the page carries the "not affiliated" note.

### E. Refresh for a new school year

1. Walk the watch list in [landscape.md](references/landscape.md) and each state agency's standards page; note adoptions, effective dates and new documents.
2. Add newly adopted standards as a next-year edition beside the current one, only once the board's adoption is on record and the agency has published the K–5 text. Id `<postal><yy>`, with one rule for yy kept across editions (Mathness mixed them: `hi27` for 2027–28 by its first year, `nc29` for 2028–29 by its last); research file `<id>.tsv`; a `starts` year; its own URL named for the school year (`/north-carolina-2028-29/`); the two state hubs link each other ([crosswalk.md](references/crosswalk.md) §4, [state-pages.md](references/state-pages.md)). Done when it passes workflow B.
3. Retire an edition once its successor is in classrooms.
4. Update `landscape.md`, the state files and their dates. Done when every jurisdiction's row says which set is in effect this year and where next year's stands.
