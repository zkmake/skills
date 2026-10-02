# Missouri (MO)

In effect for 2026–27: Missouri Learning Standards: Mathematics, Grade-Level Expectations. The State Board adopted them in April 2016, and they have been in use since 2016–17. They are Missouri's own framework: Common Core content regrouped into new strands and renumbered, with additions. Mathness models them as a crosswalk (edition `mo`, 201 rows, `/missouri/`), and each row links to the sheets for its content. No next edition was found.

## Documents
- Missouri DESE mathematics page: https://dese.mo.gov/college-career-readiness/curriculum/mathematics
- K–5 standards PDF: https://dese.mo.gov/sites/g/files/zuston521/files/media/pdf/2026/04/curr-mls-standards-math-k-5-sboe-2016_AOD.pdf
  - DESE re-tagged it in April 2026 (the file name ends `_AOD`). Its content still says Spring 2016.
  - The DESE page says to use the Excel file for codes.
- K–12 Excel with full codes, the source of all 201 K–5 codes: https://dese.mo.gov/media/59026/download
- Official crosswalks, 2016 MLS vs 2010 MLS (2010 MLS = Common Core), one per grade: https://dese.mo.gov/sites/g/files/zuston521/files/media/pdf/2021/04/cur-mls-crosswalk-ma-gr{k,1,2,3,4,5}.pdf
  - Each is a two-column table, and one Common Core cell often spans several MO rows. Rows with nothing beside them were matched by content, so those mappings are ours.

## Codes
- grade.STRAND.cluster.number: K.NS.A.1, K.GM.B.5, 3.NBT.A.2, 4.RA.B.5, 5.DS.A.1.
  - Expectation numbers run on through a strand across clusters (2.NBT.A.1 … 2.NBT.C.11).
  - Lettered sub-expectations in the Excel are folded into their parent.
  - Missouri Student Mathematical Practices are skipped.
- Strands, with app row counts:
  - NS Number Sense (K–1), 15
  - NBT Number Sense and Operations in Base Ten, 38
  - NF Number Sense and Operations in Fractions (3–5), 27
  - RA Relationships and Algebraic Thinking, 38
  - GM Geometry and Measurement, 65
  - DS Data and Statistics, 18
- Parser trap: many MO codes look exactly like Common Core codes but mean other content.
  - MO 1.NBT.A.1 is Common Core 1.NBT.B.2, and MO 4.NBT.A.1 is 4.NBT.A.3.
  - MO 5.NBT.A.1 reads and writes billions to thousandths (Common Core 5.NBT.A.3).
  - MO 5.DS.A.1 (line graphs) is also a Maryland code.
  - Mathness marks every crosswalk row `linksOnly`, so a state code never pulls sheets by itself. Never match MO codes to Common Core by string.
- Pre-K: no state pre-K codes are mapped, so pre-K follows Head Start's goals.

## Against Common Core
- 201 K–5 rows (K 28, 1 30, 2 32, 3 42, 4 37, 5 32): 98 same, 89 edited, 5 moved, 9 new. The many "edited" rows come from splits of Common Core sentences and changes of scope.
- Dropped, as DESE also says:
  - 4.NF.C.5 (tenths to hundredths) and 4.MD.C.7 (angles are additive).
  - DESE says 5.NF.B.3 (fraction as division) has no match, but its crosswalk pairs it with MO 5.NF.A.2, which is kept as edited.
  - Partly dropped: 3.NF.A.3c (whole numbers as fractions); word problems in 5.NF.B.7c.
- K:
  - Count back from 10 (K.NS.A.3, new); subitize to 5 (K.NS.B.8, new).
  - Time and its tools, clocks and calendars (K.GM.B.3, new); days of the week (K.GM.B.4, new).
  - Name penny, nickel, dime and quarter (K.GM.B.5, moved from 2.MD.C.8).
- Grade 1:
  - Count back from 20 (1.NS.A.3, new).
  - Count by 5s to 100 (1.NS.A.4, moved from 2.NBT.A.2).
  - Count by 10s from any number to 120 (1.NBT.A.4, new).
  - Shapes from different views (1.GM.A.3, new).
  - Coin values (1.GM.C.9, moved).
- Grade 2: coin combinations for a given amount (2.GM.D.13).
- Grade 3:
  - Read and write to 100,000 (3.NBT.A.2, moved from 4.NBT.A.2).
  - Frequency tables with scaled graphs (3.DS.A.1).
- Grade 4: prime and composite with factor pairs (4.RA.B.5); frequency tables (4.DS.A.1).
- Grade 5:
  - Part of a whole as a fraction or a decimal (5.NF.A.1, moved from 4.NF.C.6).
  - Billions to thousandths: read, compare, round (5.NBT.A.1, A.2, A.5).
  - Order of operations named (5.RA.B.3).
  - Prisms and pyramids (5.GM.A.3, new).
  - Line graphs (5.DS.A.1, new).
  - Outliers and median (5.DS.A.2, close to Common Core 6.SP).
- Judgment calls (ours):
  - DESE oddities are kept: 1.RA.B.5 also lists 1.OA.C.5; 2.NBT.B.6 also lists 2.NBT.B.9; 3.RA.B.6 also lists 3.OA.B.6.
  - DESE typos fixed: K.G.B.3 to K.G.A.3, K.G.A.4 to K.G.B.4, K.0A to K.OA.
  - Moved from DESE's pairing: Common Core 5.NF.B.6 sits with MO's multiply row, not its add/subtract row 5.NF.B.6.
  - 5.RA.C.5 also gets 5.NF.A.2, 5.NF.B.6 and 5.NF.B.7.
  - Links with no DESE match: 5.NF.A.1 to 4.NF.C.6; 4.NF.C.11 plus 5.NBT.A.3; 4.DS.A.3 to 4.MD.B.4 plus 3.MD.B.3; 5.NBT.A.7–8 plus 5.NBT.B.7.

## Sheets for state content
- OVR redirects:
  - Counting back: Maryland K.NOS.A.3. Subitizing: Maryland K.NOS.B.8.
  - Time, calendar and days: Virginia K.MG.3, "Days and months" (K.GM.B.3 also gets 1.MD.B.3).
  - Coins: Maryland's grade 1 coin sheet 1.GR.C.6.
  - Count back from 20: 1.OA.C.5.
  - Tens from any number: 1.NBT.A.1 plus Maryland 1.NOS.A.1.
  - Shape views: K.G.A.3 plus 1.G.A.1.
  - To 100,000: Maryland 3.NOS.A.1 plus Texas 3.2A.
  - Prisms and pyramids: Florida MA.5.GR.1.2.
  - Line graphs: Virginia 4.PS.1.
  - Fives: 2.NBT.A.2 plus Texas 1.5B.
- 42 rows carry `from` sheets, with 46 extra.tsv lines from the fit review.
- No sheets were written under an MO code.
- Fit review: no partial rows remain. 1.NBT.B.7, 2.GM.D.13, 2.DS.A.4–5, 3.GM.B.5 and 3.GM.B.8, partial or off in the fresh full review, were closed in passes 8–10.

## Uncertain
- The many "edited" rows are our own judgment. A Missouri expectation that restates one Common Core sub-part is "same"; one that splits a Common Core sentence or changes its scope is "edited".
- No newer Missouri math standards were found as of 2026-10-01. The April 2026 PDF is a re-tag, not a revision.
