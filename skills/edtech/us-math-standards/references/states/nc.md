# North Carolina (NC)

In effect for 2026–27: North Carolina Standard Course of Study for Mathematics (2017; K–8 in classrooms from 2018–19). Mathness models it as a crosswalk in NC's own codes (edition `nc`, 131 rows; pre-K in NC's own codes, see Pre-K). New K–12 standards were adopted on 1 October 2026, planned for 2028–29; see Next edition.

## Documents
- Standards: NCDPI K-12 Mathematics Standard Course of Study (English), a Google Doc linked by NCDPI: https://docs.google.com/document/d/1ZCt83aTtuev58rHlZkakK989vziGI3eLk2xNXi8u_4o
- Official crosswalk: "Crosswalk of NC K-12 Mathematics - 2010 and 2017 Standards". The 2010 standards are CCSS, so this is effectively an NC↔CCSS crosswalk: https://docs.google.com/document/d/1B7Qp8jpYjXlA9zcwNHAa5txYx7GxbyBAF-0ujWGczc8
- Both are linked from https://www.dpi.nc.gov/districts-schools/classroom-resources/academic-standards/standard-course-study/mathematics/resources. The NCDPI page was updated 4/2026 and still lists the 2017 SCOS.
- Publisher: North Carolina Department of Public Instruction.
- The crosswalk labels each change ("standard removed", "incorporated", "concept from", "new standard/objective"). The research followed these labels except where noted under Judgement calls.

## Codes
- Grammar: `NC.<grade>.<domain>.<number>`, with no cluster letter. Examples: `NC.K.CC.4`, `NC.1.MD.5`, `NC.3.NF.4`, `NC.4.MD.8`, `NC.5.NBT.7`. The `NC.` prefix is part of the official code.
- Domains are Common Core's: CC, OA, NBT, NF, MD, G.
- NC uses bullets, not lettered sub-parts, so there is one row per standard.
- Numbers do not track CCSS:
  - New numbers were carved out of CCSS standards: `NC.1.OA.9` (fluency within 10, from 1.OA.C.6), `NC.1.NBT.7` (numerals to 100, from 1.NBT.A.1), `NC.4.NBT.7` (compare to 100,000), `NC.4.MD.8` (elapsed time).
  - The same number can mean other content. `NC.3.NF.4` is comparing fractions; `NC.4.MD.1` is metric measurement.
- Typo: the standards document prints NC.5.MD.1 as `NC.5MD.1`.
- No collisions with other Mathness sets, because the prefix keeps NC codes unique.

## Against Common Core
- Rows: 131, of which 55 same, 74 edited, 1 moved, 1 new. By grade: K 23, 1 23, 2 23, 3 20, 4 25, 5 17.
- New: `NC.K.OA.6`, combining small groups up to 5 without counting.
- Moved: `NC.1.MD.5`, quarters, dimes and nickels related to pennies in grade 1, from 2.MD.C.8.
- Dropped (crosswalk "standard removed"):
  - 1.OA.C.5: relating counting to addition.
  - 2.MD.D.9: line plots in grade 2.
  - 2.G.A.2: rows and columns of squares.
- Moved within K–5:
  - Metric mass and volume go to `NC.4.MD.1`; grade 3 is customary (`NC.3.MD.2`).
  - Line plots go to grade 4 (`NC.4.MD.4`).
- Moved out of K–5: 5.NBT.A.2 exponents go to NC.6.EE.1.
- Merged, per the crosswalk: 3.OA.4→NC.3.OA.3, 3.OA.5→NC.3.OA.1, 4.NBT.3→NC.4.OA.3, 4.MD.5/7→NC.4.MD.6, 5.NF.5/6→NC.5.NF.4, 5.G.4→NC.5.G.3, and others.
- Narrowed:
  - 4.OA.4 factor pairs to 50.
  - 4.NBT work to 100,000.
  - Multi-digit multiply/divide to three digits in grade 4, and to 3-digit × 2-digit in grade 5.
  - 2.NBT.6 to three addends.
  - Brackets and braces dropped.
  - "Know from memory" dropped from 2.OA.2.
- Added scope:
  - Count to 150 (`NC.1.NBT.1`).
  - Yards (`NC.2.MD.3`).
  - Frequency tables and categorical vs numerical data (`NC.3.MD.3`, `NC.4.MD.4`).
  - Line graphs replace fraction line plots in grade 5 (`NC.5.MD.2`).
  - Two joined prisms (`NC.5.MD.5`).
- Judgement calls (ours):
  - The crosswalk has no rows for NC.K.OA.5, NC.3.OA.7 and NC.4.NF.7; they were mapped by content.
  - NC.3.OA.9, NC.3.NBT.3, NC.3.MD.8, NC.4.OA.3, NC.4.NF.4 and NC.5.NBT.7 are labelled "new standard/objective" in the crosswalk but carry CCSS content, so they were mapped as edited.
  - NC.4.MD.8 was mapped to 4.MD.A.2 plus 3.MD.A.1.

## Sheets for state content
NC predates gen.py's OVR table, so its links sit directly in nc.ts:
- Coins `NC.1.MD.5`: Maryland `1.GR.C.6`.
- Small groups without counting `NC.K.OA.6`: Maryland `K.NOS.B.8` plus K.OA.A.5.

