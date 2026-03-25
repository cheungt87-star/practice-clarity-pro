

## Align the CTA Gradient with the Site's Visual Identity

The green gradient feels disconnected because the rest of the site uses a teal-to-purple palette. The fix is to swap it to match the site's signature gradient.

### Current state
- **Site palette**: teal primary (`hsl(172 66% 50%)`), purple accent (`hsl(260 45% 65%)`), with a consistent `text-gradient` of teal → cyan → purple
- **Hero/Benefits backgrounds**: soft lavender-to-cyan-to-white (`hsla(259, 42%, 86%) → hsla(193, 37%, 85%) → hsla(0, 0%, 96%)`)
- **CTA box**: green gradient that doesn't appear anywhere else on the site

### Changes to `src/components/BenefitsSection.tsx`

1. **Replace the green gradient** with a teal-to-purple gradient that mirrors the site's accent palette:
   ```
   linear-gradient(135deg, hsla(172, 66%, 50%, 1) 0%, hsla(260, 45%, 65%, 1) 100%)
   ```

2. **Update the button shadow glow** from green (`rgba(34,197,94,0.3)`) to teal (`rgba(45,212,191,0.3)`) to match.

3. **Update the radial glow overlay** — keep the same white radial but it will naturally complement the new gradient.

Everything else (dot pattern, trust line, animation, layout) stays exactly as-is.

### Technical Details
- Single file edit: `src/components/BenefitsSection.tsx`
- Change the inline `style` background property on the CTA `motion.div`
- Change the button's `shadow-[...]` arbitrary value

