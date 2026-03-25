

## Plan: Feature Showcase with Tabbed Video Demos

### What's changing
Replace the current 6-card grid in `KeyFeatures.tsx` with a tabbed feature showcase. Each tab represents a feature, and selecting it reveals a description + a video demo area (reusing the DashboardMockup-style player). Fully mobile responsive.

### Layout

**Desktop**: Horizontal tab bar across the top, with the selected feature's content below — left side has title, description bullets, right side has the video player in a browser-chrome frame.

**Mobile**: Tabs become a horizontal scrollable pill bar. Content stacks vertically — description on top, video below.

### File changes

**Edit: `src/components/KeyFeatures.tsx`**

1. Replace the card grid with a `Tabs` component (from existing `src/components/ui/tabs.tsx` — Radix).
2. Keep the existing `features` array data (icon, title, lines, comingSoon) and add a `videoLabel` string per feature for the video placeholder text.
3. Each `TabsTrigger` shows the feature icon + title, styled as pills with the active tab highlighted in primary color.
4. Each `TabsContent` renders a two-column layout (stacked on mobile):
   - **Left column**: Feature title (large), bullet points with check icons (reuse existing style), and "Coming Soon" badge where applicable.
   - **Right column**: A video player placeholder — browser chrome title bar (dots + feature name), aspect-video area with play button and label (similar to `DashboardMockup` but inline, not a separate component).
5. The tab list on mobile uses `overflow-x-auto` with `flex-nowrap` for horizontal scrolling, showing shorter labels or just icons on small screens.
6. Animate content transitions with `framer-motion` — fade + slight slide on tab change using `AnimatePresence` keyed to the active tab value.
7. Keep the existing section background gradient, badge ("THE PRODUCT"), and title.

### Technical details
- Uses existing Radix `Tabs` from `@/components/ui/tabs` — no new dependencies.
- Controlled `Tabs` with `useState` to drive `AnimatePresence` key for smooth content transitions.
- Responsive: `grid-cols-1 lg:grid-cols-2` for content area; tab bar uses `overflow-x-auto scrollbar-hide` on mobile with `whitespace-nowrap`.
- Video placeholder is self-contained inline (no separate component needed).

