# West Virginia (WV)

**In effect for 2026–27:** West Virginia College- and Career-Readiness Standards for Mathematics, Policy 2520.2B (W. Va. 126CSR44BB). Filed 29 August 2023, effective 1 July 2024; it amends the 2016 version. The content is Common Core with coins, patterns and four-digit numbers earlier, under sequential codes. Mathness models it as a crosswalk in West Virginia's codes: edition `wv`, year 2023, 156 rows, `/west-virginia/`. No next edition.

## Documents
- **Policy text (Word, the text used):** https://apps.sos.wv.gov/adlaw/csr/readfile.aspx?DocId=56641&Format=WORD. The `&Format=PDF` twin is an image scan. Reached via the WVBE policy directory https://wveis.k12.wv.us/wvboe/policies/ (policy.php?p=2520.2B), which still linked this filing on 2026-10-01.
- **Grade-level PDFs:** West Virginia Department of Education, re-saved 2026-07-23. They match the policy:
  - K: https://wvde.us/media/3994/30466math-kindergarten-standards-accpdf
  - Grade 1: https://wvde.us/media/3999/30467math-grade1-standards-v2-accpdf
  - Grade 2: https://wvde.us/media/3998/30468math-grade2-standards-v1-accpdf
  - Grade 3: https://wvde.us/media/3997/30469math-grade3-standards-v2-accpdf
  - Grade 4: https://wvde.us/media/3996/30470math-grade4-standards-v1-accpdf
  - Grade 5: https://wvde.us/media/3995/30471math-grade5-standards-v1-accpdf
- The older wvde.us/wp-content/uploads/2024/07/… links, including the earlier wv5.pdf, now return not-found pages.
- **Currency:** no later amendment was found for 2026–27.
- **No crosswalk:** there is no official WV-to-Common Core alignment and no 2016-to-2024 crosswalk on wvde.us. Every mapping here is ours.

## Codes
- **Format:** `M.<grade>.<n>`, where M is mathematics and the grade is K or 1–5. Standards are numbered continuously within a grade (M.K.13, M.1.23, M.3.18).
- **No domain letters:** Mathness reads a row's domain from the Common Core or sheet code it links to (`rowPlace`; e.g. coins resolve to MD via `SHEET_DOMAINS`).
- **Domains and clusters are Common Core's names.** The documents list number ranges per cluster. WV adds clusters "Recognize patterns" (K OA) and "Work with money" (K MD), and "Work with time and money" in grades 1–2.
- **Sub-parts folded:** lettered or bulleted sub-parts (M.3.24, M.4.14, M.5.17) restate Common Core and are folded into their standard. The Mathematical Habits of Mind (MHM1–8, which equal Common Core's practices) are skipped.
- **Typo:** the WVDE grade 3 PDF prints M.3.15 as a second "M.3.13". The policy text has M.3.15.
- **Pre-K:** own codes, see Pre-K.

## Against Common Core
- **Row counts:** 156 K–5 rows (K 25, 1 23, 2 27, 3 27, 4 28, 5 26): 145 same, 3 edited, 5 moved, 3 new. No Common Core K–5 standard is dropped.
- **K:**
  - Patterns with colors, shapes, sizes and sounds, with adult support (M.K.13, new).
  - Recognize all four coins (M.K.18) and count pennies to 20 (M.K.19), both moved from 2.MD.C.8.
  - Compare and order numerals 0–20, where Common Core has 1–10 (M.K.7, edited).
- **Grade 1:**
  - Expressions vs equations (M.1.7, edited).
  - Numbers to 120 from any start, plus skip counting by 2s, 5s and 10s (M.1.9, edited, also 2.NBT.A.2).
  - Coin values traded like place value (M.1.18, moved).
  - Make a pattern from a rule (M.1.23, new).
- **Grade 2:** find a number pattern's rule, add 2, 3, 5 or 10 (M.2.3, new).
- **Grade 3:** read and write numbers to 10,000 (M.3.10) and compare and order four-digit numbers (M.3.11), both moved from 4.NBT.A.2.
- **Small extensions kept as same:**
  - "Order" in M.1.11 and M.2.9.
  - Facts through 10s in grade 3.
  - Mixed numbers between wholes in M.4.14.
- **Judgment calls:**
  - M.2.3 is marked new: it is near 3.OA.D.9 and 4.OA.C.5 but runs the other way and is simpler.
  - The coin rows are mapped to 2.MD.C.8 as moved. M.1.18 also echoes 1.NBT.B.2.
  - M.3.10–11 are marked moved because Common Core has no grade 3 read/write/compare standard.

## Sheets for state content
- **OVR (sheet redirects):**
  - Patterns: M.K.13 goes to Maryland K.AT.B.3, and M.1.23 to Virginia's growing patterns 1.PFA.1.
  - Coins: M.K.18, M.K.19 and M.1.18 go to Maryland's grade 1 coin sheet 1.GR.C.6.
  - Rule finding: M.2.3 goes to 2.NBT.A.2.
  - Four-digit numbers: M.3.10–11 go to Maryland's numbers within 10,000, 3.NOS.A.1.
- **Fit-review extras (extra.tsv):**
  - M.K.7 gets Texas K.5.
  - M.1.9 gets Texas skip counting 1.5B.
  - M.1.23 gets K.AT.B.3.
  - M.2.3 gets 1.PFA.1 and Maryland 2.NOS.A.2.
  - M.3.11 gets Florida's number line MA.3.NSO.1.3.
- No sheets were written under a WV code.
- **Fit review:** no partial rows remain.

## Pre-K
- West Virginia Pre-K Standards, Policy 2520.15 (2025), mathematics: 19 rows. Mapped 2026-10-01 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.wv`), data in `data/prek/wv.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out, so numbering can skip.
- Source: WVBE Policy 2520.15 (filed 2024, in force 1 July 2025): https://wveis.k12.wv.us/wvboe/policies/policy.php?p=2520.15&alt=1 (redirects to the Secretary of State's .docx). The document misprints M.PK.13 as "M.K.13"; Mathness uses M.PK.13.
- Codes run in sequence, `M.PK.1` … `M.PK.25`, with gaps where rows were left out (2, 11, 12, 14, 18, 19).
- Domains (Common Core's names): CC (6), OA (4), MD (3), G (6).
- 17 rows link Head Start goals, 9 link other sheets. M.PK.7 (ordinals) borrows MA.K.NSO.1.3; M.PK.17 → PK.DS.A.1, PK.DS.A.2.

## Uncertain
- **Year:** editions.ts uses 2023, the filing and adoption. gen.py's NAMES says 2024, the effective date (1 July 2024). Both are right for different events.
