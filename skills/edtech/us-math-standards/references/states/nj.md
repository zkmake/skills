# New Jersey (NJ)

In effect for 2026–27: New Jersey Student Learning Standards – Mathematics (NJSLS-M), adopted 4 October 2023. Districts had to align to them by September 2025. They are Common Core with Common Core's codes, except that Measurement and Data is split into Measurement (M) and Data Literacy (DL), with money moved earlier and new data-literacy standards. Mathness models them as a crosswalk (edition `nj`, 163 rows, `/new-jersey/`). No next edition is known.

## Documents
- Standards (NJ Department of Education): https://www.nj.gov/education/standards/math/Docs/2023_NJSLS_Mathematics.docx
- Official crosswalk, 2016 to 2023: https://www.nj.gov/education/standards/math/Docs/NJSLS_Mathematics_Crosswalk_2016_to_2023.docx
  - It codes sub-parts separately and labels each standard by change type. The renumbered M/DL standards are type "Indicator", and the money standards are "New".
- Implementation date (State Board extended schedule): https://www.nj.gov/education/broadcasts/2024/aug/7/StateBoardofEducationAdoptsAnExtendedScheduleforDistrictstoImplementNJSLSMathematics.pdf
- Common Core baseline: https://corestandards.org/wp-content/uploads/2023/09/Math_Standards1.pdf
  - The 2016 NJSLS-M, the crosswalk's baseline, was assumed to match Common Core codes. The 2023 text was also compared with Common Core directly.

## Codes
- Grade.Domain.Cluster.Number with Common Core's cluster letters (3.NF.A.2a). Every non-MD Common Core code is unchanged.
- MD is split into M and DL, renumbered within the new domains:
  - K: K.M.A.1–2 = K.MD.A.1–2; K.M.B.3 is coins (new); K.DL.A.1 = K.MD.B.3.
  - Grade 1: 1.M.B.3 = 1.MD.B.3 (time); 1.M.C.4–5 are money (new); 1.DL.A.1 = 1.MD.C.4.
  - Grade 2: 2.M.A.1 … 2.M.C.8 = 2.MD.A.1 … 2.MD.C.8. 2.DL.A.1–2 are new. 2.DL.B.3–4 = 2.MD.D.9–10.
  - Grade 3: 3.M.A.1–2 = 3.MD.A.1–2; 3.M.B.3–5 = 3.MD.C.5–7; 3.M.C.6 = 3.MD.D.8; 3.DL.B.3–4 = 3.MD.B.3–4.
  - Grade 4: 4.M.A.1–3 = 4.MD.A.1–3; 4.M.B.4–6 = 4.MD.C.5–7; 4.DL.B.5 = 4.MD.B.4.
  - Grade 5: 5.M.A.1 = 5.MD.A.1; 5.M.B.2–4 = 5.MD.C.3–5; 5.DL.B.5 = 5.MD.B.2.
- The renumbering shifts numbers. For example, NJ 3.M.B.3 is Common Core 3.MD.C.5, so always map M/DL rows through the table.
- Sub-parts:
  - The research TSV has a row per lettered sub-part (206 rows, 43 lettered).
  - The app folds sub-parts that equal Common Core, which is all of them, leaving 163 rows with no lettered codes.
  - 147 of the 163 app rows are bare `[code, ccss]` pairs with no summary.
- Pre-K: own codes, see Pre-K.

## Against Common Core
- Research TSV, 206 rows: 190 same, 1 edited, 3 moved, 12 new. App (K 23, 1 23, 2 28, 3 27, 4 32, 5 30): 163 rows. No Common Core K–5 standard is dropped.
- K: coins and bills are money, with the values of all coins and the $1 bill (K.M.B.3, moved from 2.MD.C.8).
- Grade 1:
  - Compare coins and dollar bills and write ¢ and $ (1.M.C.4).
  - Money problems to $20, with the same amount shown in different ways (1.M.C.5).
  - Both are moved from 2.MD.C.8.
