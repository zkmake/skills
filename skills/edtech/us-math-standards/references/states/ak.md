# Alaska (AK)

In effect for 2026–27: the **Alaska Mathematics Standards**, adopted June 2012 by the State Board of Education & Early Development (the year they reached classrooms is not recorded). They are Common Core renumbered, with Alaska's own additions. Mathness models them as a crosswalk in Alaska's codes: edition `ak`, 170 K–5 rows, page `/alaska/`. No newer K–5 set had been adopted as of 2026-10.

## Documents
- Adopted standards PDF (DEED): https://education.alaska.gov/akstandards/math/adopted_math.pdf
- The math page now links a PDF of the 2022 formatting edit: https://education.alaska.gov/akstandards/math/adopted_math_edited7.25.22.pdf (2026-10-02; the 2012 PDF above still loads).
- Official Excel and Word editions, linked from https://education.alaska.gov/standards/mathematics :
  - https://education.alaska.gov/akstandards/math/adopted_math.xlsx (row list used to check codes)
  - https://education.alaska.gov/akstandards/math/adopted_math_edited7.25.22.docx (a formatting edit; same standards as the 2012 PDF)
- Background: DEED's 9 March 2012 letter to the House Education Committee presenting the proposed standards (local copy `ak_leg`), and a DEED fact sheet for educators and parents (`ak_ss`).
- Official Common Core crosswalk: **none** on the DEED site. Every mapping is ours, from reading each standard against CCSS text.

## Codes
- `Grade.Domain.Number` with no cluster letter. The documents print a trailing period ("1.MD.6."); Mathness drops it. Examples: K.OA.6, 1.CC.2, 3.MD.4, 4.MD.4, 5.MD.2.
- Domains are CCSS's (CC, OA, NBT, NF, MD, G) plus **1.CC** (counting in grade 1).
- **Numbers within a domain often differ from CCSS, so never match by number.** AK 3.MD.4 = CCSS 3.MD.B.3; AK 3.MD.9 = 3.MD.C.7; AK 4.MD.7 = 4.MD.C.5; AK 5.MD.3 = 5.MD.B.2. These codes also collide with other states' cluster-less codes that mean other content (Kansas 2.MD.9 is coins; Alaska 2.MD.9 is data).
- Lettered sub-parts (a, b, c…) are not coded separately in the Excel export and are folded into their standard.
- "(L)" after a standard means it is locally assessed: 3.MD.3, 3.MD.6, 4.OA.6, 4.MD.4, 4.MD.6, 5.MD.2, 5.MD.4.
- Rows per grade: K 26, 1 31, 2 27, 3 27, 4 31, 5 28.

