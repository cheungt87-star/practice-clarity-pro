

## Plan: Bring the CTA Section to Life

### What's changing
Transform the static CTA section into a visually dynamic, animated section with floating decorative elements, animated gradient blobs, and a pulsing CTA button.

### Enhancements to `src/components/CtaSection.tsx`

1. **Animated floating orbs** — 3-4 soft gradient blobs that drift slowly using framer-motion's `animate` with `repeat: Infinity` and `repeatType: "reverse"`. Different sizes, colors (teal, purple, blue), and movement paths to create organic depth.

2. **Subtle particle/sparkle dots** — Small animated dots scattered across the section that fade in and out at staggered intervals, adding texture.

3. **Animated gradient background** — Replace the static gradient with a slowly shifting one using CSS `@keyframes` or a large moving radial glow that pans across the section.

4. **Button glow pulse** — Add a pulsing glow ring animation behind the CTA button (expanding ring that fades out, repeating). On hover, intensify the glow and add a slight lift.

5. **Staggered text reveal** — Animate each word of the headline individually with staggered delays for a more cinematic entrance.

6. **Decorative accents** — Faint rotating ring or arc shapes in the background corners for geometric interest.

### Files
- **Edit**: `src/components/CtaSection.tsx` — all changes contained here

