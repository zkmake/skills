# Georgia (GA)

In effect for 2026–27: **Georgia's K-12 Mathematics Standards** (GaDOE; adopted 26 Aug 2021, in classrooms since 2023–24). They are Georgia's own standards, not Common Core, and they replaced the CCSS-based GSE/MGSE. Mathness models them as a crosswalk at element level: edition `ga`, 150 K–5 rows, page `/georgia/`. No next edition.

## Documents
- CASE framework "Georgia's K-12 Mathematics Standards (SY2023-2024)", id e9dd7229-3558-4df2-85c6-57b8938f6180. It has the element text and GaDOE's standard-level `isRelatedTo` links to GSE/MGSE codes: https://case.georgiastandards.org/ims/case/v1p0/CFPackages/e9dd7229-3558-4df2-85c6-57b8938f6180
- Georgia's K-8 Mathematics Standards (Aug 2021, with Evidence of Student Learning): https://lor2.gadoe.org/gadoe/file/1d6838d1-8779-4109-9e54-e179997dc18f/1/Georgia-K-8-Mathematics-Standards.pdf . Its 150 K–5 element codes match the CASE framework exactly.
- Explanation of Changes (Oct 2021; GSE references per standard): https://lor2.gadoe.org/gadoe/file/836e9559-396c-4feb-b0f1-7cdb47371678/1/Georgias-K-12-Mathematics-Standards-Explanation-of-Changes.pdf
- Transition Support Document (Jul 2022; element-level GSE alignments for shifted content): https://lor2.gadoe.org/gadoe/file/2cda3401-c9ed-47f7-8fbc-354808bbce0b/1/GaDOE-Mathematics-Standards-Transition-Support-Document.pdf
- Index page: https://gadoe.org/learning/mathematics/ . georgiastandards.org now redirects to a sunset page.
- Official Common Core crosswalk: **partly**. GaDOE links each *standard* (not each element) to MGSE codes, which are CCSS codes with an "MGSE" prefix and no cluster letter (MGSE3.NF.1); Mathness adds the cluster letters. Element-level links are our split of those standard-level links, except where the Transition document gives element alignments: 1.MDR.6.2 and 2.MDR.6.1 → 3.MD.1; 2.GSR.7.2 and 3.GSR.6.3 → 4.G.3; 5.MDR.7.2 → 6.SP.3.

## Codes
- `grade.STRAND.standard.element`: K.NR.1.4, 1.PAR.3.2, 2.GSR.7.2, 3.MDR.5.5, 5.NR.3.4. Every K–5 standard has elements, and Mathness's rows are elements.
- **Standard numbers run across strands within a grade** (3.NR.1, 3.PAR.2, 3.PAR.3, 3.NR.4…). A strand's numbers are not contiguous, so never assume a strand's standards start at 1.
- K–5 strands ("Big Ideas"):
  - **NR** Numerical Reasoning.
  - **PAR** Patterning & Algebraic Reasoning.
  - **MDR** Measurement & Data Reasoning.
  - **GSR** Geometric & Spatial Reasoning.
  - Excluded: MP (Mathematical Practices) and MM (Mathematical Modeling). Data & Statistical Reasoning (DSR) has no separate K–5 codes and lives inside MDR.
- K–5 rows by strand: NR 75, PAR 21, MDR 26, GSR 28. By grade: K 22, 1 22, 2 22, 3 29, 4 30, 5 25.
- Collision: South Carolina's 2025 codes share the shape and the NR strand (SC K.NR.2.2). The same string means different content in each state, so key by state.

## Against Common Core
- 150 rows: 86 same, 46 edited, 10 moved, 8 new.
- CCSS K–5 not covered:
  - 2.MD.A.2 (one object, two units) is dropped.
  - 2.MD.D.9 (line plot of lengths) is gone; dot plots start in grade 3.
  - 4.MD.C.7 (additive angles) is removed.
  - 5.NF.B.6 (real-world fraction multiplication) moved to grade 6.
  - K.CC.C.7 is linked by GaDOE to K.NR.4, but no element states it (K.NR.4.2 compares sets in words).
