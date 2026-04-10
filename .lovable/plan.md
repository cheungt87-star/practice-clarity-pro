

## Problem
The `AnimatePresence mode="wait"` causes the old image to fully exit (fade out + slide away) before the new image enters, creating a visible blank gap.

## Solution
Switch from `mode="wait"` to a crossfade approach where both images are stacked (absolute positioning) and the new image fades in on top of the old one simultaneously — no blank frame.

### Changes (single file: `src/components/KeyFeatures.tsx`)

1. **Wrap the carousel area in a relative container with a fixed aspect ratio** to prevent layout collapse when images are absolutely positioned.

2. **Remove `mode="wait"` from `AnimatePresence`** so exit and enter animations run simultaneously.

3. **Position `motion.img` as `absolute inset-0`** so both outgoing and incoming images overlap during the crossfade.

4. **Simplify the transition to a pure opacity crossfade** — remove the `x` offset to avoid jarring horizontal jumps. Use a ~0.5s duration for smoothness.

5. **Preload images** by rendering hidden `<link rel="preload">` or simply rendering all images in a hidden container so the browser caches them, eliminating the blank flash from network loading on first view.