## Against Common Core
- 170 rows: 141 same, 11 edited, 5 moved, 13 new. Every CCSS K–5 standard maps to at least one Alaska row.
- K: patterns of color, shape and size (K.OA.6, new); days of the week (K.MD.4, new); time to the hour (K.MD.5, moved from 1.MD.B.3); naming coins (K.MD.6, moved from 2.MD.C.8); make 5 as well as make 10 (K.OA.4); match a measuring tool to each attribute (K.MD.1). K.MD.3 drops sorting categories by count.
- Grade 1: skip count by 2s and 5s (1.CC.1, moved from 2.NBT.A.2); ordinal words (1.CC.2, new); estimate a set up to 20, then count (1.CC.6, new); count back (1.CC.3); aabb/abab patterns (1.OA.9, new); calendar and dates (1.MD.4, new); $ and ¢ signs (1.MD.5) and coin values to $1 (1.MD.6), both moved from 2.MD.C.8.
- Grade 2: number patterns with a rule (2.OA.5, new); any data in tables, graphs or line plots, not only lengths (2.MD.9, edited).
- Grade 3: choose English, metric or non-standard units for length, time, weight or temperature (3.MD.3, new); classify graph data using minimum and maximum (3.MD.6, new).
- Grade 4: patterns, tables and input/output rules described algebraically (4.OA.5, 4.OA.6); **elapsed time across U.S. time zones, including Alaska time** (4.MD.4, new); range and mode (4.MD.6, new).
- Grade 5: temperature and named units in conversions (5.MD.1); **elapsed time across world time zones** (5.MD.2, new); mean and median (5.MD.4, new). 5.OA.1 mentions parentheses only (no brackets or braces).
- Judgment calls: 1.CC.1 is marked moved to 2.NBT.A.2, since CCSS has no counting-by-2s standard. 1.CC.3–1.CC.5 are edited grade 1 NBT rows (counting and comparing without the place-value framing). 4.OA.6 is edited on 4.OA.C.5. 2.OA.5 is new, though it anticipates 4.OA.C.5. 4.MD.6 and 5.MD.4 are CCSS grade 6 statistics (6.SP), marked new because only K–5 codes are allowed. K.MD.6, 1.MD.5 and 1.MD.6 are marked moved (2.MD.C.8 is CCSS's only money standard); they could be read as new.

## Sheets for state content
- Redirects (OVR) to existing sheets:
  - Patterns: K.OA.6 → K.AT.B.3 (Maryland); 1.OA.9 → 1.PFA.1 (Virginia); 2.OA.5 → 2.NBT.A.2.
  - Calendar: K.MD.4 → K.MG.3 (Virginia, days and months); 1.MD.4 → 1.MG.3 (Virginia, time and calendar).
  - Coins and money signs: K.MD.6, 1.MD.5 and 1.MD.6 → 1.GR.C.6 (Maryland coins).
  - Counting: 1.CC.2 → MA.K.NSO.1.3 (Florida ordinals); 1.CC.6 → 1.NBT.A.1.
  - Measurement: 3.MD.3 → 3.MG.1 (Virginia, estimating and measuring).
  - Data: 3.MD.6 → 3.MD.B.3; 4.MD.6 → MA.4.DP.1.2 (Florida mode, median, range); 5.MD.4 → 5.PS.2 (Virginia mean, median, mode).
- Sheet written for Alaska: **AK.4.MD.4 "Time zones"** (grade 4, `time-zones` in `#skills/states-editions.ts`). It serves 4.MD.4 and 5.MD.2.
- Moved rows with no redirect serve from their CCSS code: K.MD.5 → 1.MD.B.3; 1.CC.1 → 2.NBT.A.2.
- Fit-review links (extra.tsv):
  - Counting: 1.CC.1 + 1.5B; 1.CC.3 + 1.NOS.A.1 and MA.1.NSO.1.4.
  - Measurement: 1.MD.1 + 1.MD.A.2; 3.MD.3 + 3.MD.A.2 and MA.3.M.1.1; 5.MD.1 + 4.MD.A.2 and MA.3.M.1.1 (its 5.MD.A.1 entry repeats the row's own code).
  - Calendar and money: 1.MD.4 + K.MG.3; 1.MD.5 + 2.MD.C.8.
  - Patterns: 1.OA.9 + K.AT.B.3; 2.OA.5 + 1.PFA.1; 4.OA.5 and 4.OA.6 + 4.5B.
  - Data: 2.MD.9 + 2.MD.D.10.
  - Make 5: K.OA.4 + PK.AT.A.2.

## Pre-K
- State of Alaska Early Learning Guidelines (2020): 4 rows. Mapped 2026-10-02 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.ak`), data in `data/prek/ak.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out.
- Source: https://education.alaska.gov/tls/EarlyLearning/pdf/2026-03-19_%20Guidelines_Alaska-Early-Learning-Guidelines.pdf
- Domains: CGK Cognition and General Knowledge (4: `Goal 34` … `Goal 41`).
- 4 rows link Head Start goals, 3 link other sheets (0 with no Head Start goal). No later-grade borrowing.

## Uncertain
- The research has no implementation (classroom) year.
- "No newer K–5 set adopted as of 2026-10" rests on DEED's standards page, which lists only the 2012 set. DEED's older review schedule listed a math "Scheduled Update 2026"; no sign it has started (2026-10-02 source check).
