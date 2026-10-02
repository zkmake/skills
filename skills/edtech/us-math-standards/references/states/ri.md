# Rhode Island (RI)

In effect for 2026–27: Rhode Island Core Standards for Mathematics (adopted March 9, 2021), adapted from Massachusetts's 2017 framework. The classroom start year is not in our sources. Mathness models them as a crosswalk in CCSS-style codes (edition `ri`, 151 rows; pre-K in its own codes, see Pre-K), with the note "Rhode Island's standards follow Massachusetts's 2017 framework." No next edition is recorded: RIDE's Council re-endorsed the math standards unchanged on 28 April 2026, 6–0 (per the 2026-10-02 source check).

## Documents
- Official comparison: "Common Core State Standards / Rhode Island Core Standards Comparison Tables, K-12 Mathematics" (RIDE; moved 2026-10-02, the old `ride.ri.gov/Portals/0/…` link redirects): https://ride.ri.gov/sites/g/files/xkgbur806/files/Portals/0/Uploads/Documents/Instruction-and-Assessment-World-Class-Standards/Standards/RI-Core-Standards-Mathematics-Comparison-Tables.pdf
- Cross-check: the MA 2017 framework, whose K–5 content is identical: https://www.doe.mass.edu/frameworks/math/2017-06.pdf
- Publisher: Rhode Island Department of Education.
- Fetch problem: ride.ri.gov HTML pages and `/media/` downloads returned 403 (a bot challenge) to scripted fetches. The comparison PDF above downloaded fine.
- Common Core comparison: yes. The comparison tables above are official, side by side with CCSS.

## Codes
- Grammar: `<grade>.<domain>.<cluster>.<number><letter?>`, identical to CCSS codes, with cluster letters. Examples: `K.CC.A.1`, `1.MD.D.5`, `2.MD.C.7a`, `4.OA.A.3a`, `5.NBT.B.5`.
- Domains are Common Core's.
- Lettered sub-parts that restate CCSS (e.g. K.CC.B.4a) are folded into their standard. The two added sub-parts are rows: `2.MD.C.7a` and `4.OA.A.3a`.
- `1.MD.D.5` is a cluster and code CCSS lacks: CCSS 1.MD has no D cluster.
- Collisions:
  - Every RI code is identical to the Massachusetts crosswalk's code.
  - 148 RI codes equal CCSS codes, by design.
  - The codes also overlap other CCSS-coded states (AZ, IA, LA, NJ, SD, TN).
  - Always qualify by set.
- The comparison tables print sub-parts as capitals (A., B.) and contain code typos (`4.NFC..6`, `5.NF.B.B.3`, `5.G.B,4`). Normal codes with lowercase letters are used.
- Rows per grade: K 22, 1 22, 2 27, 3 25, 4 29, 5 26.

## Against Common Core
- Rows: 151, of which 141 same, 7 edited, 2 moved, 1 new.
- Dropped: none. Every CCSS K–5 standard keeps its code.
- Moved:
  - All U.S. coins, their values and coin problems to 100¢ in grade 1 (`1.MD.D.5`), from 2.MD.C.8.
  - Facts through 12 × 12 in grade 4 (`4.OA.A.3a`), mapped to 3.OA.C.7 as the nearest fact standard.
- New: time relationships from seconds through years in grade 2 (`2.MD.C.7a`). Only hr/min/sec overlaps 4.MD.A.1.
- Edited:
  - Identity properties (`1.OA.B.3`, `3.OA.B.5`).
  - Related differences from memory (`2.OA.B.2`).
  - Skip-count and 10-more patterns (`2.NBT.A.2`, `1.NBT.C.5`).
  - Money with bills to $10, whole dollars, no decimals (`2.MD.C.8`).
  - Trapezoids and angle-based sorting (`3.G.A.1`).
- Treated as same: smaller additions ("including zero" in K.OA.A.5, the one-more pattern in K.CC.B.4c, fractions greater than 1 in 4.NF.A.1) and CCSS footnotes moved into the text.

## Sheets for state content
- OVR (same as Massachusetts):
  - `1.MD.D.5` → Maryland's coin sheet `1.GR.C.6` (plus 2.MD.C.8 from fit links).
  - `2.MD.C.7a` → Virginia `1.MG.3`.
  - `4.OA.A.3a` → Florida `MA.3.NSO.2.4` (facts 0–12).
- Fit links (extra.tsv): 5.
- No RI-prefixed sheets. The latest fit verdicts leave no partials. An earlier pass flagged `2.MD.C.8` bill problems; it was later cleared.

## Pre-K
- Rhode Island Early Learning and Development Standards (RIELDS) (2023): 5 rows. Mapped 2026-10-02 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.ri`), data in `data/prek/ri.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out.
- Source: https://rields.com/wp-content/uploads/2023/04/RIELDS_standards_2023_0329.pdf
- Domains: M Mathematics (5: `M 1.a` … `M 5.a`).
- 5 rows link Head Start goals, 5 link other sheets (0 with no Head Start goal). No later-grade borrowing.

## Uncertain
- The comparison tables have no row for K.CC.A.1 (count to 100). It is kept as same, matching MA 2017.
- The research summarizes RI and MA as identical in K–5, based on the cross-check. Any RI-specific edits after 2021 are not recorded.
