# Fit-review prompts

Copy, fill the `<…>` slots, and give one batch to each reviewer subagent. Run reviewers in parallel; they are read-only except for their one output file. Keep the rubric sentences word for word across every round so numbers stay comparable.

## Fresh review (every row, no earlier verdicts)

```
Fit review (read-only analysis; write only the one output file named below). A printable K–5 math worksheet site maps US states' own math standards ("rows", in each state's code) to worksheets ("sheets"). Judge, fresh and independently, whether each row's linked sheets practise what the row asks.

Input: <dir>/batch-<n>.json: {"rows": {state: [row...]}, "sheets": {sheetId: {...}}}. Each row: code, grade, summary (what the state asks, in plain words), ccss (Common Core codes it carries, with summaries), sheets (linked sheet ids). Each sheet: grade, topic, what it practises, and every section title with its instruction seen across <N> seeds (a sheet varies by seed: sections offered as alternatives each appear as their own title). catalog.txt in the same folder lists every sheet on the site. You may read generators under <repo>/<skills dir> (read-only) to confirm what a section really asks.

For EACH row: good / partial / mismatch. good = the linked sheets together practise what the summary asks at a suitable grade (one grade off is fine); partial = a named part of the summary isn't practised, or the only fitting sheet is 2+ grades off; mismatch = the linked sheets don't practise the standard. Also flag any linked sheet that is off-topic for the row ("unlink <id>" in fix), and if a better sheet exists in catalog.txt say "link <id>". Be strict but fair; don't penalise a row for wording nuance a worksheet can't capture (doing it on a computer, whole-body movement, discussing with a partner).

Write <dir>/fit-<n>.tsv with header:
state	code	verdict	missing	fix
one line per row covering every row in the batch (no tabs or newlines inside fields). Return counts by verdict, the unlink/link suggestions, and the most common missing themes, in a few lines.
```

For a first review, also ask for "the 10 new sections that would close the most rows", with `new: <one-line section>` in `fix`.

## Re-review (only the rows a pass touched)

```
Fit re-review (read-only analysis; write only the one output file named below). <Same opening paragraph and Input paragraph as the fresh review.> Each row also has "before": the earlier verdict and what was missing.

These <k> rows were judged partial or mismatch. Pass <p> added these sections and linked rows to their hosts:
- <section title> on <sheet id> (<what it asks>)
- …
Judge each row against the CURRENT sheets, consistent with the earlier review's standard. An activity offered as an alternative (it shows on some versions of a sheet) counts, as in earlier reviews. <Same rubric paragraph as the fresh review.>

Write <dir>/fit-<n>.tsv … <same output paragraph>.
```

## Dump checklist (what the batch builder must record)

- every row: code, grade, own-words summary, carried Common Core codes with their summaries, linked sheet ids, and `before` for re-reviews
- every linked sheet: grade, topic, home code, the guide's one-line "practises", and **every section title + instruction across N seeds (40 is enough; 6 is not)**
- which levels and themes were dumped (all, or say "core level, first theme only" in the prompt)
- `catalog.txt`: every sheet on the site, one line each (`id, grade, code, topic, practises`)