- Grade 2: data is collected to answer questions and can vary (2.DL.A.1); what counts as data, such as pictures, sounds and numbers (2.DL.A.2).
- Grade 3:
  - Write data questions and plan what to collect (3.DL.A.1); collect or use existing data (3.DL.A.2).
  - Two-step problems include money (3.OA.D.8, edited).
- Grade 4:
  - Create and refine data questions (4.DL.A.1).
  - Plan collection and organize data digitally (4.DL.A.2).
  - Select part of a data set (4.DL.A.3).
  - Analyze charts and draw supported conclusions (4.DL.A.4).
- Grade 5:
  - Different charts highlight different features (5.DL.A.1).
  - Collect and share data digitally (5.DL.A.2).
  - Clean data: formatting and missing entries (5.DL.A.3).
  - Double line plots or double bar graphs to compare samples (5.DL.A.4).
- "Fluently" became "with accuracy and efficiency" (K.OA.A.5, 1.OA.C.6, 2.OA.B.2, 2.NBT.B.5, 3.OA.C.7, 4.NBT.B.4, 5.NBT.B.5). These rows stay "same".
- Judgment calls (ours):
  - NJ labels K.M.B.3, 1.M.C.4 and 1.M.C.5 "New". Here they are moved from 2.MD.C.8.
  - Added examples (2.G.A.3, 3.NF.A.1–3, 3.M.A.2) are "same".

## Sheets for state content
- nj.ts predates gen.py (older header, like ky.ts); gen.py's OVR lists only 2.DL.A.2 and the four NJ.4.DL.A.2 rows. Links in nj.ts:
  - Money rows K.M.B.3, 1.M.C.4 and 1.M.C.5 go to Maryland's grade 1 coin sheet 1.GR.C.6. 1.M.C.5 also gets 2.MD.C.8.
  - 2.DL.A.2 goes to 2.MD.D.10.
- Written for New Jersey: "Choosing and cleaning data", NJ.4.DL.A.2 (grade 4, `working-with-data`).
  - It serves 4.DL.A.2, 4.DL.A.3, 5.DL.A.2 and 5.DL.A.3, and is linked from 3.DL.A.1 and 4.DL.A.1.
  - Its sections are choose, clean, plan, data-kinds, data-claims, good-data and refine-questions.
  - Minnesota (2027–28) and Washington (2027–28) data rows reuse it.
- Other data rows:
  - 2.DL.A.1: 2.MD.D.10.
  - 3.DL.A.2: 3.MD.B.3.
  - 4.DL.A.4: Maryland's bar graphs 4.DS.A.1.
  - 5.DL.A.1: Maryland 5.DS.A.1 plus Virginia's line graphs 4.PS.1.
  - 5.DL.A.4: 5.MD.B.2.
  - 3.OA.D.8: Maryland's estimating sums 3.NOS.D.6 plus Virginia's making change 3.NS.4.
- Fit review: no partial rows remain. 3.OA.D.8 (money in two-step problems) was closed in round 9.

## Pre-K
- New Jersey Preschool Teaching and Learning Standards (2014), mathematics: 14 rows. Mapped 2026-10-01 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.nj`), data in `data/prek/nj.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out, so numbering can skip.
- Source: https://www.nj.gov/education/earlychildhood/preschool/docs/PreschoolTeachingandLearningStandards.pdf. A 2026 revision was proposed but not adopted (as of 2026-10-01); recheck before relying on the 2014 codes.
- Codes `4.1.1` … `4.4.3` (math is the document's fourth domain).
- Domains: NC Number and Counting (6), NO Numerical Operations (2), MA Measurable Attributes (3), G Spatial and Geometric Sense (3).
- All 14 link Head Start goals; 7 also link Maryland pre-K sheets. No later-grade borrowing.

## Uncertain
- The name varies. The TSV and NJDOE write "New Jersey Student Learning Standards – Mathematics". editions.ts writes "… for Mathematics". The Atlas writes "…Standards–Mathematics".
- The app and the TSV differ in row count only because of folding. The TSV kind counts include the 43 lettered rows (all same); the app has no per-kind count.
