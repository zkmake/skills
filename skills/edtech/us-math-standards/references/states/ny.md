# New York (NY)

In effect for 2026–27: New York State Next Generation Mathematics Learning Standards (NGLS, 2017; NYSED crosswalks updated June 2019; instruction began September 2019 in pre-K–2 and September 2022 in grades 3–8, per NYSED's timeline). Mathness models it as a crosswalk in NY's own codes (edition `ny`, 177 rows) with NY's own pre-K codes. No next edition is recorded.

## Documents
- Official P-12 standards (NYSED). Used to confirm codes and sub-parts: https://www.nysed.gov/sites/default/files/programs/standards-instruction/nys-next-generation-mathematics-p-12-standards.pdf
- Official per-grade crosswalks from the 2011 CCLS to the NGLS: https://www.nysed.gov/sites/default/files/programs/curriculum-instruction/nys-math-standards-kindergarten-crosswalk.pdf (also `grade-1` to `grade-5`, same URL pattern). Index page: https://nysed.gov/curriculum-instruction/teachers/next-generation-mathematics-learning-standards-crosswalks
- Implementation timeline (revised January 2023): https://www.nysed.gov/sites/default/files/next-gen-mathematics-instruction-assessment-timeline.pdf
- Publisher: New York State Education Department.
- Common Core comparison: none official. NYSED's crosswalks compare the NGLS with NY's 2011 CCLS, which already added NY content such as coins in 1.MD.3. The research read the NY column of those crosswalks and compared it with the CCSS 2010 text.

## Codes
- Grammar: `NY-<grade>.<domain>.<number><letter?>`, with no cluster letter. Examples: `NY-K.CC.4d`, `NY-1.MD.3b`, `NY-3.NBT.4a`, `NY-4.G.2c`, `NY-5.MD.5a`.
- Domains are Common Core's: CC, OA, NBT, NF, MD, G.
- The `NY-` prefix is part of the official code. Mathness reads the grade and domain from the parts after splitting on `.` and `-`.
- Lettered sub-parts: the research TSV has 218 rows (stems plus sub-parts). The app folds sub-parts that match Common Core into their standard, which leaves 177 rows. Sub-parts NY carved out on its own stay as rows (`NY-K.OA.2a`, `NY-2.OA.1b`, `NY-4.MD.2b`).
- Collisions: none with other Mathness sets, because the prefix keeps NY codes unique.
- Pre-K (prek.ts, from the 2017 NGLS): 14 codes in 4 domains. CC: `NY-PK.CC.1`–`.6`. OA: `NY-PK.OA.1`–`.2`. MD: `NY-PK.MD.1`–`.2`. G: `NY-PK.G.1`–`.4`. Twelve link to Head Start goals (P-MATH n); five link to Maryland pre-K sheets (PK.DS.A.1, PK.DS.A.2, PK.NOS.B.6, PK.GR.A.1, PK.GR.B.5). NY-PK.CC.6 (first/last) links only to Florida MA.K.NSO.1.3; NY-PK.MD.2 only to Maryland sheets.

## Against Common Core
- Rows (TSV, K–5): 218, of which 165 same, 45 edited, 5 moved, 3 new. By grade: K 30, 1 27, 2 33, 3 44, 4 44, 5 40.
- New: ordinal words first–tenth (`NY-K.CC.4d`), simple patterns with objects (`NY-K.OA.6`), exploring coins and recognizing pennies and dimes in K (`NY-K.MD.4`).
- Moved: coins and the cent sign in grade 1 (`NY-1.MD.3b`, `NY-1.MD.3c`: dimes and pennies to 100¢) from 2.MD.C.8. Four-digit place value in grade 3 (`NY-3.NBT.4a/4b`) from 4.NBT.A.2. Polygon names and sorting in grade 3 (`NY-3.G.1`) from 2.G.A.1 plus 3.G.A.1.
- Edited, notable:
  - K counts to 20 for "how many" (`NY-K.CC.4`, `.5a/.5b`).
  - Fluency within 10 in grade 1 (`NY-1.OA.6b`).
  - Grade 2 money is cents only, with no bills and no `$` (`NY-2.MD.8a/8b`).
  - `NY-2.G.1` is polygon vs non-polygon.
  - Two-step problems with a letter for the unknown and checks by rounding (`NY-3.OA.8a/8b`, `NY-4.OA.3a/3b`).
  - Composite rectangle area (`NY-3.MD.7d`).
  - Grade 4 conversions limited to ft/in and km/m/cm (`NY-4.MD.1`).
  - Triangles by angle, inclusive parallelogram and rectangle (`NY-4.G.2a–c`).
  - Order of operations without nested grouping (`NY-5.OA.1`).
- Dropped or narrowed:
  - 2.G.A.1: drawing shapes with given angles or faces.
  - 3.G.A.1: quadrilateral subcategories go to grades 4–5.
  - 4.G.A.2: right triangles as a category.
  - 2.MD.C.8: dollar bills.
  - 5.OA.A.1: brackets and braces.
  - 5.MD.C.5a: the associative clause.
  - K.NBT.A.1: recording each composition.
- Judgement calls (ours, not official):
  - The two grade 1 coin rows and the two grade 3 place-value rows are counted as "moved".
  - `NY-3.G.1` is counted as moved.
  - Added time vocabulary (o'clock, quarter past) and NY Notes that restate CCSS footnotes are counted as "same".

## Sheets for state content
NY predates gen.py's OVR table, so its redirects sit directly in ny.ts:
- Ordinal words: Florida `MA.K.NSO.1.3`.
- K patterns: Maryland `K.AT.B.3`.
- Coins K–1 (`NY-K.MD.4`, `NY-1.MD.3b/3c`): Maryland's coin sheet `1.GR.C.6`, plus 2.MD.C.8 on `NY-1.MD.3c`.
- Four-digit place value: Maryland `3.NOS.A.1`.
- `NY-3.G.1`: 2.G.A.1 and 3.G.A.1.

The fit review (extra.tsv, 20 links) added further sheets:
- Fluency within 10: `MA.K.NSO.3.2`.
- Estimation checks: Maryland `3.NOS.D.6` and Texas `5.3A`.
- Triangles by angle: Virginia `5.MG.3`.
- Letter for the unknown: Virginia `5.PFA.2`.
- Scaled number-line diagrams: Texas `3.5A` and `2.MD.B.6`.

No NY-prefixed sheets. The latest fit verdicts leave no partials for NY.

## Uncertain
- Pre-K rows are not in the TSV. They live only in prek.ts.
- The moved/new labels on coins, four-digit place value and `NY-3.G.1` are research judgements.
