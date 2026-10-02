# Researching standards: sources, fetching, verifying

How to get a state's standards right the first time: which sources count, how to read agency sites that block scripts, how to split the work across agents, and how to fact-check the result. Learned over ~900 fetched URLs across every US jurisdiction, 2026-09-28 to 10-01.

## Rules

- **Primary sources only for the standards themselves**: the state education agency's or board's own documents, the adopted rule (administrative code), board minutes. Use an official crosswalk or comparison document where one exists (Maryland's grade crosswalks, Alaska's "How the Alaska … Standards Differ from the CCSS", New Jersey's 2016 → 2023 change document) and cite it; otherwise map from the texts and label it a judgement.
- **Accuracy over completeness.** If an official document can't be reached, say so in the state's research file and leave rows out rather than invent them.
- **Find what is in classrooms this school year**, from the agency and the rule, quoting what the official source says ("must be implemented … by the beginning of the 2027–2028 school year", Minn. R. 3501.0750). Build an adopted next-year set as its own edition; never build a draft (Utah's and Kentucky's revisions stayed out until adopted).
- **Mark everything unverified that is.** "Only mark something wrong if a primary source contradicts it; say 'unverified' when you couldn't find a primary source."
- **Prefer the later, document-backed finding** when research rounds disagree, and record the conflict (an early survey said Colorado had financial literacy in K–5 math; the Colorado agent's reading of the 2020 standards found none).
- **Respect access**: follow robots.txt, never log in, never solve or bypass a CAPTCHA or challenge, never use a paywalled copy. Amplify's robots.txt blocks `/pdf/`; PDFs fetched before checking were deleted unread.
- **Count from the document, then count again**: regex-parsed counts drift by ±3; reconcile with the document's own numbering.
- **Official documents have errors.** Montana's appendix, Oregon's and Missouri's crosswalks, Nebraska 3.G.1.1, Oklahoma "3.GM 1.1", West Virginia's duplicate M.3.13, North Carolina "NC.5MD.1", Maryland's crosswalk typos and its wrong old wording for PK.MD.A.4, Arizona "K.0A". Fix them, note them, and follow the adopted rule over derivative PDFs.

## Fetching agency sites

| Problem | Seen at | What worked |
| --- | --- | --- |
| HTTP 403 to fetch tools (bot user agent) | doe.virginia.gov, fldoe.org, azed.gov, headstart.gov, rand.org, ride.ri.gov, dodea.edu, education.delaware.gov, education.nh.gov, michigan.gov, mdek12.org, thecorestandards.org, go.boarddocs.com | `curl -sL -A "Mozilla/5.0 (Macintosh…)" -o file URL`; Florida: `cdn.fldoe.org` paths; Virginia: read in a real browser and download the public Word files |
| Cloudflare challenge | azed.gov | Internet Archive raw copies |
| CAPTCHA | education.mn.gov, standards.education.mn.gov | not attempted: Wayback 2026 snapshots, the ERIC copy (ED672600), lrl.mn.gov, the rule on revisor.mn.gov |
| TLS chain errors | dese.ade.arkansas.gov, nysed.gov, legislature.ohio.gov | curl with the system trust store |
| Moved or 404 | Ohio's comparison PDF, old wvde.us paths, engageny.org (redirects to nysed.gov), im.kendallhunt `/k5/index.html`, doe.mass.edu during maintenance | start from the landing page; Wayback |
| Scanned or image-only PDFs | West Virginia SOS filing, Pennsylvania board PDF, Maryland crosswalk maths typeset as images, Minnesota formulas | the rule's Word export (`Format=WORD`); a university text copy; render pages and transcribe; take formulas from the agency spreadsheet |
| Garbled PDF text | Colorado | the agency's plain-text version |
| Codes not printed | Missouri (only in its Excel file), Massachusetts (build from headings), Louisiana 2016 (from domain and cluster headers), Alabama (numbers only), Colorado (expectation + indicator) | build the code and document the constructed format |
| Fetch tool can't extract big tables | Maryland grade crosswalks, most standards PDFs | download, `pdftotext` or pdfplumber, parse in a script |

**Internet Archive**: `https://web.archive.org/web/<timestamp>id_/<original>` returns the raw file (no toolbar); list snapshots with `http://web.archive.org/cdx/search/cdx?url=<prefix>*&filter=statuscode:200&fl=timestamp,original` or `https://archive.org/wayback/available?url=<url>`.

**Secondary sources**, cross-check only: Cornell LII (reliable copies of state administrative code: West Virginia 126CSR44BB, Mississippi, Montana ARM 10.53); Google Docs (North Carolina, Arkansas and Iowa host official documents there); Georgia's machine-readable CASE framework (`case.georgiastandards.org/ims/case/v1p0/CFPackages/<id>`, the best data source for Georgia); commonplanner.com (secondary); goblinsapp.com (**mislabels some Common Core content as non-CCSS**; never trust its labels).

## Splitting the work across agents

- One research agent per 3–5 states, writing one TSV per state into a scratch folder: [assets/crosswalk-research-prompt.md](../assets/crosswalk-research-prompt.md).
- Then validate every TSV with a script (codes, kinds, summaries, dropped list; [crosswalk.md](crosswalk.md)), generate, test.
- Then a fact-check round on what the product *says* about each state (title, short name, adoption year, notes, next edition, publisher), in parallel batches against primary sources: [assets/fact-check-prompt.md](../assets/fact-check-prompt.md). Mathness's audit corrected 26 of its 57 sets the same day.
- Keep every TSV, script and downloaded document in the repo or a durable folder: a session scratchpad under `/tmp` doesn't survive.

## Data worth having

- **Enrollment** (to weight states): NCES Digest table 203.20, public school enrollment by state. Fall 2023: https://nces.ed.gov/programs/digest/d24/tables/dt24_203.20.asp ; fall 2022: https://nces.ed.gov/programs/digest/d23/tables/dt23_203.20.asp . Keep one vintage per report (Mathness mixed the two). Rough sizes: TX 5.5M, CA 5.9M, FL 2.9M, NY 2.5M, IL 1.85M, GA 1.75M, PA 1.7M, OH 1.7M, NC 1.5M, MI 1.4M, NJ 1.4M, VA 1.3M.
- **Curriculum use**: RAND American Instructional Resources Survey ([curricula.md](curricula.md)).
- **District adoptions**: CEMD tracks K–8 math curriculum selections (934 districts, > 52% of students): https://www.cemd.org/k-8-math-curriculum-quality-the-state-of-district-led-selection/ ; McGraw Hill + HMH + Savvas ≈ 61% of elementary selections (EdWeek 2023).
- **Quality reviews**: EdReports (`https://edreports.org/reports/overview/<slug>`); check robots.txt first.

## Beyond the US

Researched 2026-09-29, not built: England's National Curriculum KS1–2 (2014; 249 statements; Open Government Licence; new curriculum from September 2028) is the best first market, behind a UK locale layer (£ and p, metric, 24-hour clock from Year 3, DD/MM/YYYY, UK vocabulary, Roman numerals, 12 × 12 and the Multiplication Tables Check). Australia v9.0 (codes like AC9M3N01; CC BY 4.0; machine-readable at https://www.australiancurriculum.edu.au/machine-readable-australian-curriculum). Ontario 2020 (Crown copyright; commercial use needs a licence, https://www.ontario.ca/page/copyright-information). Scotland's Curriculum for Excellence benchmarks (OGL). IB PYP and Cambridge Primary are proprietary.
