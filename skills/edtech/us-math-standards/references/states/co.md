# Colorado (CO)

In effect for 2026–27: the **Colorado Academic Standards: Mathematics**, which CDE calls the "2020 Colorado Academic Standards". They were adopted in 2018 and have been in classrooms since 2020–21. Their K–5 evidence outcomes are Common Core one-to-one, nearly word for word. Mathness models them as a crosswalk in its own Colorado-style codes, with Colorado's own pre-K: edition `co`, 148 K–5 rows, `preK: "2020 Colorado Academic Standards: Mathematics"`, page `/colorado/`. There is no next K–5 edition. In May 2026 only the high school standards were replaced.

## Documents
- Standards page (CDE, checked 2026-10-01; lists only the 2020 standards): https://ed.cde.state.co.us/comath/statestandards
- Plain text (parsed): https://ed.cde.state.co.us/fs/resource-manager/view/a3f26560-89a1-4af8-9882-2da7d4444bf4
- PDF P–2: https://ed.cde.state.co.us/fs/resource-manager/view/bbec2ab9-2440-4d02-92d4-6298c1fa75b4
- PDF 3–5: https://ed.cde.state.co.us/fs/resource-manager/view/3e77a35c-c0a2-4d3b-aaea-a0fea50c794d
- CSV: https://ed.cde.state.co.us/fs/resource-manager/view/75f040b8-dc69-4810-b29f-b4a6e5e675de
- Excel: https://ed.cde.state.co.us/fs/resource-manager/view/5f27d9fb-b60a-4513-9c72-39e8b5ce597b
- 2010-to-2020 detailed changes (xlsx): https://ed.cde.state.co.us/fs/resource-manager/view/9da85178-7540-4038-a42c-49df9f2270da
- Revision status:
  - Review page: https://ed.cde.state.co.us/fs/pages/2769
  - Math revisions page: https://ed.cde.state.co.us/fs/pages/2779
  - In Dec 2024 the State Board chose to revise only the **high school** math standards. These were adopted May 14, 2026 (CDE plans two years of adoption support). There is no K–8 revision.
- Official Common Core crosswalk: **yes, built in**. Every K–5 evidence outcome carries an official "(CCSS: x)" tag, and Mathness's `ccss` column is that tag. One tag lacks its cluster letter: MA.K.CC.B.5 says "K.CC.5", read as K.CC.B.5.

## Codes
- CDE codes each grade-level expectation (GLE) as `MA.<grade>.<domain>.<cluster>`, for example MA.K.CC.A and MA.3.OA.B (kindergarten is "K"). Evidence outcomes (EOs) are numbered with the CCSS standard number (3.OA.B has EOs 5 and 6).
- **Mathness's codes join the GLE code and the EO number:** MA.K.CC.A.1, MA.2.MD.C.8, MA.3.OA.B.5, MA.5.G.B.4. CDE never prints this combined string, so it is our construction. Strip `MA.` and you have the CCSS code.
- Don't confuse these with Florida's B.E.S.T. codes, which also start `MA.` (MA.K.NSO.1.3). Colorado's carry CCSS domain letters and cluster letters.
- Old 2010-style codes (GR.3-S.1-GLE.2-EO.a) and the pattern MA.<grade>.<std>.<gle>.<letter> are **not** used by the current standards.
- Lettered sub-items (a–d) restate CCSS sub-parts (tagged, for example, "CCSS: 3.MD.C.7.a") and are folded into their EO.
- Colorado's four standards group the CCSS domains. Note that MD sits under Standard 3, not Standard 4.
  - 1 Number and Quantity: CC, NBT, NF.
  - 2 Algebra and Functions: OA.
  - 3 Data, Statistics, and Probability: MD.
  - 4 Geometry: G.
- GLE names are exactly CCSS's cluster headings. Mathematical Practices, Colorado Essential Skills, inquiry questions and coherence connections are supporting text and are skipped.
- Rows by grade: K 22, 1 21, 2 26, 3 25, 4 28, 5 26.

## Against Common Core
- 148 rows: 148 same. No CCSS K–5 standard is dropped and nothing is added.
- Wording edits only. "Understand" becomes "Describe" or "Explain" in 3.NF.A.1–2, 3.G.A.1, 4.NBT.A.1 and 5.G.B.3; "Apply" appears in K.CC.B.4 and "Model" in 5.MD.C.5a; CCSS footnotes are moved inline.
- **No personal financial literacy evidence outcomes in K–5** (a search of the documents found none). Money appears only through 2.MD.C.8 and 4.MD.A.2.

## Sheets for state content
- None needed. OVR is empty, there are no extra links, and Common Core's sheets serve every row.

## Pre-K
- 2020 Colorado Academic Standards: Mathematics, preschool expectations (same documents as K–5): 25 rows in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.co`), data in `data/prek/co.tsv`; the rows replace Head Start's 10 goals in this state's set.
- Preschool learning and development expectations (LDEs) are coded `MA.P.<domain>.<letter>`, such as MA.P.CC.A. CDE numbers indicators of progress **continuously through each domain**, not restarting at each LDE.
- Mathness writes `P.<domain>.<letter>.<indicator>`, with no `MA.`: P.CC.A.1, P.CC.B.2, P.CC.E.10, P.OA.B.6, P.MD.A.3, P.G.B.6. The LDE letter is followed by the domain-wide indicator number.
- Domains: CC Counting & Cardinality (10), OA Operations & Algebraic Thinking (6), MD Measurement & Data (3), G Geometry (6).
- Rows link Head Start goals (P-MATH n), Maryland pre-K codes, or both; P.CC.C.6 and P.OA.A.3 have only Maryland codes. Two rows borrow from later grades: P.CC.D.8 (ordinals first to fifth) borrows Florida's K sheet MA.K.NSO.1.3, and P.MD.A.3 (measure with repeated units) borrows 1.MD.A.2.

## Uncertain
- The `MA.<grade>.<domain>.<cluster>.<EO>` and `P.<domain>.<letter>.<n>` code strings are Mathness constructions, not printed by CDE.
- K–5 uses the `MA.` prefix but pre-K drops it. The inconsistency is Mathness's, not CDE's.
