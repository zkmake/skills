# Competitors and how to audit against one

What exists, where the open space is, and a repeatable audit method. Landscape from July 2026 research; the three deep audits are from 28 Sep 2026 (claude.ai artifacts: K12MathWorksheets https://claude.ai/artifact/XKzTHqVS4Nvdav1V3dazLv, K5 Learning https://claude.ai/artifact/KTsLr93zUxFXoGCW9EDvyN, Common Core Sheets https://claude.ai/artifact/WBh5UWcjAQMTNyhEKvvs1a). Many of their "you lack X" items have since shipped in Mathness; use them for method and gap categories, not as current status.

## The field

| Site | What it is | Weakness |
| --- | --- | --- |
| **Common Core Sheets** | **The real competitor.** Free generated sheets with keys and a CCSS code on every one; ~1,380 math sheets × 10 premade versions + "create new"; 152 K–5 codes tagged; 88 of 112 grade 6–8 standards; flash cards from any sheet; one-at-a-time online mode; 7 languages; one developer, ad-supported | dated; shallow difficulty options; only 16 kindergarten sheets, all arithmetic; one problem type per sheet in a numbered list |
| K5 Learning | ~1,954 math pages K–6, ~8,900 free PDFs; $24/yr family, $99/yr school | "based on national guidelines": no codes on sheets, many topics a grade early; static |
| K12MathWorksheets | 4,324 fixed PDFs on 226 topic pages (strongest K–3); 5% free; $21.95 lifetime; 21 generator modules | CCSS only in intro text; biggest draws are series (weekly morning work, mystery case files, shop scenes, colour-by-number, magic squares) |
| Math-Drills | ~70k free static PDFs; large-print variants (liked in special ed) | no standards mapping; static |
| Kuta Software | Grade 6+ desktop generator; the bar for knobs: count, spacing, paper, 4 key formats, multi-version scrambling, regenerate | paid per subject; weak K–5; not web |
| SuperTeacherWorksheets | CCSS-tagged elementary library + puzzle generators, English and Spanish | $24.95/yr; shallow generators |
| Education.com | CC filter over a large multi-subject static library | not a generator; paywall |
| Math-Aids, WorksheetWorks | unlimited dynamic generators, keys bundled | ads; dated; no standards tagging |

**The open space** (v1 conclusion, still true): standards-aligned + fully generated + no ads or paywall. What Mathness added that none had: a hand-made themed look, the key as the marked-up sheet with "why" lines, every state's own codes (no competitor maps Texas, Florida, Virginia or Maryland), spiral review, remix codes and QR, parent guides.

## Lessons the audits taught

- **Topic coverage is rarely the gap; depth per standard is.** Common Core Sheets has 48 sheets on 3.OA.C.7 vs Mathness's 3 activities; 45 on 1.OA.C.6; 31 on 4.MD.A.1. One standard often needs several problem types: by table, by divisor, horizontal and vertical, missing factor, matching. (Ratios overstate it: one generated activity covers many fixed sheets across seeds and levels.)
- **Read the standard's wording for required representations.** At audit time three standards asked for something no sheet did: a letter for the unknown (3.OA.D.8), decomposing a fraction into a sum (4.NF.B.3b), arrays and area models (4.NBT.B.5/6).
- **Content on state-only sheets is invisible to the Common Core visitor**, and a plan alternative prints on only some seeds. "A teacher printing one sheet gets either half of the standard, never both": when an alternative carries part of a standard's wording, make both print (or put one on page 2); leave seed-picked alternatives to puzzles.
- **Competitor-proven formats**: drills with range, single table, strategy sets (doubles ± 1, bonds to 20, make 10/100/1,000), missing operand, layout and count options; a fewer-problems accommodation version; hide-the-grade printing for catch-up work; flash cards from any sheet (duplex answer page); reference charts; week packs; story problems with distracting information; stories-only mixes; other currencies (CAD, GBP, EUR, AUD first); puzzles with unique-solution checks (magic squares, sudoku, diamond problems, "I am a number").
- **Skip** font, size, spacing, orientation and background knobs: they break point-calibrated block heights and the consistent black-and-white look. At most a custom title or instruction line.
- **Grade placement**: competitors file topics a grade early or late (rounding in K–1, ×11/×12 and 4-digit operations in grade 3, grade 6 work under grade 5). Place by the standard, and count a competitor topic as covered only at its standard's grade.
- **SEO**: their topic pages are landing pages (intro + thumbnail grid); the equivalent is one indexable page per skill with a short intro and a live sample ([state-pages.md](state-pages.md)).
- **Grade 6** (when you go there): ship it whole, since an every-standard-has-a-sheet test needs every code; order by reuse: areas → fraction and decimal computation → expressions → ratios (tables, double number lines) → integers and four quadrants → statistics (dot plots, histograms, box plots).

## Audit method (repeatable)

1. Crawl the competitor's sitemap; parse every listing (title, description, codes, free/paid, options). Record counts and caveats (titles only? paywalled PDFs?).
2. Split the comparison across agents by grade band; each compares against your skill catalogue and **greps the source before calling anything a gap** (one audit's "bug" was a false alarm on an inclusive range).
3. Re-check every "we lack X" claim with a second grep.
4. Report: their scale and model, coverage by grade band (topic level), depth per standard for the biggest gaps, formats and series worth having, what to skip, where you're ahead, ranked additions with effort (S one activity, M a block or skill, L a page type or series).
