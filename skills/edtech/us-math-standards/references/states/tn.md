# Tennessee (TN)

In effect for 2026–27: Tennessee Math Standards, called "Tennessee Academic Standards for Mathematics" in Mathness. The State Board of Education approved them on 5 February 2021, and they have been in classrooms since 2023–24. Mathness models them as a crosswalk in Tennessee's own codes: edition `tn`, 154 rows, `/tennessee/`. There is no next edition in Mathness. The TSV says the set stays in effect until revised standards arrive in 2031–32.

## Documents
- Standards (marked "Revised November 6, 2020", the version the Board approved in February 2021): https://www.tn.gov/content/dam/tn/stateboardofeducation/documents/standards/math/TN_Revised_Standards_K-4th_year_math_6-9-2022.pdf (Tennessee State Board of Education). Mathness credits the Tennessee Department of Education as publisher.
- SBE math standards page: https://www.tn.gov/sbe/committees-and-initiatives/standards-review/math.html
- TDOE page: "The state board adopted revised state math standards in February 2021. They will be implemented in classrooms during the 2023-24 school year."
- Official crosswalk, revised April 2022: it maps the 2017 TN standards to the 2023-implemented TN standards, not to Common Core. https://www.tn.gov/content/dam/tn/stateboardofeducation/documents/standards/math/TN%20Math%20Standards%20Crosswalk_2022_0.pdf
- There is no official TN-to-Common Core crosswalk. Every Common Core link here is our judgment from the text.

## Codes
- Grade.Domain.Cluster.Standard (K.MD.B.3, 1.NBT.C.7, 3.MD.A.1b), with Common Core's domain and cluster names.
- **Parser trap:** many codes equal Common Core codes but mean other content. Never assume a TN code means the Common Core standard with the same code (`linksOnly` rows exist for this).
  - K.CC is renumbered after the new pattern standard K.CC.A.4. TN K.CC.B.5 is CC K.CC.B.4, and B.6, C.7 and C.8 are CC B.5, C.6 and C.7.
  - TN K.MD.B.3 is coins (CC K.MD.B.3 is sorting). TN K.MD.C.4 is CC K.MD.B.3.
  - 1.NBT is shifted by one: TN 1.NBT.B.3 to C.7 are CC 1.NBT.B.2 to C.6. TN 1.NBT.A.2 is skip-count patterns.
  - TN 1.MD.B.4 is coins, and TN 1.MD.C.5 is CC 1.MD.C.4.
  - TN 2.OA.D.5 is hundreds-chart patterns (CC 3.OA.D.9). TN 3.NBT.A.4 is numbers to 100,000.
- 3.MD.A.1 is split into 3.MD.A.1a (time) and 3.MD.A.1b (money), as in the TN crosswalk. Other lettered parts restate Common Core and are folded.
- Merged standards: CC 1.OA.C.5 and 1.OA.C.6 into TN 1.OA.C.5; 2.NBT.B.9 into 2.NBT.B.7; 5.G.B.4 into 5.G.B.3.
- Pre-K: own codes, see Pre-K.

## Against Common Core
- 154 K–5 rows (K 24, 1 23, 2 26, 3 28, 4 28, 5 25): 123 same, 23 edited, 6 moved, 2 new.
- No Common Core standard is dropped whole. Parts are dropped:
  - One-step mass and volume word problems (3.MD.A.2).
  - The estimation check in 4.OA.A.3.
  - Large-to-small conversions and conversion tables (4.MD.A.1), moved to TN 5.MD.A.1.
  - Cubes and faces in 2.G.A.1.
  - Measuring to make data in 2.MD.D.9.
  - The limit of 10 in K.CC.C.6.
