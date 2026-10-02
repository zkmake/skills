# Minnesota (MN)

In effect for 2026–27: Minnesota K-12 Academic Standards in Mathematics, 2007 version. It took effect in July 2007 and stays in effect through 2026–27. It is Minnesota's own framework, never Common Core, with numeric codes. Mathness models it as a crosswalk (edition `mn`, 133 rows, `/minnesota/`).

Next: the 2022 Minnesota K-12 Academic Standards in Mathematics, required from 2027–28. They are edition `mn27` at `/minnesota-2027-28/`.

## Documents
- 2007 standards PDF (Minnesota Department of Education, MDE): https://education.mn.gov/mdeprod/idcplg?IdcService=GET_FILE&dDocName=005247&RevisionSelectionMethod=latestReleased&Rendition=primary (read as Wayback 20260306043306).
- 2007 spreadsheet, the source of all codes and benchmark text (read as Wayback 20260306045706): https://education.mn.gov/mdeprod/idcplg?IdcService=GET_FILE&dDocName=MDE071492&RevisionSelectionMethod=latestReleased&Rendition=primary
  - The PDF and spreadsheet agree on 133 K–5 benchmarks.
- MDE Mathematics page: https://education.mn.gov/MDE/dse/stds/Math/ (read as Wayback 20260825094942; the live site returns a bot check to scripts). It says the 2007 standards are in effect through 2026–27. MCA-III tests them; MCA-IV, on the 2022 standards, is first given in 2027–28.
- Rule: Minn. R. 3501.0750 https://www.revisor.mn.gov/rules/3501.0750/ (chapter: https://www.revisor.mn.gov/rules/3501/).
- MDE Recommended Implementation Timeline: https://education.mn.gov/mdeprod/idcplg?IdcService=GET_FILE&dDocName=PROD081270%20&RevisionSelectionMethod=latestReleased&Rendition=primary
  - It calls 2025–26 and 2026–27 transition years. It suggests starting 2022 benchmarks early in K–1 (2025–26) and grade 2 (2026–27), with districts setting their own transition.
- No official Minnesota-to-Common Core crosswalk exists, because Minnesota never adopted Common Core math. Every mapping is ours.

## Codes
- grade.strand.standard.benchmark. The benchmark is the coded unit. Kindergarten is `K`.
  - Examples: K.1.1.1, 1.3.2.3 (coins), 3.1.3.2 (grade 3, Number & Operation, standard 3, benchmark 2), 4.3.3.1 (slides).
- Strands (2nd digit), with the domain letters Mathness assigns: 1 Number & Operation (NO); 2 Algebra (A); 3 Geometry & Measurement (GM); 4 Data Analysis (DA). The PDF calls strand 4 Data Analysis and Probability, but there is no K–5 probability.
- The codes name no domain. App rows are 6-tuples carrying the strand (gen.py `STRANDS`), with an empty grade field.
- Parser trap: the 2007 and 2022 sets share the digits grammar, but the same code means different content. 3.1.1.1 is "read and write to 100,000" in 2007 but "data patterns" in 2022. Always key by edition.
- Pre-K: no state pre-K codes are mapped, so pre-K follows Head Start's goals.

## Against Common Core
- 133 K–5 rows (K 13, 1 20, 2 20, 3 26, 4 27, 5 27): 47 same, 55 edited, 16 moved, 15 new.
- Common Core content missing or only loosely present, 37 standards in all. Notable gaps:
  - Teen numbers as ten and ones (K.NBT.A.1); making ten (K.OA.A.4).
  - Halves, thirds and fourths of shapes (1.G.A.3, 2.G.A.3).
  - Length on a number line (2.MD.B.6).
  - Fraction × whole number (4.NF.B.4). All grade 5 fraction multiplication and division (5.NF.B.4–7) is grade 6 in Minnesota.
  - Unit conversion (5.MD.A.1); fraction line plots (5.MD.B.2).
