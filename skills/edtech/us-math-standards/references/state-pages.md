# Pages for teachers and search engines

How to present many standards sets on the web: what pages to generate, how to label codes, how to meet a teacher in their own state. From Mathness's static-site build (2026-09-29 to 10-01), which went from 1 indexable page to ~630.

## Why real pages

Search engines drop URL fragments: a hash-routed app (`/#/g/3`) is one page to Google. Generate real HTML pages at build time from the same engine that draws the sheets. That needs a DOM-free, seeded engine: Mathness server-rendered all 165 skills' first sheets in 426 ms with `react-dom/server` once roughjs used its generator (no DOM). Keep the interactive maker as a hash-routed app at its own path (`/maker/`); site pages link into it with plain `href`s (crawlers drop `#` links too).

**Never index the recipe space** (skill × theme × seed × level is unbounded). Each skill page shows one sample sheet and key.

## The page set

| Page | Path | Content |
| --- | --- | --- |
| Home | `/` | grades, drills, states as cards; the two ways to a sheet side by side (ready-made PDF, make your own) |
| Grade | `/grade-3/` | skills by Common Core domain, then "More from state standards" for sheets only a state asks for |
| Skill | `/grade-3/<topic-slug>/` | guide text, sample sheet + key, its standard **with the same skill's code in every other set**, related drills, the rest of its domain, a PDF |
| State hub | `/texas/` | grades; a coverage line ("All 246 Texas standards have sheets", plus how many sheets were written for the state's own codes); publisher credit |
| State grade | `/texas/grade-3/` | every standard **by its own code** (anchor = slugged code), our summary, the sheets that serve it as buttons |
| Next year's edition | `/washington-2027-28/` | same shape; hubs of the current and next edition link each other |
| CC-code state | `/illinois/` | hub only, linking Common Core's grade pages |
| Pre-K | `/pre-k/`, `/pre-k/<slug>/` | by Head Start area; state pre-K pages where the state has its own codes |
| Drill family | `/drills/<slug>/` | focuses, sample sheet + key |

Plus `sitemap.xml`, `robots.txt` pointing at it, and the Search Console verification file kept in `public/`. Submit the sitemap.

## Structured data

- Skill and drill pages: schema.org `LearningResource` with `educationalLevel`, the PDF, the share card, and `educationalAlignment`: **one `AlignmentObject` per set** that teaches it (`alignmentType: "teaches"`, `educationalFramework`: the set's name, `targetName`: its code), every state code, not just Common Core.
- List pages (grades, states, pre-K, drills): `ItemList`. Every page: `BreadcrumbList`. Home: `Organization`, `WebSite`, and the maker as a free `WebApplication`.
- Test: every JSON-LD block parses; every link and `#anchor` lands; no page is an orphan; descriptions ≤ 170 characters; the sitemap names every page; two builds render identically (seeded art, or cached share images re-photograph every build).

## Codes and states in the UI

- **Label every code with its set** wherever codes from several sets mix (search results, chips): "TX 3.3A", never bare "3.3A" beside "4.NF.A.1".
- On skill pages show the sheet's code in every set ("In Maryland MCCRS (2025) this sheet is 3.NOS.B.2"), linking to that row on the state's grade page.
- Print the **viewer's set's** code and grade on the sheet itself (symmetry prints Grade 2 in Maryland, Grade 4 in Common Core).
- Search accepts state-style Common Core codes (`NY-3.OA.1`, `NC.3.OA.1`, `KY.3.OA.1`, `3.OA.1`) and matches **whole code segments**: substring matching makes every letter pair a false positive.
- **Meet the visitor's state**: a header "State standards" menu (each set with its standards count and grade span), "Matched to your standards" chips under the hero, state cards with a simplified flag and postal-code chip. Offer the visitor's likely state once (Cloudflare's request region from a tiny edge function returning `{ region: "TX" }`, US only, `no-store`): "Teaching in Texas? Use Texas TEKS / Keep Common Core". Remember the answer; never switch silently; render after the fetch so a prerendered first paint is untouched. Use postal codes as set ids so the guess maps straight to a set.
- Name sets officially with their year ("Maryland MCCRS (2025)", "Washington (2027–28)").

## Share and print assets

Per skill and drill page: one 1000 × 1500 card (name, sample sheet with the key peeking behind, address), used as both its `og:image` and its Pinterest pin, and a vector PDF (sheet, key, guide) printed through Chrome at build time (~200 KB each). List pages (home, grades, states, drills) get a 1200 × 630 link preview plus a 1000 × 1500 pin. Photograph cards with a headless browser in parallel sessions, cache by a hash of the card and its CSS, and keep the display awake on a Mac (a slept display times out every screenshot).
