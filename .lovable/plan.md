

## Plan: Redesign Pain Points into Animated Pain → Outcome Section

Complete rewrite of `src/components/PainPoints.tsx` from a card grid into a side-by-side transformation layout.

### Data Structure

Replace the current `painPoints` array with 5 row objects containing `pain` (title + description) and `outcome` (title):

| # | Pain Title | Pain Description | Outcome |
|---|-----------|-----------------|---------|
| 1 | Your rota falls apart every week | Spreadsheets break constantly and leave you scrambling to fill last-minute gaps. | Always know who's working, where, and when |
| 2 | You're not audit-ready | Compliance is scattered across systems, so inspections become a last-minute scramble. | Stay audit-ready with everything in one place |
| 3 | You're leaving appointments on the table | Without clear visibility, capacity goes unused and patients go unseen. | Maximise utilisation with a real-time clinic view |
| 4 | Your team is drowning in admin | Endless WhatsApps, emails, and updates slow everything down. | Cut admin time dramatically with one central system |
| 5 | Everything lives in different places | Staff, rota, and compliance data are split across tools—causing errors and duplication. | One source of truth for your entire clinic |

### Section Header

- Title: **"Still running your clinic like this?"** (with `text-gradient` on "like this?")
- Subtitle: "Here's what it's costing you—and how it should work instead."

### Layout

**Desktop (md+):** Each row is a horizontal flex container with two equal halves and an animated arrow connector in the center.

```text
┌─────────────────┐   →   ┌─────────────────┐
│  ❌ Pain side    │  ───▶  │  ✓ Outcome side  │
│  (red-tinted bg) │       │  (teal/brand bg)  │
└─────────────────┘       └─────────────────┘
```

**Mobile:** Stacked vertically — pain block, animated down-arrow, outcome block.

### Styling

- **Pain side:** `bg-destructive/5` border, `border-destructive/20`, red `X` icon, slightly muted text
- **Outcome side:** `bg-primary/5` border, `border-primary/20`, teal checkmark icon, brighter text
- **Arrow connector:** `ArrowRight` (desktop) / `ArrowDown` (mobile) from lucide-react, primary color

### Animations (framer-motion)

Per row, triggered on scroll (`whileInView`):
1. **Pain side:** fade + slide from left (`x: -40 → 0`), 0.5s duration
2. **Arrow:** fade in with slight rightward nudge, 150ms delay
3. **Outcome side:** fade + slide from right (`x: 40 → 0`), 200ms delay

**Hover (desktop):**
- Pain side: subtle `x: -2` shake via `whileHover`
- Outcome side: soft scale `1.02` + slight glow via box-shadow
- Arrow: nudges right `x: 4`

### Files Changed

**`src/components/PainPoints.tsx`** — Full rewrite with new data, layout, and animations. No other files need changes since `Index.tsx` already imports `PainPoints`.

