# States in Common Core's own codes (and jurisdictions not covered)

**What this covers:** every jurisdiction whose 2026–27 K–5 math standards Mathness shows as Common Core's standards and codes under the jurisdiction's own name. Three of them add one or two standards. It also covers the jurisdictions Mathness does not cover yet.

**Sources:**
- `apps-web/mathness-app/src/standards/editions.ts`: names, years and notes, audited against primary sources 2026-10-01. Where sources differ, editions.ts wins.
- `sets.ts` (`editionSet`, `editionGrades`).
- `publishers.ts`.
- Hawaiʻi DOE's 14 May 2026 memo to the Board's Student Achievement Committee, and the Board's 18 June 2026 minutes.
- California's 2025 adoption Standards Map templates.
- Puerto Rico's 2022 standards PDF.

Washington and Hawaiʻi are also in this group for 2026–27, but their next editions are crosswalks; see `wa.md` and [hi.md](hi.md).

## Jurisdictions

| Jurisdiction (id, page) | Official standards name (editions.ts) | Year | Notes / next |
| --- | --- | --- | --- |
| California (`ca`, /california/) | California Common Core State Standards: Mathematics | 2010 | Modified in 2013: two added standards (below) and added wording in a few others. The 2023 Mathematics Framework is guidance, not standards. |
| Connecticut (`ct`, /connecticut/) | Connecticut Core Standards for Mathematics | 2010 | Common Core as written. |
| Delaware (`de`, /delaware/) | Common Core State Standards for Mathematics | 2010 | Common Core as written. |
| District of Columbia (`dc`, /washington-dc/) | Common Core State Standards for Mathematics | 2010 | Shown as "Washington, DC". Publisher: Office of the State Superintendent of Education. |
| DoDEA (`dodea`, /dodea/) | DoDEA College and Career Ready Standards for Mathematics | 2015 | Department of Defense Education Activity schools use Common Core's standards and codes. Secondary name DoWEA (EO 14347; CRS IF10335, 29 Apr 2026); the agency is still DoDEA, not renamed. Its standards page titled the document "DoWEA College and Career Ready Standards for Mathematics" by 2026-06-15 (Wayback, per the 2026-10-02 check), content unchanged. Badge "DD"; no flag. Mathness serves DoDEA pre-K with Head Start's goals (its own pre-K follows Teaching Strategies GOLD, a commercial framework). |
| Hawaiʻi (`hi`, /hawaii/) | Hawaiʻi Common Core Standards for Mathematics | 2010 | Revised standards (approved June 2026) switch K–5 in 2027–28; modelled as the crosswalk edition `hi27`, see [hi.md](hi.md). |
| Idaho (`id`, /idaho/) | Idaho Content Standards: Mathematics | 2022 | Keeps Common Core's codes; some standards rewritten; adds a grade 1 money standard 1.MD.D.5. A renumbered draft is out for comment until 6 Oct 2026; see Watch list. |
| Illinois (`il`, /illinois/) | Illinois Learning Standards for Mathematics | 2010 | Common Core as written. |
| Maine (`me`, /maine/) | Maine Learning Results: Mathematics | 2020 | Groups Common Core's standards into four reasoning strands, keeps their codes, and adds a grade 1 money standard 1.MD.D.5. Review cycle paused under LD 1701 until a legislative taskforce finishes (meetings through 10 Feb 2027): https://www.maine.gov/doe/learning/standardsreview (2026-10-02). |
| Michigan (`mi`, /michigan/) | Michigan K-12 Standards for Mathematics | 2010 | Common Core as written. HB 4159 is on the watch list. |
| Nevada (`nv`, /nevada/) | Nevada Academic Content Standards in Mathematics | 2010 | Common Core as written. |
| New Hampshire (`nh`, /new-hampshire/) | New Hampshire College and Career Ready Standards | 2010 | Common Core as written. HB 1571 (2026) did not pass: the Senate laid it on the table on 7 May 2026, with no later action (gc.nh.gov bill status, per the 2026-10-02 check); news reports that it became law are wrong. |
| New Mexico (`nm`, /new-mexico/) | New Mexico Common Core Content Standards for Mathematics | 2010 | Common Core as written. Agency page: https://web.ped.nm.gov/bureaus/math-and-science-bureau/ (webnew.ped.state.nm.us is gone, 2026-10-02). |
| Vermont (`vt`, /vermont/) | Common Core State Standards for Mathematics | 2010 | Common Core as written. Agency page: https://education.vermont.gov/learning/content-areas/mathematics (moved from `/student-learning/content-areas/mathematics`, 2026-10-02). |
| Washington (`wa`, /washington/) | Washington State K–12 Learning Standards for Mathematics | 2011 | Common Core as written in 2026–27. WA Math 2026 (`wa27`) is required from 2027–28; see `wa.md`. |
| Guam (no edition) | Common Core State Standards for Mathematics | not confirmed | Common Core as written. Served by the Common Core pages; no Guam page or set. |
| Puerto Rico (not covered) | Estándares de Contenido y Expectativas de Grado: Matemáticas | 2022 | Departamento de Educación de Puerto Rico, © July 2022. See "Not covered". |
| U.S. Virgin Islands (`vi`, /us-virgin-islands/) | Virgin Islands Standards of Achievement (VISA) for Mathematics | 2021 | Common Core with a `VISA.Math.Content` prefix (`VISA.Math.Content.3.OA.A.1`), added 2026-10-02 (app commit a4f81661). 191 K–5 entries, nothing added or removed; one change: K.CC.A.3 writes numerals 1 to 20, not 0 to 20. Printed typos: K.MD.A.3 for K.MD.B.3, 1.OAC..6 for 1.OA.C.6. Issued by the VI Department of Education (Division of Curriculum and Instruction), June 2021; no dated Board act found (EdGate: Common Core adopted 30 Sep 2010). Badge "VI", no flag; running text says "the U.S. Virgin Islands" (`the: true`); search names USVI, VISA, St. Thomas, St. Croix, St. John; Cloudflare's country "VI" offers it. Pre-K: Head Start, since the USVI Early Learning Guidelines (April 2010, DHS and VIDE) have uncoded math indicators: https://dhs.vi.gov/wp-content/uploads/2023/02/OCCRS_Virgin-Islands-Early-Learning-Guidelines.pdf |