- Partly moved or dropped:
  - To grade 6: 5.NF.B.4 fraction × fraction (grade 5 keeps fraction × whole, 5.NR.3.4) and 5.NBT.B.7 decimal × and ÷ (grade 5 adds and subtracts only).
  - 5.G.B.4: the hierarchy is removed (5.GSR.8.1 still classifies by properties).
  - 5.MD.C.5c is in no element.
  - 4.MD.C.6: protractors are optional.
  - 3.MD.A.2 metric units are replaced by customary units in grade 3 (metric moves to 4.MDR.6.1).
  - 2.MD.A.1 and 2.MD.A.3 are limited to inches, feet and yards.
  - 3.NF.A.3d moved to grade 4 (4.NR.4.2); grade 3 compares unit fractions only.
  - 4.NF.B.4 moved to grade 5 (5.NR.3.4).
- K:
  - **Pennies, nickels and dimes** (K.NR.1.4, moved from 2.MD.C.8).
  - Count back from 20 (K.NR.2.1, K.NR.2.2); one more and one less to 20 (K.NR.1.3).
  - Repeating patterns (K.PAR.6.1, new); time words (K.PAR.6.2, new); posing and answering data questions (K.MDR.7.3, new).
- Grade 1:
  - Count back within 120 (1.NR.1.1).
  - Patterns (1.PAR.3.1, 1.PAR.3.2, new).
  - Elapsed whole hours on a number line (1.MDR.6.2).
  - **Quarters** (1.MDR.6.3, moved).
  - Estimate lengths before measuring (1.MDR.6.1).
- Grade 2:
  - Count by 25s, and count backward (2.NR.1.2).
  - Growing and shrinking patterns (2.PAR.4.1, 2.PAR.4.2, new).
  - Make a ruler from unit pieces (2.MDR.5.1).
  - Elapsed time on a timeline (2.MDR.6.1).
  - Lines of symmetry (2.GSR.7.2, moved from 4.G.A.3).
- Grade 3:
  - Read, write and compare to 10,000 (3.NR.1.1, 3.NR.1.2, moved from 4.NBT.A.2); add and subtract within 10,000 with a letter for the unknown (3.PAR.2.2).
  - The equal sign with ×, + and − (3.PAR.3.4, new).
  - Dot plots (3.MDR.5.1); quarter-hour estimating and elapsed time (3.MDR.5.2, 3.MDR.5.3); customary units (3.MDR.5.5).
  - Parallel and perpendicular lines (3.GSR.6.1, moved from 4.G.A.1); symmetry in polygons (3.GSR.6.3, moved); quadrilateral faces on solids (3.GSR.6.2).
- Grade 4:
  - Compare fractions with like numerators or denominators (4.NR.4.2, moved from 3.NF.A.3).
  - Input-output tables (4.PAR.3.2); angles as parts of 360° (4.GSR.7.2); composite rectangles (4.GSR.8.3).
- Grade 5:
  - Compare and order three unlike fractions (5.NR.3.2, moved from 4.NF.A.2); fraction × whole number (5.NR.3.4, moved).
  - Division by two-digit divisors no greater than 25 (5.NR.2.2); round decimals to hundredths (5.NR.4.3).
  - An informal mean (5.MDR.7.2, also 6.SP.A.3); metric and customary conversions split into 5.MDR.7.3 and 5.MDR.7.4.
- A statistical reasoning cycle (ask, collect, analyze, interpret) runs through every grade: K.MDR.7.3, 1.MDR.6.4, 2.MDR.5.4, 3.MDR.5.1, 4.MDR.6.2, 5.MDR.7.2.
- Judgment calls:
  - Coins in K and grade 1 are marked moved rather than new.
  - 3.G.A.2 is placed under 3.NR.4.1.
  - GaDOE links MGSE2.MD.5 to 2.NR.3 (equal groups), which looks like an error; it is placed with 2.MDR.5.5.
  - 2.G.A.2 is placed with 2.NR.3.2, not 2.PAR.4.
  - 3.GSR.6.1 is moved from 4.G.A.1/4.G.A.2, though GaDOE links only MGSE3.G.1.
  - 3.NR.1.1–1.2 are moved (GaDOE calls them additions).
  - 1.PAR.3.2 and 2.PAR.4.1 are new, though they overlap skip counting.
  - Strategy wording (GA drops "standard algorithm") alone isn't counted as a change.