- Earlier or extra content:
  - Patterns in K–1 (K.2.1.1, 1.2.1.1).
  - Pennies, nickels and dimes to $1 in grade 1 (1.3.2.3).
  - Rounding and estimating in grade 2 (2.1.1.4, 2.1.2.3).
  - Grade 3: numbers to 100,000 (3.1.1.1–5); multi-digit × one digit (3.1.2.5); parallel and perpendicular lines (3.3.1.1); making change (3.3.3.3); thermometers in °F and °C (3.3.3.4).
  - Grade 4: slides, turns, flips and congruence (4.3.3.1–4; Common Core puts these in grade 8); decimals to thousandths.
  - Grade 5: variables, equations and inequalities (5.2.3.1–3); nets (5.3.1.2); triangle and parallelogram area (5.3.2.1); surface area (5.3.2.2); mean, median and range (5.4.1.1); double-bar and line graphs and spreadsheets (5.4.1.2). Common Core puts all but the graphs in grade 6.
- Judgment calls (ours):
  - Benchmarks that span two Common Core grades are "edited" when a same-grade code fits part of them (3.1.2.1, 4.1.1.3, 4.1.1.6).
  - 3.1.1.3 and 3.3.3.3 are moved from 2.NBT.B.8 and 2.MD.C.8.
  - 2.1.2.3 is moved from 3.OA.D.8.
  - 5.1.2.2 (0.1, 0.01 or 0.001 more or less) is new.

## Sheets for state content
- OVR redirects, by theme:
  - Patterns: Maryland K.AT.B.3 and Virginia's growing patterns 1.PFA.1.
  - Coins: 1.GR.C.6.
  - To 100,000: Texas 3.2A plus 4.NBT.A.1/A.2.
  - Thousands more or less: Maryland 3.NOS.A.1.
  - Making change: Virginia 3.NS.4.
  - Temperature: Florida MA.3.M.1.1.
  - Decimals more or less: Florida MA.4.NSO.2.6.
  - Equations with letters: Florida MA.5.AR.2.3 and Virginia 5.PFA.2.
  - Solids: Florida MA.5.GR.1.2. Nets: Oklahoma OK.5.GM.1.3.
  - Triangle area: Maryland 4.GR.A.4.
  - Mean, median and range: Virginia 5.PS.2. Line graphs: Virginia 4.PS.1 plus 5.MD.B.2.
- Written for Minnesota: "Slides and turns", MN.4.3.3.1 (grade 4, `slides-and-turns`). It serves 4.3.3.1, 4.3.3.3 and 4.3.3.4.
- 64 rows carry `from` sheets in all, OVR plus 61 extra.tsv lines.
- Fit review: no partial rows remain for `mn`. 3.2.2.1, 4.3.3.2, 5.1.2.1 and 5.3.2.1–2 were closed in passes 9–11.

## Next edition: Minnesota (2027–28), id `mn27`
- 2022 Minnesota K-12 Academic Standards in Mathematics.
  - The spreadsheet was adopted on 28 February 2025.
  - Minn. R. 3501.0750 (published 2025-09-03, 49 SR 1123), subp. 6, requires implementation by the start of 2027–28. The rule holds only anchor standards; benchmarks are in MDE's document.
  - editions.ts records year 2022, starts 2027–28, and 188 rows.
- Documents:
  - Final PDF, K–5 on pp. 13–67: https://education.mn.gov/mdeprod/idcplg?IdcService=GET_FILE&dDocName=PROD086145&RevisionSelectionMethod=latestReleased&Rendition=primary
  - Spreadsheet, which recovers formulas the PDF shows as images: https://education.mn.gov/mdeprod/idcplg?IdcService=GET_FILE&dDocName=PROD086360&RevisionSelectionMethod=latestReleased&Rendition=primary
  - Shifts: https://education.mn.gov/mdeprod/idcplg?IdcService=GET_FILE&dDocName=PROD098789&RevisionSelectionMethod=latestReleased&Rendition=primary
  - Implementation page: https://education.mn.gov/MDE/dse/stds/Math/imp/
  - All were read as Wayback copies.
