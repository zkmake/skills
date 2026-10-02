# Licensing, wording and names

What you may show of a standard, a curriculum or a state's identity, and in what form. Checked 2026-10-01; this is engineering practice, not legal advice. Re-read the license pages before shipping something new.

## The rule that covers almost everything

**Codes plus your own plain-language summaries.** Cite every standard by its code; describe it in your own words, written to be useful to a parent, never presented as the standard's text. Never reproduce official wording on a product. This one habit satisfies the Common Core license's limits on editing, the Texas Education Agency's terms, and every state document's copyright notice at once. Mathness's data files state it in their headers ("our plain-language summary (not the official wording)") and its guides name standards by code, never quote them.

## Common Core (NGA Center and CCSSO)

- **Public License** (https://www.thecorestandards.org/public-license/): "a limited, non-exclusive, royalty-free license to copy, publish, distribute, and display the Common Core State Standards for purposes that support the Common Core State Standards Initiative", whole or excerpts. NGA Center/CCSSO are acknowledged as sole owners and developers. **Any publication or public display shall include** the notice below. (States, territories and DC that adopted the standards in whole are exempt from the notice.) The license covers the standards, not the examples.
- **Commercial License** (https://www.thecorestandards.org/commercial-license/): royalty-free, by form, 12 months, current version only. **Impermissible:** revising or editing; recasting (abridged or condensed versions) in a way NGA/CCSSO think changes the meaning; sublicensing; sale; claiming ownership; prejudicial use. The standards may sit inside larger works that are sold.
- **The notice**, word for word as the license gives it: "© Copyright 2010. National Governors Association Center for Best Practices and Council of Chief State School Officers. All rights reserved." Mathness prefixes "Common Core State Standards" so readers know what it covers.
- **Where it goes**: the license ties it to any publication or public display, so put it on every page and screen that shows Common Core codes (a site-wide footer does it). It names no medium, so a printed sheet that shows a Common Core code is safest with it in its footer too. Mathness shows it in the maker's footer and on its Terms page, not yet on its static site pages or its printed sheets.
- Codes and your own summaries avoid the editing and condensing limits; quoting official text in a paid product needs the commercial license.
- thecorestandards.org returns 403 to curl and fetch tools; read it in a real browser.

## State standards

- **Texas (TEA).** TEA materials are © and ™ TEA. Texas public districts, charters and ESCs, and Texas residents for personal use, may reproduce them free, unedited, at cost. **Any private entity in Texas, and any entity outside Texas, needs TEA's written approval and a license agreement** (possibly a fee or royalty): copyrights@tea.texas.gov. The TEKS themselves are state rule (19 TAC Chapter 111), but that doesn't free their text for commercial reprinting: TEA's copyright terms still apply (https://tea.texas.gov/about-tea/welcome-and-overview/site-policies#copyright, checked 2026-10-02). Codes plus your own summaries stay clear of this.
- **Other states.** Most publish standards as public documents with a copyright line, and few grant a license. Found in research (2026-10-01): Massachusetts states one (non-commercial copying with credit); Wisconsin DPI's site terms allow non-commercial and fair use; Georgia's supporting documents say "All Rights Reserved"; Kentucky's and Indiana's site footers say "All rights reserved"; New York states permission terms (nysed.gov/curriculum-instruction/permission-use). Same practice everywhere: codes plus your own summaries, a link to the state's own document, the official name and year of the set ("Maryland MCCRS (2025)", not "Maryland 2025"). Mathness credits each state's publishing agency on that state's hub and grade pages and on its Terms page (`standards/publishers.ts`, checked 2026-10-01).
- **Inferred mappings are yours, and you say so.** Where no official crosswalk to Common Core exists (Texas, Florida, Virginia; Tennessee, Minnesota, South Dakota; Iowa's change labels), the mapping is your judgment from the texts: mark it inferred in data and on screen.
- **Flags and seals.** Draw simplified flags (30 × 20 SVG, seals reduced to a mark), not official artwork. DoDEA and Common Core get lettered badges.
- **"Not affiliated."** The terms page says the product is independent of every state education agency and publisher it names.

## Curricula

- **Licenses** (confirm on the edition's own pages): Eureka Math (2015)/EngageNY: Creative Commons non-commercial share-alike (EngageNY copies carry BY-NC-SA 3.0; Great Minds' own free downloads BY-NC-SA 4.0), so a commercial product can't reuse its content; "Eureka Math" and "A Story of Units" are Great Minds trademarks, and Eureka Math² is proprietary. Illustrative Mathematics K–5: CC BY 4.0 (checked on im.kendallhunt.com, 2026-10-01); the IM name and logo are not under the license. i-Ready, enVision, Go Math!, Amplify and the rest: proprietary.
- **Nominative use only**, whatever the license: plain-text names, a "not affiliated with, sponsored or endorsed by {owner}" note on every curriculum page, unit numbers and titles only, and **never a curriculum's name or lesson content on anything that prints**. See [curricula.md](curricula.md).

## Outside the US

England's National Curriculum and Scotland's benchmarks: Open Government Licence. Australian Curriculum v9: CC BY 4.0. Ontario: Crown copyright, commercial use needs a licence. IB PYP and Cambridge Primary: proprietary.

## App store listings (if the sheets ship in an app)

Apple Guideline 2.3.8 reserves "For Kids" and "For Children" in metadata for the Kids Category; outside it, the name, subtitle, icon, screenshots and description must not imply children are the main audience (Guideline 5.1.4 restates this). Mathness's iOS listings kept "young learners" to the privacy and support pages. Guideline 2.3: metadata must accurately reflect the app (2.3.1(a): never promote content it doesn't offer), so generate counts in listings (lessons, standards, states) from data, never type them.

## Privacy stance that keeps a teacher's trust

No accounts, no cookies, nothing that follows a visitor across sites; settings in localStorage; cookie-free analytics at most. A geo guess at the visitor's state (Cloudflare's request region, US only) is offered once, never applied silently, and named on the privacy page. Update the privacy page before adding any third-party request, analytics or form.
