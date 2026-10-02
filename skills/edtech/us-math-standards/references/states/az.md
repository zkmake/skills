# Arizona (AZ)

In effect for 2026–27: the **Arizona Mathematics Standards**, adopted by the State Board of Education in December 2016. ADE's 2025 grade documents say "Adopted December 2016, Updated 1-29-2025"; the update only adds AASA Essential Standards marks. Mathness models them as a crosswalk in Arizona's codes (which look like CCSS codes): edition `az`, 154 K–5 rows, page `/arizona/`. No newer standards were found for 2026–27.

## Documents
- **azed.gov and cms.azed.gov return a Cloudflare challenge (403) to scripted fetches.** The official ADE PDFs were read from Internet Archive copies (`https://web.archive.org/web/<timestamp>id_/<url>`, dated 2023–2025):
  - K: https://www.azed.gov/sites/default/files/2016/12/Math%20Final%2000Kindergarten%20Standards%204_2_2018.pdf
  - 1: https://www.azed.gov/sites/default/files/2016/12/Math%20Final%2001First%20Grade%20Standards%204_2_2018.pdf
  - 2: https://www.azed.gov/sites/default/files/2016/12/Math%20Final%2002Second%20%20Standards%204_2_2017.pdf
  - 3: https://www.azed.gov/sites/default/files/2025/03/Math%20Grade%203%20Final%202025.pdf (and 2016/12/…03Third Grade Standards 4_2_2018.pdf)
  - 4: https://www.azed.gov/sites/default/files/2025/03/Math%20Grade%204%20Final%202025.pdf (and 2016/12/…04Fourth Grade Standards 4_2_2017.pdf)
  - 5: https://www.azed.gov/sites/default/files/2025/04/Math%20Grade%205%20Final%202025.pdf (and 2016/12/…05Fifth Grade Standards 4_2_2018.pdf)
- The 2025 K–2 documents weren't archived, so the 2018-updated K–2 PDFs were used. The grade 3–5 texts of 2025 and 2018 agree.
- Official comparison: "2016 Math K-5 Red-line Standards", a draft-to-final redline with reviewer notes. It is **not** a CCSS table: https://www.azed.gov/sites/default/files/2017/04/2016%20Math%20K-5%20Red-line%20Standards_11-30-16.pdf . The CCSS links are ours, from comparing texts.

## Codes
- `Grade.Domain.Cluster.Standard`, as in CCSS (K.CC.A.1, 1.MD.B.3b, 3.MD.C.8). Sub-parts that restate CCSS sub-parts are folded into their standard.
- Splits coded separately and kept as rows: 1.MD.B.3a (time) and 1.MD.B.3b (coins); 3.MD.A.1a (time) and 3.MD.A.1b (money). There is no plain 1.MD.B.3 or 3.MD.A.1 row. The 2025 grade 3 document prints 3.MD.A.1 with a./b. parts instead; Mathness keeps the 2016/2018 codes.
- Standards Arizona added take new numbers: K.NBT.B.2, 3.OA.D.10, 4.OA.C.6, 5.OA.B.4.
- **Codes that look like CCSS but differ:**
  - AZ 3.MD.C.8 = CCSS 3.MD.D.8 (perimeter moved into cluster C); there is no AZ 3.MD.D.8.
  - AZ 5.OA.B.4 (primes) has no CCSS twin.
  - AZ 4.OA.B.4 has no prime/composite part.
- The kindergarten PDF prints OA codes with a zero ("K.0A.A.1"); read them as K.OA.
- Rows: 154 = CCSS's 148 + K.NBT.B.2, 3.OA.D.10, 4.OA.C.6, 5.OA.B.4, + one row each from the 1.MD.B.3 and 3.MD.A.1 splits.

## Against Common Core
- 154 rows: 142 same, 8 edited, 3 moved, 1 new. No CCSS standard is dropped whole.
- Parts dropped:
  - 4.OA.B.4: prime/composite (moved to AZ 5.OA.B.4) and "multiple of a given one-digit number".
  - 5.NBT.A.2: whole-number exponents for powers of 10.
  - 2.OA.C.3: the doubles equation for even numbers.
  - 1.OA.C.6: strategies within 20 (AZ fluency is within 10).
  - 2.NBT.B.6: cut from four addends to three.
  - 4.OA.C.5: shape patterns.
- K: add and subtract within 10 using place-value ideas (K.NBT.B.2, new); rhombus and trapezoid named (K.G.A.2); comparisons from 0 to 10 (K.CC.C.7).
- Grade 1: skip count by 2s and 10s (1.NBT.A.1); **coins: pennies, nickels, dimes, quarters by name and value** (1.MD.B.3b, moved from 2.MD.C.8).
- Grade 3: **money word problems to $20.00 with $, ¢ and the decimal point** (3.MD.A.1b, moved, mapped to 2.MD.C.8 and 4.MD.A.2); the term "unit fraction" (3.NF.A.2c); measuring to the quarter inch (3.MD.B.4).
- Grade 4: a remainder as a fraction of the divisor (4.OA.A.3); convert smaller units to larger as well as larger to smaller (4.MD.A.1, also mapped to 5.MD.A.1).
- Grade 5: **primes and prime factorization** (5.OA.B.4, moved from 4.OA.B.4; prime factorization itself is CCSS 6.NS.B.4).
- Judgment calls: 3.OA.D.10 and 4.OA.C.6 are marked same. They are the estimation sentences of CCSS 3.OA.D.8 and 4.OA.A.3, split out, and map back to those codes. A kind of "same" allows rewording, examples, and limits that CCSS also implies.

## Sheets for state content
- Redirects (OVR):
  - K.NBT.B.2 → K.OA.A.2.
  - 1.MD.B.3b → 1.GR.C.6 (Maryland's grade 1 coin sheet).
  - 5.OA.B.4 → 4.OA.B.4 and 5.NS.2 (Virginia, prime vs composite and prime factorization).
- 3.MD.A.1b (moved, no redirect) serves from 2.MD.C.8 and 4.MD.A.2.
- Fit-review links (extra.tsv):
  - K.NBT.B.2 + K.OA.A.4.
  - 1.NBT.A.1 + 1.5B (Texas skip counting), 2.NOS.A.2 and 1.NOS.A.1.
  - 3.MD.A.1b + 3.NS.4 (Virginia money and making change). The full review had marked it partial; after this link it was rated good.
  - 4.OA.A.3 + 4.NBT.B.6.
- No sheets were written for Arizona alone.

## Uncertain
- The K–2 2025 updates weren't seen (not archived). They are assumed to change only the AASA marks, as in grades 3–5.
- 3.MD.A.1b's mapping to both 2.MD.C.8 and 4.MD.A.2 is a judgment call.
