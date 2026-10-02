# Massachusetts (MA)

In effect for 2026–27: Massachusetts Curriculum Framework for Mathematics, Grades Pre-Kindergarten to 12. The Board of Elementary and Secondary Education adopted it in March 2017. It is Common Core with Common Core's codes, plus three added standards and its own pre-K. Mathness models it as a crosswalk (edition `ma`, 151 rows, `/massachusetts/`). It also maps Massachusetts's own pre-K codes (`/massachusetts/pre-k/`). No newer framework was found, so there is no next edition.

## Documents
- Framework (MA DESE): https://www.doe.mass.edu/frameworks/math/2017-06.pdf. K–5 content standards are on PDF pp. 28–56. The same document holds the pre-K standards.
- Framework page: https://doe.mass.edu/stem/math/standards.html
- Cross-check: RIDE's "Common Core State Standards / Rhode Island Core Standards Comparison Tables".
  - Rhode Island's standards are adapted from MA 2017. The tables list each Common Core standard beside the MA/RI version and mark 1.MD.D.5 "Added by Massachusetts".
- No official MA-to-Common Core crosswalk exists. The rows were matched code for code and compared by text.

## Codes
- Grade.Domain.Cluster.Standard, the same as Common Core and with cluster letters: 1.MD.D.5, 2.MD.C.7a, 4.OA.A.3a, 3.G.A.1.
- Lettered sub-parts that restate Common Core (K.CC.B.4a…) are folded. The two added sub-parts stay as rows: 2.MD.C.7a and 4.OA.A.3a.
- Massachusetts codes have no state prefix. A code starting `MA.` is not Massachusetts:
  - Florida's B.E.S.T. codes start `MA.` (MA.3.NSO.2.4).
  - Mathness also writes Colorado's codes as MA.K.CC.A.1.
  - Mathness search strips `ma.` from queries.

## Against Common Core
- 151 K–5 rows (K 22, 1 22, 2 27, 3 25, 4 29, 5 26): 141 same, 7 edited, 2 moved, 1 new. No Common Core K–5 standard is dropped.
- Grade 1:
  - All U.S. coins, their values, equal amounts, ¢, and coin problems to 100¢ (1.MD.D.5, moved from 2.MD.C.8).
  - Identity property of zero (1.OA.B.3).
  - 10-more and 10-less patterns (1.NBT.C.5).
- Grade 2:
  - Related differences known from memory (2.OA.B.2).
  - Skip-count patterns from any number (2.NBT.A.2).
  - Time relationships from seconds to years (2.MD.C.7a, new; only hr/min/sec overlaps 4.MD.A.1).
  - Money problems with bills and coins up to $10 using $ and ¢, no decimals (2.MD.C.8).
- Grade 3:
  - Identity property of 1 (3.OA.B.5).
  - Shapes compared by sides and right angles, with trapezoids counted as quadrilaterals (3.G.A.1).
- Grade 4: multiplication and division facts through 12 × 12 (4.OA.A.3a, marked moved from 3.OA.C.7).
- Smaller additions marked same:
  - "Including zero" (K.OA.A.5); the one-more pattern (K.CC.B.4c).
  - Fractions greater than 1 (4.NF.A.1); product sizes (5.NBT.B.5).
  - Common Core footnotes moved into the text (limits of 10 in K.CC.C.6 and K.MD.B.3, denominators in 3.NF and 4.NF).
- Judgment calls (ours): only clear scope changes are marked edited.

## Sheets for state content
- OVR:
  - 1.MD.D.5 goes to Maryland's grade 1 coin sheet 1.GR.C.6, plus 2.MD.C.8.
  - 2.MD.C.7a goes to Virginia's calendar sheet 1.MG.3.
  - 4.OA.A.3a goes to Florida's times tables to 12, MA.3.NSO.2.4.
- Rhode Island shares these three OVR entries (RI follows MA 2017).
- 5 fit-review links in extra.tsv.
- No sheets were written under an MA code.
- Fit review, K–5: no partial rows remain. 2.MD.C.8 (dollar-bill stories to $10) was closed in pass 9.

## Pre-K
- 2017 Massachusetts Curriculum Framework for Mathematics, pre-K standards (same document as K–5): 13 rows in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.ma`), data in `data/prek/ma.tsv`; the rows replace Head Start's 10 goals in this state's set.
- Codes are PK.Domain.Cluster.Number in four domains:
  - CC (5): PK.CC.A.1 number names, PK.CC.A.2 numerals 0–10, PK.CC.B.3, PK.CC.C.4 counting to 10, PK.CC.C.5 comparing groups.
  - OA (1): PK.OA.A.1 putting together and taking away, up to 5.
  - MD (4): PK.MD.A.1–2 measurable attributes, PK.MD.B.3 sorting by more than one feature, PK.MD.C.4 "coins and dollars are money".
  - G (3): PK.G.A.1 positions, PK.G.A.2 flat shapes, PK.G.B.3 making solids.
  - Rows list Head Start goals (P-MATH 1–10) as `ccss` and Maryland pre-K sheets (PK.NOS.A.2, PK.DS.A.2, PK.GR.A.1, PK.GR.B.5…) as `from`. PK.MD.B.3, PK.MD.C.4 and PK.G.B.3 have no Head Start goal; four rows have no `from`.
  - PK.MD.C.4 borrows Maryland's grade 1 coin sheet 1.GR.C.6.
- Fit review (research notes in `data/prek/ma.tsv`):
  - PK.MD.B.3 is partial: the sheets sort by one feature only.
  - PK.G.B.3 is partial: the solids sheet finds cubes, spheres and cylinders but has no building.

## Uncertain
- MA 1.OA.B.3 reads "to add". RI's version reads "to add and subtract". We treat them as the same standard.
- No newer MA math framework was located as of 2026-10-01.
- The pre-K research TSV notes "No sheet covers coins or money" for PK.MD.C.4. prek.ts now links 1.GR.C.6, a grade 1 sheet.
