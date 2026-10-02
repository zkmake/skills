# Hawaiʻi (HI)

In effect for 2026–27: Hawaiʻi Common Core Standards for Mathematics (2010), Common Core as written; Mathness serves it as a Common Core-code edition (`hi`, /hawaii/). Next: the revised Hawaiʻi Common Core Standards for Mathematics (HCCS-Math, K–12), approved by the Board of Education on 18 June 2026, for elementary grades from 2027–28; Mathness models them as a crosswalk edition (`hi27`, "Hawaiʻi (2027–28)", /hawaii-2027-28/, 150 rows), added late on 2026-10-01.

## Documents
- Revised standards, Hawaiʻi Department of Education, "Hawaiʻi Common Core Standards for Mathematics", dated 17 July 2026 (K–12: K–8 by grade, then high school courses).
- Department page for the revision draft: https://hawaiipublicschools.org/2025-math-standards-revision-draft/ ; standards page: https://learningdesign.hawaiipublicschools.org/standards-based-content/mathematics
- Board of Education materials: Student Achievement Committee, 9 Apr 2026 (math performance standards) https://boe.hawaii.gov/wp-content/uploads/20260409_SAC_mathperfstandards.pdf ; 14 May 2026 committee item https://boe.hawaii.gov/wp-content/uploads/20260514_SAC_math.pdf (the Department's memo recommending approval); General Business Meeting of 18 June 2026, whose minutes record the unanimous vote approving the revised K–12 standards https://boe.hawaii.gov/wp-content/uploads/gbm_minutes_20260618.pdf ; agendas https://boe.hawaii.gov/agendas/
- Publisher: Hawaiʻi State Department of Education. No separate official crosswalk; the revision keeps Common Core's content and order, so the crosswalk is near one-to-one.

## Codes
- The revision **drops Common Core's cluster letters**: `K.CC.2`, `2.NBT.2`, `3.OA.8` (Common Core `K.CC.A.2`, `2.NBT.A.2`, `3.OA.D.8`). Domains are Common Core's (CC, OA, NBT, NF, MD, G).
- Two inserted standards renumber what follows in their domain: kindergarten data `K.MD.4` and grade 1 coins `1.MD.4`, so **Common Core's 1.MD.4 is Hawaiʻi's 1.MD.5**. Map by content, never by the code string.

## Against Common Core
- 150 K–5 rows; 144 carry a Common Core standard unchanged in substance; 6 differ:
  - K.CC.2: count forward **and backward** from any number (served also by Maryland's counting-back sheet `K.NOS.A.3`).
  - K.MD.4 (new): ask questions about the classroom that sorting and counting can answer, and collect the data.
  - 1.MD.4 (new): values of penny, nickel, dime and quarter in cents; compare single coins.
  - 2.NBT.2: count within 1,000 and skip-count by 2s, 5s, 10s and 100s (adds 2s).
  - 2.MD.8: money problems within a dollar with coins and within $100 with bills.
  - 2.MD.9: pose questions measurement data can answer, then measure and make a line plot.

## Sheets for state content
- K.MD.4 → the kindergarten sort-and-count sheet (`K.MD.B.3`); 1.MD.4 → Maryland's grade 1 coin sheet (`1.GR.C.6`); 2.NBT.2 → Maryland's skip-counting sheet (`2.NOS.A.2`); K.CC.2 → Maryland's counting-back sheet (`K.NOS.A.3`). No sheets written under Hawaiʻi codes.

## Pre-K
- Hawaiʻi Early Learning and Development Standards (HELDS): Framework and Continuum from Birth to End of Kindergarten, 48 months–kindergarten entry (2014): 13 rows. Mapped 2026-10-02 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.hi`), data in `data/prek/hi.tsv`; the rows replace Head Start's 10 goals in this state's set and in `hi27`, which reuses them. Summaries are ours; standards the state says begin in kindergarten are left out.
- Source: https://earlylearning.hawaii.gov/pdfs/HELDS-continuum-2014_04_011.pdf
- Domains: NS Number Sense (6: `GK.KE.a` … `GK.KE.f`); OP Operations (1: `GK.KE.g`); MD Measurement and Data (3: `GK.KE.h` … `GK.KE.j`); G Geometry (3: `GK.KE.k` … `GK.KE.m`).
- 12 rows link Head Start goals, 6 link other sheets (1 with no Head Start goal). No later-grade borrowing.

## Uncertain
- None recorded. Fit-reviewed after the other crosswalks: 5 of the 6 rows that differ fit as linked; 2.MD.9 (pose a question measurement data can answer) became good once the grade 2 "measure your own" section opened with "Your question:".
