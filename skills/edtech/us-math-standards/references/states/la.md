# Louisiana (LA)

In effect for 2026–27: Louisiana Student Standards for Mathematics (LSSM, 2016; document updated 21 December 2017). It is Common Core with Common Core's codes, plus money standards and one standard moved to grade 4. Mathness models it as a crosswalk (edition `la`, 152 rows, `/louisiana/`).

Next: the revised LSSM, which Louisiana calls the "2025 LSSM". BESE approved it in March 2026 and it is required from 2027–28. Its new codes form edition `la27` at `/louisiana-2027-28/`. 2026–27 is a "learning year": teachers keep teaching the 2016 standards, and the spring 2027 LEAP tests them.

## Documents
- 2016 standards (Louisiana Department of Education, LDOE): https://doe.louisiana.gov/docs/default-source/teacher-toolbox-resources/louisiana-student-standards-for-k-12-math.pdf
- K-12 LSSM FAQ (updated 15 April 2026), with the approval, learning-year and LEAP dates: https://doe.louisiana.gov/docs/default-source/teacher-toolbox-resources/k-12-lssm-faq.pdf
- February 2026 Teaching & Learning call deck, same timeline: https://doe.louisiana.gov/docs/default-source/school-system-support/teaching-and-learning-monthly-call-february-2026.pdf
- No official LDOE 2016-vs-Common Core crosswalk was found, so the kinds come from comparing the texts. LDOE's official K-12 LSSM Crosswalk maps 2016 codes to 2025 codes; it is used for `la27`.

## Codes
- Common Core's own grammar, Grade.Domain.Cluster.Number (3.NBT.A.3). Every Common Core standard keeps its code.
- Louisiana-only codes add a cluster or a number:
  - K.MD.C.4 and 1.MD.D.5: coins.
  - 3.MD.E.9: cluster "Work with money".
  - 4.MD.D.8: area of rectilinear figures.
  - Common Core has no K.MD.C, 1.MD.D, 3.MD.E or 4.MD.D, so these codes are safe from collisions.
- Domains: CC Counting and Cardinality (K); OA Operations and Algebraic Thinking; NBT Number and Operations in Base Ten; NF Number and Operations – Fractions (3–5); MD Measurement and Data; G Geometry.
- Lettered sub-parts (a, b, c) are folded into their standard. K.CC.B.4/B.5 and K.NBT.A.1, which were rewritten into sub-parts with the same content, are marked same.
- Do not confuse the 2016 codes with the 2025 codes (3.NOF.A.1; see below). They are different sets.
- Pre-K: own codes, see Pre-K.

## Against Common Core
- 152 K–5 rows (K 23, 1 22, 2 26, 3 26, 4 29, 5 26): 143 same, 5 edited, 4 moved, 0 new.
- No Common Core K–5 standard is dropped.
- K: name pennies, nickels, dimes and quarters and their values (K.MD.C.4).
- Grade 1: the value of a set of one coin type, up to 50¢ (1.MD.D.5).
- Grade 3:
  - Elapsed time over 60 minutes, to the quarter or half hour, on a number line (3.MD.A.1).
  - 3.MD.C.7 drops the area of combined rectangles (Common Core 3.MD.C.7d), which moves to grade 4 as 4.MD.D.8.
  - Money word problems over $1 with coins and bills, written with $ and ¢ (3.MD.E.9).
- Grade 4: measurement problems leave out decimals (4.MD.A.2). The text mentions fraction × fraction, but a footnote says grade 4 is assessed only on fraction × whole number.
- Grade 5:
  - Braces are dropped from expressions (5.OA.A.1).
  - 5.G.B.4 classifies quadrilaterals only and defines a trapezoid inclusively (at least one pair of parallel sides).
- Many Common Core footnotes move into the text (denominator limits in 3.NF and 4.NF, the 1,000,000 limit in 4.NBT, one-step conversions in 4.MD.A.1). These rows stay "same".
- Judgment calls (ours):
  - K.MD.C.4, 1.MD.D.5 and 3.MD.E.9 are marked moved from 2.MD.C.8, Common Core's only coin standard. 3.MD.E.9 also overlaps 4.MD.A.2's money problems.

## Sheets for state content
- OVR: K.MD.C.4 and 1.MD.D.5 go to Maryland's grade 1 coin sheet 1.GR.C.6. 1.MD.D.5 also gets 2.MD.C.8.
- 3.MD.E.9 serves from 2.MD.C.8 plus Virginia's making-change sheet 3.NS.4.
- 4.MD.D.8 serves from 3.MD.C.7.
- Fit-review extras:
  - 3.MD.A.1 gets Virginia's elapsed-time-across-noon sheet 4.MG.2.
  - 3.MD.C.7 gets 3.MD.C.6 and 3.OA.B.5.
- No sheets were written under an LA code.
- Fit review: no partial rows remain for `la`. 3.MD.A.1, 3.MD.C.7 and 3.MD.E.9 were closed by links and new sections.

