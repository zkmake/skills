# Fact-check prompt: what the product says about each state

Run after building or refreshing sets, and yearly. Export what the product prints about every set to a JSON file (keyed by set id: name, short name, official title, year, notes, next-edition start, added standards, pre-K framework name and year, whether it has a crosswalk), split the ids into ~6 batches, and give one batch to each subagent. Mathness's 2026-10-01 audit with a prompt like this corrected 26 of its 57 sets (57 before Hawaiʻi 2027–28 was added) and found a same-day adoption (North Carolina).

```
You are fact-checking how a free K–5 math worksheet site names and describes US state math standards. Accuracy must be 100%. Do NOT edit any files.

Data: <dir>/states.json (keyed by set id: name/displayName, noun/state, standards (the official title we print), year, note, starts, added, preK/preKSet, hasCrosswalk). Your ids: <ids>.

For each id, verify against PRIMARY sources (the state department of education or state board of education site, adopted policy or rule documents; for Common Core: thecorestandards.org; for Head Start: headstart.gov for the ELOF). Check:
1. Official title, exactly as the state writes it; the short name should be the state's own usual short form or acronym.
2. Adoption year (and, separately, the first school year in classrooms).
3. Whether hasCrosswalk is right (does the state use its own codes or wording, or Common Core's as written?).
4. Every factual claim in note, starts and added, and the pre-K framework's name and year.
5. Any newer revision adopted or pending: board votes, effective dates, implementation years.
Also note the publisher (the agency's exact name) of each state's standards, for a copyright/attribution line.

Report a compact table per state: field | our value | verdict (correct / wrong / imprecise / unverified) | correct value | source URL. Then list every change you recommend, most important first. Only mark something wrong if a primary source contradicts it; say "unverified" when you couldn't find a primary source. News reports count as leads, not proof: say when a board record isn't posted yet.
```