- Codes are grade.strand.anchor.benchmark: 0.2.4.3, 1.2.3.3, 3.3.5.13, 5.3.7.5.
  - Kindergarten is grade 0. A reader that takes the first 1–5 digit as the grade misreads 0.3.5.4 as grade 3, so the 20 K rows carry an explicit "K".
  - Strands: 1 Data & Probability (DP); 2 Spatial Reasoning (SR); 3 Patterns & Relationships (PR).
  - Anchors are numbered 1–7 across strands, never reset: 1 Data Sciences, 2 Chance & Uncertainty, 3 Measurement, 4 Geometry, 5 Number Relationships, 6 Equivalence & Relational Thinking, 7 Patterns & Relationships.
  - No zero padding (1.3.5.10). MDE's spreadsheet pads (1.2.3.03) and lists 3.3.5.01 twice.
  - Benchmarks end with MP tags and context symbols, which are omitted.
- 188 rows (K 20, 1 28, 2 31, 3 29, 4 40, 5 40): 65 same, 61 edited, 22 moved, 40 new.
- Added content:
  - Data science and probability at every grade: statistical questions, predictions, likelihood scales, a 0–1 line, frequency tables, and mean, median and range in grade 5.
  - Financial literacy: 3.3.5.13 saving goals, 4.3.5.17 money choices, 5.3.5.18 ways to pay, 5.3.5.19 budgets and debt.
  - Figure-n picture patterns (1.3.7.3, 2.3.7.3, 4.3.7.1, 5.3.7.5) and relational thinking (3.3.6.1, 4.3.6.1, 5.3.6.1).
  - Cube-building views and cube nets in grade 4 (4.2.4.4–5).
  - Numbers to 100,000 and facts to 12 × 12.
  - Triangle and parallelogram area, plus nets of prisms, pyramids, cylinders and cones, in grade 5.
- Dropped:
  - Telling time at every K–5 grade (MDE's Shifts doc confirms it).
  - Rounding, lines of symmetry, unit conversion, the standard add/subtract algorithm (4.NBT.B.4), liquid volume and mass.
- Sheets:
  - OVR covers data and probability rows with Common Core graph sheets (K.MD.B.3, 1.MD.C.4, 2.MD.D.10, 3.MD.B.3, 4.MD.B.4), New Jersey's data sheet NJ.4.DL.A.2, and Virginia's probability sheets 4.PS.2 and 5.PS.3.
  - Texas money sheets: 3.9A and 3.9D (with 4.10D from extra.tsv), plus 5.10B, 5.10C and 5.10F.
  - Oklahoma's building with cubes, OK.3.GM.1.2, serves the views row; OK.5.GM.1.3 serves nets.
  - Texas input-output 4.5B plus 4.OA.C.5 serve figure n.
  - 108 extra.tsv lines.
- Fit review:
  - 0.2.4.1 (sorting by thickness) was the last open row. Commit 84439010 added "Thick or thin?" and the follow-up re-review after pass 13 found it good; 2.2.4.3 and 2.3.7.3 closed in pass 13.
  - Linked or fixed after their last partial verdict and never re-reviewed, yet counted good in the 1,479 / 0 / 0 and 1,485 / 0 / 0 tallies: 1.1.2.1, 4.3.5.10, 5.3.5.10 (estimated differences to the nearest half), 5.3.7.4.

## Uncertain
- The 2007 rule parts (3501.0700–.0745) show as [Repealed, 49 SR 1123], yet MDE says the 2007 standards are in effect through 2026–27. We follow MDE.
- The year the 2007 standards were adopted comes only from MDE's page ("effect July 2007").
- More MN27 judgment calls: x.1.1.1 statistical-question rows are marked new; 2.3.6.3, 3.3.6.1 and 4.3.6.1 are moved while 5.3.6.1 is new; 5.3.5.16 (n ÷ a/b) is edited onto 5.NF.B.7, though Common Core grade 5 limits it to unit fractions; 2.3.5.5 is moved from 3.OA.D.8.