The fit review (extra.tsv, 23 lines) added:
- Subitizing in `NC.K.CC.4`: Maryland `K.NOS.B.8`.
- Fluency within 10 `NC.1.OA.9`: Florida `MA.K.NSO.3.2`.
- Customary measurement: Virginia `3.MG.1`.
- Frequency tables: Texas `3.8A`, New Jersey's `NJ.4.DL.A.2`, Maryland `4.DS.A.1`.
- Line graphs: Virginia `4.PS.1`.
- Decimals: Virginia `4.CE.4`.
- Elapsed time across the hour: Virginia `4.MG.2`.
- Triangle and quadrilateral classes: Virginia `5.MG.3`.
- Solids: Texas `2.8B`.

No NC-prefixed sheets. The latest fit verdicts leave no partials.

## Pre-K
- North Carolina Foundations for Early Learning and Development (2013), older preschooler indicators: 23 rows. Mapped 2026-10-01 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.nc`), data in `data/prek/nc.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out, so numbering can skip.
- Source: https://ncchildcare.ncdhhs.gov/Portals/0/documents/pdf/N/NC_Foundations.pdf
- Codes `CD-10n` … `CD-13h` (Cognitive Development goals CD-10 to CD-13, the letter is the indicator; older-preschooler letters start partway through the alphabet).
- Domains: NQ Numbers and Quantities (10), CM Compare, Sort, Measure and Pattern (6), SP Shapes and Position (3), PS Mathematical Problem Solving (4).
- 19 rows link Head Start goals, 11 link other sheets. Borrowed later-grade sheets: CD-10w → MA.K.NSO.1.3; CD-11m → 1.MD.A.2; CD-11o → K.GR.A.3.

## Next edition
- The State Board adopted new K–12 math standards (Draft 3) on 1 October 2026, without opposition, planned for classrooms in 2028–29. The 2017 SCOS stays in use until then (editions.ts note, checked 2026-10-01).
- Evidence: the State Board agenda of 1 Oct 2026 (item SSE 3, for action) and news reports (WRAL, 1 Oct 2026: https://www.wral.com/news/education/changes-to-nc-school-math-requirements-standards-vote-october-2026/, "without opposition"). No minutes posted as of 2026-10-02. The 2028–29 start is DPI's tentative timeline (installation 2026–27 and 2027–28).
- Mathness edition `nc29` ("North Carolina (2028–29)", /north-carolina-2028-29/, `starts` 2028–29), added 2026-10-02: 322 rows, one per objective, in the official codes and order, from the State Board's meeting documents, the standards (Draft 3) and NCDPI's own 2017-to-2026 crosswalk. Each objective carries the Common Core codes of the 2017 standards NCDPI pairs it with; objectives NCDPI marks "New" link sheets chosen for them. Research file `data/crosswalks/nc29.tsv`: 153 same, 116 edited, 35 moved, 18 new (kinds judged against Common Core; NCDPI's "New" is against NC 2017, so of its 44 plain New rows 14 are new, 17 moved and 13 edited).
- Fit review of every row (all 322, 2026-10-02): 225 good / 93 partial / 4 mismatch first; the North Carolina pass (`states-nc.ts`, app commits 277b5f55, d77fcd8c … 6b854657); a fresh review 286 / 36 / 0; new links and a second pass (`states-nc2-a.ts` … `-d.ts`, app commit f372857d); a second fresh review 316 / 6 / 0; the six fixed (links, numbers to words, naming a share, hundreds and thousands) and re-reviewed: 322 / 0 / 0. Links from the Common Core codes NCDPI pairs a row with stay even where a reviewer called them off-topic. Five summaries were reworded against the Draft 3 text.
- Documents (State Board meeting of 1 Oct 2026, item SSE 3, "K-12 Mathematics Standards Draft 3", for action; the agenda pages block scripts, read them in a browser; attachments download directly):
  - Agenda: https://simbli.eboardsolutions.com/SB_Meetings/ViewMeeting.aspx?S=10399&MID=19087&Tab=Agenda
  - Standards (105 pp., still watermarked DRAFT, footers September 2026): https://simbli.eboardsolutions.com/Meetings/Attachment.aspx?S=10399&AID=487705&MID=19087
  - NCDPI 2017-to-2026 crosswalk (221 pp., DRAFT): https://simbli.eboardsolutions.com/Meetings/Attachment.aspx?S=10399&AID=487706&MID=19087
  - Board slides (AID 487709): installation 2026–27 and 2027–28, in effect 2028–29 (tentative).
- Codes `Grade.Domain.Standard.Objective` (`K.ANR.2.3`), no `NC.` prefix or cluster letter. K–5 domains in every grade: ANR (Algebraic and Numerical Reasoning), SGMR (Spatial, Geometric, and Measurement Reasoning), RD (Reasoning with Data). 322 K–5 objectives under 76 standards (K 48, 1 52, 2 48, 3 58, 4 64, 5 52).
- Against Common Core: subitizing, counting back, repeating patterns and the data cycle from K; coins and skip-counting by 5s in grade 1; lines, segments, parallel/perpendicular and angle types in grade 3; metric measuring and area of rectilinear figures in grade 4; range, mode and median in grade 4; rounding never named; grade 5 divides by one-digit divisors only; decimal × decimal, exponents and fraction line plots gone.

## Uncertain
- The adoption rests on the agenda (item for action, recommended for approval) and news reports; no minutes for 1 Oct 2026 were posted as of 2026-10-02. The adopted text is still the Draft 3 attachment; a clean edition may follow on dpi.nc.gov, which still lists only the 2017 standards. 2028–29 is DPI's tentative date.
