# Data: reusable standards maps

Product-neutral data from the Mathness research (2026-09-28 to 10-01), so a new product can start from it instead of re-researching. Every summary is in our own words (never the official text); codes are the states'. Check a state's current standards before relying on a file ([../references/landscape.md](../references/landscape.md), watch list), and keep the Common Core notice wherever you publish Common Core codes ([../references/licensing.md](../references/licensing.md)).

## `frameworks/`

Exported from Mathness's `src/standards/*.ts` at 2026-10-01.

| File | Rows | Columns |
| --- | --- | --- |
| `ccss.tsv` | 148 K–5 + 10 Head Start pre-K (`P-MATH 1`–`10`) | `code grade domain domain_name summary` |
| `tx.tsv`, `fl.tsv`, `va.tsv` | 246 / 184 / 72 K–5 (their own pre-K: `prek/`) | `code grade strand strand_name summary ccss_carried ccss_partly_or_moved other_set_codes` |
| `md.tsv` | 156 K–5 + Maryland's own 20 pre-K | same |

`ccss_carried`: Common Core codes (or Head Start goals) whose content the row carries, possibly from another grade. `ccss_partly_or_moved`: codes that only partly cover the row (Texas, Florida, Virginia) or were moved or split into it (Maryland). `other_set_codes`: Mathness sheet ids from other sets (mostly Texas's and Maryland's, some Virginia's and Florida's) that serve the row (e.g. Maryland `K.NOS.A.3` for Texas's counting back); a product without those sets writes that sheet itself, filed under the row's own code; a row with no Common Core code is content Common Core lacks. Mappings for Texas, Florida and Virginia are our judgement (no official crosswalk exists); Maryland's come from MSDE's crosswalks.

## `crosswalks/`

The research files themselves, one per state, as the research agents wrote them on 2026-10-01 (`hi27.tsv` derived from Mathness's data the same night). Each lists its rows first and ends with a `#` comment block: sources with URLs and dates, how codes are written, Common Core standards the state dropped, its additions, and judgement calls (`hi27.tsv` has a short block at the top instead). Columns: `state_code grade ccss kind summary` ([../references/crosswalk.md](../references/crosswalk.md)).

- 33 states plus next editions `la27`, `mn27`, `sd27`, `wa27`, `hi27` and `nc29` (North Carolina 2028–29, researched 2026-10-02 from the State Board's Draft 3 attachment and NCDPI's 2017-to-2026 crosswalk; kinds judged against Common Core, since NCDPI's "New" marks compare with North Carolina's 2017 standards).
- New York, Ohio, Kentucky and New Jersey keep lettered sub-parts as rows here; Mathness folds the ones identical to Common Core.
- Mathness's generated `src/standards/states/<st>.ts` is the final form: it adds the sheets that serve moved and new rows and fit-review links (product-specific), and corrects a few names and years after a 2026-10-01 audit (the state files in `../references/states/` carry the corrected facts).

## `prek/`

Exported from Mathness's `src/standards/states/prek.ts` (app commit 519a14ab, after the pre-K fit review's four passes): the pre-K standards of 42 states and DC, 681 rows in all (Maryland's 20 are in `frameworks/md.tsv`, making 43 states and DC); Texas, Florida and Virginia (21, 23 and 31 rows) from `src/standards/own-prek.ts` (app commit 16913e3f), so 46 states and DC, 756 rows, one file per jurisdiction (`<postal>.tsv`; `hi27`, `la27`, `mn27` and `sd27` reuse their state's), each row mapped to the Head Start goals that practise it (`head_start_goals`) and to other sheets where Head Start has nothing or the row asks for more (`other_sheet_codes`: Maryland's own pre-K codes, kindergarten codes, and lowercase sheet ids such as `pk-measuring` where a Mathness sheet is named alone because its code is shared). Each jurisdiction's document, date and URL: `../references/states/<postal>.md` under Pre-K, `common-core-states.md` for states in Common Core's own codes, or `../references/frameworks.md` for Texas, Florida and Virginia.

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
| `into-math.tsv` | Into Math ©2020, national (modules) | 121 |
| `zearn.tsv` | Zearn Math, 2026 Mission sequence (Missions) | 40 |
| `bridges.tsv` | Bridges in Mathematics, 3rd ed. (2024) | 48 |
| `everyday-math.tsv` | Everyday Mathematics 4 ©2020 | 52 |

`amplify.tsv` lists the codes of the Mathness sheets mapped to each unit (our own reading of the unit topics; Amplify publishes no standards per unit), so some codes are other sets' codes rather than Common Core's. `into-math.tsv`'s K–2 rows are likewise our own reading of the lesson titles (no public tags); grades 3–5 are HMH's. The four added 2026-10-02 were exported from Mathness's `src/curricula/*.ts` (commit 6027778c), whose headers list every source URL.
