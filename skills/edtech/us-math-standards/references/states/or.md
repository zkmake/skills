# Oregon (OR)

In effect for 2026–27: 2021 Oregon Mathematics Standards (adopted October 2021; now issued as "VERSION 2021.3", text unchanged from v5.2.7). The classroom start year is not in our sources. Mathness models them as a crosswalk in Oregon's codes (edition `or`, 151 rows; pre-K in its own codes, see Pre-K), with the note "Oregon adds a Data Reasoning domain to every grade." No next edition is recorded: ODE's proposed schedule puts the next math revision in 2028–29, for Board approval in fall 2026 (per the 2026-10-02 source check).

## Documents
All from the Oregon Department of Education, fetched 2026-10-01:
- Standards K–12, "VERSION 2021.3" on a new template, the copy the landing page links since 2026-10-02 (text identical to v5.2.7): https://www.oregon.gov/ode/educator-resources/standards/mathematics/Documents/2021%20Oregon%20Math%20Standards_new%20template%20version.pdf . The v5.2.7 PDF the research used still loads: https://www.oregon.gov/ode/educator-resources/standards/mathematics/Documents/2021%20Oregon%20Math%20Standards%20(v.5.2.7).pdf
- Official crosswalk to CCSS 2010, v5.2.10 (updated 9/4/2024): https://www.oregon.gov/ode/educator-resources/standards/mathematics/Documents/2021OregonMathStandardsCrosswalk.pdf
- K–12 Full Version with Guidance (guidance v5.2.10.3). Its per-standard "Common Core (CCSS) (2010)" field is the official mapping used: https://www.oregon.gov/ode/educator-resources/standards/mathematics/Documents/K12FullVersionwithGuidance.docx
- Page: https://www.oregon.gov/ode/educator-resources/standards/mathematics/Pages/default.aspx
- Common Core comparison: yes. ODE maps every 2021 standard to CCSS 2010 and marks new content `[new content]`.

## Codes
- Grammar: `<grade>.<domain>.<cluster letter>.<number>`. Numbers run on through a domain across clusters. Examples: `K.NCC.A.1`, `2.GM.B.6`, `K.GM.C.7`, `2.GM.D.11`, `4.DR.A.1`.
- Domains:
  - OA: Algebraic Reasoning: Operations.
  - NCC: Numeric Reasoning: Counting and Cardinality (K only).
  - NBT: Numeric Reasoning: Base Ten Arithmetic.
  - NF: Numeric Reasoning: Fractions (3–5).
  - GM: Geometric Reasoning and Measurement. It merges CCSS G and the measurement half of MD.
  - DR: Data Reasoning. A = pose questions and collect data; B = analyze and interpret.
- No lettered sub-parts. CCSS sub-parts (3.NF.A.3a–d, 3.MD.C.7a–d) are folded into the parent text.
- Parser notes:
  - 83 of 151 OR codes are character-identical to CCSS codes (the OA, NBT and NF rows), with the same content except the fluency wording of `4.NBT.B.4` and `5.NBT.B.5`.
  - GM, DR and NCC codes are Oregon's own. Domain letters come from the code (`DR` → "Data reasoning", `NCC`, `GM`).
  - Those 83 codes also appear in Common Core itself and in other CCSS-coded sets (all 83 in Rhode Island, Massachusetts, Arizona and Iowa), so qualify by set.
- K–5 code lists match across the standards PDF, crosswalk and guidance (151 standards). Rows per grade: K 23, 1 22, 2 26, 3 25, 4 29, 5 26.

## Against Common Core
- Rows: 151, of which 139 same, 8 edited, 4 new.
- Dropped: none outright; ODE maps every CCSS K–5 standard.
  - 5.G.B.3 merges into `5.GM.B.3` with 5.G.B.4.
  - Line-plot specifics (2.MD.D.9, 3.MD.B.4, 4.MD.B.4, 5.MD.B.2) now sit mostly in guidance and boundaries, not in standard text.
- New (ODE `[new content]`): `K.DR.A.1`, `1.DR.A.1`, `4.DR.A.1`, `5.DR.A.1`. These pose investigative questions and collect or plan data.
- Edited:
  - `2.GM.B.6` adds yards to estimation.
  - `2.DR.A.1`, `3.DR.A.1` reframe the data standards as investigation.
  - `2.DR.B.2`: no category limit.
  - `4.DR.B.2`: fraction line plots with like denominators.
  - `5.DR.B.2`: describe the spread of data.
  - `4.NBT.B.4`, `5.NBT.B.5` say "accurate, efficient, and flexible strategies and algorithms" instead of the standard algorithm.
- Treated as same:
  - Other fluency standards with the same wording change (2.OA.B.2, 2.NBT.B.5, 3.OA.C.7, 3.NBT.A.2).
  - "Problems in authentic contexts" for "word problems".
  - Dropped examples and dropped "know from memory".

## Sheets for state content
- OVR: new DR.A.1 rows go to the matching CCSS data sheets: `K.DR.A.1`→K.MD.B.3, `1.DR.A.1`→1.MD.C.4, `4.DR.A.1`→4.MD.B.4, `5.DR.A.1`→5.MD.B.2.
- Fit-review links (extra.tsv, 17):
  - New Jersey's data-planning sheet `NJ.4.DL.A.2` for `4.DR.A.1` and `5.DR.A.1`.
  - 2.MD.D.10 and 3.MD.B.3 for the graph rows.
  - Maryland `5.DS.A.1` for `5.DR.B.2`.
- No OR-prefixed sheets. The latest fit verdicts leave no partials.

## Pre-K
- Oregon's Early Learning and Kindergarten Guidelines, Mathematics, By Entry to Kindergarten (2016): 10 rows. Mapped 2026-10-02 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.or`), data in `data/prek/or.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out.
- Source: https://www.oregon.gov/ode/students-and-family/Transitioning-to-Kindergarten/Documents/ODE_EarlyLearningStandards_final.pdf
- Domains: CC Counting and Cardinality (5: `P-Math1` … `P-Math5`); OA Operations and Algebraic Thinking (2: `P-Math6` … `P-Math7`); MD Measurement and Data (1: `P-Math9`); G Geometry and Spatial Sense (2: `P-Math11` … `P-Math12`).
- 10 rows link Head Start goals, 3 link other sheets (0 with no Head Start goal). No later-grade borrowing.

## Uncertain
- The crosswalk PDF prints `1.DR.B.2` against "1.MD.C.3 (1.MD.C.4)" and leaves `1.GM.C.6` blank. The guidance gives 1.MD.C.4 and 1.MD.B.3, which were used.
- `3.DR.A.1` is mapped to 3.MD.B.4 as ODE does, although the text is about scaled picture and bar graphs. ODE's guidance keeps half- and quarter-inch line plots.
- Version labels disagree: the research read v5.2.7, the current PDF says VERSION 2021.3, and the crosswalk and guidance are v5.2.10.
