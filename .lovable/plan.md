

## Plan: Timeline Layout for Pain Points Section

### Overview
Redesign the Pain Points section to use a vertical timeline with a central line, blocks alternating left/right attached to that line, with scroll-triggered animations.

### Changes to `src/components/PainPoints.tsx`

**Layout:**
- Add a vertical line down the center using a `div` with `absolute` positioning, thin width (2px), full height, teal/gray color
- Each block becomes a timeline entry: 50% width, positioned left or right of the center line
- A small circle/dot on the center line at each block's position (connection point)
- On mobile: single column with line on the left edge

**Animation:**
- Each block fades in + slides horizontally from its side (left blocks slide from left, right from right)
- The connecting dot scales in when the block enters viewport
- Staggered timing using `transition.delay` based on index

**Structure per block:**
```text
  [Left block]  ●——  |
                     |
                |  ——●  [Right block]
                     |
  [Left block]  ●——  |
```

- Icon + header + body inside each block card
- Dot sits on the center line with a small horizontal connector line

### Responsive
- `md:` breakpoint for two-column timeline
- Below `md`: vertical line on left, all blocks on right

