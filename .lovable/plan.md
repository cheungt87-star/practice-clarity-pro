

## Plan: Redesign Pain Points for Scannability

### Problem with current design
The alternating timeline layout forces the eye to zigzag left-right across a center line. With 5 items and dense paragraph text, it's visually heavy and hard to scan quickly. The timeline metaphor doesn't add meaning here — these aren't sequential steps.

### New approach: Clean card grid with visual hierarchy

Replace the timeline with a simple, scannable grid of pain-point cards that uses color, iconography, and short punchy copy to let users instantly recognize their problems.

### Changes to `src/components/PainPoints.tsx`

1. **Remove the timeline** — delete the vertical line, dots, ripples, connector lines, and alternating left/right logic.

2. **Rewrite copy to be punchier** — shorten each body to 1 short sentence max. Add a short stat or "impact" line per card (e.g. "20%+ of management time lost") styled as a highlighted callout inside the card.

3. **Card grid layout** — Use a `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` grid. Top row: 3 cards. Bottom row: 2 cards centered (`md:col-span-2 lg:col-span-1` or flex centering for the last row).

4. **Card design** — Each card gets:
   - A colored icon badge at top (red/amber tones instead of teal, to signal "problem" framing)
   - Bold header
   - Short 1-line description
   - A highlighted stat/impact line at the bottom in a subtle accent background strip

5. **Staggered fade-in** — Simple `motion.div` with staggered `delay` per card index on scroll. No complex timeline animations.

6. **Add a subtitle** under the heading — something like "Sound familiar? These are the challenges holding your practice back." to frame the section as empathetic problem identification.

### Files
- **Edit**: `src/components/PainPoints.tsx` — full rewrite of layout and animations

