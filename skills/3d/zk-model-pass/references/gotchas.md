# Gotchas

Mistakes real passes made, each with its fix. When a pass hits a new one specific to the project, it goes in the style guide's _Pitfalls_.

## Geometry

- **Coplanar by construction.** The usual fights on built things: two boxes' bottoms both resting on one floor (sink the plinth, stand the walls on it), crossed bars in one plane (part them in depth), rails or boards meeting at a corner (fit two between the other two), a hole cut flush with its frame's edge. A first audit of a hand-built model often lists hundreds of pairs; most are these four.
- **Lathe winding.** A lathe profile faces outward read bottom to top. A cap or lens wound from the centre out faces inward and vanishes from outside. A disc facing up goes rim → centre.
- **Creases through helpers.** A shape helper that takes a crease angle must pass it all the way down. A helper that drops it falls back to the default, and segments wider than that angle (10 segments round is 36°) shade as flat staves.
- **Tubes cut corners.** A Catmull-Rom tube through a few points cuts the corners between them, straight through whatever it wraps. Build a chain or rope that must hug a surface from that surface's own geometry.
- **Cheaper-looking can cost more.** A lathed mound can carry more triangles than the primitive it replaced, and × hundreds of instances that matters. Measure after every swap; revert when it costs more.

## Shading and materials

- **Fixed-size shader features.** A shader detail with a fixed world size (a wood knot, a stain) can read as a hole or a blot on a large surface. It shows only on other objects that share the material, so after a shader change, screenshot every studio mode that uses it.
- **NaN and black frames.** A NaN position or zero-length normal lights a pixel NaN; bloom spreads it into a black block. `audit()` finds the geometry cause. Extruded outlines on moving parts have caused black frames with no NaN found: prefer primitives for moving parts, and run the black-frame probe after adding new geometry kinds to anything that moves or glows.

## Merging and culling

- **Verify what the merge skips.** A bake/merge step that is meant to skip some objects (text, animated parts) often decides by a marker flag. Libraries change their flags: one project's merge swallowed its troika text for weeks, and the signs went blank in the game. Skip by duck-typing (`textRenderInfo` for troika), and check the merged object in the game, not only in the studio.
- **One mesh over the world.** A static `InstancedMesh` or merged geometry spanning the world has one bounding sphere, so it is never frustum-culled: every instance draws every frame, in the shadow pass too. Split it into strips (`assets/chunked.ts`). One project's frame went from 608k to 169k triangles.
- **Count before calling it cheap.** A rare-looking piece can be numerous (86 stumps a level). Count from the placement code, then multiply.

## Studio

- **Look at the shot before judging it.** Views have missed the object (a wrong coordinate formula), started inside it (camera within a rock), or looked end-on. Every new view gets screenshotted and looked at before any numbers are taken from it.
- **Scatter modes need a seed with the pieces.** A world-slice mode generated from a seed that lacks the rare piece measures nothing. Pick or force a seed that contains it.
