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
| DoDEA (`dodea`, /dodea/) | DoDEA College and Career Ready Standards for Mathematics | 2015 | Department of Defense Education Activity schools use Common Core's standards and codes. Badge "DD"; no flag. Mathness serves DoDEA pre-K with Head Start's goals. |
| Hawaiʻi (`hi`, /hawaii/) | Hawaiʻi Common Core Standards for Mathematics | 2010 | Revised standards (approved June 2026) switch K–5 in 2027–28; modelled as the crosswalk edition `hi27`, see [hi.md](hi.md). |
| Idaho (`id`, /idaho/) | Idaho Content Standards: Mathematics | 2022 | Keeps Common Core's codes; some standards rewritten; adds a grade 1 money standard 1.MD.D.5. A review is under way, with recommendations due to the Legislature in 2027. |
| Illinois (`il`, /illinois/) | Illinois Learning Standards for Mathematics | 2010 | Common Core as written. |
| Maine (`me`, /maine/) | Maine Learning Results: Mathematics | 2020 | Groups Common Core's standards into four reasoning strands, keeps their codes, and adds a grade 1 money standard 1.MD.D.5. |
| Michigan (`mi`, /michigan/) | Michigan K-12 Standards for Mathematics | 2010 | Common Core as written. HB 4159 is on the watch list. |
| Nevada (`nv`, /nevada/) | Nevada Academic Content Standards in Mathematics | 2010 | Common Core as written. |
| New Hampshire (`nh`, /new-hampshire/) | New Hampshire College and Career Ready Standards | 2010 | Common Core as written. |
| New Mexico (`nm`, /new-mexico/) | New Mexico Common Core Content Standards for Mathematics | 2010 | Common Core as written. |
| Vermont (`vt`, /vermont/) | Common Core State Standards for Mathematics | 2010 | Common Core as written. |
| Washington (`wa`, /washington/) | Washington State K–12 Learning Standards for Mathematics | 2011 | Common Core as written in 2026–27. WA Math 2026 (`wa27`) is required from 2027–28; see `wa.md`. |
| Guam (no edition) | Common Core State Standards for Mathematics | not confirmed | Common Core as written. Served by the Common Core pages; no Guam page or set. |
| Puerto Rico (not covered) | Estándares de Contenido y Expectativas de Grado: Matemáticas | 2022 | Departamento de Educación de Puerto Rico, © July 2022. See "Not covered". |
| US Virgin Islands (not covered) | Virgin Islands Standards of Achievement: Mathematics | 2021 | Derived from Common Core, but K–5 detail could not be reached. See "Not covered". |

**Publishers:** listed in `publishers.ts`. The pages and Terms credit them.

## How these editions are built (`editionSet`)

**The data:** each jurisdiction is an `Edition` in `EDITIONS` with `id` (postal code, or `dodea`), `state`, `standards`, `year`, an optional `note`, and an optional `added`. It has no `crosswalk` and no `count`.

**Building the set:** `SETS` maps every edition through `editionSet(edition)`.
- **Name:** `editionName`, e.g. "Illinois", or "Washington (2027–28)" when the edition has `starts`.
- **`ccssLabel`:** "Common Core".
- **Pre-K:** `headStartFor(state, "early learning guidelines")`, so Head Start's goals plus a note that the state's guidelines aren't mapped. No CC-code state has a `preK` document.
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

**Idaho review.** Recommendations are due to the Legislature in 2027 (editions.ts).

## Not covered

- **Puerto Rico:** its standards are its own and written in Spanish.
  - Own codes, e.g. 1.E.14.1.
  - Coins from K, probability from grade 1, and mean, median and mode in grade 5.
  - Mapping codes alone wouldn't serve Spanish-language classrooms. A Spanish edition is a separate, larger job ([landscape.md](../landscape.md), open items).
- **US Virgin Islands:** the standards are said to be derived from Common Core, but their K–5 detail could not be reached, so there is nothing to map.

## Uncertain

- **Less certain:** Guam's adoption year, US Virgin Islands detail and Michigan's bill.
