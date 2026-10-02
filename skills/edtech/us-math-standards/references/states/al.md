# Alabama (AL)

In effect for 2026–27: the **2019 Alabama Course of Study: Mathematics** (ALSDE, adopted 2019; the year it reached classrooms is not recorded in the research). Mathness models it as a crosswalk in its own codes: edition `al`, 151 K–5 rows, page `/alabama/`. No newer edition has been adopted.

## Documents
- Course of study PDF (ALSDE), K–5 content standards on pp. 18–56: https://www.alabamaachieves.org/wp-content/uploads/2022/09/AS_2022923_CAS-2019-Alabama-Mathematics-COS_V1.0.pdf
  - Older posting of the same document: https://www.alabamaachieves.org/wp-content/uploads/2021/03/2019-Alabama-Mathematics-COS-Rev.-6-2021.pdf
- ALSDE Mathematics page (checked 2026-10-01; links only the 2019 COS): https://www.alabamaachieves.org/content-areas-specialty/mathematics/
- Official Common Core crosswalk: **none**. The adopted COS has no CCSS ids, and its appendices A–G have no K–5 alignment table. A Feb 2019 SBOE presentation showed a draft with bracketed CCSS ids (grade 1 std 22 [1.G.3], grade 3 std 13 [3.NF.1]); the adopted text dropped them: https://alabamaschoolboards.org/_assets/documents/SBOE%20Attachments/2019%20ALCOS%20Math%20Presentation%202-13-19%20.pdf . Every mapping is ours.
- The PDF text is in two columns. Standards were read from the extracted text and checked against the layout.

## Codes
- The document numbers content standards 1..N **within each grade** under a heading such as "Grade 1 Content Standards". There's no prefix and no domain in the number. Sub-standards a, b, c, d are required parts.
- Mathness writes `AL.<grade>.<n>`: AL.K.3, AL.1.20, AL.3.13, AL.5.21. The `AL.` prefix and the grade are ours; a bare "20." means nothing outside its grade. Sub-parts are folded into their standard.
- Counts per grade: K 23, 1 23, 2 27, 3 26, 4 29, 5 23. The script checked that the numbers run without gaps in each grade.
- Content areas (official names): Foundations of Counting (K only); Operations and Algebraic Thinking; **Operations with Numbers: Base Ten** and **Operations with Numbers: Fractions** (not "Number and Operations…"); **Data Analysis** (its own area, apart from Measurement); Measurement; Geometry. Cluster headings follow CCSS, plus "Understand simple patterns" in K–2.
- The 8 Student Mathematical Practices are the same as CCSS's and are skipped.

## Against Common Core
- 151 rows: 138 same, 9 edited, 1 moved, 3 new.
- No CCSS K–5 standard is missing. 3.G.A.2 (partition shapes into equal areas) has no grade 3 geometry standard (grade 3 geometry is only AL.3.26), so it maps to AL.3.13 (a unit fraction as one part of a partitioned area).
- K: count back from 10 (AL.K.1); copy and continue patterns with real objects (AL.K.13, new); sort up to 10 objects and show them in Venn diagrams, pictographs and yes-no charts (AL.K.15); pennies used to represent addition (AL.K.8).
- Grade 1: count forward and back to 120 from any number (AL.1.10); patterns and number sequences (AL.1.9, new); data in up to 3 categories with Venn diagrams, pictographs and yes-no charts (AL.1.16); **pennies and dimes** (AL.1.20, moved from 2.MD.C.8).
- Grade 2: patterns (AL.2.5, new); picture and bar graphs with up to 4 categories, plus predicting from a Venn diagram or chart (AL.2.16); nickels and quarters, coin totals and money problems **within $1 using ¢, with no dollar bills or decimal notation** (AL.2.24, edited); automatic one-digit sums by the end of grade 2 (AL.2.2a).
- Grade 3: a simple probability from a picture (AL.3.16a); automatic products by the end of grade 3 (AL.3.7b).
- Grade 4: still interprets picture and bar graphs as well as line plots (AL.4.20).
- Grade 5: classify triangles by sides and angles (isosceles, equilateral, scalene; acute, obtuse, right, equiangular) (AL.5.21, mapped to 5.G.B.4 as edited).
- Judgment calls: a kind of "same" allows rewording, splits and small added examples. AL.K.15, AL.1.16, AL.2.16 and AL.4.20 are marked edited for their extra display types and could be read as same. AL.3.20–3.23 split 3.MD.C.5–C.7. AL.3.24 and AL.3.25 both map to 3.MD.D.8. AL.4.7 and AL.4.8 both map to 4.NBT.A.2.

## Sheets for state content
- Redirects (OVR) to other sets' sheets:
  - Patterns: AL.K.13 → K.AT.B.3 (Maryland, repeating patterns); AL.1.9 and AL.2.5 → 1.PFA.1 (Virginia, repeating and growing patterns).
  - Coins: AL.1.20 → 1.GR.C.6 (Maryland's grade 1 coin sheet).
- Fit-review links (extra.tsv), shown beside the row's own sheets:
  - Counting back: AL.K.1 + K.NOS.A.3; AL.1.10 + 1.NOS.A.1.
  - Patterns: AL.1.9 + K.AT.B.3.
  - Data: AL.K.15 + 1.MD.C.4 and K.8B; AL.2.16 + 1.MD.C.4; AL.4.20 + 3.MD.B.3 and 4.DS.A.1. (The entries for AL.1.16 + 1.MD.C.4 and AL.2.16 + 2.MD.D.10 repeat the rows' own Common Core codes, so they add nothing.)
  - Money: AL.2.24 + 1.GR.C.6.
  - Triangles: AL.5.21 + 5.MG.3 (Virginia, sorting triangles).
- No sheets were written for Alabama alone.

## Pre-K
- Alabama's Standards for Early Learning and Development (2023), older preschooler indicators: 36 rows. Mapped 2026-10-01 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.al`), data in `data/prek/al.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out, so numbering can skip.
- Source: https://www.children.alabama.gov/wp-content/uploads/2023/10/ASELD-Document-Revised-4-28-2023.pdf (revised 28 April 2023).
- Codes `MAT1aOP-1` … `MAT4bOP-4`: the document reuses bare indicator codes across subjects, so Mathness writes them with the MAT (math) domain.
- Domains: NQ Numbers and Quantity (10), AT Algebraic Thinking (11), SG Spatial Reasoning and Geometry (6), MD Measurement and Data Analysis (9).
- 23 rows link Head Start goals, 19 link other sheets; 13 have no Head Start goal. Borrowed later-grade sheets: MAT2bOP-3 and MAT4aOP-1 → K.GR.A.3; MAT2cOP-4 → MA.K.NSO.1.3 (ordinals); MAT4aOP-2 → 1.MD.A.2; MAT4aOP-4 → K.MG.3; MAT4bOP-4 → K.8B.

## Uncertain
- ALSDE publishes no dated "in effect" list for math. Searches found no draft or adoption of a newer math COS (the 2025–26 revisions were for CTE, digital literacy/CS, world languages and health). A math COS adopted after Sept 2026 could not take effect before 2027–28.
- AL.5.21 (triangle naming) could be read as new rather than edited.
