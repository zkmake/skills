---
name: artifact-report
description: Turn this session's findings and suggestions into a polished Claude artifact page, with charts, diagrams and images wherever they make things clearer.
argument-hint: "[focus or audience]"
disable-model-invocation: true
---

# Artifact report

Put the session's work on one page the user can read, keep and share: everything found and everything suggested, answered against the request that started the session. The **report** is the deliverable; chat carries only its link and a short summary.

`$ARGUMENTS`, when given, narrows the focus or names the audience. Otherwise the report covers the whole session and is written for the user.

Words used below:

- **Request**: what the user asked for in this session. With several requests, the report answers each.
- **Item**: one finding (something discovered, measured or decided) or one suggestion (a change worth making, tied to the findings behind it).
- **Evidence**: what makes an item checkable: a file and line, a command and its output, a measured value, a source link, a screenshot.
- **Cold reader**: someone who missed the session. Write for them: every term defined, every piece of context restated on the page.
- **Visual**: a chart, diagram, table, screenshot or illustration. A visual earns its place when it shows what prose could only describe.

## 1. Inventory

Go back through the whole session (messages, files read and changed, commands and their output, research, subagent reports) and list every item with its evidence. Re-check items the session may have overtaken (a bug since fixed, a number since re-measured) against the current files, and record the current state.

Done when every finding and suggestion from the session is on the list with evidence, and each one's status is known: open, done this session, or rejected and why.

## 2. Shape

Order the report around the request:

1. **Answer first**: the verdict, bottom line or result, in a few sentences a cold reader can act on.
2. **Findings**, ranked by how much they matter to the request, each with its evidence.
3. **Suggestions**, each naming the findings it addresses, with effort and impact where the session gives grounds for them.
4. **Open questions and next steps**: what is unresolved, and who decides.

Rename or merge sections to fit the request: a research question wants its sources, a code audit its files, a choice between options a side-by-side. Group related items under one heading so each reads with its neighbours.

Done when every inventory item has a place, and the opening alone answers the request.

## 3. Visuals

Go item by item and pick the form that shows it best:

| The item is about | Show it as |
| --- | --- |
| A process, flow, sequence or state change | Flow or sequence diagram |
| Structure: components, dependencies, ownership | Box-and-arrow or layered diagram |
| Quantities, trends, distributions, before/after numbers | Chart |
| Options compared on several attributes | Table, with the recommended option marked |
| Something visible: a UI, a page, a render | Screenshot, annotated with numbered pins tied to the items |
| A code change | Short diff or snippet |
| Events over time | Timeline |
| An idea that is hard to picture | Illustration in inline SVG |

Build every visual from the session's real data: chart values are measured numbers, diagrams match the actual code or system, screenshots come from the real subject. When the session has something visible and no capture of it yet, drive a browser or simulator to take one. Caption each visual with what to see in it.

Done when every item has been weighed and either carries its visual or reads clearer as prose alone.

## 4. Build

Write the report as one self-contained HTML page. Before writing, load the host's design guidance and follow it for layout, theming and libraries. In Claude Code: run the Artifact `quickstart` (intent `other`), load `dataviz` before any chart and `artifact-diagramming` before any diagram. Link every claim on the page to its evidence.

Render the page locally once at desktop and phone width, in light and dark, and fix what breaks: a clipped chart, a diagram unreadable in dark mode, a screenshot overflowing its column.

Done when the page renders cleanly at both widths and in both themes, and every inventory item appears on it.

## 5. Publish

Publish the page as a Claude artifact, images under `files`, with a short `<title>` and a one-sentence description. Reply in chat with the link, the answer in one or two lines, and the count of findings and suggestions.

Without an artifact tool, save the page in the project (or where the user says), open it, and send the file.

When the user asks for changes, edit the same file and republish it to the same link.
