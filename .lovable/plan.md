

## Plan: Add Interactive Key Features Section

### Overview
Create a new `KeyFeatures` component that matches the hero's light gradient aesthetic, with interactive feature cards that respond to user interaction.

### Design
- Same light gradient background as hero (`linear-gradient(135deg, hsla(259, 42%, 86%, 1) ...`)
- Section badge: "THE PRODUCT" with glowing dot (same pattern as hero badge)
- Section title with gradient text on the accent line
- **Interactive cards**: 7 feature cards in a responsive grid (2-3 columns on desktop, 1 on mobile). Each card has an icon, title, and description. Cards will:
  - Animate in on scroll (staggered fade-up via framer-motion)
  - Have a hover effect: scale up slightly, glow border, icon color shift
  - The "Coming Soon" card (Policy GPT) gets a distinct badge/border treatment
- Icons from lucide-react: `Calendar`, `LayoutDashboard`, `CheckSquare`, `Building2`, `Users`, `Lock`, `FileText`

### Files
- **New**: `src/components/KeyFeatures.tsx` — full section component with motion animations
- **Edit**: `src/pages/Index.tsx` — import and add `<KeyFeatures />` after `<PainPoints />`

### Component Structure
```
<section> (hero-matching gradient bg + grid overlay)
  Badge: "THE PRODUCT"
  Title: "Everything you need to run your practice — " + gradient "in one place"
  Grid of 7 feature cards (motion.div with staggered whileInView)
    Each card: icon box, title (font-display), two-line description (font-body)
    Hover: scale(1.03), glow-border, elevated shadow
    "Coming Soon" badge on Policy GPT card
</section>
```

