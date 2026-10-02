# Pennsylvania (PA)

In effect for 2026–27: PA Core Standards for Mathematics (published in the Pennsylvania Bulletin, March 1, 2014, as 22 Pa. Code ch. 4 Appendix A-2). The State Board page, checked 2026-10-01, still lists them as current; the classroom start year is not in our sources. Mathness models them as a crosswalk in PA codes (edition `pa`, 73 rows) with PA's own pre-K codes. Each PA standard is a broad, cluster-level statement that links to several CCSS standards' sheets. No next edition is recorded.

## Documents
- State Board standards PDF (a scan): https://www.pa.gov/content/dam/copapwp-pagov/en/stateboard/documents/regulations-and-statements/state-academic-standards/pa%20core%20math%20standards.pdf
- State Board standards page: https://www.pa.gov/agencies/stateboard/resources/regulations--policy/state-academic-standards.html
- Clean-text copy of the same standards: the PDE text PDF "Academic Standards for Mathematics, Grades PreK-High School, March 1, 2014", hosted by a third party (wilkes.edu). It was needed because the official PDF is a scan: https://pryor.mathcs.wilkes.edu/mth303/PA%20Core%20Standards%20MTH%20(2014).pdf
- SAS curriculum frameworks (Oct 2016). They list competencies under each standard, nearly verbatim CCSS: https://static.pdesas.org/content/documents/CF-Math_GRD_K_2016.pdf (also `_1_` … `_5_`)
- SAS standards pages with eligible content, e.g. https://www.pdesas.org/standardsbrowse/0/161290 (CC.2.4.3.A.1) and /162095 (CC.2.4.3.A.3).
- Publisher: Pennsylvania Department of Education. The standards are adopted by the State Board of Education.
- Common Core comparison: no official crosswalk for the final 2014 standards was found. SAS linked a 2012 crosswalk of the draft, which is no longer reachable. The mappings are the research's reading of the statements, which reuse CCSS cluster headings, plus the framework competencies.

## Codes
- Grammar: `CC.2.<area>.<grade>.<strand>.<number>`, where "CC.2" means mathematics and kindergarten is `K`. Examples: `CC.2.1.K.A.1`, `CC.2.1.3.B.1`, `CC.2.2.4.A.2`, `CC.2.4.3.A.3`, `CC.2.3.5.A.2`.
- Areas and strands (K–5):
  - 2.1 Numbers and Operations: A = Counting and Cardinality (K), B = Base Ten, C = Fractions (3–5).
  - 2.2 Algebraic Concepts: A = Operations and Algebraic Thinking.
  - 2.3 Geometry: A.
  - 2.4 Measurement, Data, and Probability: A. Its numbers are A.1 measurement, A.2 time, A.3 money, A.4 data, A.5 area/volume, A.6 length operations/perimeter/angles.
- Parser traps:
  - The grade is the 4th segment, and the leading `2` would be misread as grade 2. gen.py therefore puts PA in EXPLICIT, so every row carries its grade explicitly.
  - Codes name no CCSS domain, so Mathness takes each row's domain from its linked CCSS code.
- Gaps are deliberate ("Intentionally Blank"), e.g. no CC.2.4.K.A.2/A.3, CC.2.4.1.A.3, CC.2.1.3.B.2, CC.2.2.5.A.2/A.3.
- Typo: the 2014 PDF prints `C.2.3.4.A.2`.
- The finer PSSA Eligible Content codes (e.g. `M03.A-T.1.1.1`, grades 3–8) are assessment limits, not standards, and are not rows.
- The Standards for Mathematical Practice are skipped.

## Against Common Core
- Rows: 73, of which 68 same, 2 edited, 3 moved. By grade: K 9, 1 10, 2 13, 3 14, 4 15, 5 12.
- Dropped: 2.G.A.2 (rows and columns of squares). Every other CCSS K–5 standard is covered.
- Moved, or beyond CCSS:
  - Grade 3 money: count, compare and make change with coins and bills (`CC.2.4.3.A.3`), from 2.MD.C.8.
  - Translating between data displays in grade 4 (`CC.2.4.4.A.2`).
  - Tallies, tables, pictographs, bar and line graphs with a scale in grade 5 (`CC.2.4.5.A.2`).
- Edited:
  - Grade 3 temperature (`CC.2.4.3.A.1`).
  - Tally charts and tables (`CC.2.4.3.A.4`).
- Grade 4 symmetry keeps its own standard (`CC.2.3.4.A.3`).
- Judgement calls (ours):
  - Leftover CCSS clusters were assigned by fit. 1.OA.C and 1.OA.D.8 go to `CC.2.2.1.A.1`; 1.OA.D.7 goes to `.A.2`.
  - K geometry follows the statement wording, against the K framework.
  - 3.MD.B.4 sits under both `CC.2.4.3.A.1` and `.A.4`.
  - The grade 2 framework (2016) numbers measurement differently from the 2014 standards; the 2014 numbering is followed.

## Sheets for state content
- OVR:
  - `CC.2.4.3.A.3` → Virginia `3.NS.4` (money to $5, making change) plus 2.MD.C.8.
  - `CC.2.4.4.A.2` → 3.MD.B.3 plus Maryland `4.DS.A.1`.
  - `CC.2.4.5.A.2` → 3.MD.B.3 plus Virginia `4.PS.1` (line graphs).
- Fit links (extra.tsv, 4 lines):
  - Temperature in `CC.2.4.3.A.1` → Florida `MA.3.M.1.1`.
  - Tally charts in `CC.2.4.3.A.4` → Texas `3.8A`.
  - Maryland `4.DS.A.1` on the grade 5 data row.
- No PA-prefixed sheets. The latest fit verdicts leave no partials.

## Pre-K
- PA Core Standards for Mathematics, PreK standards (same documents as K–5): 8 rows in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.pa`), data in `data/prek/pa.tsv`; the rows replace Head Start's 10 goals in this state's set.
- Codes:
  - `CC.2.1.PreK.A.1`–`A.3`.
  - `CC.2.2.PreK.A.1`.
  - `CC.2.3.PreK.A.1`–`A.2`.
  - `CC.2.4.PreK.A.1`, `CC.2.4.PreK.A.4`.
  - Domains NO, AC, G, MDP. Seven link to Head Start goals and seven to Maryland pre-K sheets.

## Uncertain
- The mappings are not official, because no current crosswalk exists.
- The clean text comes from a non-PDE mirror. It matched the official standards' structure, but the official PDF is a scan.
- Grade 5 eligible content `M05.D-M.2.1.2` adds line graphs, which CCSS K–5 lacks.
