# The frameworks: Common Core, Head Start, and the four own sets

Structure, code grammar, counts and what each covers beyond Common Core, for the six frameworks a K–5 product must model first. Counts are standard rows in Mathness's data as of 2026-10-01 (lettered sub-parts folded into their standard; practice and process standards excluded). Source URLs for each are in [sources.md](sources.md).

## How the four own sets relate to Common Core

| Set (Mathness name) | K–5 rows | Pre-K rows | Total | K/1/2/3/4/5 | Official crosswalk to CCSS? | CCSS code shown as |
| --- | --- | --- | --- | --- | --- | --- |
| Common Core | 148 | 10 (Head Start) | 158 | 22/21/26/25/28/26 | n/a | n/a |
| Maryland MCCRS (2025) | 156 | 20 (own) | 176 | 25/24/24/26/30/27 | yes (MSDE grade-level crosswalks) | "was" (Maryland replaced it) |
| Texas TEKS | 246 | 21 (own) | 267 | 29/43/43/46/46/39 | no: mapping is yours | "Common Core" (Texas never used it) |
| Florida B.E.S.T. | 184 | 23 (own) | 207 | 22/26/27/34/39/36 | no: mapping is yours | "Common Core" |
| Virginia SOL | 72 | 31 (own) | 103 | 8/9/11/12/18/14 | no: mapping is yours | "Common Core" |

**Always say whether a count includes pre-K.** "Texas 267" and "Texas 246 K–5" are the same set; mixing them produced apparent contradictions in Mathness's own docs. The four own sets total 658 K–5 rows.

Granularity differs wildly: one Virginia row (3.CE.2) carries six Common Core codes; one Texas grade has 43 rows. Expect a state row to map to zero, one or many CCSS codes, and to carry CCSS content from a **different grade**.

## Common Core State Standards for Mathematics (2010)

- **Owners**: NGA Center for Best Practices and CCSSO. License and required notice: [licensing.md](licensing.md).
- **Domains, K–5**: CC Counting and Cardinality (K only); OA Operations and Algebraic Thinking; NBT Number and Operations in Base Ten; NF Number and Operations—Fractions (3–5); MD Measurement and Data; G Geometry. Eight Standards for Mathematical Practice (MP1–MP8) run across grades; they aren't content rows.
- **Code grammar**: `<grade>.<domain>.<cluster letter>.<standard>`, e.g. `K.CC.B.4`, `3.OA.D.8`, `4.NF.B.3`; lettered parts (`4.NF.B.3b`, `K.CC.B.4a`) belong to their standard. States write the same codes without the cluster letter (`3.OA.1`) or with a prefix (`NY-3.OA.1`, `NC.3.OA.1`, `KY.3.OA.1`); index a short form and strip prefixes in search.
- **Counts**: K 22 (CC 7, OA 5, NBT 1, MD 3, G 6) · 1: 21 · 2: 26 · 3: 25 · 4: 28 · 5: 26 = 148.

## Head Start Early Learning Outcomes Framework (2015): pre-K math

Common Core starts at kindergarten; Head Start's ELOF is the national default for pre-K (Office of Head Start, US Department of Health and Human Services). Preschool Mathematics Development has goals **P-MATH 1–10**, numbered across four sub-domains, with no domain codes:

- Counting and cardinality: P-MATH 1 (say counting numbers in order, to 20), 2 (recognise small groups without counting, to 5: subitising), 3 (count one by one; the last number tells how many), 4 (compare groups), 5 (connect numerals to amounts to 5; begin writing).
- Operations and algebraic thinking: P-MATH 6 (join and take away with objects or fingers), 7 (repeating patterns).
- Measurement: P-MATH 8 (compare size, length, height, weight).
- Geometry and spatial sense: P-MATH 9 (name and compare shapes of any size or turn; compose shapes), 10 (position words).

Show goal ranges ("P-MATH 1–5") where a UI expects a domain code, and label pre-K by its framework ("Head Start P-MATH 3"), not the set. State pre-K: [pre-k.md](pre-k.md).

