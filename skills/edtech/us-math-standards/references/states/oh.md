# Ohio (OH)

In effect for 2026–27: Ohio's Learning Standards for Mathematics (adopted by the State Board, February 2017; the classroom start year is not in our sources). The ODE page, last modified Feb 2026, still lists them as current. Mathness models them as a crosswalk in Ohio's codes (edition `oh`, 159 rows; pre-K in Ohio's own codes, see Pre-K). No next edition is recorded.

## Documents
- Standards PDF: https://education.ohio.gov/getattachment/Topics/Learning-in-Ohio/Mathematics/Ohio-s-Learning-Standards-in-Mathematics/MATH-Standards-2017.pdf.aspx?lang=en-US
- Code cross-check, an Excel file labelled "2017 Math Standards Draft". Its code list matched the PDF exactly: https://education.ohio.gov/getattachment/Topics/Learning-in-Ohio/Mathematics/Ohio-s-Learning-Standards-in-Mathematics/Revised-Math-Standards-in-Excel-on-5-9.xlsx.aspx?lang=en-US
- Page: https://education.ohio.gov/Topics/Learning-in-Ohio/Mathematics/Ohio-s-Learning-Standards-in-Mathematics
- Publisher: Ohio Department of Education and Workforce.
- Common Core comparison: no official one was used. Ohio keeps CCSS numbering, so the research compared the texts code by code.

## Codes
- Grammar: CCSS codes without cluster letters, written `<grade>.<domain>.<number><letter?>`. Examples: `K.CC.4`, `1.MD.3b`, `3.MD.1b`, `4.MD.2c`, `5.NBT.7c`.
- Domains are Common Core's: CC, OA, NBT, NF, MD, G.
- Lettered sub-parts:
  - The research TSV has 200 rows, with stems and sub-parts.
  - The app folds sub-parts that match CCSS into their standard, which leaves 159 rows.
  - Ohio-only sub-parts stay as rows: `1.MD.3b`, `2.MD.8a–c`, `3.MD.1a–b`, `4.MD.2a–c`, `5.NBT.7a–c`.
  - Ohio's 1.NBT.2 prints the three CCSS special cases inline without letters, so it is one row.
- Parser traps:
  - The same short codes are used by the Alaska, Utah, Kansas, Mississippi and Hawaiʻi 2027–28 crosswalks (143–147 identical strings each), and some by Wyoming (62) and South Dakota 2027–28 (54), so always qualify Ohio codes by state.
  - Several Ohio codes look like CCSS but carry other content:
    - `1.MD.3` and `3.MD.1` add money to time.
    - `4.MD.1` is metric only.
    - `5.MD.1` is U.S. customary only.

## Against Common Core
- Rows (TSV): 200, of which 164 same, 34 edited, 2 moved, 0 new. By grade: K 25, 1 23, 2 31, 3 39, 4 39, 5 43.
- Money added through the grades:
  - K: pennies in counting and sorting (`K.CC.4`, `K.MD.3`).
  - Grade 1: pennies and dimes (`1.MD.3b`, moved from 2.MD.C.8).
  - Grade 2: nickels, quarters, coin totals, $ or ¢ within 100 with no decimals (`2.MD.8a–c`).
  - Grade 3: money within $1,000, dollars or cents separately (`3.MD.1b`, moved).
  - Grade 4: money in decimal notation (`4.MD.2a`).
- Other changes:
  - K comparisons without inequality symbols (`K.CC.6/7`).
  - Elapsed time within 90 minutes in grade 3 (`3.MD.1a`).
  - Grade 4 time intervals on number lines and clocks (`4.MD.2b`).
  - Metric-only grade 4 conversions; customary conversions (lb/oz, mi/ft, gal/fl oz, time) moved to `5.MD.1`.
  - Picture graphs, bar graphs and line plots in grades 4–5 instead of fraction-only line plots (`4.MD.4`, `5.MD.2`).
  - Decimal operations split into `5.NBT.7a–c`.
  - Parentheses only, with no formal order of operations (`5.OA.1`).
  - Triangle and quadrilateral kinds instead of a hierarchy (`5.G.3`, `5.G.4`).
- Dropped:
  - 4.G.A.3 lines of symmetry: no symmetry anywhere in K–5.
  - Drawing shapes with given angles or faces (2.G.A.1).
  - Right triangles as a category (4.G.A.2).
- Judgement calls (ours): `1.MD.3b` and `3.MD.1b` are counted as moved. `5.MD.1` is counted as edited of 5.MD.A.1.

## Sheets for state content
Ohio predates gen.py's OVR table, so its links sit in oh.ts. Most of them came from the fit review (extra.tsv):
- Coin rows (`1.MD.3`, `1.MD.3b`, `2.MD.8a`): Maryland's coin sheet `1.GR.C.6`.
- `3.MD.1b`: 2.MD.C.8 plus Virginia `3.NS.4` (money to $5, making change).
- `4.MD.2a`: 5.NBT.B.7.
- `4.MD.2b`: Virginia `4.MG.2`.
- `4.MD.2c`: 3.MD.A.2.
- `5.NBT.7c`: Florida `MA.5.NSO.2.5`.
- `5.MD.1`: 4.MD.A.1/A.2.

Further fit-review links (extra.tsv has 17 OH lines in total):
- Solids: Texas `2.8B`.
- Data: Maryland `4.DS.A.1`.
- Triangles: Virginia `5.MG.3`.

No OH-prefixed sheets. The latest fit verdicts leave no partials. An earlier pass flagged money to $1,000 in `3.MD.1b` and gaps in `4.MD.2a–c`; later passes cleared them.

## Pre-K
- Ohio's Early Learning and Development Standards (2022), mathematics: 10 rows. Mapped 2026-10-01 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.oh`), data in `data/prek/oh.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out, so numbering can skip.
- Source: (2022, released 2023) https://dam.assets.ohio.gov/image/upload/v1734897158/childrenandyouth.ohio.gov/For%20Providers/Early%20Learning%20and%20Development%20Standards/Early-Learning-and-Development-Standards.pdf
- Codes `MA.1.a` … `MA.4.b`.
- Domains: NS Number Sense (4), NR Number Relationships and Operations (1), M Measurement (3), G Geometry (2).
- 9 rows link Head Start goals, 4 link Maryland pre-K sheets; MA.3.b links only PK.DS.A.1 and PK.DS.A.2. With 10 rows the set's pre-K count matches Head Start's.

## Uncertain
- The classroom start year for the 2017 standards is not stated in our sources.
- The Excel cross-check file is labelled "Draft". It matched the PDF's codes but is not the adopted document.
