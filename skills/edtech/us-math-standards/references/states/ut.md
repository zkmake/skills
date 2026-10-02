# Utah (UT)

In effect for 2026–27: Utah Core Standards for Mathematics (adopted August 2010, revised April 2016; the USBE page dates the K–12 standards to January 2016). They are Common Core with one added grade 1 coin standard and short codes. Mathness models them as a crosswalk in Utah's codes: edition `ut`, 149 rows, `/utah/`. A P–12 revision is in progress; the PK–2 part went to the Board on 1 Oct 2026 (outcome unverified), so there is no next edition in Mathness yet.

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
- Pre-K: own codes, see Pre-K.

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
- 4 September 2026: the Standards and Assessment Committee voted 4–1 to "adopt the PK-2 Mathematics Standards Draft 3, as amended, and forward to the Board for final approval" (agenda: https://usbe.api.civicclerk.com/v1/Meetings/412). Grades 3–5 were not in that item.
- 1 October 2026: the Board's agenda has "ACTION: Math Standards Revision Process" with the "S&A Amended Draft Introduction & P-2 Utah Core Mathematics Standards, Step 11 - Full Board Draft" (https://usbe.api.civicclerk.com/v1/Meetings/377). The outcome was not posted as of 2026-10-02: unverified.
- Grades 3–8: "Draft 3-5 Utah Core Mathematics Standards, Step 11 October 2026" and the 6–8 draft are on the committee's 8 October 2026 agenda (https://usbe.api.civicclerk.com/v1/Meetings/432). Grades 3–5 trail PK–2, so a Utah edition may arrive in two steps.
- USBE's draft timeline: implement 2027–28 (per the 2026-10-02 source check).
- editions.ts note: "Utah is revising its math standards; a draft is under review and no adoption date is set."
- When it is adopted, add `ut27`-style data (TSV, then gen.py) as was done for Washington.

## Pre-K
- Utah Core State Standards for Early Learning, Ages 3 to 5, Mathematics, Age 4 (2023): 22 rows. Mapped 2026-10-02 in Mathness's `src/standards/states/prek.ts` (`STATE_PREK.ut`), data in `data/prek/ut.tsv`; the rows replace Head Start's 10 goals in this state's set. Summaries are ours; standards the state says begin in kindergarten are left out.
- Source: https://schools.utah.gov/curr/preschool/_preschool_/Utah%20Core%20State%20Standards%20for%20Early%20Learning%20for%20Ages%203%20to%205%20ADA%20Compliant%202024.pdf
- Domains: CC Counting and Cardinality (7: `Math 4 yr.1.1` … `Math 4 yr.1.7`); OA Operations and Algebraic Thinking (5: `Math 4 yr.2.1` … `Math 4 yr.2.5`); MD Measurement and Data (4: `Math 4 yr.3.1` … `Math 4 yr.3.4`); G Geometry (6: `Math 4 yr.4.1` … `Math 4 yr.4.6`).
- 18 rows link Head Start goals, 9 link other sheets (4 with no Head Start goal). Borrowed later-grade sheets: Math 4 yr.4.4 → K.G.B.4.

## Uncertain
- The adoption date of the revision is uncertain:
  - USBE's October 2025 timeline estimates adoption in 2026–27 and implementation in 2027–28.
  - The Board's 1 October 2026 vote on PK–2 is unverified (no minutes as of 2026-10-02); grades 3–5 have no Board date.
  - editions.ts says no adoption date is set.
- The year differs across sources:
  - The PDF says adopted August 2010, revised April 2016.
  - The USBE page says the K–12 standards were adopted January 2016.
  - Mathness uses 2016.
- Name: the PDF title says "Utah Core State Standards"; editions.ts says "Utah Core Standards for Mathematics".
