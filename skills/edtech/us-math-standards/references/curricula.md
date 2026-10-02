# Mapping a curriculum's units to sheets

A curriculum view is a third way in, beside the standards sets: a grade's units in the order a class meets them, each linked to the sheets that practise it. Unit titles are navigation only. Copy nothing from a curriculum beyond unit numbers and titles; the sheets are your own.

## Which curricula matter

Share of US elementary math teachers who use each program at least weekly, spring 2025 (RAND American Instructional Resources Survey, report RRA4594-1, published 19 Dec 2025, CC BY 4.0, nationally weighted; teachers, not students; several answers per teacher, so family totals overlap). Mathness had mapped the ones marked ✓ by 2026-10-01.

| Program | Publisher / notes | Weekly use | Mapped |
| --- | --- | --- | --- |
| Eureka Math family | Great Minds; Eureka (2015) = EngageNY; Eureka Math² is the newer edition | up to 20.4% | ✓ 2015 |
| i-Ready Classroom Mathematics | Curriculum Associates (formerly Ready Classroom Mathematics) | 18.5% | ✓ 2024 |
| enVision Mathematics | Savvas; three editions in use | up to 16.8% | ✓ ©2024 |
| HMH family | Go Math!, Into Math, Math Expressions, Math in Focus | up to 12.7% | ✓ Go Math! ©2015 |
| Zearn | often a supplement | 9.6% | next |
| Bridges in Mathematics | The Math Learning Center | 9.1% | next |
| Illustrative Mathematics K–5 | IM; several distributors (Kendall Hunt, others) | up to 6.4% | ✓ |
| Big Ideas Math: Modeling Real Life | | 4.3% | |
| Reveal Math | McGraw Hill | 4.0% | |
| Everyday Mathematics 4 | McGraw Hill, two editions | up to 3.8% | next |
| Amplify Desmos Math | Amplify; K–5 units largely follow IM K–5's | 1.9% | ✓ |

Inside the families (same survey): Eureka 10.1 + Eureka Math² 5.4 + EngageNY 4.9; enVision 2020 9.5 + 2.0 4.8 + 2012 2.5; Go Math! 5.2, Into Math 4.0, Math Expressions 2.4, Math in Focus 1.1; IM via Kendall Hunt 3.7 + Imagine Learning/McGraw Hill 2.0 + others; also STEMscopes 2.4, My Math 2.3, Investigations 1.7, Bluebonnet 0.3; teacher-made 17.9 and district-made 10.7. Zearn is required or recommended for only 6.4%. Report: https://www.rand.org/pubs/research_reports/RRA4594-1.html (published 2025-12-19; the annex workbook has the per-program tables).

EdReports (2026) rates as meeting expectations on all gateways: Eureka Math² 2021, IM K–5 2021, i-Ready Classroom 2024, enVision 2024, Into Math 2020, Reveal 2023, Bridges 3rd ed. 2024, Amplify Desmos Math 2026, Math Expressions 2018, Zearn 2018; mixed or partial: Eureka 2015, Everyday Mathematics 4 (2020), Go Math! 2015, My Math 2014; Math in Focus 2020 does not meet.

State adoption lists point the same way: Texas funds Bluebonnet Learning (built on Eureka); Florida's 2026–27 adoption list (classrooms from 2027–28) includes Eureka Math², enVision+ and Go Math!; Louisiana's top tier is Eureka Math², IM K–5, Ready Classroom (i-Ready) and Zearn. Other inputs used: EdReports, Texas IMRA, Florida's 2026–27 and California's 2025 adoption lists, Louisiana's Tier 1 reviews. Next by use: Bridges, Zearn, Into Math, Everyday Mathematics: roughly another quarter of teachers, with overlap.

Openly licensed curricula go first because their lesson-level standards are public: Eureka (2015)/EngageNY is Creative Commons non-commercial share-alike and IM K–5 is CC BY 4.0 (its name and logo excluded); details in [licensing.md](licensing.md). Confirm the license on the edition's own pages before relying on it. The proprietary ones are mapped from publishers' own lesson-level standards lists, cross-checked against district pacing guides.

## The method

