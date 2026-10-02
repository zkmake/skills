# Crosswalk research prompt

One research subagent per 3–5 states. Fill the `<…>` slots. The core is Mathness's first-round prompt (New York, North Carolina, Ohio, Kentucky, New Jersey, 2026-10-01) with later rounds' wording folded in (which set is in classrooms, Internet Archive, robots.txt, the comment-block sections); it served all 33 crosswalked states. The bullets after it paraphrase additions that later rounds needed.

```
Research + data task (web research; write only into the folder named below; no other code changes). Today is <YYYY-MM-DD>.

For a printable math worksheet site that is organised by Common Core (CCSS) K–5 math standards, build exact crosswalks from CCSS codes to these states' own K–5 math standard codes, for the standards in effect in <school year>:
1. <State> — <official standards name (year)>, K–5 <any known quirk: domains replaced, code prefix, numeric codes>
2. …

First determine, from the state agency's site and the adopted rule, which set is required in classrooms in <school year>, and say exactly what the official source says. Use each state's official standards document (state DOE PDF/DOCX) and any official crosswalk/comparison documents. Fetch and read the actual documents; do not guess codes. If a document can't be reached, try the Internet Archive copy (https://web.archive.org/web/<timestamp>id_/<url>); say so in the comments. Respect robots.txt; don't log in or bypass anything.

For EACH state, write a TSV file to <dir>/<postal>.tsv with header:
state_code	grade	ccss	kind	summary
- one row per state K–5 standard (use the state's finest numbered level that is a full standard; for sub-parts like a/b/c, give one row per sub-part ONLY if the state treats them as separately coded standards). Skip mathematical practice/process standards.
- grade: K,1,2,3,4,5
- ccss: the CCSS code(s) in full form with cluster letter (e.g. 1.MD.B.3), comma-separated; empty if none.
- kind: same (essentially identical to the CCSS standard), edited (same topic, wording or scope changed), moved (CCSS content from another grade), new (no CCSS counterpart).
- summary: ONLY for edited/moved/new rows: a short plain-language summary in YOUR OWN words (max ~18 words) of what the state standard asks (do not copy the official text). Leave empty for "same".
Map by content, never by how a code looks: several states reuse Common Core-shaped codes for different content.

Then append a final comment block (lines starting with #) with these sections: SOURCES (fetched <date>; every URL, publisher, adoption and implementation dates, whether an official CCSS crosswalk exists), STRANDS / HOW CODES ARE WRITTEN (domain names and letters, code grammar with examples, how lettered parts are numbered, row counts per grade, document typos), CCSS K-5 STANDARDS THE STATE DROPPED (and where they went), NOTABLE NON-CCSS CONTENT, UNCERTAIN / JUDGEMENT CALLS.

Accuracy is more important than completeness: if you cannot get an official document for a state, say so in its file's comment block and leave the rows out rather than inventing them. Return a short summary (row counts per state, notable differences, uncertainties).
```

Additions that later rounds needed:

- **Own frameworks with strands** (Georgia, Oklahoma, South Carolina…): "use the state's own crosswalk where available, else your careful content judgement; exclude practice and modeling rows; give a summary for EVERY row."
- **Codes that don't lead with the grade or name no domain** (Pennsylvania, West Virginia, Alabama, Colorado, Minnesota): "the comment block must say how the state writes its codes, with strand/domain names and their codes." If the state prints no codes, construct one and document it (Alabama: `AL.<grade>.<n>`).
- **States with an adopted next-year set** (board adoption on record, K–5 text published): research both, in separate files (`<postal>.tsv` and `<postal><yy>.tsv`, yy the first school year required: `nc28.tsv` for 2028–29), and quote the effective date.
- **An own framework built as a full set** (Texas, Florida, Virginia, Maryland): one row per student expectation or benchmark; "Sources: official only for the standards themselves (administrative code, agency pages, agency PDFs). For the mapping use any published alignment if one exists (cite it), otherwise map it yourself carefully and mark confidence 'inferred'." Summaries: "our own words, one short sentence, what a child does, parent-friendly, usually under 90 characters, never over 110"; reuse the Common Core summary where the state standard maps to one code and says the same; no duplicate summaries within a grade.
