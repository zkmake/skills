# Montana (MT)

In effect for 2026–27: the Montana Mathematics Content Standards. OPI's document says "Adopted 2025, Implemented 2026", and the rules (ARM 10.53.502–507) took effect on 1 July 2026. The standards are Common Core, shortened and renumbered, with additions: coins and calendar in K, coin values in grade 1. Mathness models them as a crosswalk in Montana's codes (edition `mt`, 155 rows, `/montana/`). No next edition is known.

## Documents
- Standards, K–5 on pp. 35–49 (Montana Office of Public Instruction, OPI): https://opifiles.mt.gov/Portals/182/Page%20Files/K-12%20Content%20Standards%20%26%20Revision/Math/PK-12%20Montana%20Math%20Standards_PUBLIC.pdf
- Official correspondence to Common Core, Appendix A (2025-07-02): https://opifiles.mt.gov/Portals/182/Page%20Files/K-12%20Content%20Standards%20&%20Revision/Appendix%20A%20Corresponding%20Standards_2025.07.02.pdf
  - It is the state's own crosswalk but has errors (see Uncertain), so the mappings were checked by reading the text.
- Rule text, "[Effective 7/1/2026] … version 2". K–5 wording and item counts match OPI's document.
  - https://www.law.cornell.edu/regulations/montana/Mont-Admin-r-10.53.502_v2
  - Grades 1–5 are _503_v2 through _507_v2.
- OPI math standards page: https://opi.mt.gov/Educators/Teaching-Learning/K-12-Content-Standards/Mathematics-Standards
- The OPI document also has a financial literacy appendix (Appendix C, for Montana HB535 of 2023). It is not part of the crosswalk.

## Codes
- `MT.<grade>.<domain>.<number>`, with no cluster letters: MT.K.CC.1, MT.K.MD.4, MT.1.MD.5, MT.3.NF.2. Sub-bullets are not coded.
- Domains are Common Core's: CC, OA, NBT, NF, MD, G.
- The ARM rule numbers the same items by grade rule and letter: 10.53.502 is K, through .507 for grade 5. For example, MT.K.CC.1 = ARM 10.53.502(1)(a) and MT.K.OA.6 = 10.53.502(2)(f).
- Numbering diverges from Common Core wherever Montana added or split a standard:
  - K: OA.6, MD.4–5.
  - Grade 1: OA.7–9, MD.4–5, G.2–4.
  - Grade 2: MD.11.
  - For example, MT.1.MD.4 is coins while MT.1.MD.5 is Common Core 1.MD.C.4 (data), and MT.1.OA.7 is a second row for 1.OA.C.6.
  - So after removing `MT.`, never read the rest as a Common Core code.
- Mathness search does not strip `MT.` from queries.
- Pre-K: no state pre-K codes are mapped, so pre-K follows Head Start's goals.

## Against Common Core
- 155 K–5 rows (K 25, 1 24, 2 27, 3 25, 4 28, 5 26): 142 same, 9 edited, 3 moved, 1 new.
- Many standards are shortened restatements that drop Common Core's examples, limits or sub-parts (2.OA.C.4's 5 × 5 limit, 4.MD.A.1's unit list). These stay "same".
- No Common Core standard is dropped entirely. Partly dropped:
  - One-to-one counting and "last number = count" (K.CC.B.4a/b).
  - Naming shapes in the environment (K.G.A.1).
  - Properties as strategies in 1.OA.B.3: commutativity moves to K, and associativity is not stated.
  - "Know from memory" in 2.OA.B.2.
  - The line plot in 2.MD.D.9, where any display is allowed.
- K:
  - Commutative property (MT.K.OA.6, moved from 1.OA.B.3).
  - Describe coins and know their names (MT.K.MD.4, moved).
  - Days, months, years and seasons (MT.K.MD.5, new).
  - Counting tied to quantity (MT.K.CC.4).
  - Position words only (MT.K.G.1).
- Grade 1:
  - Coin values (MT.1.MD.4, moved).
  - Subtract a multiple of 10 from any two-digit number (MT.1.NBT.6).
  - Flexible composing and decomposing (MT.1.OA.3).
- Grade 2: solve add/subtract problems of all types from a graph or table (MT.2.MD.11).
- Grade 3: customary as well as metric units for liquid volume and mass (MT.3.MD.2).
- Grade 4: test multiples up to 1,000 (MT.4.OA.4).
- Many standards add "should incorporate cultural context relating to Montana Indigenous Peoples and local communities" (Indian Education for All). This is a context requirement, not math content, and does not change the kind.
- Judgment calls (ours):
  - MT.K.OA.6, MT.K.MD.4 and MT.1.MD.4 are marked moved. Appendix A says "no corresponding standard" for all three.
  - Appendix A gives MT.1.G.2 and MT.2.MD.11 no Common Core match. We map them to the second halves of 1.G.A.1 and 2.MD.D.10.
  - MT.2.NBT.3 also gets 2.NBT.A.2, because "count within 1000" moved into it.

## Sheets for state content
- OVR:
  - MT.K.MD.4 and MT.1.MD.4 go to Maryland's grade 1 coin sheet 1.GR.C.6.
  - MT.K.MD.5 goes to Virginia's "Days and months", K.MG.3.
- MT.K.OA.6 serves from 1.OA.B.3.
- Fit-review extras:
  - MT.K.G.1: Head Start's position goal P-MATH 10.
  - MT.2.MD.9: 2.MD.D.10.
  - MT.3.MD.2: Virginia's pounds, ounces, cups and gallons sheet, 3.MG.1.
  - MT.1.OA.3 and MT.2.OA.2: 1.OA.C.6. In mt.ts the code is listed twice ("1.OA.C.6,1.OA.C.6"), a harmless duplicate.
- No sheets were written under an MT code.
- Fit review: no partial rows remain.

## Uncertain
- Year stamps disagree:
  - editions.ts says year "2025", the adoption year.
  - mt.ts's header and gen.py `NAMES` say 2026, the "Montana Mathematics Content Standards (2026)".
  - OPI's own phrasing is "Adopted 2025, Implemented 2026".
- Errors in Appendix A:
  - MT.K.CC.4 is listed as "CCSS.K.CC.B.1 and K.CC.B.1.c". No such codes exist; K.CC.B.4/4c is meant.
  - MT.3.MD.8 is listed as 3.MD.C.8 (the real code is 3.MD.D.8).
  - Grade 4 MD/G and grade 5 NF/MD/G codes are missing cluster letters or grade numbers.
