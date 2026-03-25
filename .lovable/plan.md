

## Improve CTA Box Text Hierarchy and Button Color

### Problem
The CTA text all reads at similar visual weight (white on gradient), making it feel flat. The button is white, inconsistent with the green primary CTA buttons used elsewhere (Header, Hero).

### Changes to `src/components/BenefitsSection.tsx`

1. **Headline** (line 228-229): Make "Less Admin." bright white and bold, make "More Patient Care." use a light yellow/warm white tint (`text-yellow-100` or similar) instead of `opacity-90` to create colour contrast between the two phrases.

2. **Subheading** (line 231-232): "What are you waiting for?" — bump up to `text-2xl`, use full white (`text-white`) instead of `text-primary-foreground/70`.

3. **Trust line** (line 234-235): Keep smaller and muted but use `text-white/70` for slightly better readability.

4. **Button** (line 237-241): Change from white (`bg-white text-primary`) to the site's green primary style (`bg-primary text-primary-foreground`) matching the Hero and Header CTA buttons. Update shadow glow accordingly. Keep the larger size and arrow animation.

### Technical Details
- Single file: `src/components/BenefitsSection.tsx`
- Button classes change from `bg-white text-primary` to `bg-primary text-primary-foreground shadow-lg shadow-primary/20`
- Headline span changes from `opacity-90` to a warm accent colour
- Subheading gets size and opacity bumps

