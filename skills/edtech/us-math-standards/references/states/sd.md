# South Dakota (SD)

In effect for 2026–27: South Dakota State Standards for Mathematics (adopted March 2018), Common Core with money earlier and a few edits; Mathness models it as a crosswalk in South Dakota's own codes (edition `sd`, 153 rows, `/south-dakota/`). Next: the 2026 South Dakota Mathematics Standards (adopted 4 May 2026), required from 2027–28, edition `sd27` at `/south-dakota-2027-28/`.

## Documents
- Current standards, K–5 on pp. 11–39: https://doe.sd.gov/contentstandards/documents/0521-Math-Standards.pdf (South Dakota Department of Education).
- SD DOE math page, lists the 2018 and the 2026 standards: https://doe.sd.gov/contentstandards/math.aspx
- "Unpacked" cluster documents, used to confirm codes and cluster membership, e.g. https://doe.sd.gov/contentstandards/documents/math/MD-1B.pdf (also MD-2C, MD-3C, OA-4A).
- No official SD-to-Common Core crosswalk. Codes follow Common Core's, so rows were matched code by code and each text compared. All mappings are ours.

## Codes
- Grade.Domain.Cluster.Number in full (1.MD.B.5). The unpacked documents shorten it to 1.MD.5 and name clusters 1.MD.B.
- Cluster letters differ from Common Core in two places:
  - Grade 1: 1.MD.B holds 1.MD.B.3 (time) and 1.MD.B.5 (coins); data stays 1.MD.C.4.
  - Grade 3: there is no cluster D, so perimeter is 3.MD.C.8 (Common Core 3.MD.D.8) and money is 3.MD.C.9.
- K.MD.C.4 is pennies. Common Core has no K.MD.C cluster, so never read SD codes as Common Core content without checking.
- Separate rows kept for South Dakota's own splits: 2.MD.C.8a and 2.MD.C.8b, and 4.OA.A.1a and 4.OA.A.1b. Lettered parts that restate Common Core are folded into their standard: K.CC.B.5a/b, K.OA.A.2a/b, 1.NBT.A.1a–c, 1.NBT.C.4a/b, 2.OA.B.2a/b, 3.OA.C.7a/b, 4.OA.B.4a–d, 5.NBT.B.7a/b, 5.NF.A.2a/b, 5.MD.C.5a–d.
- Pre-K: no state pre-K codes are mapped, so pre-K follows Head Start's goals.

## Against Common Core
- 153 K–5 rows (K 23, 1 22, 2 27, 3 26, 4 29, 5 26): 141 same, 8 edited, 4 moved, 0 new. No Common Core K–5 standard was dropped.
- K: count on within 100 and back from within 20 (K.CC.A.2); pennies to 20 (K.MD.C.4).
- Grade 1: commutative, associative and zero properties (1.OA.B.3); nickels and dimes as pennies (1.MD.B.5); regular and irregular shapes, and spheres (1.G.A.2).
- Grade 3: money written with $ and a decimal point (3.MD.C.9). Multiplication fluency stays in grade 3, but products from memory move to grade 4 (3.OA.C.7 edited, 4.OA.A.1b moved).
- Grade 4: any algorithm is accepted for adding and subtracting (4.NBT.B.4). Right, acute and obtuse triangles are classified (4.G.A.2).
- Grade 5: only parentheses, with no brackets or braces (5.OA.A.1). Any algorithm is accepted for multiplying (5.NBT.B.5).
- Judgment calls:
  - K.MD.C.4 and 1.MD.B.5 are marked moved from 2.MD.C.8, though they could be read as new.
  - 3.MD.C.9 is marked moved, from 2.MD.C.8 plus 4.NF.C.6.
  - 2.MD.C.8a (coin values to $1) is marked same.
  - 1.NBT.C.4 is marked same, though its heading says "add and subtract" while its parts describe only adding.
  - Small additions are treated as same: examples in 3.NF.A.1 and 4.OA.A.1a, a context list in 5.MD.A.1, "need not simplify" in 5.NF.A.1, and a number line in 4.NF.C.6.

## Sheets for state content
- OVR: the coin rows K.MD.C.4 and 1.MD.B.5 go to Maryland's grade 1 coin sheet 1.GR.C.6.
- Other moved rows serve from their Common Core codes. Fit-review extras (extra.tsv, 10 links; 1.MD.B.5 also gets 2.MD.C.8):
  - 3.MD.C.9 also gets Virginia's making-change sheet 3.NS.4.
  - 4.OA.A.1b also gets Maryland 4.NOS.C.7.
  - K.CC.A.2 gets Maryland's counting-back sheet K.NOS.A.3.
  - 1.G.A.2 gets Texas solids 1.6E and 2.G.A.1.
  - 4.G.A.2 gets Virginia's triangle sort 5.MG.3 and 4.G.A.1.
- No sheets were written under an SD code.
- Fit review: no partial rows remain for `sd` or `sd27`.

