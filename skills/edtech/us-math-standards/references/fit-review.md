# Fit review: does the sheet practise what the standard asks?

**Coverage** (a sheet exists for every standard) is a test you can enforce in code. **Fit** (the sheets practise what the standard asks, at its grade) is a judgement, made by reviewers reading what the sheets actually contain. At 100% coverage Mathness's crosswalk rows were only 60% good (881 of 1,479) and Texas 59% (150 of 256). Never report coverage as alignment.

## The rubric

- **good**: the linked sheets *together* practise what the standard's summary asks, at a level suited to its grade. One grade off is fine; wording differences don't matter.
- **partial**: a **named** part isn't practised (a model, a number range, a representation, a sub-skill the summary names), or the only fitting sheet is two or more grades off. The reviewer says exactly what's missing: "asks for numbers to 120, sheet stops at 19"; "asks to compare with <, >, =; sheet only orders"; "asks for Venn diagrams; none".
- **mismatch**: the sheets don't practise the standard (wrong topic, clearly wrong grade or range), or nothing is linked.

Standing instructions to reviewers: strict but fair; judge from the summary given; don't penalise wording a worksheet can't capture (doing it on a computer, whole-body movement, discussing with a partner); open-ended tasks (pose a question, explain) count if a sheet has the child do that kind of task; an activity offered as an alternative counts; flag off-topic linked sheets (`unlink <id>`) and better existing sheets (`link <id>`); in re-reviews, stay consistent with the earlier review.

## What reviewers get (the dump)

A throwaway test composes every sheet a batch's rows link to, across many seeds, and records **every section's title and instruction**, the guide's "practises" sentence, the sheet's grade, topic and home code. Reviewers judge from that, not from titles: the first Texas/Florida/Virginia/Maryland reviews saw only topic + guide sentence and were vaguer.