1. **Pin the edition** (year or ©) and use the publisher's own word for a unit: Eureka *modules*, enVision *topics*, Go Math! *chapters*, the rest *units*. Skip pre-K (none of the six has pre-K units) and end-of-year "Step Up to Grade N" topics (they teach next grade).
2. **Find lesson-level standard tags**: publisher correlations, scope and sequence, family-engagement pages, chapter-test record forms; IXL skill plans and ST Math correlations give unit membership and titles.
3. **Choose a filter that fits the publisher's tagging style.** Raw unions over-claim when a publisher tags warm-ups and review:

   | Curriculum | Rule used | Why |
   | --- | --- | --- |
   | Eureka Math (2015), 40 modules | each module overview's *focus standards* | the overview names them; New York additions (ordinals, grade 1 coins) aren't Common Core, dropped |
   | IM K–5, 50 units | standards addressed by ≥ 1/5 of the unit's lessons, most taught first | IM tags every warm-up, so the full list touches most of the grade |
   | i-Ready Classroom 2024, 34 units | union of each lesson's *primary* standards (Curriculum Associates' K–8 CCSS scope and sequence); unit membership from IXL's 2024 skill plans | cross-checked with a NY-edition grade 1 contents and two district guides (Onslow County NC, Newburyport MA); non-Common Core lessons (grade 1 Money) add nothing |
   | enVision ©2024, 92 topics | a standard counts if it **leads a lesson or is tagged in two or more**; drop single "also" tags, off-topic tags on shape topics (counting in K, length in grades 1–2, fractions in grade 3) and fact-fluency tags on topics that aren't about multiplying | ©2024 topic titles equal ©2020's (checked against IXL's 2020 plans, grades 1–5) |
   | Go Math! ©2015, 71 chapters | union of HMH's lesson-by-lesson correlations; parts (K.CC.B.4a) given as their standard; keep an extra tag only when two sources agree (4.OA.A.2 in grade 4 chapter 4 from the chapter-test record forms; 3.OA.D.8 in grade 3 chapter 2 from two district maps) | single-source extras were noise |
   | Amplify Desmos Math, 43 units | hand-mapped skill ids from the units' public topics (no per-unit standards list is published) | say so on the page: the mapping is your own reading |

4. **Expand standards to sheets.** A unit lists Common Core codes; its sheets are each code's sheets in order, each once (`unitOf`: strip a trailing part letter, look the code up, take its sheets own-code first). Make an unknown code fail loudly, since `unitOf` silently dropping it is how a unit goes quietly thin.
5. **Record every source URL and the date** in the data file's header (see [sources.md](sources.md), _Curricula_).
6. **Add a "unit review"**: a spiral review of up to a page of the unit's skills, redrawn per click; a one-skill unit has none.
7. **Test**: every unit lists real skills of its own grade, each once; the skills share that grade in some set (so the review mixes); units are numbered 1…n; every unit with two or more skills makes a review that fits one page; unit links round-trip and junk routes fall back to browsing.

Traps met while mapping:

- **IM's course-guide "Lessons and Standards" table mixes Addressing with Building Towards.** Rebuild each unit from the lesson pages' own "Addressing" tags (`im.kendallhunt.com/k5/teachers/<grade>/unit-<n>/lesson-<l>/lesson.html`).
- **Eureka re-letters sub-parts** (its grade 5 module 5 "5.NF.4 a." is Common Core's 5.NF.B.4b), and its New York additions (K.CC.4d, grade 1 money 1.MD.3, NY pre-K codes) aren't Common Core. engageny.org now redirects to nysed.gov; module overviews survive on the Internet Archive and UnboundEd's mirror.
- **Amplify** publishes no per-unit standards; EdReports' 2026 reports gave partial codes for 29 of 43 units. Amplify's robots.txt blocks its unit PDFs; IXL blocks AI crawlers (one targeted fetch per grade, titles only).
- **Publisher marketing pages** (Savvas, HMH, Zearn, Great Minds) often return 404 or 403 to scripts; district-hosted correlations and pacing guides are the dependable source.

Known limits of standards-derived units: two units teaching the same standards at different ranges (Eureka grade 1 modules 4 and 6) show the same sheets.

## Trademark care (nominative use)

- Name the curriculum in **plain text only**: no logos, no look-alike colours or type.
- Every curriculum page carries a note naming the owner's legal entity: "Sheets matched to the {units} of {Name}, by the Common Core standards each {unit} teaches. {Unit} names help you find practice; the sheets are our own. {Product} is not affiliated with, sponsored or endorsed by {Great Minds | Illustrative Mathematics | Curriculum Associates | Savvas Learning Company | Houghton Mifflin Harcourt | Amplify}."
- Show only unit numbers and titles; never lesson content.
- **Never put a curriculum's name on anything that prints**: sheets, keys, parent guides, PDFs.
- Keep the site-wide terms page's trademark line current when a curriculum is added (Mathness's still named only Amplify after five more were added).
