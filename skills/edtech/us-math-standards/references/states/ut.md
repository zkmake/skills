# Utah (UT)

In effect for 2026–27: Utah Core Standards for Mathematics (adopted August 2010, revised April 2016; the USBE page dates the K–12 standards to January 2016). They are Common Core with one added grade 1 coin standard and short codes. Mathness models them as a crosswalk in Utah's codes: edition `ut`, 149 rows, `/utah/`. A P–12 revision is in progress but not adopted, so there is no next edition in Mathness yet.

## Documents
- Utah Core State Standards for Mathematics, Elementary Levels (K–5), from the Utah State Board of Education (USBE): https://www.schools.utah.gov/curr/mathematics/_mathematics_/_core/_utah_core_standards_tab_/CoreStandardsElementaryLevels.pdf
- USBE math core page: https://www.schools.utah.gov/curr/mathematics/core (canonical https://schools.utah.gov/curr/mathematics/core.php). It says the K–12 standards were adopted in January 2016 and that a P–12 revision is in progress.
- Utah Core Standards hub: https://schools.utah.gov/curr/utahcorestandards.php
- USBE "Utah Core Standards Revision Timeline" (last updated October 2025): Mathematics "Under Revision", last revised 2016, estimated adoption 2026–27, estimated implementation 2027–28.
- There is no official Utah-to-Common Core crosswalk. Utah keeps Common Core numbering, so rows were matched code by code and every standard was diffed against Common Core text.

## Codes
- Grade.Domain.Number with no cluster letter. The document prints "Standard 1.MD.5"; Mathness drops the word "Standard". Examples: K.CC.1, 3.OA.8, 5.NBT.7, 1.MD.5.
- Each Utah code is the short form of the Common Core code (3.OA.8 = 3.OA.D.8), except 1.MD.5. Common Core grade 1 MD stops at 1.MD.4, so 1.MD.5 is Utah's addition (coins).
- Lettered parts (1.OA.6a/b, 3.OA.8a–c, 5.OA.2a/b) restate Common Core and are folded into their standard. Practice standards (K.MP.1 …) are skipped.
- Short codes collide with other sets: South Dakota's 2026 codes and Wyoming's use the same shape with different content.
- Pre-K: Head Start's goals; no state pre-K codes are mapped.

## Against Common Core
- 149 K–5 rows (K 22, 1 22, 2 26, 3 25, 4 28, 5 26): 147 same, 1 edited, 1 moved, 0 new. No Common Core K–5 standard is dropped.
- Grade 1: coin values, comparing them, and the cent sign (1.MD.5), the only added K–5 standard.
- Grade 5: decimal division only pairs a whole number with a decimal, and the quotient is compared to the dividend and divisor (5.NBT.7, edited).
- Small additions kept as "same":
  - Milliliters in 3.MD.2.
  - "Multiplication and division are inverse operations" in 3.OA.6.
  - A unit-fraction definition in 3.NF.1.
  - Order of operations in 3.OA.8a.
  - "Create accurate equations" in 3.OA.8b.
- Judgment call: 1.MD.5 is marked moved from 2.MD.C.8, because Common Core has money only there. It could be read as new.

## Sheets for state content
- OVR: 1.MD.5 goes to Maryland's grade 1 coin sheet, 1.GR.C.6. No extra.tsv links. No sheets were written under a UT code.
- Fit review: no partial rows remain.

## Revision in progress (not yet a Mathness edition)
- A Draft P-12 Utah Core Mathematics Standards exists (Step 11 revision, February 2026).
- On 15 January 2026 the Board approved an external review by WestEd. Its final report is the "Gap Analysis and Review of the Utah Core Standards for Mathematics (UCS-M)".
- August 2026: a revised Step 11 draft, plus a call for more Board member amendments based on the WestEd review.
- September 2026: a Standards and Assessment Committee action item recommends adopting the Introduction and P–2 Step 11 revisions and forwarding them to the Board for final approval. Grades 3–5 are not in that item.
- editions.ts note: "Utah is revising its math standards; a draft is under review and no adoption date is set."
- When it is adopted, add `ut27`-style data (TSV, then gen.py) as was done for Washington.

## Uncertain
- The adoption date of the revision is uncertain:
  - USBE's October 2025 timeline estimates adoption in 2026–27 and implementation in 2027–28.
  - editions.ts says no adoption date is set.
- The year differs across sources:
  - The PDF says adopted August 2010, revised April 2016.
  - The USBE page says the K–12 standards were adopted January 2016.
  - Mathness uses 2016.
- Name: the PDF title says "Utah Core State Standards"; editions.ts says "Utah Core Standards for Mathematics".
