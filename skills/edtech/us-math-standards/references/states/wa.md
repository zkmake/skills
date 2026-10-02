# Washington (WA)

**In effect for 2026–27:** Washington State K–12 Learning Standards for Mathematics, which are Common Core as written (adopted 2011). Mathness shows them as Common Core's own standards and codes under Washington's name (edition `wa`, `/washington/`, a hub page only; grade pages are Common Core's).

**Next edition:** WA Math 2026, adopted 18 June 2026 and required from 2027–28. It is in Mathness as a crosswalk: edition `wa27`, 172 rows, `/washington-2027-28/`. Most of this file is about that edition.

## Documents
- **Landing page** (Washington Office of Superintendent of Public Instruction, OSPI): https://ospi.k12.wa.us/student-success/resources-subject-area/mathematics/mathematics-k-12-learning-standards
  - On timing it says: "Educators have the 26-27 school year to begin exploring, learning about, and using the newly revised standards. The standards are required to be used with students in the 27-28 school year."
  - It calls WA Math 2026 "a revision of the Common Core State Standards (2011)".
- **Standards** (Word, v3.1, August 2026; treated as authoritative): https://ospi.k12.wa.us/sites/default/files/2026-08/wa-learning-standards-mathematics.docx
  - The PDF twin is at the same path with `.pdf`.
  - An earlier June 2026 file, `.../2026-06/wa-learning-standards-mathematics_0.docx`, also exists.
  - The Word doc ends with an adoption statement: "Adopted on this 18th day of June 2026," signed by Superintendent Chris Reykdal.
- **Excel, "Final adoption version", v3.1:** https://ospi.k12.wa.us/sites/default/files/2026-08/math26-final-adoption-spreadsheet.xlsx
  - Its **Crosswalk tab is OSPI's official Common Core crosswalk**: every K–5 Common Core code maps 1:1 to a WA code, and the new standards are marked "NA".
- **Background, both June 2026:**
  - https://ospi.k12.wa.us/sites/default/files/2026-06/math-domain-revisions.pdf
  - https://ospi.k12.wa.us/sites/default/files/2026-06/whats-new-k-12-learning-standards-mathematics.pdf
- All were fetched from ospi.k12.wa.us on 2026-10-01; no archive fallback was needed.

## Codes (WA Math 2026)
- **Format:** `M.<grade>.<domain>.<category>.<number>`. For example, M.3.R.MD.5 is math, grade 3, Relationships, Common Core domain MD, Common Core standard 5.
  - The category is the original Common Core domain (CC, OA, NBT, NF, MD, G) or the new DS (data science).
  - The number is Common Core's standard number, kept on purpose. The cluster letter is dropped.
- **Domains:**
  - DA = Data Analysis.
  - Q = Quantity (the Word doc's coding key says "Quantities"; elsewhere it is "Quantity").
  - R = Relationships.
  - SR = Spatial Reasoning.
  - Mathness names Q, R and SR in `NEW_DOMAINS`.
- **One Common Core domain can be split across WA domains.** Grade 3 MD sits in SR (MD.1, MD.8), DA (MD.2–4) and R (MD.5–7). Other examples:
  - Grade 2 OA.4 is in SR.
  - Grade 5 OA.3 is in DA.
  - NBT moves between Q and R by grade.
- **To reach Common Core from a WA code:** drop the domain, then add back the cluster letter from Common Core (M.3.R.MD.5 → 3.MD.C.5).
- **Lettered indicators** (a, b, c) appear in the text without codes of their own. They mirror Common Core sub-parts and are folded.
- **Pre-K:** Head Start's goals.

## Against Common Core (WA Math 2026)
- **Row counts:** 172 K–5 rows (K 26, 1 25, 2 30, 3 29, 4 32, 5 30).
  - 148 come from Common Core: 135 same, 13 edited, 0 moved.
  - 24 are new: DS.1–4 in every grade. No Common Core K–5 standard is dropped.
- **Data science, four per grade, all in DA:**
  - DS.1: pose questions.
  - DS.2: collect or consider data.
  - DS.3: analyze or visualize.
  - DS.4: interpret or communicate.
  - Grades 3–5 add technology, data-source accuracy, missing values and comparing two variables.
- **Edited:**
  - **Memorization removed:** 2.OA.B.2 (sums) and 3.OA.C.7 (products).
  - **Standard algorithm not required:** 4.NBT.B.4 and 5.NBT.B.5; 3.NBT.A.2 drops "and algorithms".
  - **Rounding becomes estimation by varied strategies:** 4.NBT.A.3 and 5.NBT.A.4. "Including rounding" is dropped from 3.OA.D.8 and 4.OA.A.3; 3.NBT.A.1 is unchanged.
  - **1.OA.C.6:** add within 20, subtract within 10.
  - **Line plots:** 4.MD.B.4 and 5.MD.B.2 lose the fixed 1/2, 1/4 and 1/8 units.
  - **5.G.B.4:** "classify into categories" replaces "classify in a hierarchy".
- **Treated as same:** added "efficiently, flexibly, and accurately", "real world", visual models and reasonableness checks, and partial quotients named in 5.NBT.B.6.
  - Borderline cases: 1.OA.B.3, 3.NF.A.1, 4.NF.A.1, the 4.NF.B.3 stem, and K.G.B.6 (now explicitly 2-D).

## Sheets for state content (wa27)
- **OVR sends each grade's DS rows to that grade's data sheets:**
  - K → K.MD.B.3
  - Grade 1 → 1.MD.C.4
  - Grade 2 → 2.MD.D.10
  - Grade 3 → 3.MD.B.3
  - Grades 4–5 → New Jersey's "Choosing and cleaning data" sheet NJ.4.DL.A.2, plus 4.MD.B.4 or 5.MD.B.2
- **Fit-review extras (extra.tsv, 24 links)** add, among others:
  - 2.MD.D.10 for grades 1 and 3
  - Maryland's mode, range and misleading graphs, 5.DS.A.1
  - Texas 5.9C
  - Maryland estimation 3.NOS.D.6 (M.3.Q.OA.8)
  - Texas estimating 5.3A (M.4.Q.OA.3)
- No sheets were written under a WA code.
- **Fit review:** no partial rows remain.

## Uncertain
- **Same vs edited** is our judgment from comparing Common Core text (Crosswalk tab, column C) with the WA Word doc.
- **Partial overlaps not in the ccss column** (OSPI marks them NA): M.1.DA.DS.3 ~ 1.MD.C.4, M.2.DA.DS.2 ~ 2.MD.D.10, M.3.DA.DS.3 ~ 3.MD.B.3.
- **Text differences:** in about 25 rows the Crosswalk tab's WA text differs slightly from the Word doc and the K–8 tab (typos, an omitted example, word order). Codes agree everywhere.
- **Current edition's name:** editions.ts uses "Washington State K–12 Learning Standards for Mathematics" (2011) for both editions. gen.py calls the new one "WA Math 2026".