- New: repeating patterns in K (K.CC.A.4); polygon or not (3.G.A.3).
- Earlier or more than Common Core:
  - K:
    - Count by 5s, and back from 10 (K.CC.A.1).
    - Fluency within 10, where Common Core has within 5 (K.OA.A.5).
    - Coins by size, color and value (K.MD.B.3).
  - Grade 1:
    - Count by 2s and 5s, and back from 20 (1.NBT.A.1).
    - Skip-count patterns to 120 (1.NBT.A.2).
    - Like coins under $1 with ¢ (1.MD.B.4).
  - Grade 2:
    - Fluency within 30 (2.OA.B.2).
    - Addition and hundreds-chart patterns (2.OA.D.5).
    - Whole dollars to $100 (2.MD.C.8).
    - Pictograph keys of 2, 5 and 10 (2.MD.D.10).
  - Grade 3:
    - Numbers to 100,000 (3.NBT.A.4).
    - Money to $1,000 (3.MD.A.1b).
  - Grade 4:
    - Straight and reflex angles (4.G.A.1).
    - Triangles by angle (4.G.A.2).
    - Unit sense only, with conversions moved to grade 5 (4.MD.A.1–2).
- Judgment calls:
  - 1.NBT.A.2 is marked moved to 2.NBT.A.2, and 2.OA.D.5 moved to 3.OA.D.9.
  - 3.MD.A.1b is mapped to 2.MD.C.8 as a grade 3 extension.
  - K.OA.A.5 also lists 1.OA.C.6.
  - 5.MD.A.1 also lists 4.MD.A.1–2.
  - "Same" means only rewording, examples, or limits that Common Core implies.

## Sheets for state content
- OVR:
  - Pattern row K.CC.A.4 goes to Maryland's repeating-patterns sheet K.AT.B.3.
  - Coin rows K.MD.B.3 and 1.MD.B.4 go to Maryland's grade 1 coin sheet 1.GR.C.6.
  - Polygon-or-not 3.G.A.3 goes to 2.G.A.1.
- Other moved rows serve from their Common Core codes. Fit-review extras (extra.tsv, 20 links):
  - 3.NBT.A.4 gets Texas numbers to 100,000 (3.2A).
  - 3.MD.A.1b gets Virginia making change (3.NS.4).
  - 1.NBT.A.1–2 get Texas skip-counting objects (1.5B).
  - K.CC.A.1 gets Maryland counting back (K.NOS.A.3).
  - K.OA.A.5 gets Florida facts within 10 (MA.K.NSO.3.2).
  - 4.G.A.2 gets Virginia triangle sort (5.MG.3).
  - 4.MD.A.1 gets Virginia customary units (3.MG.1).
  - 2.NBT.A.2 gets Maryland skip counting (2.NOS.A.2).
- No sheets were written under a TN code.
- Fit review: no partial rows remain.

## Pre-K
- Tennessee Early Learning Developmental Standards (TN-ELDS) for Four-Year-Olds (2018), mathematics: 21 rows. Mapped 2026-10-01 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.tn`), data in `data/prek/tn.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out, so numbering can skip.
- Source: https://www.tn.gov/content/dam/tn/education/standards/tnelds/std_tnelds_4yo_2018.pdf
- Codes Common Core-shaped: `PK.CC.A.1`, `PK.OA.A.1`, `PK.MD.A.1`, `PK.G.A.1` (PK.CC.A.2 is left out; PK.G.A.4 and PK.G.B.4 both exist, as in the document).
- Domains: CC (6), OA (4), MD (4), G (7).
- 17 rows link Head Start goals, 9 link other sheets. PK.OA.A.3 → PK.NOS.D.10; PK.OA.A.4 → PK.AT.A.2; PK.MD.B.3 (coins) borrows 1.GR.C.6 and K.9D; PK.MD.C.4 → PK.DS.A.1, PK.DS.A.2.

## Uncertain
- landscape.md says the current set runs to 2031–32; the TSV gives only "until revised standards in 2031-32". Neither is in editions.ts, and the review's start year is unconfirmed.
- Name: editions.ts says "Tennessee Academic Standards for Mathematics". The TSV header says "Tennessee Math Standards".
- The current PDF's file name says 6-9-2022, but its text is marked "Revised November 6, 2020".
