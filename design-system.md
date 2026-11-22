# SuperGP marketing site design system v0.1

20 Nov 2026

> Source of truth for **www.supergpapp.co.uk** only. The product app keeps its own system (Asana-led, coral CTAs). Older Amplitude / dark-first notes in `brand-guidelines.md` are superseded for the live marketing site by this document.

## Principles

1. **Warm, not clinical.** Cream page, ink text, soft tints.
2. **Bold type, calm surfaces.** Bricolage headlines; soft panels; no hard shadows.
3. **Colour blocks mark meaning.** Feature tiles, peach for cost/problem, ink for how-it-works, coral for large type / CTA panels / checks.
4. **Say the problem plainly.** Numerals in Problem are story devices, not statistics.
5. **AI is labelled.** Chips say AI or No AI — never colour alone.

## Locked decisions

| Decision | Value |
| --- | --- |
| Primary button | Ink `#231815` fill, cream text |
| Coral (large / fills) | `#e8452c` |
| Small coral text / CTA band fill | `#c2351d` (`--coral-text`, `--coral-cta`) |
| Secondary text on tints | `#6b5d55` (`--muted-strong`) |
| Secondary text on cream | `#7a6c64` (`--ink-muted`) |

## Tokens

Implemented in [`src/app/globals.css`](src/app/globals.css) and mapped in [`tailwind.config.ts`](tailwind.config.ts).

```css
:root {
  --cream: #fffaf4;
  --ink: #231815;
  --coral: #e8452c;
  --coral-text: #c2351d;
  --coral-cta: #c2351d;
  --hairline: #e8e1d8;
  --ink-muted: #7a6c64;
  --muted-strong: #6b5d55;
  --on-dark-muted: #b8aca4;

  --tint-butter: #fff1cf;
  --tint-lilac: #ece8ff;
  --tint-pink: #ffe4ea;
  --tint-mint: #dff3e6;
  --tint-peach: #ffe6dc;

  --tile-butter: #ffd979;
  --tile-lilac: #cfc3f7;
  --tile-mint: #a8e3c2;

  --chip-amber-bg: #fff1cf;  --chip-amber-fg: #6b4200;
  --chip-green-bg: #dcf3e3;  --chip-green-fg: #14532d;
  --chip-ai-bg: #e9e3ff;     --chip-ai-fg: #4a2fc0;
  --chip-grey-bg: #eceae7;   --chip-grey-fg: #44403c;

  --font-heading: "Bricolage Grotesque", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --tracking-heading: -0.04em;
  --leading-heading: 1;
  --h1-hero: clamp(58px, 10.5vw, 156px);

  --radius-pill: 999px;
  --radius-panel: 28px;
  --radius-hero: 32px;
  --radius-cta: 40px;
  --radius-tile: 48px;

  --shadow-soft: 0 8px 30px rgba(35, 24, 21, 0.08);
}
```

shadcn bridges: `--background` → cream, `--foreground` / `--primary` → ink, `--primary-foreground` → cream, `--border` → hairline, `--ring` → ink.

## Typography

| Role | Family | Notes |
| --- | --- | --- |
| Headings | Bricolage Grotesque 700/800 | `next/font`, tracking `-0.04em` |
| Body / UI | Inter 400–700 | `next/font` |
| Hero H1 | `clamp(58px, 10.5vw, 156px)` | Spec for landing rebuild |

Sentence case headlines. Coral type only at large sizes; small coral uses `--coral-text`.

## Components (foundation)

| Component | Spec |
| --- | --- |
| Primary button | Pill, ink fill, cream text (`Button` default / `LandingButton` primary) |
| Secondary button | Pill, outline, ink text |
| On-coral secondary | Cream outline + cream text (`variant="on-coral"`) |
| Focus | 2px ink ring, 2px offset |

## Tailwind shortcuts

- Colors: `cream`, `ink`, `ink-muted`, `coral`, `coral-text`, `coral-cta`, `hairline`, `tint-*`, `tile-*`, `chip-*`
- Radii: `rounded-pill`, `rounded-panel`, `rounded-hero`, `rounded-cta`, `rounded-tile`
- Shadow: `shadow-soft`
- Fonts: `font-heading`, `font-body` (aliases `font-hero` / `font-display` → heading)

Legacy `brand-*` classes are remapped to ink/coral/hairline so existing homepage classNames stay readable until the landing rebuild.

## Homepage (Style D)

Implemented: Less faff hero (brand-first + full-bleed media), Problem, Solution (AI steps + ProductScreen tiles), Benefits, coral CTA, Pricing, FAQ. Wordmark uses Nunito 900 via `--font-wordmark`.