## Sheets for state content
- `ga.ts` was built separately from `gen.py` (Georgia isn't in its OVR). These are its sheet links (the `from` column) by theme:
  - Counting back and one more or less: K.NR.1.3, K.NR.2.1 and K.NR.2.2 → K.NOS.A.3 (Maryland); 1.NR.1.1 → 1.NOS.A.1; 2.NR.1.2 → 2.NOS.A.2.
  - Coins: K.NR.1.4 and 1.MDR.6.3 → 1.GR.C.6 (Maryland's grade 1 coin sheet).
  - Patterns: K.PAR.6.1 → K.AT.B.3; 1.PAR.3.1 → 1.PFA.1 and K.AT.B.3; 1.PAR.3.2 → 1.PFA.1; 2.PAR.4.1 → 2.NBT.A.2; 2.PAR.4.2 → 2.NBT.A.2 and 1.PFA.1; 4.PAR.3.2 → 4.5B (Texas input-output).
  - Time: K.PAR.6.2 → K.MG.3 (Virginia days and months); 1.MDR.6.2 and 2.MDR.6.1 → 2.GR.C.8 (Maryland elapsed time).
  - Data: K.MDR.7.3 → K.MD.B.3; 4.MDR.6.2 → 4.PS.1 (Virginia); 5.MDR.7.2 → 5.PS.2 (Virginia mean).
  - Measurement: K.MDR.7.1 → K.GR.A.3; 1.MDR.6.1 → 2.MD.A.3; 2.MDR.5.1 → 1.MD.A.2; 3.MDR.5.5 → 3.MG.1, 2.MD.B.5 and 3.MD.B.4; 4.GSR.8.3 → 3.MD.C.7 and 3.MD.D.8; 5.MDR.7.1 → 4.MD.A.2.
  - Numbers to 10,000: 3.NR.1.1 and 3.NR.1.2 → 3.NOS.A.1 (Maryland).
  - Fractions: 3.NR.4.1 → 3.NOS.F.11; 4.NR.4.2 → 3.NF.A.3; 5.NR.3.2 → 4.NF.A.2; 5.NR.3.4 → 4.NF.B.4 and 5.NF.B.4.
  - Other number: 1.NR.5.1 → 1.NBT.C.6 and 2.NBT.B.5; 3.PAR.3.4 → MA.3.AR.2.2 and MA.4.AR.2.1 (Florida equal sign).
  - Geometry: 2.GSR.7.2 → 4.G.A.3 and 2.G.A.1; 3.GSR.6.1 → 4.G.A.1 and 4.G.A.2; 3.GSR.6.2 → 2.8B (Texas solids); 3.GSR.6.3 → 4.G.A.3.
- In the full review, 2.MDR.5.1, 2.GSR.7.2, 3.MDR.5.2, 3.MDR.5.5 and 3.GSR.6.2 were partial. Later passes linked sheets or added sections, and all are now good.
- No sheets were written for Georgia alone.

## Pre-K
- Georgia Early Learning and Development Standards (GELDS), 48–60 months, as updated online in 2026: 32 rows. Mapped 2026-10-01 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.ga`), data in `data/prek/ga.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out, so numbering can skip.
- Source: the GELDS site, https://gelds.decal.ga.gov/GELDS (2026 online update). The PDF on that site is still the 2013 version, which numbers the standards differently: map from the site.
- Codes `CD-MA1.4a` … `CD-MA10.4c` (standard MA1–MA10, then the age band and the indicator letter).
- Domains: NQO Number, Quantity, and Operations (14), MC Measurement and Comparison (6), P Patterns (6), ST Spatial Thinking (3), G Geometry (3).
- 26 rows link Head Start goals, 15 link other sheets. Borrowed later-grade sheets: CD-MA2.4d → K.8B; CD-MA4.4b → 1.MD.A.2; CD-MA6.4a → K.MG.3; CD-MA6.4b → K.GR.A.3; CD-MA10.4b → K.G.B.5.

## Uncertain
- The CASE text of standard 4.NR.1 mentions comparing decimals; the 2021 PDF does not. The elements are identical in both.
- Element-level CCSS links are mostly our split of GaDOE's standard-level links.
