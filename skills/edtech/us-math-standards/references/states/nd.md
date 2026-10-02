# North Dakota (ND)

In effect for 2026–27: North Dakota Mathematics Content Standards K–12 (July 2023, REV2 2024-06-27; implemented 2024–25). These are ND's own standards, not Common Core. Mathness models them as a crosswalk in ND codes (edition `nd`, 165 rows; pre-K in its own codes, see Pre-K). No next edition is recorded.

## Documents
- Standards (ND Department of Public Instruction): https://www.nd.gov/dpi/sites/www/files/documents/Academic%20Support/REV2.2024.06.27%20Math%20Content%20Standards%20Final.pdf
- Official crosswalk from 2017 to 2023. It maps ND 2017 codes, not CCSS: https://www.nd.gov/dpi/sites/www/files/documents/Academic%20Support/2017%20and%202023%20Mathematics%20Standards%20Crosswalk%207.27.23.pdf
- Page (checked 2026-10-01): https://www.nd.gov/dpi/mathematics
- Common Core comparison: no official ND-to-CCSS crosswalk exists. ND's 2017 codes (K.CC.1, …) follow CCSS numbering, so the 2017 crosswalk served as a guide. The final mappings are the research's own reading of the 2023 text against CCSS.

## Codes
- Grammar: `<grade>.<category>.<subcategory>.<number>`. Examples: `K.NO.CC.4`, `1.AR.OA.2`, `3.GM.M.5`, `4.DPS.D.1`, `5.NO.NF.1`.
- Categories (Mathness domain = category), with their subcategories:
  - NO, Number and Operations: CC (Counting and Cardinality), NBT (Base Ten), NF (Fractions).
  - AR, Algebraic Reasoning: OA (Operations and Algebraic Thinking).
  - GM, Geometry and Measurement: G (Geometry), M (Measurement).
  - DPS, Data, Probability, and Statistics: D (Data).
- No lettered sub-parts.
- Skipped: the Math Attributes (K-2.MA.P/C/R, 3-5.MA.*) process standards, and the clarification column.
- Parser notes:
  - The second segment is the category, not a CCSS domain. `K.NO.CC.1` is the K domain NO.
  - Subcategory letters reuse CCSS domain names (CC, NBT, NF, OA), but numbering differs. `2.NO.NF.3` is not about 2.NF; it is about shares getting smaller.
- No collisions with other Mathness sets.

## Against Common Core
- Rows: 165, of which 118 same, 21 edited, 15 moved, 11 new. By grade: K 20, 1 29, 2 28, 3 30, 4 33, 5 25.
- New:
  - Counting backward in K–2 (`K.NO.CC.2`, `1.NO.CC.2`, `2.NO.CC.2`).
  - Subitizing (`K.NO.CC.4`, `1.NO.CC.4`).
  - Repeating and growing patterns (`K.AR.OA.6`, `1.AR.OA.7`).
  - Daily time words (`K.GM.M.2`).
  - Faces of solids (`2.GM.G.2`).
  - Fraction–decimal equivalents and lowest terms (`5.NO.NF.1`).
  - Facts to 12 × 12 (`5.AR.OA.1`).
- Moved earlier:
  - Skip-count by 5s/10s in grade 1 (`1.NO.CC.5`).
  - Make 20 and decompose 20 in grade 1 (`1.AR.OA.2/3`).
  - Coins and the $1 bill in grade 1 (`1.GM.M.4/5`).
  - Shares getting smaller in grade 2 (`2.NO.NF.3`).
  - Numbers to 10,000 in grade 3 (`3.NO.CC.1`, `3.NO.NBT.1`).
  - Lines, angles, parallel/perpendicular and symmetry in grade 3 (`3.GM.G.1/3`).
  - Money word problems with $ and ¢ in grade 3 (`3.GM.M.5`).
