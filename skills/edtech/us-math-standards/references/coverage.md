# One catalogue, many standards sets

How to serve Common Core, four own frameworks and 53 state editions from one set of sheets, and how to close a gap when a state asks for something no sheet does. The data model is Mathness's (`src/standards/sets.ts`); the rules are what survived four days of adding sets.

## The model

- **A skill (sheet) carries one code as its stable id**: a Common Core code (`3.OA.A.1`), a Head Start goal (`P-MATH 3`), or, for content Common Core lacks, the code of the one set that asks for it (`4.GR.A.4`, `2.8B`, `OK.5.GM.1.3`). Skill ids never change when a set is added.
- **A standards set is a view** over that one catalogue: grades → domains → standards, each standard `{ code, summary, ccss: [codes it carries], from?: [codes moved, split or partly in], linksOnly? }`. A set's standard is served by every skill whose code is in its `ccss` or `from`, plus skills filed under its own code (unless `linksOnly`).
- **Frameworks vs editions.** The first-class frameworks (Mathness: Common Core, Maryland, Texas, Florida, Virginia) decide where a skill lives; editions (states in Common Core codes, crosswalked states, next-year standards) are derived views that don't. Keep the two lists separate (`SET_IDS` vs `ALL_SET_IDS`).
- **A sheet prints the viewer's set's code and grade** (`codeIn`, `skillGrade`): 3.OA.A.1 prints `3.NOS.B.2` in Maryland, `3.4D` in Texas, `MA.3.NSO.2.2` in Florida, `3.CE.2` in Virginia; symmetry prints Grade 2 in Maryland, Grade 4 in Common Core. On screen, show the Common Core code beside the set's: "was" where the state replaced Common Core (Maryland), "Common Core" where it never used it (Texas, Florida, Virginia), "Head Start" beside pre-K goals.
- **Order a standard's sheets**: its own sheets first, then other states' sheets, then Common Core's.
- **Spiral reviews need one grade the skills share in some set** (`mixGrade`): symmetry mixes with grade 2 skills (Maryland) or grade 4 skills (Common Core), but a grade 2 and a grade 4 skill never mix.
- **Place every set-only sheet at its home row**: the row whose own code it carries. In sets that don't cite it, it keeps that home and grade (under "More" if needed), never a row in another state that cites it from a different grade, or one-grade spiral reviews break.
- **Placement priority** when several rows of one set cite a code: the row whose own code it is → a row that carries it → a row it moved into. **Iterate grades in an explicit order** (PK, K, 1…5): JavaScript enumerates integer-like object keys first, so `Object.entries({ PK, K, "1", … })` yields 1–5 before PK and K; in Mathness that silently put Texas's kindergarten naming-shapes sheet at grade 1 code 1.6D, though K.6A carries it (open bug as of 2026-10-01).

## Closing a gap

A standard whose sheets don't practise what it asks has a gap (found by a fit review, [fit-review.md](fit-review.md)). Work down this ladder:

1. **Link an existing sheet** from any set that truly fits. Maryland's grade 1 coin sheet serves coin rows in 33 crosswalks; Florida's ordinals sheet, Virginia's calendar sheet and Texas's faces-and-edges sheet serve many states.
2. **Fix the guide** when the sheet already does it.
3. **Add an activity to an existing sheet**: as an *alternative* in one of its plan slots (the sheet keeps its length; it must not crowd out what the sheet is for) or as a new last section where the sheet has room. Required representations must print every time, not on some seeds.
4. **Extend a sheet for everyone** when the change suits Common Core too.
5. **Write a new sheet**, filed so the model stays sound:
   - **Range sheet**: the state only stretches a Common Core topic (Texas counts to 120 in grade 1, 1,200 in grade 2, 100,000 in grade 3, a billion in grade 4). File it under the state's code; its row also carries the Common Core code.
   - **Shared sheet**: several states ask for the same thing (number lines to 1,000, facts to 12 × 12, making change, temperature, calendar, strip diagrams, circle graphs). Write it once, file it under one state's code, cite it from the others. Prioritise gaps that close rows in two or three states at once.
   - **State-only sheet**: content only one state asks for (Texas personal financial literacy, Maryland misleading graphs). File it under that state's code; it shows only in that state's browse until other sets cite it.
   - **Crosswalked-state sheet**: file it under the state's code **with the postal prefix** (`OK.5.GM.1.3`); the prefix must equal the edition id, and the suffix the row's own code, so the sheet finds its home row and loads that state's data first.
   - A set may restrict what its rows cite: Mathness's Maryland rows cite Common Core codes only, so Maryland's in-scope gaps were filled *on the Common Core sheets* as alternatives, and out-of-scope content got Maryland-only sheets.
   - **Fewer grades**: a product serving fewer grades writes a sheet for any row whose sheets sit outside its grades, filed under the row's own code (Florida's grade 2 rounding row MA.2.NSO.1.4 is served in Mathness by grade 3's 3.NBT.A.1; a K–2 product files its own rounding sheet under MA.2.NSO.1.4).
6. **Promote state work onto the Common Core sheets** wherever it fits: most visitors use Common Core and never see a state-only sheet.

## Tests that keep it honest

- Every standard in every set has at least one sheet (no "coming soon"). Enforce it for every set, not just the first two: Mathness's test checked Common Core and Maryland fully, the others only for rows citing something.
- Every skill sits on a real standard of its own grade: Common Core's, Head Start's, or its own set's row.
- **A set-only sheet is for content Common Core lacks**: its row may not carry real Common Core codes, except through an explicit, named exception list per batch (range sheets, shared sheets, Maryland's extensions…). Each list documents a deliberate stretch; prune entries whose rows no longer carry Common Core codes.
- Every code a set cites is real: Common Core, Head Start, or some skill's own code.
- If a set must account for all of Common Core (Maryland's crosswalk did), every Common Core code lands in some row.
- Content that moved grades mixes with its grade in either set.
- Every edition's stored row count equals its rows.
- Every skill has a place in every set.

## Reporting coverage

Say what a count includes: "246 Texas K–5 standards" and "256 including Head Start's pre-K goals" are the same set. Coverage (a sheet exists) is not fit (the sheet practises it). Mathness on 2026-10-02: 60 sets, 10,396 standards (9,506 K–5 + 890 pre-K), every one with a sheet; 267 skills; 106 set-only sheets.
