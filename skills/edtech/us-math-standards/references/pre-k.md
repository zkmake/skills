# Pre-K: frameworks and read-aloud sheets

Common Core starts at kindergarten, so pre-K needs its own framework and its own sheet design. Mathness added a Pre-K grade on 2026-09-29 (12 Head Start skills), then Maryland's own pre-K (8 more Maryland-only skills), then thirteen more states' own pre-K codes on 2026-10-01 (five from their math standards, eight from their early-learning standards). A state's mapped rows replace Head Start's 10 goals in its set.

## Which framework each set shows

| Set | Pre-K framework | State |
| --- | --- | --- |
| Common Core, and every state without its own mapping | Head Start Early Learning Outcomes Framework (2015), preschool math, P-MATH 1–10 ([frameworks.md](frameworks.md)) | national default |
| Maryland MCCRS (2025) | Maryland's own pre-K inside the 2025 math standards: 20 standards `PK.NOS`, `PK.AT`, `PK.GR`, `PK.DS`, from MSDE's PreK crosswalk (Nov 2025) and PreK Standard Companion Guide (Jul 2026) | mapped |
| New York | NYS Next Generation Mathematics Learning Standards (2017): 14 rows, `NY-PK.CC.1` | mapped |
| Massachusetts | 2017 Massachusetts Curriculum Framework for Mathematics: 13 rows, `PK.CC.A.1` | mapped |
| Oklahoma | Oklahoma Academic Standards for Mathematics (2022): 16 rows, `PK.N.1.1` | mapped |
| Colorado | Colorado Academic Standards for Mathematics (2020), one row per indicator: 25 rows, `P.CC.A.1` | mapped |
| Pennsylvania | PA Core Standards for Mathematics: 8 rows, `CC.2.1.PreK.A.1` | mapped |
| Alabama | Alabama's Standards for Early Learning and Development (2023), older preschooler: 36 rows, `MAT1aOP-1` | mapped |
| Georgia | Georgia Early Learning and Development Standards, 48–60 months (2026): 32 rows, `CD-MA1.4a` | mapped |
| Mississippi | Mississippi Early Learning Standards for Four-Year-Old Children (2018): 18 rows, `M.CC.PK4.1` | mapped |
| North Carolina | North Carolina Foundations for Early Learning and Development (2013), older preschooler: 23 rows, `CD-10n` | mapped |
| New Jersey | New Jersey Preschool Teaching and Learning Standards (2014): 14 rows, `4.1.1` | mapped |
| Ohio | Ohio's Early Learning and Development Standards (2022): 10 rows, `MA.1.a` | mapped |
| Tennessee | Tennessee Early Learning Developmental Standards for Four-Year-Olds (2018): 21 rows, `PK.CC.A.1` | mapped |
| West Virginia | West Virginia Pre-K Standards, Policy 2520.15 (2025): 19 rows, `M.PK.1` | mapped |
| Texas | Prekindergarten Guidelines (2022; revision under review) | shows Head Start; "not mapped yet" |
| Florida | Early Learning and Developmental Standards, 4 years to kindergarten (2017) | shows Head Start; "not mapped yet" |
| Virginia | Early Learning and Development Standards (2021) | shows Head Start; "not mapped yet" |

Every state has early-learning guidelines somewhere (often birth-to-5, outside the math standards); the states worth mapping first are the ones that put pre-K **inside their math standards** (Maryland, New York, Massachusetts, Oklahoma, Colorado, Pennsylvania), since that's where a teacher looks; next, states whose early-learning standards have a math domain with indicators a sheet can practise (Alabama, Georgia, Mississippi, North Carolina, New Jersey, Ohio, Tennessee, West Virginia).

**Labels**: name pre-K's framework, not the set ("Head Start P-MATH 3" beside a state code; "Pre-K sheets follow Head Start's Early Learning Outcomes Framework (2015)… Texas's Prekindergarten Guidelines (2022) aren't mapped yet"). Head Start has no domain codes: show goal ranges ("P-MATH 1–5"). Curricula have no pre-K units.

## Add a state's pre-K

1. Find the pre-K section of the state's math standards, else its early-learning standards. Record the document, the age band you map (four-year-olds, older preschooler, 48–60 months), its date and URL in `states/<postal>.md` under `## Pre-K`.
2. Write `data/prek/<postal>.tsv` (`code domain domain_name summary head_start_goals other_sheet_codes`), one row per math indicator, summaries in your own words. Link the Head Start goals whose sheets practise the row first; then Maryland's eight extras for what Head Start lacks (PK.NOS.A.2, PK.NOS.B.6, PK.NOS.D.10, PK.AT.A.2, PK.GR.A.1, PK.GR.B.5, PK.DS.A.1, PK.DS.A.2); else a kindergarten or grade 1 sheet from any set (zero; first and last; coins; measuring with units). Leave out what the state says begins in kindergarten. Rows are links-only, like crosswalk rows. Every row links a sheet (SKILL.md rule 6): where the wording asks for what no worksheet can do (whole-body movement), link the sheet for its math and let the fit review set the rest aside ([fit-review.md](fit-review.md)). Watch moves: Maryland moved pre-K position words to K.GR.B.4, so the positions sheet sits at kindergarten in Maryland's view.
3. Done when every row links a real sheet (test), the total standards count changes by rows − 10 (the rows replace Head Start's 10 goals in that set), the counts and state lists in this file, [landscape.md](landscape.md) and [data/README.md](../data/README.md) are updated, and the atlas is rebuilt (its pre-K state list, `prekIds` in `scripts/atlas/build.ts`, is written by hand).

## Sheet design for children who can't read yet

A grown-up reads the sheet aloud; the child circles, traces, colours, draws a line or draws.

- **Big and few**: 15pt body, 24pt answer type, 19pt section titles, sections 22pt apart, pictures 80–140pt (objects 28pt or more), four to twelve items a section. (The design study proposed 28pt print and one activity per page; what shipped is several short sections a page.)
- **A picture cue beside every title**: trace, circle, colour, line, draw. The circle cue rings a star, not a number (a number there reads as the section number).
- **Answers are made, not written**: three numbers to circle (the answer and two neighbours, never below 0); tracing before writing numbers alone; matching lines with a dot at each end; dot-to-dot (numbers placed where they have most room, checked for clearance); colour every circle (the key hatches them in red, since print is black-and-white first).
- **Count, don't read**: pictures in loose clusters (fixed spots, the first n used), not rows; comparisons in pairs, not threes (big and small, tall and short, heavier on a pan balance).
- **Levels**: gentle counts to 3, core to 5; stretch scatters objects and asks fewer. (The study proposed 1–5 / 1–10 / 1–20 so stretch meets kindergarten's counting to 20.)
- **Mixes** hold two skills at most. Pond, zoo and space themes dress pre-K. A sheet with lots of spare room ends with the theme's character to colour ("All done? Color me in!"), never on keys.
- **The guide page matters most here**: grown-ups do the teaching at this age.

## The first twelve (Head Start)

Count to 5; count to 10 (circle, colour); trace 0–10; match numbers to groups; putting together and taking away; dot cards 1–5; more or fewer; AB patterns; big and small, long and short; find the shape; above, below, beside; dot-to-dot 1–10. Maryland's eight extras: counting back, one more, parts of 5, making 5, tall and short, solid shapes, sorting, sort and compare.