**Publishers:** listed in `publishers.ts`. The pages and Terms credit them.

## How these editions are built (`editionSet`)

**The data:** each jurisdiction is an `Edition` in `EDITIONS` with `id` (postal code, or `dodea`), `state`, `standards`, `year`, an optional `note`, and an optional `added`. It has no `crosswalk` and no `count`.

**Building the set:** `SETS` maps every edition through `editionSet(edition)`.
- **Name:** `editionName`, e.g. "Illinois", or "Washington (2027–28)" when the edition has `starts`.
- **`ccssLabel`:** "Common Core".
- **Pre-K:** the state's own pre-K where its edition has a `preK` document (see Pre-K in states' own codes), else `headStartFor(state, "early learning guidelines")`: Head Start's goals plus a note that the state's guidelines aren't mapped.
- **Grades:** a lazy getter. For an edition without a crosswalk, `editionGrades(edition)` runs on first read and the result is cached in `LOADED`.

**What `editionGrades` returns:** Common Core's grades (`CCSS_GRADES`, every standard carrying its own code) with each `added` standard spliced in.
- It goes through each domain's standards in order (`flatMap`). After the standard whose code equals `added[i].after`, it inserts `{ code, summary, ccss }`.
- An added standard therefore sits in the same grade and domain as its `after` standard.
- Its `ccss` lists the codes of the sheets that serve it, which may be another set's codes, not Common Core's.

