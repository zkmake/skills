# Wisconsin (WI)

**In effect for 2026–27:** the Wisconsin Standards for Mathematics, adopted May 2021. They revise Common Core, which Wisconsin adopted in 2010. They add subitizing, put multiplication fluency in grade 4, and use estimation in place of rounding.

**In Mathness:** a crosswalk in Wisconsin's `M.` codes, edition `wi`, 148 rows, at `/wisconsin/`. There is no next edition.

## Documents
- **Standards:** https://dpi.wi.gov/sites/default/files/imce/standards/New%20pdfs/MathematicsStandards2021.pdf (Wisconsin Department of Public Instruction). Standards page: https://dpi.wi.gov/math/standards
- **Official comparison:** "2010 to 2021 Wisconsin Standards for Mathematics Comparison, K-8", at https://dpi.wi.gov/media/44373/download?inline
  - Wisconsin's 2010 codes are Common Core's, so this document is in effect an official Common Core crosswalk.
  - Its dropped list is used as given.

## Codes
- **Format:** `M.<grade>.<domain>.<cluster>.<number>`, e.g. M.K.CC.B.6, M.1.MD.B.3, M.4.OA.D.6. This is Common Core's full code with an `M.` prefix.
- **Lettered parts:** sub-parts (a, b, …) have no codes of their own and are folded into their standard.
- **Shifted numbers (parser trap):** where Wisconsin inserted or dropped a standard, later numbers in the cluster shift. The PDF prints the old code beside the new one, e.g. `M.K.CC.B.6 [WI.2010.K.CC.B.5]`.
  - K.CC: M.K.CC.B.6, C.7 and C.8 are Common Core K.CC.B.5, C.6 and C.7.
  - 3.OA: M.3.OA.B.4, B.5, C.6, D.7 and D.8 are Common Core 3.OA.B.5, B.6, C.7, D.8 and D.9.
  - The PDF prints the old grade 3 codes with cluster B throughout ("3.OA.B.8"). The comparison document prints them as 3.OA.5–3.OA.9.
  - **Rule:** never match by stripping `M.` in K.CC or 3.OA.
- Pre-K: own codes, see Pre-K.

## Against Common Core
- **Row counts:** 148 K–5 rows (K 23, 1 20, 2 26, 3 24, 4 29, 5 26): 135 same, 11 edited, 1 moved, 1 new.
- **Dropped (per the official comparison):**
  - 1.OA.D.8 (unknown in an addition or subtraction equation).
  - 3.OA.A.4 (unknown in a multiplication or division equation).
- **New:**
  - Perceptual subitizing up to 5 (M.K.CC.B.5).
  - Conceptual subitizing inside M.K.OA.A.3 (to 10) and M.1.OA.C.5 (to 20), both edited.
- **Moved later:**
  - Full multiplication and division within 100 moves to grade 4 (M.4.OA.D.6, which is Common Core 3.OA.C.7).
  - Grade 3 (M.3.OA.C.6) builds strategies and expects quick facts only for 0, 1, 2, 5 and 10.
  - M.2.OA.B.2 no longer says to know sums from memory.
- **Moved earlier:** adding fractions with related denominators like 1/2 + 1/4 in grade 4 (M.4.NF.B.3, part of Common Core 5.NF.A.1).
- **Estimation in place of rounding:** M.3.NBT.A.1, M.4.NBT.A.3 and M.5.NBT.A.4 use mental math, benchmarks, compatible numbers or rounding.
- **Algorithms:** "Fluently" becomes "flexibly and efficiently" throughout. M.4.NBT.B.4 and M.5.NBT.B.5 drop the standard-algorithm requirement.
- **Edited, small:** M.K.CC.B.4 adds "previous number is one smaller".
- **Judgment calls (TSV):**
  - Visual-model examples and "describe the comparison in words and symbols" count as same.
  - M.3.OA.D.7 (rounding no longer named) is kept as same with 3.OA.D.8.
  - 1.G.A.3 dropping "quarters" counts as same.
  - 2.MD.B.5 using number lines counts as same.

## Sheets for state content
- **OVR:** M.K.CC.B.5 (subitizing) goes to Maryland's at-a-glance sheet K.NOS.B.8.
- **Fit-review extras (extra.tsv, 10 links):**
  - M.K.OA.A.3 and M.1.OA.C.5 → K.NOS.B.8. M.1.OA.C.5 also → K.NBT.A.1 and 1.NBT.B.2.
  - M.K.CC.B.4 → Maryland counting back K.NOS.A.3.
  - Estimation rows: M.3.NBT.A.1 → Maryland 3.NOS.D.6; M.4.NBT.A.3 and M.5.NBT.A.4 → Texas estimating 5.3A; M.5.NBT.A.4 → 5.NBT.B.7.
  - M.2.OA.B.2 → 1.OA.C.6.
  - M.3.OA.C.6 → 3.OA.B.5.
  - M.4.OA.D.6 → 3.OA.B.5 and Maryland 4.NOS.C.7.
- **State sheets:** none written under a WI code.
- **Fit review:** no partial rows remain.

## Pre-K
- Wisconsin Model Early Learning Standards, Fifth Edition, V.B Mathematical Thinking (2017): 6 rows. Mapped 2026-10-02 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.wi`), data in `data/prek/wi.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out.
- Source: https://dpi.wi.gov/sites/default/files/imce/standards/New%20pdfs/dpl-wmels-5-web.pdf
- Next: draft Wisconsin Early Learning and Development Guidelines (ELDGs) to replace WMELS, with new learning areas, strands and goals (new codes). Public review July–August 2026; no adoption or implementation date; DCF says to keep using WMELS until further notice (https://dcf.wisconsin.gov/eldg, checked 2026-10-02).
- Codes carry the document's math prefix, `V.B.EL.1` (domain V, Cognition and General Knowledge; B, Mathematical Thinking), since the bare codes repeat across domains.
- Domains: MT Mathematical Thinking (6: `V.B.EL.1` … `V.B.EL.6`).
- 5 rows link Head Start goals, 4 link other sheets (1 with no Head Start goal). No later-grade borrowing.

## Uncertain
- **When taught:** the TSV gives no first year in classrooms for the 2021 standards.