## Pre-K
- Louisiana Early Learning and Development Standards (ELDS) (2025): 19 rows. Mapped 2026-10-02 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.la`), data in `data/prek/la.tsv`; the rows replace Head Start's 10 goals in this state's set and in `la27`, which reuses them. Summaries are ours; standards the state says begin in kindergarten are left out.
- Source: https://doe.louisiana.gov/docs/default-source/academic-standards/ldoe-early-learning-development-standards-(elds).pdf
- Domains: KN Knowledge of Numbers (8: `CM 1.1.4` … `CM 1.8.4`); PO Patterns and Operations (2: `CM 2.1.4` … `CM 2.3.4`); ME Measurement (5: `CM 3.1.4` … `CM 3.5.4`); SS Shapes and Spatial Relationships (4: `CM 4.2.4` … `CM 4.5.4`).
- 15 rows link Head Start goals, 9 link other sheets (4 with no Head Start goal). Borrowed later-grade sheets: CM 1.8.4 → MA.K.NSO.1.3; CM 3.3.4 → K.GR.A.3; CM 3.4.4 → 1.MD.A.2; CM 3.5.4 → 1.MD.A.2.

## Next edition: Louisiana (2027–28), id `la27`
- Name: Louisiana Student Standards for Mathematics, called the "2025 LSSM".
  - It is a new Bulletin 142. BESE approved it in March 2026.
  - The final rule was published in the Louisiana Register, LR 52:1128-1137 (July 2026).
  - Full implementation is in 2027–28. editions.ts records year 2026, starts 2027–28, and 154 rows.
- Documents:
  - Standards with codes: https://doe.louisiana.gov/docs/default-source/teacher-toolbox-resources/2025-louisiana-student-standards-for-mathematics.pdf
  - Official crosswalk, 2016 code to 2025 code, with struck and underlined edits. Every `la27` Common Core mapping comes from it: https://doe.louisiana.gov/docs/default-source/teacher-toolbox-resources/k-12-lssm-crosswalk.pdf
  - Legal text, LAC 28 Part CXLII (no codes): https://doa.la.gov/media/noxomnvm/28v142.docx
  - BESE comparison doc: https://bese.louisiana.gov/docs/default-source/rulemaking-docket/comparison-doc---b142.pdf
  - Standards Resource Guides, Aug 2026, for example https://doe.louisiana.gov/docs/default-source/academic-standards/grade-4-standards-resource-guide.pdf
- Codes are Grade.Domain.Cluster.Number: K.NOF.A.1, 3.NOF.A.1, 3.AR.D.9, 4.DM.D.8, 5.DM.D.6.
  - Numbers run on through a grade's domain (K.NOF.A.1 … K.NOF.E.8), not per cluster.
  - The PDF prints cluster codes ("(K.NOF.B)") and numbers. The crosswalk and guides write full codes.
  - Lettered parts and bullets are folded. Each grade's "Foundational Skills" list (numbered 1–8, no codes) restates standards and is not a row.
- Four domains in every grade:
  - NOF Numeracy and Operational Fluency: mostly Common Core's CC, NBT, NF and fluency.
  - AR Algebraic Reasoning: OA plus some NBT computation.
  - GL Geometric Reasoning and Logic: G.
  - DM Data Analysis and Measurement: MD.
- The codes are Common Core–shaped, but the domain letters are new and the numbers differ (3.NOF.B.4 is Common Core 3.OA.C.7). Never match them to Common Core by string.
- 154 rows: 131 same, 18 edited, 5 moved, 0 new. 3.AR.D.9 is "n/a" (new) in the official crosswalk, but we mark it moved.
- What changes from 2016 and Common Core:
  - K: subitizing to 5 (K.NOF.B.4); counting back from 10 and 20; comparisons to 20 (K.NOF.C.5–6); trading coins within a dime (K.DM.C.4).
  - Grade 1: count by 5s and backward (1.NOF.B.4); bar and picture graphs, Common Core 2.MD.D.10 (1.DM.C.4).
  - Grade 2: skip-count by 2s (2.NOF.B.3).
  - Grade 3: compare and order to 100,000 (3.AR.D.9, from 4.NBT.A.2); two-step money problems over $1 (3.DM.E.9).
  - Grade 4: 4.NF.B.3c–d split off as 4.NOF.D.10; estimating with compatible numbers (4.NOF.A.3).
  - Grade 5: 5.NF.B.4b split off as 5.DM.D.6 (area with fraction sides); comparing simple expressions (5.AR.A.1); estimating answers (5.NOF.C.11).
  - Kept from 2016: combined rectangles in grade 4 (4.DM.D.8), no decimals in 4.DM.A.2, and quadrilaterals only in 5.GL.B.4.
- Sheets:
  - OVR sends K.DM.C.4 and 1.DM.D.5 to 1.GR.C.6, and 3.AR.D.9 to Texas's numbers to 100,000 (3.2A) plus 4.NBT.A.2.
  - 19 extra.tsv links, for example:
    - Maryland subitizing K.NOS.B.8 for K.NOF.B.4.
    - Florida's fraction-side rectangles MA.5.GR.2.1 for 5.DM.D.6.
    - Maryland fractions of a set 3.NOS.F.11 for 3.NOF.A.1.
  - No partial rows remain.

## Uncertain
- `la27` grade 4–5 codes may be renumbered.
  - The LDOE PDF, the crosswalk and the guide headings use the codes in `la27`.
  - The LAC legal text and the BESE comparison group grade 4–5 clusters differently, and some achievement-level tables in the Aug 2026 guides use codes that fit that layout (4.AR.D.6, 5.AR.C.4, 5.NOF.D.10).
  - K–3 layouts agree.
- Minor wording differs between the LDOE PDF and the LAC text (1.AR.E.8 reads "Add up to 99" in the LAC). Mappings are unaffected.
- The date BESE adopted the 2016 standards and their first classroom year are not recorded in the sources.