## Texas Essential Knowledge and Skills (TEKS) for Mathematics

- **Edition**: 19 TAC Chapter 111, Subchapter A (§§111.2–111.7), adopted 2012 (effective 10 Sep 2012; grade 3 amended 15 Oct 2013); in classrooms since 2014–15. No revision adopted or pending as of 2026-10-01. Publisher: Texas Education Agency (TEA).
- **Strands**: mathematical process standards (the `(1)` expectations, e.g. K.1A–G: not content rows), number and operations, algebraic reasoning, geometry and measurement, data analysis, personal financial literacy. TEKS codes don't contain strand letters; Mathness labels them NO, AR, GM, DA, PFL.
- **Code grammar**: `<grade>.<knowledge-and-skill number><student-expectation letter>`: `2.8B`, `K.2A`, `4.10E`; a few have no letter (`K.4`, `K.5`, `5.5`, `5.7`).
- **Beyond Common Core**:
  - **Bigger ranges**: to 120 in grade 1 (1.2B–F, 1.5A, 1.5C), to 1,200 in grade 2 (2.2A–D, 2.7B), to 100,000 in grade 3 (3.2A, 3.2D), to a billion and decimals to hundredths in grade 4 (4.2B, 4.2C); count from any number (K.5); odd and even to 40 (2.7A) and by divisibility rules (3.4I).
  - **Earlier**: coins in K (K.4) and grade 1 (1.4A–C); multiplication and division concepts in grade 2 (2.6A–B); area by tiles in grade 2 (2.9F); time to the minute in grade 2 (2.9G); multiplicative comparison in grade 3 (3.5C).
  - **Content CCSS lacks**: personal financial literacy every grade (K.9A–D, 1.9A–D, 2.11A–F, 3.9A–F, 4.10A–E, 5.10A–F: earning, saving, credit and debit, budgets, gross and net income, job skills, cost to make an item, reasons to save); faces, edges and vertices (1.6E, 2.8B); polygons to 12 sides (2.8C); fractions past one whole and eighths in grade 2 (2.3A–D); frequency tables (3.8A); stem-and-leaf (4.9A–B, 5.9A); scatterplots (5.9B–C); strip diagrams (3.3A, 3.5A–B, 4.5A); input-output tables (3.5E, 4.5B); squares to 15 × 15 (4.4C); estimating with all four operations (5.3A); kindergarten picture graphs (K.8B–C).
  - **Later**: primes and composites at grade 5 (5.4A; CCSS 4.OA.B.4); whole × fraction at 5.3I (CCSS 4.NF.B.4).
- **Pre-K**: Texas Prekindergarten Guidelines (2022), Domain V Mathematics, PK4 outcomes (four-year-olds; the PK3 column is left out): 21 rows, codes as printed `PK4.V.<skill>.<n>` (`PK4.V.A.1`); domains are ours for the five skills (NS Number Sense, JS Joining and Separating, GS Geometry and Spatial Sense, M Measurement, CP Classification and Patterns). Mapped in Mathness 2026-10-02 (`src/standards/own-prek.ts`, `TX_PK`; data `data/prek/tx.tsv`): 16 rows link Head Start goals, 13 other sheets. Source: the comprehensive guide (pp. 48–58) and the PK4 streamlined version, same 21 outcomes ([sources.md](sources.md)). A revision is under way: TEA took feedback on initial recommendations, posted per domain, on "September 14-30, 2026" (closed); no adoption date as of 2026-10-02. Math, science and technology domain: https://tea.texas.gov/educators/early-childhood-education/tpg-math-science-technology_0.pdf . The recommendations would rename skill A, renumber outcomes (subitizing to A.2) and fold joining and separating (B.1, B.2) into A as A.9 and A.10; remap when TEA adopts them.
- **Range sheets**: where TEKS only extends a CCSS topic's range, write a sheet under the Texas code that also carries the CCSS code, and let it through the "set-only sheets are for content CCSS lacks" test by an explicit exception list.

## Florida's B.E.S.T. Standards for Mathematics

