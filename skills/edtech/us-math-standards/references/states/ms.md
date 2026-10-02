# Mississippi (MS)

In effect for 2026–27: the 2025 Mississippi College- and Career-Readiness Standards for Mathematics (7 Miss. Admin. Code Part 135), required from 2025–26. They replace the 2016 MS CCRS. Both are Common Core with Common Core's numbering, plus calendar and coin standards. Mathness models the 2025 set as a crosswalk (edition `ms`, 157 rows, `/mississippi/`). No next edition is known.

## Documents
- 2025 standards (Mississippi Department of Education, published by the Secretary of State). K–5 is on pp. 37–84. The document states: "The required year … is 2025-2026."
  - https://www.sos.ms.gov/ACCode/00000554c.pdf
  - Direct downloads are bot-blocked, so it was fetched via https://sos.ms.gov/adminsearch/ACCode/00000554c.pdf
- The same document's appendix, "2016 and 2025 Standards Comparison Guide" (p. 283), lists the K–5 edits:
  - K.CC.1 split into 1a/1b; K.OA.5 split into 5a/5b; 1.MD.3b split into 3b/3c.
  - 4.G.2 adds triangle classification; 5.MD.5b uses a capital B in V = B × h.
- 2016 MS CCRS (effective 2016–17), used for comparison: https://content.schoolinsites.com/api/documents/93041ced7ff243c2ba77779e49bcd7e7.pdf
- No separate official MS-to-Common Core crosswalk exists. MS uses Common Core numbering, so rows were matched code for code and compared by text.

## Codes
- Grade.Domain.Number, with no cluster letter: K.CC.5, 3.OA.7, 1.MD.5c, 2.MD.8b.
- Domains are Common Core's: CC, OA, NBT, NF, MD, G.
- Numbers match Common Core's, so adding the cluster letter gives the Common Core code (3.OA.7 is 3.OA.C.7). The exception is Mississippi's own lettered codes, which are kept as rows: K.CC.1a/1b, K.OA.5a/5b, 1.MD.3a/3b/3c, 1.MD.5a–5d, 2.MD.8a/8b.
- Lettered parts that restate Common Core sub-parts (K.CC.4a–c, 3.NF.3a–d, 5.MD.5a–c) are folded. The app has 13 lettered rows.
- Practice standards are coded K.SMP.1–8 and are skipped.
- Pre-K: own codes, see Pre-K.

## Against Common Core
- 157 K–5 rows (K 24, 1 27, 2 27, 3 25, 4 28, 5 26): 140 same, 10 edited, 4 moved, 3 new. No Common Core K–5 standard is dropped.
- K:
  - Compare written numbers to 20 (K.CC.7; Common Core stops at 10).
  - Model addition and subtraction with all numbers within 10 (K.OA.1).
  - Word problems with the unknown in any position (K.OA.2), beyond Common Core's K problem types.
  - Model real objects by drawing flat shapes and building solids (K.G.5).
- Grade 1:
  - Days of the week (1.MD.3b, new). Months, the year and weeks in a month (1.MD.3c, new).
  - A money cluster, all moved from 2.MD.C.8:
    - 1.MD.5a: the value of all U.S. coins, which the PDF lists as "penny, nickel, dime, quarter, half-dollar, and dollar coins", with ¢ and $ notation.
    - 1.MD.5b: compare coins.
    - 1.MD.5c: count one coin type to $1.
    - 1.MD.5d: trade coins.
- Grade 2:
  - Calendar problems (2.MD.8b, new).
  - Skip-count by 5s from numbers ending in 0 or 5, and by 10s and 100s from any number (2.NBT.2).
- Grade 3:
  - Factors 0–10 for unknowns (3.OA.4).
  - Division without remainders (3.OA.7).
  - Whole-dollar amounts in two-step problems (3.OA.8) and in adding and subtracting within 1,000, including across zeros (3.NBT.2).
- Grade 4: classify triangles as equilateral, isosceles, scalene or right (4.G.2).
- Marked same despite small additions: 3.OA.6, 3.MD.7b, 3.MD.8, 4.NBT.4 (across zeros), 4.NF.1, 4.NF.3b, 5.NBT.1, 5.NBT.7, 5.MD.1.
- Judgment calls (ours):
  - 1.MD.5a–d are marked moved, though they could be read as new.
  - 3.OA.4, 3.OA.7 and 2.NBT.2 are small clarifications marked edited.
  - "kind" is judged against Common Core 2010, not against MS 2016.

## Sheets for state content
- OVR:
  - Calendar rows 1.MD.3b, 1.MD.3c and 2.MD.8b go to Virginia's calendar sheet 1.MG.3. The grade 1 rows also get K.MG.3, "Days and months".
  - Coin rows 1.MD.5a–d go to Maryland's grade 1 coin sheet 1.GR.C.6.
- Fit-review extras:
  - K.CC.7: Texas "counting from any number" (K.5).
  - K.OA.2: 1.OA.A.1.
  - 3.OA.8: Maryland's estimating sums (3.NOS.D.6).
  - 4.G.2: Virginia's sorting triangles (5.MG.3).
- No sheets were written under an MS code.
- Fit review: no partial rows remain.

## Pre-K
- Mississippi Early Learning Standards for Four-Year-Old Children (2018): 18 rows. Mapped 2026-10-01 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.ms`), data in `data/prek/ms.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out, so numbering can skip.
- Source: Mississippi Early Learning Standards for Classrooms Serving Infants through Four-Year-Old Children (2018), four-year-old section: https://www.mdek12.org/sites/default/files/final_infants_through_four-year-old_early_learning_standards_2020.08.21_jg.pdf (returns 403 to curl; open in a browser).
- Codes `M.CC.PK4.1`, `M.OA.PK4.1`, `M.MD.PK4.1`, `M.G.PK4.1`. The document never prints the measurement codes; Mathness follows its own `M.<domain>.PK4.n` pattern for them.
- Domains: CC (6), OA (4), MD (3), G (5).
- 16 rows link Head Start goals, 7 link Maryland pre-K sheets; M.OA.PK4.3 → PK.NOS.D.10 and M.MD.PK4.3 → PK.DS.A.1 only. No later-grade borrowing.

## Uncertain
- Year stamps disagree. editions.ts (year "2025") and the ms.ts header ("2025 …") are right for 2026–27. gen.py `NAMES` ("…(2016)") and the Standards Atlas row (2016) are stale.
- The Board's adoption date for the 2025 set is not recorded in the sources, only the required year, 2025–26.
