# Kentucky (KY)

In effect for 2026–27: Kentucky Academic Standards (KAS) for Mathematics, adopted 2019 (704 KAR 8:040; document v1.4 dated 7/1/19). Common Core with Kentucky's own sub-parts, dot plots and earlier coins. Mathness models it as a crosswalk in Kentucky's own codes (edition `ky`, 226 rows, `/kentucky/`). A revision is under way but nothing had been adopted as of 2026-10-02, so there is no next edition yet.

## Documents
- Standards (Kentucky Department of Education, KDE): https://education.ky.gov/curriculum/standards/kyacadstand/Documents/Kentucky_Academic_Standards_Mathematics.pdf
  - Laid out as a table: standard, "Clarifications" (most of Common Core's examples moved here; not read as standard text), MP tags, and "Coherence" links (KY.K.CC.1→KY.1.NBT.1).
- Review status: https://education.ky.gov/curriculum/standards/kyacadstand/Documents/Mathematics_Standards_Meeting_Minutes_Apr_14_2026.pdf
  - The advisory panel and review committee were revising the standards with AIR on 14–16 April 2026, under KRS 158.6453.
  - KDE's "Kentucky Academic Standards Review Timeline" (updated June 2026) lists math as: Standards Review, then Legislative Process, then Classroom Implementation (tentative), then Operational Assessment (tentative).
- Common Core baseline used for every comparison: https://corestandards.org/wp-content/uploads/2023/09/Math_Standards1.pdf
- No official KAS-to-Common Core crosswalk was found. Every mapping comes from comparing the two texts directly, so all of them are ours.

## Codes
- `KY.<grade>.<domain>.<number>[letter]`, with no cluster letter: KY.K.CC.1, KY.K.CC.1b, KY.1.MD.3b, KY.3.MD.3b, KY.4.OA.3a.
- Domains are Common Core's: CC (K), OA, NBT, NF (3–5), MD, G.
- Numbers match Common Core's within each domain. The one added number is KY.K.MD.4 (coins). So deleting `KY.` and adding the cluster letter gives the Common Core code for almost every row. Still, map rows by the crosswalk, not by string: sub-parts often carry new content.
- Kentucky treats lettered sub-parts as codes (its coherence notes cite KY.1.MD.3b and KY.3.NF.3d).
  - The research TSV has one row per sub-part, plus a stem row when the stem has its own text: 269 rows.
  - The app folds sub-parts that equal Common Core into their standard, leaving 226 rows. 77 of them are lettered.
- Mathness search strips a leading `KY.` from queries.

## Against Common Core
- Research TSV, 269 rows (K 36, 1 40, 2 33, 3 50, 4 61, 5 49): 162 same, 101 edited, 4 moved, 2 new. The app has 226 rows (K 32, 1 36, 2 30, 3 40, 4 53, 5 35).
- No Common Core K–5 standard is dropped entirely.
- K:
  - Count backward from 30 (KY.K.CC.1b, new).
  - Write numerals 0–20 (KY.K.CC.3a/3b).
  - Equality shown as a balance (KY.K.OA.3b, new).
  - Sorting stops at sorting into categories of up to 10. Counting the categories and ordering them by count (K.MD.B.3) is not in the text.
  - Name pennies, nickels, dimes and quarters (KY.K.MD.4, moved from 2.MD.C.8).
  - Position words split out as KY.K.G.1b.
- Grade 1:
  - Coin values (KY.1.MD.3b, moved from 2.MD.C.8).
  - Count back from 120 (KY.1.NBT.1a).
  - A full data cycle (KY.1.MD.4a–d): pose a question, decide how to collect the data, organize up to three categories, answer questions.
  - Composite solids (KY.1.G.2b).
- Grade 2:
  - Money problems within 100 using $ or ¢ but not both, with no decimals (KY.2.MD.8).
  - Count backward within 1,000 (KY.2.NBT.2).
  - Line plots become dot plots with a statistical question (KY.2.MD.9a–c).
- Grade 3:
  - Elapsed time within and across the hour (KY.3.MD.1).
  - Statistical questions with scaled graphs and dot plots (KY.3.MD.3a–c, KY.3.MD.4a–d).
  - Perimeter split into a–c.
  - Polygons classified by sides and vertices (KY.3.G.1a, moved from 2.G.A.1). Trapezoids and parallelograms are named (KY.3.G.1b).
- Grade 4:
  - Order of operations without parentheses (KY.4.OA.3a, moved from the 3.OA.D.8 footnote).
  - Decimal comparisons valid only for the same whole (KY.4.NF.7b).
  - Measurement on scaled number lines (KY.4.MD.2c).
  - Dot plots in eighths that answer a statistical question (KY.4.MD.4a–c).
- Grade 5:
  - Mixed numbers with unlike denominators (KY.5.NF.1).
  - Benchmark estimates (KY.5.NF.2b).
  - 5.MD.B.2's fraction line plot is replaced by choosing a bar graph, pictograph or dot plot for categorical or numerical data (KY.5.MD.2).
- Dropped wording: "know from memory" is absent from KY.2.OA.2 and KY.3.OA.7 (it may sit in the clarifications).
- Judgment calls (all ours):
  - KY.K.CC.1b and KY.K.OA.3b are marked new.
  - The coin rows are marked moved from 2.MD.C.8.
  - KY.4.OA.3a is marked moved from 3.OA.D.8.
  - A sub-part carved from one Common Core sentence is "edited".

## Sheets for state content
- gen.py has no `ky` entry in OVR or NAMES: ky.ts uses an older header that mentions folding lettered parts. Moved and new rows serve from:
  - KY.K.MD.4, KY.1.MD.3 and KY.1.MD.3b: Maryland's grade 1 coin sheet 1.GR.C.6.
  - KY.K.CC.1 and 1b: Maryland's counting-back sheets K.NOS.A.3 and 1.NOS.A.1.
  - KY.K.OA.3b: 1.OA.D.7 and K.OA.A.3.
  - KY.3.G.1a: 2.G.A.1.
  - KY.4.OA.3: 3.OA.D.8. KY.4.OA.3a: 5.OA.A.1 and 3.OA.D.8.
- 24 rows carry `from` sheets in all. Fit-review extras include:
  - Head Start's position goal P-MATH 10 for KY.K.G.1b.
  - Texas solids 1.6E for KY.1.G.2b.
  - Florida facts within 10, MA.K.NSO.3.2, for KY.1.OA.6a.
  - 2.MD.D.10 graphs for the grade 1–2 data rows.
- No sheets were written under a KY code.
- Fit review: every KY row was fully practised by the last review. KY.4.MD.2c, KY.3.MD.3b, KY.4.OA.3a and KY.1.MD.4b were partial earlier and closed in passes 9–11.

## Pre-K
- Kentucky's Early Childhood Standards, revised (2021): 4 rows. Mapped 2026-10-02 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.ky`), data in `data/prek/ky.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out.
- Source: https://kyecac.ky.gov/professionals/Early-Childhood-Standards/Resources/Documents/Standards%20for%20pdf%20Online%20Printable.pdf
- Codes carry the math prefix, `Math 1.1`, since the bare numbers repeat in other areas.
- Domains: M Mathematics (4: `Math 1.1` … `Math 1.4`).
- 4 rows link Head Start goals, 3 link other sheets (0 with no Head Start goal). No later-grade borrowing.

## Uncertain
- Classroom start year of the 2019 standards is not recorded in the sources.
- Replacement timing:
  - editions.ts says revised standards are "tentatively expected in classrooms in 2027–28", but no draft text has been published.
  - The KDE timeline grid's year columns were hard to read from the PDF text.
  - Status on 2026-10-02 (source check): technical edits were made in June 2026, with an update on "next steps in the regulatory process"; no item on the Kentucky Board of Education's August–October agendas and no amendment to 704 KAR 8:040. So the 2027–28 start looks tight (inference).
  - Recheck KDE before relying on this set for 2027–28. KDE's PDFs answer 404 to HEAD requests; check them with GET ([research.md](../research.md)).
- Equation images in the two-column PDF lose fraction symbols on text extraction. Codes and mappings are unaffected.