- **Edition**: Benchmarks for Excellent Student Thinking, adopted by the State Board of Education 12 Feb 2020; K–5 in classrooms from 2022–23. Publisher: Florida Department of Education (CPALMS hosts benchmark pages).
- **The rule names a 2026 edition, K–5 unchanged** (2026-10-02): Rule 6A-1.09401, effective 3 Aug 2026, incorporates "Florida's B.E.S.T. Standards Mathematics, 2026" (Ref-19651): https://www.flrules.org/gateway/ruleNo.asp?id=6A-1.09401 . The 2 Oct 2026 source check compared all 184 K–5 codes and statements with 2020 and found only the name and year changed.
- **Next**: a Notice of Rule Development (31421033, published 1 Oct 2026) proposes math changes for "the Mathematics Pathways as required by House Bill 1279 (2026) and Insurance and Personal Finance as required by House Bill 1343 (2026)"; no effective year; probably high school (unverified): https://www.flrules.org/Gateway/View_notice.asp?id=31421033
- **Strands**: NSO Number Sense and Operations, FR Fractions (grades 1–5), AR Algebraic Reasoning, M Measurement, GR Geometric Reasoning, DP Data Analysis and Probability; plus MA.K12.MTR Mathematical Thinking and Reasoning standards (not content rows).
- **Code grammar**: `MA.<grade>.<strand>.<standard>.<benchmark>`: `MA.3.NSO.2.4`, `MA.K.GR.1.5`, `MA.5.DP.1.2`.
- **Beyond Common Core**: ordinals in K (MA.K.NSO.1.3); counting back from 20 in K; measuring with units in K; rulers, and coins with $1/$5/$10 bills to $100 in grade 1; rounding, symmetry and perimeter in grade 2; numbers to 10,000, the standard algorithm, facts to 12 × 12 (MA.3.NSO.2.4), lines and rays, temperature (MA.3.M.1.1) and circle graphs (MA.3.DP.1.2) in grade 3; straight and reflex angles, mode/median/range, 0.1 and 0.01 more or less, remainders as fractions and stem-and-leaf in grade 4; × and ÷ by 0.1 and 0.01 (MA.5.NSO.2.5), area with fraction and decimal sides (MA.5.GR.2.1), mean/median/mode/range and line graphs in grade 5; true/false equations in every grade 3–5.
- **Pre-K**: Florida Early Learning and Developmental Standards: 4 Years Old to Kindergarten (2017), Form OEL-VPK 15, incorporated by Rule 6M-8.602 (effective 28 Dec 2017; no amendment since), domain V Mathematical Thinking: 23 standards, no benchmarks, none left for kindergarten. The document prints no compact codes; Mathness builds them from its numbering, `V.<component>.<n>` (`V.A.1`; components A Number Sense to F Measurement and Data). Mapped 2026-10-02 (`FL_PK`; `data/prek/fl.tsv`): 18 rows link Head Start goals, 15 other sheets.

## Virginia Mathematics Standards of Learning (2023)

