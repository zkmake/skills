# Natures

Generic craft for each kind of thing in a real-time scene. Read the object's section, then the style guide's _Natures_ section, which sharpens or overrides this one for the project. Each says what makes it read from a gameplay camera, how to build it, how it shades, what moves, and how many there are. The last sets the budget, since an instanced thing's triangles are paid once per copy.

## Machines and built things

Vehicles, buildings, bridges, gates, fences, poles, props, anything made.

- **Reads by**: crisp silhouettes, rims and edges catching the light, parts that plainly fit together.
- **Build**: turned and pressed, not stacked. A round part is one lathe outline (`LatheGeometry`), a flat one one extruded cross-section (`ExtrudeGeometry` / `ShapeGeometry`, holes as real openings), a cable one tube along the surface it follows. A part on a curve seats its foot onto it. Boxes stay boxes where the real thing is square.
- **Shading**: creased: smooth round a curve, hard at every edge (split normals above the crease angle, e.g. `toCreasedNormals`). Chamfer or bead the edges that catch light rather than adding segments.
- **Moves**: rigid pieces outside any merge (wheels, arms, doors, sails), each modelled around its real hinge point. Moving parts are primitives (boxes, cylinders); extruded outlines on moving parts have blacked out frames through bloom.
- **Count**: usually few. Budget by what the far copy leaves at the style guide's error.

## Creatures

Animals, characters, anything alive.

- **Reads by**: gesture and mass: the body's bulk, where head and legs sit, the pose. Proportion over detail.
- **Build**: a few soft masses (a stretched sphere or capsule each for body, head, neck, limbs), not stacked boxes. Joins hidden by overlap, the overlap well inside so no two surfaces meet flat. Fur, wool and hair are a lumpy silhouette (a low-subdivision shape with its vertices displaced by a seeded random) plus the shader, never modelled tufts.
- **Shading**: smooth across the masses; the faceting comes only from a low segment count.
- **Moves**: each piece rigid about its pivot (head at the neck, legs at the hips), so model each piece around its pivot and keep pieces separate for batching. A creature that bends (skinned) needs rings where it bends.
- **Count**: often many, batched. Tens to a few hundred triangles per piece; a leg is a handful of faces.

## Plants

Trees, shrubs, grass, reeds, crops, flowers, fungi.

- **Reads by**: silhouette and clumps of light and shade: a crown's mass, a trunk's lean, a clump's outline. Never individual leaves.
- **Build**: crowns as a few lumpy, overlapping masses (low subdivision, seeded displacement) so the outline is broken, not a ball. Trunks and limbs tapered, bent a little, fewer segments round than a machine's barrel. Grass and crops are a few bent, tapered blades each. Variety comes from seeded variants and per-instance lean, squash and tint, not from more geometry.
- **Shading**: facets may show on a crown (normals pointing out from the crown's mass, so light falls across the whole clump); smooth only the trunk.
- **Moves**: sway in the vertex shader. Keep a ring or two up a blade or crown for it to bend around, and the base still.
- **Count**: hundreds to thousands, instanced. Every triangle is multiplied: a tuft is tens of triangles, a tree a few hundred. The cheapest shape that holds the silhouette wins. Keep undersides that cast shadows: a front-sided material's shadow pass needs the faces there.

## Ground and stone

Terrain features, rocks, pebbles, banks, water.

- **Reads by**: broad form and the shader's colour; edges only where rock breaks.
- **Build**: a coarse, seeded, displaced shape (a low-subdivision polyhedron for a rock, a dome for a mound) sunk into the ground so its foot never shows a seam. Large facets, no thin spikes or overhangs. Strata, moss, grit and wetness are the shader, keyed to world position so they continue across pieces.
- **Shading**: rock faceted and hard; earth and banks smooth, meeting the ground without a crease.
- **Moves**: nothing, except water, in the shader.
- **Count**: many and small (instanced, as low as they go) or few and large (spend triangles on the outline against the ground).