## Next edition: South Dakota (2027–28), id `sd27`
- 2026 South Dakota Mathematics Standards. The State Board adopted them on 4 May 2026 (the cover says "Adopted May 4, 2026").
- SD DOE timeline: transition 2026–27, implementation 2027–28, state assessment 2028–29. They replace the 2018 Common Core–based set.
- Documents:
  - Standards: https://doe.sd.gov/contentstandards/documents/0526-MathStandards.pdf (K–5 on pp. 1–15).
  - Assessed Standards Timeline: https://doe.sd.gov/contentstandards/documents/StandardsTimeline.pdf
  - Revision timeline (Oct 2025): https://doe.sd.gov/contentstandards/documents/StandardsTimeline-1025.pdf
  - KOTA news, 5 May 2026.
- No official 2026-to-Common Core or 2018-to-2026 crosswalk exists.
- Codes are Grade.Domain.Number (K.N.1, 3.M.17, 4.MF.2): no cluster letter and no lettered parts. Numbers run on through a domain.
  - Domains: N Numbers; OA Operations & Algebraic Thinking; M Measurement (time, money and data too); G Geometry (angles, volume and the coordinate plane in grades 4–5); MF Mathematical Fluency; F Fractions (grade 2 has only 2.F.1; grades 3–5).
  - Mathness names MF and F in `NEW_DOMAINS`.
  - Parser trap: these short codes look like Utah-style Common Core codes but mean other content. SD27 1.OA.2 is the properties of addition, while Common Core 1.OA.2 is three addends. SD27 K.G.3 is naming and drawing shapes, while Common Core K.G.3 is flat vs solid.
- 251 rows (K 37, 1 35, 2 37, 3 50, 4 51, 5 41): 197 same, 35 edited, 14 moved, 5 new. Rows split Common Core standards finely, e.g. 3.M.1–3.M.8 and 5.G.11–5.G.14.
- New: clocks and time of day (K.M.3); calendars (K.M.4); distance to the next or previous ten or hundred (2.N.5); regular vs irregular shapes (2.G.3); polygon or not (3.G.4).
- Earlier than Common Core:
  - Pennies and dimes in K; all coins, and mixed coins to $1, in grade 1.
  - Subtracting a one-digit number from a two-digit number in grade 1 (1.OA.7).
  - Five-minute time problems (2.M.8) and quadrilateral types (2.G.2) in grade 2.
  - In grade 3: four-digit place value and numbers to 10,000 (3.N.2–3); money with decimals to $100 (3.M.17); polygons by sides (3.G.5).
  - Order of operations without parentheses in grade 4 (4.OA.13).
- Later: all multiplication and division facts from memory move to grade 4 (4.MF.1–2). In grade 3, memory covers only facts with 0, 1, 2, 5 and 10 (3.MF.2).
- Higher bars:
  - Fluency within 20 in grade 1 (1.MF.1–2).
  - Subtraction facts within 20 from memory in grade 2 (2.MF.4).
  - Fluent multi-digit division in grade 5 (5.MF.2, mapped to 5.NBT.B.6).
  - Also: bills to $100 in grade 2; customary liquid volume and mass, plus circle and line graphs, in grade 3.
- Dropped:
  - Whole standards: 2.MD.A.2, 2.MD.A.4, 2.MD.B.5 and 2.MD.B.6.
  - Partly: composing solids, line plots of measured lengths, reading an expression without evaluating it (5.OA.A.2), and fraction operations on line-plot data.
- OVR:
  - Money rows K.M.5–6 and 1.M.4–5 go to 1.GR.C.6.
  - K.M.3 goes to Virginia's calendar sheet K.MG.3 (plus Maryland's quarter hours 1.GR.C.5). K.M.4 goes to K.MG.3 and 1.MG.3.
  - 2.N.5 goes to 2.NBT.B.8. 2.G.3 and 3.G.4 go to 2.G.A.1.
  - 3.N.2–3 go to Maryland's numbers within 10,000, 3.NOS.A.1.
  - 4.MF.1–2 go to the 12 × 12 facts sheet MA.3.NSO.2.4.
  - Plus 49 extra.tsv links, e.g. 3.M.18 to circle graphs MA.3.DP.1.2 and frequency tables 3.8A.

## Uncertain
- KOTA reported that minor non-content corrections to the 2026 document may follow. None were posted as of 2026-10-01, so recheck the PDF before quoting wording.
- Text was taken from the PDF, which displaced some inequality signs and variables. Codes are unaffected.
- The 3.MF.2 wording ("facts (0–12) to include 0, 1, 2, 5, and 10") is ambiguous. We read it as facts with those factors.
- More SD27 judgment calls:
  - K.MF.3 (subitizing) could be new.
  - The properties rows 2.OA.1 and 4.OA.12 are mapped to 2.NBT.B.5 and 4.NBT.B.5.
  - 2.M.8 is mapped to 3.MD.A.1.
- Name variants: editions.ts has "South Dakota Mathematics Standards" (2026). gen.py has "South Dakota State Standards for Mathematics (2026)".