**Where they appear:**
- **Picker:** the "More states" group (`set-choice.tsx`), with the second line "Common Core's codes".
- **Set lists:** in `SETS` and `ALL_SET_IDS`, but not in `SET_IDS` (the five frameworks where a skill's home is worked out).
- **Routing:** like any set, e.g. `#/il/g/3`.
- **Site pages:** a hub only (`/illinois/`) linking Common Core's grade pages. `OWN_CODES` excludes editions without a crosswalk, so `hasStateGrade` is false and there are no `/illinois/grade-3/` pages.
- **Slugs:** `slugify(editionName(e).replace("ʻ", ""))`, which gives /hawaii/ and /washington-dc/.

**When a state renumbers or rewrites:** it gets a crosswalk TSV, then gen.py, then `src/standards/states/<id>.ts`. Its edition gains `crosswalk` and `count` and leaves this file. Next year's standards get their own edition with `starts` (e.g. `wa27`).

## California's two additions

California's adoption documents say "California Common Core State Standards for Mathematics with California Additions". Sources: the 2025 adoption Standards Map templates, SBE-approved 18 January 2024.

| CA code | After (Common Core) | What it adds | Served by sheet |
| --- | --- | --- | --- |
| 2.NBT.7.1 | 2.NBT.B.7 | Use estimation strategies to make reasonable estimates when solving problems | Maryland 2.NOS.A.5 (estimating on a number line; do sums and differences make sense) |
| 5.OA.2.1 | 5.OA.A.2 | Write a whole number from 2 to 50 as a product of its prime factors (e.g. 24 = 2 × 2 × 2 × 3) | Virginia 5.NS.2 (prime factorization) |

- CA writes its codes in the short form (2.NBT.7.1). Mathness keeps California's code as written, so it sits beside the cluster-lettered Common Core codes.
- California's added wording inside existing standards is not modelled. Those rows show Common Core's text.

**The same mechanism in Idaho and Maine:** 1.MD.D.5 is added after 1.MD.C.4, a coin standard served by Maryland's grade 1 coin sheet 1.GR.C.6.
- Idaho: identify quarters, dimes and nickels, and relate their values to pennies.
- Maine: identify the penny, nickel, dime and quarter and the value of each.

## Pre-K in states' own codes

Mapped 2026-10-02 (`STATE_PREK` in `src/standards/states/prek.ts`; data in `data/prek/<id>.tsv`). A Common Core-code state with a `preK` document now shows its own pre-K, fetched on demand by `loadSet`, with its own `/<state>/pre-k/` page (`hasStateGrade`); its K–5 stays Common Core's. Rows link Head Start goals first, then Maryland's pre-K sheets, then a K or grade 1 sheet. Hawaiʻi's own file has its detail.

| Jurisdiction | Document | Rows | First code | Source |
| --- | --- | --- | --- | --- |
| California (`ca`) | California Preschool/Transitional Kindergarten Learning Foundations, Mathematics (2024) | 24 | `Math 1.1` | https://www.cde.ca.gov/sp/cd/re/documents/ptklfmathdomain.pdf |
| Connecticut (`ct`) | Connecticut Early Learning and Development Standards (2025), mathematics on printed pages 40–43 | 12 | `M A1` | https://www.ctoec.org/forms-documents/ct-elds-what-children-birth-to-five-should-know-and-be-able-to-do.pdf (redirects to FINAL-CT-ELDS-12.1.25.pdf) |
| District of Columbia (`dc`) | District of Columbia Early Learning Standards, Mathematics, Pre-K Exit Expectations (2019) | 18 | `14a` | https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2019%20District%20of%20Columbia%20Early%20Learning%20Standards.%203.17.20.pdf |
| Delaware (`de`) | Delaware Early Learning Foundations: Preschool, Mathematics (2010) | 22 | `MA31` | https://dieecpd.org/static/uploads/files/elfpreschool9-10.pdf |
| Idaho (`id`) | Idaho Early Learning eGuidelines, Mathematics and Numeracy, 36–60 months (2019) | 3 | `Goal 39` | https://www.healthandwelfare.idaho.gov/services-programs/sub-domain-mathematics-and-numeracy |
| Illinois (`il`) | Illinois Early Learning and Development Standards (IELDS), Preschool, Mathematics (2013) | 37 | `6.A.ECa` | https://www.isbe.net/Documents/early_learning_standards.pdf |
| Maine (`me`) | Preschool Maine Early Learning and Development Standards (P-MELDS), Cognitive Development: Mathematical Practices and Reasoning, 46–60 months (2024) | 5 | `12a` | https://www.maine.gov/doe/sites/maine.gov.doe/files/inline-files/PreschoolMELDS2024.pdf |
| Michigan (`mi`) | Michigan Early Childhood Standards of Quality for Birth to Kindergarten, Mathematics (2022) | 17 | `Mathematics 1a` | https://www.michigan.gov/mileap/-/media/Project/Websites/mileap/Documents/Early-Childhood-Education/gsrp/standards/ECSQ-B-K_Final.pdf |
| New Mexico (`nm`) | New Mexico Early Learning Standards for Children Birth through Five (2026) | 5 | `5.1.A` | https://www.nmececd.org/wp-content/uploads/2026/04/ELS-Guide_2026.pdf |
| Nevada (`nv`) | Nevada Pre-Kindergarten Standards, Revised 2023 (2023) | 27 | `M.NQ.PK1` | https://webapp-strapi-paas-prod-nde-001.azurewebsites.net/uploads/nevada_pre_kindergarten_standards_cce1a3f525.pdf |
| Vermont (`vt`) | Vermont Early Learning Standards (2015) | 21 | `MA.1a.1.OP.1` | https://education.vermont.gov/sites/aoe/files/documents/edu-early-education-early-learning-standards.pdf |

California: codes carry the math prefix, `Math 1.1` (the document says "Foundation 1.1" inside its Mathematics domain), as Kentucky and Wyoming do, since the bare numbers repeat in other domains. Michigan: codes carry the math prefix, `Mathematics 1a`, since the bare numbers repeat in other subjects. Vermont: the document prints no compact codes; Mathness uses its manual's shorthand.

Connecticut: the 2025 CT ELDS (Office of Early Childhood page updated 3 Sep 2026, "The CT ELDS have been updated!") replaced the 2014 edition; Mathness remapped 2026-10-02 (app commit adfdf473). The 2025 edition numbers progressions only, not indicators, in four math strands: A counting and cardinality (A1–A5), B operations (B1), C attributes, meaning measurement, data, sorting and patterns (C1–C3), D geometry (D1–D3). The bare "A1" repeats across domains, so codes carry the M domain prefix as the document's own cross-references do (`M A1`). Patterns are newly in math (M C3 → P-MATH 7); borrowed sheets: M A1 → K.CC.A.2, M C1 → 1.MD.A.2, M C2 → K.8B and 1.MD.C.4, M D3 → 1.G.A.2.

Still Head Start: New Hampshire (its pre-K math has no codes) and DoDEA (its pre-K follows Teaching Strategies GOLD, a commercial framework).

## Watch list

**Hawaiʻi revision.** The Hawaiʻi DOE memo to William Arakaki, chair of the Board's Student Achievement Committee (14 May 2026), recommends Board approval of the revised Hawaiʻi Common Core Standards for Mathematics (HCCS-Math), K–12.
- **Elementary changes:** minor. Two new standards: one in kindergarten for measurement and data, one in grade 1 on money. The other changes are wording for clarity.
- **Schedule:**
  - Elementary: training year 2026–27, compliance year 2027–28.
  - Middle school: training 2027–28, compliance 2028–29.
  - High school: training 2027–28 and 2028–29.
- **Board vote:** the Board approved the revised K–12 standards unanimously on 18 June 2026, as editions.ts says (General Business Meeting minutes: https://boe.hawaii.gov/wp-content/uploads/gbm_minutes_20260618.pdf).
- **Done:** the final text (17 July 2026) is in Mathness as the crosswalk edition `hi27` (150 rows, 2026-10-01); see [hi.md](hi.md).

**Michigan HB 4159.** Passed the House in 2025 and stalled in the Senate ([landscape.md](../landscape.md)); no note in editions.ts. Recheck before acting.

**Idaho review.** Idaho's Department of Education posted a "JUNE 2026 DRAFT" of the K–12 math standards; public comment on the "2026-2027 standards revision" closes 6 Oct 2026. The page says "the 2025/2026 cycle" goes to the Legislature in January 2027 but lists math under 2026/2027, so which session takes math is unverified (review page, updated 16 Sep 2026: https://www.sde.idaho.gov/about-us/departments/content-and-curriculum/idaho-content-standards/content-standards-review/).
- **Draft:** https://www.sde.idaho.gov/wp-content/uploads/2026/09/DRAFT-Idaho-Content-Standards-for-Mathematics-June-2026.pdf
- **Codes:** cluster letters dropped and standards renumbered, so Idaho would leave Common Core's codes and need a crosswalk. The coin standard 1.MD.D.5 becomes 1.MD.7 ("Identify quarters, dimes, and nickels…"); new are K.MD.4 (sort coins by value) and 1.MD.8 (equivalent coin values).
- **When adopted:** add it as a next-year crosswalk edition (SKILL.md workflow E).

## Not covered

- **Puerto Rico:** its standards are its own and written in Spanish.
  - Own codes, e.g. 1.E.14.1.
  - Coins from K, probability from grade 1, and mean, median and mode in grade 5.
  - Mapping codes alone wouldn't serve Spanish-language classrooms. A Spanish edition is a separate, larger job ([landscape.md](../landscape.md), open items).
- **U.S. Virgin Islands (now served, 2026-10-02):** the VISA document, by the VIDE Mathematics Curriculum Workgroup, on the #GoOpenUSVI page "VISA Mathematics at a Glance" (added 1 Sep 2021, licence CC BY-NC-ND), which links a Google Drive folder of grade PDFs and a K–12 PDF. The page returns 403 without browser headers.
  - Page: https://goopenusvi.vide.vi/courses/visa-mathematics-at-a-glance · folder: https://drive.google.com/drive/folders/1Ozi4tl3-yU8fcU6q8Rs7SMX13x9OeFc0 · K–12 PDF: https://drive.google.com/file/d/1OjdAV02tuA9xH99MT5_BFA-LB-lI1WXK/view
  - Compared row by row: Common Core's K–5 with the prefix and one change (K.CC.A.3, 1 to 20), so a Common Core-code edition, not a crosswalk.

## Uncertain

- **Less certain:** Guam's adoption year, the U.S. Virgin Islands' adoption date (no Board act found), and Michigan's bill.
