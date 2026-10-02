# Data: reusable standards maps

Product-neutral data from the Mathness research (2026-09-28 to 10-01), so a new product can start from it instead of re-researching. Every summary is in our own words (never the official text); codes are the states'. Check a state's current standards before relying on a file ([../references/landscape.md](../references/landscape.md), watch list), and keep the Common Core notice wherever you publish Common Core codes ([../references/licensing.md](../references/licensing.md)).

## `frameworks/`

Exported from Mathness's `src/standards/*.ts` at 2026-10-01.

| File | Rows | Columns |
| --- | --- | --- |
| `ccss.tsv` | 148 K–5 + 10 Head Start pre-K (`P-MATH 1`–`10`) | `code grade domain domain_name summary` |
| `tx.tsv`, `fl.tsv`, `va.tsv` | 246 / 184 / 72 K–5 + Head Start's 10 pre-K | `code grade strand strand_name summary ccss_carried ccss_partly_or_moved other_set_codes` |
| `md.tsv` | 156 K–5 + Maryland's own 20 pre-K | same |

`ccss_carried`: Common Core codes (or Head Start goals) whose content the row carries, possibly from another grade. `ccss_partly_or_moved`: codes that only partly cover the row (Texas, Florida, Virginia) or were moved or split into it (Maryland). `other_set_codes`: Mathness sheet ids from other sets (mostly Texas's and Maryland's, some Virginia's and Florida's) that serve the row (e.g. Maryland `K.NOS.A.3` for Texas's counting back); a product without those sets writes that sheet itself, filed under the row's own code; a row with no Common Core code is content Common Core lacks. Mappings for Texas, Florida and Virginia are our judgement (no official crosswalk exists); Maryland's come from MSDE's crosswalks.

## `crosswalks/`

The research files themselves, one per state, as the research agents wrote them on 2026-10-01 (`hi27.tsv` derived from Mathness's data the same night). Each lists its rows first and ends with a `#` comment block: sources with URLs and dates, how codes are written, Common Core standards the state dropped, its additions, and judgement calls (`hi27.tsv` has a short block at the top instead). Columns: `state_code grade ccss kind summary` ([../references/crosswalk.md](../references/crosswalk.md)).

- 33 states plus next-year editions `la27`, `mn27`, `sd27`, `wa27`, `hi27`.
- New York, Ohio, Kentucky and New Jersey keep lettered sub-parts as rows here; Mathness folds the ones identical to Common Core.
- Mathness's generated `src/standards/states/<st>.ts` is the final form: it adds the sheets that serve moved and new rows and fit-review links (product-specific), and corrects a few names and years after a 2026-10-01 audit (the state files in `../references/states/` carry the corrected facts).

## `prek/`

Exported from Mathness's `src/standards/states/prek.ts`: the pre-K standards of New York (14), Massachusetts (13), Oklahoma (16), Colorado (25), Pennsylvania (8), Alabama (36), Georgia (32), Mississippi (18), North Carolina (23), New Jersey (14), Ohio (10), Tennessee (21) and West Virginia (19), 249 rows, each mapped to the Head Start goals that practise it (`head_start_goals`) and to other sheets' codes where Head Start has nothing (`other_sheet_codes`: mostly Maryland's own pre-K codes, a few kindergarten or grade 1 codes).

## `curricula/`

Unit (or module, topic, chapter) → Common Core standards, as mapped by the method in [../references/curricula.md](../references/curricula.md). Unit numbers and titles are the publishers'; use them for navigation only, with a "not affiliated" note, never on printed pages.

| File | Edition | Units |
| --- | --- | --- |
| `eureka.tsv` | Eureka Math 2015 (modules) | 40 |
| `im.tsv` | Illustrative Mathematics K–5 | 50 |
| `i-ready.tsv` | i-Ready Classroom Mathematics 2024 | 34 |
| `envision.tsv` | enVision Mathematics ©2024 (topics) | 92 |
| `go-math.tsv` | Go Math! ©2015 (chapters) | 71 |
| `amplify.tsv` | Amplify Desmos Math K–5, national | 43 |

`amplify.tsv` lists the codes of the Mathness sheets mapped to each unit (our own reading of the unit topics; Amplify publishes no standards per unit), so some codes are other sets' codes rather than Common Core's.