- **Seeds**: alternatives and rare sections appear on some seeds only. Mathness went 6 → 16 → 24 → 30 → 40. Dumping only the core level and first theme hides stretch-only and theme-only content; dump every level or say so in the prompt.
- **Batch file**: `{ rows: { <state>: [{ code, grade, summary, ccss: ["<code>: <summary>"], sheets: [ids], before? }] }, sheets: { <id>: { grade, topic, practises, sections: ["<title>: <instruction>"] } } }`, plus a catalog of every sheet (`id, grade, code, topic, practises`) so reviewers can propose better links. Reviewers may read generator source read-only to confirm what a section asks.
- **Which rows**: for crosswalks, only rows whose kind isn't `same`, or that link another grade's sheet, or have no sheet (1,479 of the first 37 crosswalks' 5,856 rows). For own sets, every row. Mathness excluded pre-K from the later batches.
- **Batch size**: ~220–300 rows per reviewer; split by state or grade band. Run reviewers in parallel, read-only, each writing one TSV (`state code verdict missing fix`, one line per row, no tabs or newlines inside fields), then returning counts, link/unlink suggestions and the most common missing themes. Reviewers often write a small script to emit their TSV; allow it.

The prompt: [assets/fit-review-prompt.md](../assets/fit-review-prompt.md).

## The pass loop

```
dump → parallel fresh reviewers → verdict TSVs
→ triage each non-good row (the fix ladder below)
→ implement pass k in its own file; render and inspect every new section (sheet and key, several seeds)
→ worst-case page fill for every sheet you touched (all themes × 40 seeds × every level × skip modes) → tests → real-browser overflow sweep
→ re-review ONLY the touched rows, giving each its earlier verdict ("before") and listing exactly what the pass added and where
→ merge into the running verdict table (unreviewed rows keep their last verdict) → commit with the new counts
→ every ~7 passes, and before you call it done: a FRESH full review of every row, with no earlier verdicts
```

**The fresh full review is not optional.** Touched-rows-only re-reviews drift optimistic: Mathness's crosswalks claimed 1,394 good after seven passes; a fresh, verdict-blind reviewer found 1,361 good and 27 off-topic links. Reviewer variance is real too: Virginia went 63 → 55 good with no content change under a stricter reviewer. Keep the rubric text fixed, compare like with like, and report which review a number comes from.

## The fix ladder (cheapest first)

1. **Link a better existing sheet**, only if it truly fits; check it isn't already linked. (Pass 1 linked 234 rows; the fresh review led to 164 more.)
2. **Unlink off-topic sheets.** They make a row look covered and mislead teachers. Keep a flagged link when it comes from the Common Core code the state itself says the row carries (26 kept).
3. **Fix the guide, not the sheet**, when the sheet already does it and the reviewer missed it ("the compare sheets already use number lines").
4. **Add the activity as an alternative** to one of an existing sheet's sections: the seed picks one, so the sheet keeps its length and still fits one page. **An alternative must not crowd out what its sheet is for**: swap with a peer section, never the one that defines the sheet. If an alternative carries part of a standard's required wording, it must print on every version (or on page 2), because "a teacher printing one sheet gets either half of the standard, never both".
5. **Add a new last section** only where the sheet has room (a one-section sheet, or one whose alternative would push out its purpose). If it overflows anywhere, fall back to an alternative. Promote a rare challenge item to its own section when reviewers don't count it.
6. **Change the sheet outright** when the change suits Common Core too (compare stories mixing "more than" and "times as many"; start-unknown stories in core).
7. **Write a new sheet** for content out of every sheet's scope: a range sheet (Texas counts to 120 in grade 1), a shared sheet filed under one state's code and cited by the others (prioritise by "one piece of work closes gaps in two or three states"), or a state-only sheet. See [coverage.md](coverage.md).

More rules from practice:

- **Grade-level homes**: a row whose only fitting sheet is 2+ grades away is partial; add a grade-level section (11s and 12s in grade 4, symmetry in grade 2).
- **Open-ended tasks** (collect your own data, write your own story problem) are fine if the key works one example through, consistent with itself, and says so: "One example: your own answers will differ."
- **Every pass found bugs** when its new sections were rendered and inspected: negative answers, "1 thousands", oversized sequences, clipped pictures, a too-skinny rhombus, a colour wash invisible in black-and-white. Inspect before re-review.
- **Set rules bind fixes**: Maryland cites Common Core codes only, so its gaps go onto Common Core sheets (4 links to non-Common Core sheets were reverted in the final review).
- One pass per file with a unique name (a new pass was once saved over an existing file).

## Mathness's numbers, for scale

| Scope | First review | After passes | Fresh review |
| --- | --- | --- | --- |
| 37 crosswalks, 1,479 rows | 881 good / 531 partial / 67 mismatch | 1,394 / 81 / 4 after 7 passes | 1,361 / 116 / 2; then, from re-reviews of touched rows only, 5 more passes → 1,474 / 5 / 0 → 1,477 / 2 / 0 after the 13th → **1,479 / 0 / 0** after two follow-ups |
| Texas (incl. pre-K) | 150 / 102 / 4 | 209 / 47 / 0 | 226 / 20 / 0 (K–5) |
| Florida | 125 / 68 / 1 | 158 / 36 / 0 → 159 / 35 / 0 | 173 / 11 / 0 |
| Maryland | 138 / 38 / 0 | 154 / 22 / 0 → 152 / 24 / 0 | 151 / 5 / 0 |
| Virginia | 44 / 37 / 1 | 63 / 19 / 0 → 55 / 27 / 0 (stricter reviewer) | 67 / 5 / 0 |
| Four own sets, K–5 | | | 617 / 41 / 0 of 658; then, from re-reviews of touched rows only: relinked → 631 / 27 / 0; after the 13th pass **658 / 0 / 0** |

The own sets' first and after-pass reviews include Head Start's 10 pre-K goals (Texas 256, Florida 194, Maryland 176, Virginia 82 rows); their fresh reviews are K–5 only (246, 184, 156, 72).

What the last partials looked like: "use a model" rows where the sheets are symbols only; make-it rows (draw more/fewer, make a scatterplot, draw a rhombus); grade 2 ranges stopping at 20; "another way" decompositions; choice-of-measure items; left and right at grade 2; expressions for a growing picture pattern; sorting by size and colour in K; part of a set at grade 5; picture models for adding fractions and decimals. These are the representations to build in from the start ([worksheet-design.md](worksheet-design.md), _What goes on a sheet_).

Hawaiʻi's 2027–28 crosswalk (added after these reviews) was reviewed the same way the next day: of its 150 rows only 6 differ from Common Core; 5 fit as linked, and the sixth (pose a question measurement data can answer) became good once the "measure your own" section opened with "Your question:". All 38 crosswalks: **1,485 good / 0 partial / 0 mismatch**, from re-reviews of touched rows since the last fresh review (1,361 / 116 / 2). Four Minnesota 2027 rows (1.1.2.1, 4.3.5.10, 5.3.5.10, 5.3.7.4) count as good after a link or fix that no re-review saw ([states/mn.md](states/mn.md)).

## Reporting

State per number: which rows (all, or those differing from Common Core), which review (incremental or fresh), and that alternatives print on some versions only. Unreviewed rows are unknown, not good. Mathness's final figures (1,479 / 0 / 0, 1,485 / 0 / 0, 658 / 0 / 0) are incremental; its last fresh reviews found 1,361 / 116 / 2 and 617 / 41 / 0.
