# Extending to grades 6–8

A plan, not shipped: Mathness's Middle Grades Plan (2026-09-28, https://claude.ai/artifact/XbC3caVNPVee9rBh4q1pmH), still waiting on its decisions as of 2026-10-01. Use it as the starting map; re-check each state's 6–8 standards before building, since the K–5 research doesn't cover them.

## Size and shape

81 top-level Common Core standards: grade 6 29, grade 7 24, grade 8 28 (lettered parts sit inside their standard, as in K–5). Plan ~85 skills (about one per standard, a few split), ~10 new blocks, new themes, six steps.

| Domain | G6 | G7 | G8 | Grows out of |
| --- | --- | --- | --- | --- |
| RP Ratios and proportional relationships | 3 | 3 | — | new; becomes functions |
| NS The number system | 8 | 3 | 2 | NBT + NF: numbers get signs (negatives in 6, irrationals in 8) |
| EE Expressions and equations | 9 | 4 | 8 | OA: letters stand for numbers |
| F Functions | — | — | 5 | new in grade 8 |
| G Geometry | 4 | 6 | 9 | G + MD: figures move (formulas, π, transformations, Pythagoras) |
| SP Statistics and probability | 5 | 8 | 4 | MD data: data gets a shape (dot plots, histograms, box plots; IQR, MAD; chance 0–1) |

## What's expensive

Not the grade plumbing (~200 lines: grade types, tiles, routes, labels). The hard parts:

- **Answer checking**: negatives already work with exact rationals; letters need equivalence by evaluating both expressions at several values with exact rationals (equivalent expressions look nothing alike; pin tricky cases in tests); powers including zero and negative exponents, roots, absolute value, percent; irrational answers checked to a tenth or hundredth with both forms on the key (√50 ≈ 7.07); repeating decimals printed with a bar and read back as exact fractions. For π, put both forms on the key (28.26 or 9π) and have the sheet say which to give.
- **New drawings**: a coordinate-plane block (the workhorse, ~15 skills) with its own legibility rules (fewer labels, points labelled clear of lines, a minimum cell size); number lines with negatives, open and closed dots, rays; box plots, histograms, scatter plots; tape diagrams; double number lines; mapping diagrams; art for thermometers and depth gauges, nets and slices, circles, angle pairs and transversals, maps with a scale bar. Every drawing goes through the legibility audit.
- **Standards that ask to explain, construct or prove** (7.G.A.2, 8.G.A.1, 8.G.B.6) get narrowed to what a key can check ("can it be a triangle?", true/false on what stays the same, use the converse), and the narrowing is stated on the row.

## Standard → skill → block (the plan)

- **6.RP**: ratio language (pictures); unit rates (story list); 6.RP.A.3 split into ratio tables, percents, rate problems (new tape diagram, new double number line).
- **6.NS**: fraction ÷ fraction; long division; decimal operations; GCF and LCM; negatives around us (thermometer art); number line both ways and four quadrants; compare and absolute value; distance on the grid.
- **6.EE**: exponents; expressions with letters; equivalent expressions (true/false kit); "does it make it true?"; write the expression; one-step equations; inequalities on a line; tables and rules (d = 65t).
- **6.G**: triangle, parallelogram and composite areas; volume with fraction edges; polygons on the grid; nets and surface area.
- **6.SP**: statistical questions; describe a distribution; histograms and box plots; mean, median, IQR, MAD.
- **7.RP**: unit rates with fractions; is it proportional? (constant of proportionality); percent problems (receipts, sale tags).
- **7.NS**: adding integers on a number line; × and ÷ integers, repeating decimals; rational-number stories.
- **7.EE**: like terms, expand and factor; same thing, new form (a + 0.05a = 1.05a); multi-step problems; two-step equations and inequalities.
- **7.G**: scale drawings (map art with a scale bar); can it be a triangle?; slicing solids; circles; angle pairs; area and volume problems.
- **7.SP**: fair sample?; predict from a sample; compare two groups; how likely?; experiments; probability models; compound events (tree diagrams).
- **8.NS**: rational or irrational?, repeating decimals to fractions; estimating square roots.
- **8.EE**: exponent rules; squares and cubes; powers of ten; scientific notation; slope as a rate; slope and y = mx + b; multi-step equations and how many solutions; systems of equations.
- **8.F**: is it a function? (mapping diagram); compare functions; linear or not?; rate of change and start; stories in graphs.
- **8.G**: what stays the same?; move the shape; transformation rules; similar figures; angles and parallel lines; is it a right triangle?; Pythagorean theorem; distance between points; cylinders, cones and spheres.
- **8.SP**: scatter plots; line of best fit; use the trend line; two-way tables.

## Product decisions the plan recommended

- **Themes for 11–14-year-olds**: a frog pond reads as babyish to a seventh grader. Food Truck (ratios, unit prices, percents), Deep-Sea Lab (negatives, scientific notation, volume), Sports League (statistics, rates, probability), Game Studio (coordinates, transformations, functions). Same hand-drawn, black-and-white-first look at the grades 3–5 type size; revisit if grade 6 reads young.
- **Ship grade by grade**, number system and expressions first in grade 6 (they introduce negatives and letters), so each grade is complete and shareable when it lands.
- **Show unbuilt grades in other sets as "Coming soon"** rather than hiding them (hiding suggests the product stops at grade 5). This conflicts with an every-standard-has-a-sheet test: scope the test by grade, or build each state's 6–8 the moment Common Core's is done.
- Competitor note ([competitors.md](competitors.md)): ship a grade whole; Common Core Sheets already covers 88 of 112 middle-grades standards.