- Moved later:
  - Facts to 10 × 10 automatic in grade 4 (`4.AR.OA.1`).
  - Properties of all four operations in grade 4 (`4.AR.OA.2`).
  - Data and choosing a graph in grade 4 (`4.DPS.D.1`).
  - Factors and primes to 100 in grade 5 (`5.AR.OA.4`).
- Dropped or not found:
  - K.G.A.1 positions; K.G.B.5 build/draw shapes.
  - 1.OA.B.3 properties (start in grade 2); 1.OA.D.8 on its own.
  - 2.MD.B.5 length word problems; 2.G.A.2 rows and columns of squares.
  - 5.NF.B.3 fraction as division.
  - Per the crosswalk: 2.NBT.B.7 goes to grade 3 (3.NO.NBT.3), 5.NF.B.7 to 6.NO.O.3, and 5.MD.C.5 to 6.GM.AV.2.
- Narrowed:
  - Decimal division goes to grade 6.
  - 3.MD.D.8 covers rectangles only.
  - K solids are cubes and spheres only.
  - 3.OA.C.7 automaticity is only to 5 × 5 and tens.
- Judgement calls (ours):
  - Make 20 and decompose 20 are counted as moved, though they could be new.
  - `1.GM.G.1/2` name more shapes than CCSS; counted as edited.
  - `4.AR.OA.2` counted as moved from 1.OA.B.3 and 3.OA.B.5.
  - `5.GM.M.2` adds perimeter to fraction-side area (5.NF.B.4).
  - K.NO.CC.1's second sentence (count on from any number) is included, giving K.CC.A.2.

## Sheets for state content
OVR redirects in gen.py:
- Counting back: Maryland `K.NOS.A.3`, `1.NOS.A.1`.
- Subitizing: Maryland `K.NOS.B.8`.
- Patterns: Maryland `K.AT.B.3` (K) and Virginia `1.PFA.1` (grade 1).
- Time words: Virginia `K.MG.3`.
- Coins grade 1 (`1.GM.M.4/5`): Maryland's coin sheet `1.GR.C.6`.
- Faces of solids: Texas `2.8B`.
- Numbers to 10,000 (`3.NO.CC.1`, `3.NO.NBT.1`): Maryland `3.NOS.A.1`.
- Fraction–decimal forms: Virginia `5.NS.1`.
- 12 × 12 facts: Florida `MA.3.NSO.2.4`.
- `2.NO.CC.2` (back from 1,000): the CCSS sheet `2.NBT.A.2`.

Other moved rows serve from their CCSS codes. The fit review added 35 lines of links (extra.tsv), e.g. money problems to Virginia `3.NS.4`, factors to Virginia `5.NS.2`, and fraction-side area to Florida `MA.5.GR.2.1`.

No ND-prefixed sheets. The latest fit verdicts leave no partials.

## Pre-K
- North Dakota Early Learning Standards: Birth to Kindergarten (2018): 10 rows. Mapped 2026-10-02 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.nd`), data in `data/prek/nd.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out.
- Source: https://www.nd.gov/dpi/sites/www/files/documents/Academic%20Support/FINAL%20Early%20Learning%20Standards%207NOV2018.pdf
- Unconfirmed: a search snippet of hhs.nd.gov said the standards are under review for full implementation in fall 2026; the HHS standards pages show only the 2018 document (2026-10-02).
- Domains: CC Counting and Cardinality (5: `P-MATH 1` … `P-MATH 5`); OA Operations and Algebraic Thinking (2: `P-MATH 6` … `P-MATH 7`); M Measurement (1: `P-MATH 8`); G Geometry and Spatial Sense (2: `P-MATH 9` … `P-MATH 10`).
- 10 rows link Head Start goals, 5 link other sheets (0 with no Head Start goal). Borrowed later-grade sheets: P-MATH 4 → MA.K.NSO.1.3.

## Uncertain
- All CCSS mappings are the research's own reading; there is no official ND↔CCSS crosswalk.
- Name variants:
  - editions.ts: "North Dakota Mathematics Content Standards K–12".
  - gen.py header: "North Dakota Mathematics K-12 Standards (2023, revised June 2024)".
