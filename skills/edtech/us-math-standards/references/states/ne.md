# Nebraska (NE)

In effect for 2026–27: Nebraska's College and Career Ready Standards for Mathematics. The State Board approved them on 2 September 2022, and NDE's page still listed them as current on 2026-10-01. They are Nebraska's own framework, not Common Core: four strands with lettered indicators. Mathness models them as a crosswalk (edition `ne`, 177 rows, `/nebraska/`), and each indicator links to the sheets for its content. No next edition is known.

## Documents
- Standards PDF (Nebraska Department of Education, NDE): https://www.education.ne.gov/wp-content/uploads/2023/05/Nebraskas-College-and-Career-Ready-Standards-for-Mathematics-Final-062723.pdf
- Standards Excel, updated 2024. The codes and text come from it: https://www.education.ne.gov/wp-content/uploads/2024/10/2022-Math-Standards-Updated-Excel-File.xlsx
- Official NDE crosswalk to Common Core: https://www.education.ne.gov/wp-content/uploads/2023/10/2022-Math-Standards-and-CCSSM-Standards-Crosswalk.xlsx
  - The mappings start from it. Where it looked wrong we changed it (see Judgment calls).
- Page: https://www.education.ne.gov/math/mathematics-standards/

## Codes
- grade.STRAND.standard.indicator. Each row is a lettered indicator, so every code ends in a letter: K.N.1.a, K.G.3.a (coins), 1.N.5.g, 3.G.2.c, 4.A.1.f.
- Strands, with app row counts:
  - N Number, 84. In K–2 it includes "Number and Algebraic Relationships" (K.N.4, 1.N.5, 2.N.5).
  - A Algebra, 18. K–2 say "see Number", so coded A indicators start in grade 3.
  - G Geometry, 61: shapes, measurement, time and money, area, perimeter and volume, and coordinate geometry.
  - D Data, 14: D.1 collection, D.2 analysis. 5.D.1 has no indicators.
- Mathematical Processes are skipped.
- Code quirks:
  - The PDF prints 3.G.1.a as "3.G.1.1". The 2024 Excel and the crosswalk use 3.G.1.a.
  - Nothing looks like a Common Core code, since the strands are single letters. Map only through the crosswalk.
- Pre-K: no state pre-K codes are mapped, so pre-K follows Head Start's goals.

## Against Common Core
- 177 K–5 rows (K 26, 1 32, 2 31, 3 27, 4 32, 5 29): 131 same, 28 edited, 8 moved, 10 new.
- Common Core standards with no indicator:
  - Composing shapes in grade 1 (1.G.A.2); composing is K.G.1.e instead.
  - Explaining why strategies work (2.NBT.B.9).
  - All rounding: 3.NBT.A.1, 4.NBT.A.3, 5.NBT.A.4. Only estimating for reasonableness remains.
  - Pattern standards 3.OA.D.9 and 4.OA.C.5.
  - Multiplicative comparison (4.OA.A.1–2).
  - Adding tenths and hundredths (4.NF.C.5).
  - Multiplication as scaling (5.NF.B.5).
- Narrowed:
  - K compares groups but not written numerals.
  - Flat vs solid is not stated, and hexagons are left out (K.G.1.a).
  - Three addends instead of four (2.NBT.B.6).
  - No non-examples (3.G.A.1).
  - Only true equations (1.OA.D.7) and only commutativity (1.OA.B.3).
- New:
  - Subitizing: to 10 in K (K.N.1.a), to 20 in grade 1 (1.N.1.a), structured groups in grade 2 (2.N.1.a).
  - Find the one that doesn't belong (K.D.1.b).
  - Write story problems: within 20 (1.N.5.g) and within 100 with the unknown anywhere (2.N.5.b).
  - Faces, edges and vertices in grade 2 (2.G.1.a) and grade 5 (5.G.1.a).
  - Fraction–decimal equivalents (5.N.2.a).
  - Justify reasonableness (5.A.1.c).
- Moved earlier:
  - Pennies, nickels and dimes, and clocks to the hour, in K (K.G.3.a–b).
  - Dimes as ten pennies and counting like coins in grade 1 (1.G.3.a–b).
  - Skip-count patterns in grade 1 (1.N.2.d).
  - Parallel sides in grade 1 (1.G.1.c, from 4.G.A.1).
  - Numbers to 10,000 in grade 3 (3.N.1.a–b, from 4.NBT.A.2).
- Inside matched rows: counting backward (K.N.2.e, 1.N.2.b); identity and zero properties (3.A.1.e); intersecting lines (4.G.1.a); algorithms in grade 2 (2.N.4.b).
- Judgment calls (ours), departing from NDE's crosswalk:
  - 5.N.3.f maps to 5.NF.B.7 (NDE: 5.NF.B.3).
  - 3.G.3.b maps to 3.MD.B.4 (NDE's merged cell shows 3.MD.A.2).
  - K.N.2.h has no K.CC.C.7.
  - 3.A.1.b and 4.A.1.d map to 3.OA.D.8 and 4.OA.A.3.
  - 3.N.1.a/b are moved from 4.NBT.A.2 (NDE: no Common Core match).
  - 4.A.1.e maps to 4.OA.A.3 (NDE: 3.OA.A.4).
  - The new rows follow NDE's "not specifically included" or "supplement".

## Sheets for state content
- OVR redirects:
  - Subitizing: Maryland K.NOS.B.8. 2.N.1.a also gets 2.NBT.A.1 and 1.NBT.B.2.
  - Coins K.G.3.a, 1.G.3.a and 1.G.3.b: Maryland's grade 1 coin sheet 1.GR.C.6.
  - Odd one out K.D.1.b: K.MD.B.3.
  - Story writing 1.N.5.g and 2.N.5.b: 1.OA.A.1 and 2.OA.A.1.
  - Faces and edges: Texas 2.8B (grade 2) and Florida MA.5.GR.1.2 (grade 5).
  - To 10,000 (3.N.1.a–b): Maryland 3.NOS.A.1.
  - Fraction–decimal equivalents: Virginia 5.NS.1.
  - Reasonableness: Texas 5.3A.
- Other sheet sources:
  - K.G.3.b serves from 1.MD.B.3.
  - 1.N.2.d serves from 2.NBT.A.2 and Texas 1.5B.
  - 1.G.1.c serves from 4.G.A.1 (lines and rays) and 1.G.A.1.
  - 33 extra.tsv lines.
- No sheets were written under an NE code.
- Fit review: no partial rows remain. 1.N.2.b, 1.N.5.d, 1.G.1.c, 2.N.1.a, 4.N.2.a, 4.G.2.b and K.N.2.h, partial in the fresh full review, were closed in passes 8–11.
  - Minor note left on K.N.2.h: more/fewer groups stay 2–9, and groups of 11–20 appear only in "The same?".

## Uncertain
- The 2023 PDF and 2024 Excel changed two indicators from what the crosswalk reflects:
  - K.G.3.a is now pennies, nickels and dimes (name and value).
  - 5.N.3.g now covers all four operations on decimals.
  - The rows follow the current text.