- **Edition**: approved by the Board of Education 31 Aug 2023; fully implemented 2024–25; current as of 2026. Publisher: Virginia Department of Education (VDOE).
- **Strands**: NS Number and Number Sense, CE Computation and Estimation, MG Measurement and Geometry, PS Probability and Statistics, PFA Patterns, Functions, and Algebra.
- **Code grammar**: `<grade>.<strand>.<n>`: `5.PFA.2`, `3.NS.4`, `K.MG.3`. Lettered sub-bullets fold into the row, so rows are broad.
- **Beyond Common Core**: numbers to 30 and counting back in K; days, months, yesterday/today/tomorrow (K.MG.3); coins and fair shares of sets in grade 1; calendar (1.MG.3); growing patterns (1.PFA.1); skip counting by 25s, sixths and eighths, money to $2, pounds and cups, symmetry, faces/edges/vertices in grade 2; six-digit numbers, making change to $5 (3.NS.4), customary and metric weight and volume (3.MG.1) in grade 3; nine digits, decimals to thousandths, facts to 12 × 12, elapsed time across noon (4.MG.2), line graphs and probability in grade 4; fraction↔decimal (5.NS.1), prime factorisation (5.NS.2), triangle 180° sum (5.MG.3), mean/median/mode/range, tree diagrams, letters for unknowns (5.PFA.2) in grade 5.
- **Later**: angle measure with a protractor at grade 5 (CCSS 4.MD.C.5–7); the shape hierarchy at grade 4.
- **Pre-K**: Virginia's Early Learning and Development Standards: Birth–Five Learning Guidelines (approved 18 Mar 2021), Area Five Cognitive Development, CD3 Mathematics (pp. 64–68), the Later Preschool band (44–60 months, the oldest of six): 31 indicators, codes as printed (`CD3.1q`); domains are ours for the five focus areas (CQ = CD3.1, NO = CD3.2, GS = CD3.3, SP = CD3.4, DM = CD3.5). Mapped 2026-10-02 (`VA_PK`; `data/prek/va.tsv`): 18 rows link Head Start goals, 23 other sheets. The old virginiaisforlearners host is dead; VDOE's copy is byte-identical to the Wayback copy ([sources.md](sources.md)).

## Maryland College and Career Ready Standards (MCCRS) for Mathematics, 2025 revision

- **Edition**: adopted 29 Jul 2025; in classrooms from 2026–27; includes prekindergarten. Publisher: Maryland State Department of Education (MSDE). Use the official name with its year.
- **Domains**: NOS Number and Operation Sense, AT Algebraic Thinking, GR Geometry and Measurement, DS Data and Statistics (pre-K renames GR "Geometric Reasoning and Measurement", DS "Reasoning with Data and Statistics"; labels as Mathness uses them).
- **Code grammar**: `<grade>.<domain>.<cluster letter>.<n>`, with n numbered continuously through the domain across clusters: `3.NOS.B.2`, `3.NOS.F.13`, `K.GR.B.4`; pre-K `PK.NOS.A.1`…`PK.DS.A.2`.
- **Source**: MSDE's grade-level crosswalks to Common Core (the only own set with an official crosswalk), plus the PreK crosswalk (Nov 2025) and PreK Standard Companion Guide (Jul 2026).
- **Moved content** (why sheets must print the set's own grade): symmetry CCSS 4.G.A.3 → MD 2.GR.B.6; position words Head Start P-MATH 10 → MD K.GR.B.4; fluency within 5 K.OA.A.5 → MD 1.NOS.D.9; rule patterns 4.OA.C.5 → MD 5.AT.B.3; triangle area (CCSS 6.G.A.1) → MD 4.GR.A.4.
- **New or earlier**: counting back from 20 and subitising in K; patterns and ordering by size in K; number-line estimates, subtracting 1-digit from 2-digit, quarter hours, coins and bills in grade 1; estimating, elapsed time, money to $20 in grade 2; numbers to 10,000, estimating sums, fraction of a set, perimeter as distance in grade 3; to 1,000,000 and misleading graphs in grade 4; exponents, braces, mode/range and misleading graphs in grade 5.
- Mathness lets Maryland rows cite Common Core codes only, so Maryland's in-scope gaps are filled on the Common Core sheets themselves (as alternatives), and out-of-scope content gets Maryland-only sheets.

## Mapping a framework (the method that worked)

1. Transcribe every row: code, grade, strand, your own summary, and the source document and date in the file header.
2. Map each row to the CCSS codes it **carries** (its content is that standard's, possibly from another grade) and the codes it only **partly** covers or absorbed (moved or split in). Use the official crosswalk if one exists (Maryland); otherwise read both texts and mark the mapping inferred.
3. A row that carries nothing is new content: it needs a sheet filed under its own code ([coverage.md](coverage.md)).
4. Print the set's code **and grade** on the sheet; show the CCSS code beside it on screen ("was" or "Common Core").
5. Fit-review every row against what its sheets actually ask ([fit-review.md](fit-review.md)).
