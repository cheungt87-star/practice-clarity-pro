# Implementation prompt: Policy GPT product page (and reusable product-page template)

## Goal
Build the Policy GPT product-details page on the SuperGP marketing site (Next.js, repo `SuperGP-app-Marketing`). Build it as a reusable template. Every future SuperGP product page (rota, tasks and so on) will reuse the same components with different content.

## Source of truth
`policy-gpt-product-page.html` (attached) is a working standalone mockup built on the repo's design tokens. Match its layout, copy, spacing and behaviour exactly. Port it to React/TypeScript. Do not redesign. If the mockup and this prompt disagree, the mockup wins.

## Before you start
1. Read `design-system.md`, `tailwind.config.ts`, `src/index.css`, the home page, `SolutionSection.tsx`, `ProductScreen.tsx`, `Chip.tsx`, `src/data/landing.ts`, the existing header, footer and CTA band, and the router setup.
2. Reuse existing tokens, components, fonts (Bricolage Grotesque, Inter, Nunito wordmark) and the existing header, footer and CTA band. Do not add new fonts or duplicate tokens.
3. Read `claude/landing-page-overhaul-implementation-prompt.md` in the project docs and follow its conventions where they apply.
4. Do not touch the home page, pricing or any other existing page.

## Route and template structure
- Route: `/products/policy-gpt`.
- Build one generic `ProductPage` template driven by a typed content object. Policy GPT is the first instance.
- Content lives in `src/data/products/policy-gpt.ts`. Pure data, no JSX. Types in `src/data/products/types.ts`:
  - `hero`: chip label, title, coral subtitle, intro line, primary and secondary CTA, small print
  - `steps[]`: number, who label, title, body (paragraphs plus optional bullet list), `screen` (a React component or image key)
  - `faqGroups[]`: group title, `items[]` of question and answer (answer may contain a link)
  - `cta`: heading, button
  - `more[]`: other products for "More from SuperGP"
- Components in `src/components/product/`: `ProductHero`, `ProductSteps`, `ProductStep`, `ScreenFrame`, `FaqGroups`, `ProductCtaBand`, `MoreFromSuperGP`.

## Page sections (in order)
1. **Header.** Existing site header. Breadcrumb "SuperGP / Products / Policy GPT" under it.
2. **Hero.** Chip "New · AI". H1 "Introducing Policy GPT" (non-breaking space between Policy and GPT, so it never splits). Coral subtitle "All your policies and SOPs, in one place." Then "Easily accessible by the whole practice. Ask in plain English and get the answer with its source." Buttons "Start free trial" (ink pill, cream text) and "See how it works" (anchor to step 1). Small print "14 days free. No credit card." H1 is the page's only `<h1>`.
3. **How it works.** Eyebrow "01". H2 "How it works". Sub "Four steps. Admins add the documents. Everyone gets the answers." Four steps in order: Upload (Admins), AI gets it ready (Automatic), Ask (Everyone), Update (Admins). Copy is in the mockup. Do not reword it.
4. **FAQs.** Eyebrow "02". H2 "FAQs". Sub "Short answers. Tap to open." Four groups: Answers, Managing documents, Access controls, Data. Accordion, one item open at a time per group, copy from the mockup.
5. **CTA band.** Existing CTA band component with "Try Policy GPT free for 14 days."
6. **More from SuperGP.** Existing pattern from the home page, listing the other products. Exclude the current product.
7. **Footer.** Existing footer.

## Step layout
- Container 1200px (reuse the home page container). Each step is a two-column row: text left (about 36%), screenshot right (about 62%), gap 48px, vertically centred, 40px vertical padding.
- Text: step number badge, small "who" label, H3 in Bricolage Grotesque (-0.04em tracking, line-height 1), body 17px in ink-muted.
- Under 900px: stack, text first, then screenshot at full width.
- Steps alternate nothing. Text is always left, screenshot always right.

## Screenshot frame (must match the home page exactly)
Reuse the home page's frame treatment. `ScreenFrame` wraps any screen:
- radius 28px (`rounded-panel`), `overflow:hidden`
- shadow `0 0 0 1px rgba(59,130,246,.5), 0 18px 44px rgba(35,24,21,.14)`
- background `#fffcf8`, vertical padding 44px, no border
- no floating pill, no caption, no footnote under it
- inner app window height 380px (340px under 640px)

If the home page already has a shared frame component or class, use it instead of re-creating the CSS.

## The four screens
The mockup draws each screen in HTML and CSS (`.appwin`). Port them as small presentational components (`screens/UploadScreen`, `ProcessingScreen`, `AskScreen`, `UpdateScreen`), all inside `ScreenFrame`. They mirror the real app: Admin page with the upload dialog asking "new file or replacing an old one", the processing status queue, the Ask chat with several questions and answers (including one it can't find), and the Admin update flow. All names, counts and dates are sample data. Do not use real practice, staff or patient data. If the repo has real app screenshots or an existing `ProductScreen`, check with Tak before swapping. Default to the ported components.

## Tokens (use the repo's existing ones)
cream `#fffaf4`, ink `#231815`, coral `#e8452c`, coral text and CTA `#c2351d`, hairline `#e8e1d8`, ink-muted `#7a6c64`, muted-strong `#6b5d55`. Radii: pill 999, panel 28, hero 32, cta 40, tile 48. Primary button is an ink pill with cream text. Headings Bricolage Grotesque, tracking -0.04em, line-height 1. Body Inter.

## Copy rules
- Copy is final in the mockup. Do not change wording.
- No GDPR, DSPT, DCB0129 or "NHS approved" wording anywhere on the page.
- The "Do you train AI on my data?" answer links to https://openai.com/business-data/ (opens in a new tab, `rel="noopener"`).
- The mockup's internal note at the bottom ("Mockup note. Not for publication.") is not part of the page. Do not ship it.

## Open claims to resolve before this goes live
The page states these as fact. Do not ship until each is true in the product. Add them as a checklist in the PR description, not on the page:
1. Data stored in Europe (Supabase project is in Mumbai today).
2. OpenAI zero data retention in place.
3. Admins cannot see other people's questions.
4. Questions and answers auto-delete after 12 months.
5. Delete-all timeline. The answer says "within [30] days". Replace the bracket with the confirmed number. Do not ship the brackets.
6. Deleting a document removes its file, sections and fingerprints (needs a test).
7. DPA, sub-processor list and security overview exist and can be sent on request.

## Behaviour and accessibility
- Real `<button>` and `<a>` elements. FAQ accordion uses `<button aria-expanded aria-controls>`, keyboard operable, visible focus ring (2px ink, 2px offset).
- 44px minimum tap targets on mobile. Text contrast at least 4.5:1 (use coral-text `#c2351d` for coral text on cream).
- Screens are decorative demos. Give each screenshot `role="img"` with a short `aria-label` describing the step, and hide the inner markup from screen readers (`aria-hidden`).
- Page works with JavaScript disabled: all copy server-rendered. FAQ answers are readable without JS (use `<details>` or render open when JS is off).
- Respect `prefers-reduced-motion`.

## SEO
Title "Policy GPT | SuperGP", meta description from the hero intro line, one `<h1>`, H2 per section, FAQ structured data (`FAQPage` JSON-LD) built from the content object, canonical URL, OG image from the existing site default. Add the page to the sitemap and to the header Products menu if one exists.

## Performance
No animation library. Screens are CSS only, no images needed. No layout shift: set the frame's height. Check Lighthouse mobile before and after. Do not regress.

## Out of scope
No changes to other pages, the pricing page or the app itself. No new fonts. No backend work. No analytics changes beyond what the site already does for CTA clicks (reuse the existing handler on "Start free trial").

## Acceptance criteria
1. At 1440px the page matches the mockup. Text left at about 36%, frame right, same radius and shadow as the home page screenshots.
2. At 1100px, 768px and 390px the layout follows the breakpoints above, with no horizontal scroll and no clipped text.
3. Four steps, four FAQ groups with working accordions, CTA band and More from SuperGP all render from the content object.
4. Creating a second product page needs only a new content file and route. Prove it with a throwaway stub, then delete it.
5. No amber chips, pending flags, mockup notes or "illustrative" footnotes appear anywhere.
6. Keyboard: Tab reaches CTAs, FAQ buttons and links in order, with visible focus.
7. `next build`, type-check and lint pass. No console errors or hydration warnings.
8. Screenshots at 1440, 1100, 768 and 390 attached to the PR, plus the open-claims checklist.

## Working notes
Work in small commits: content types and data, then template and hero, then steps and frame, then screens, then FAQ, then SEO and accessibility. Run the app locally and check each breakpoint in the browser before reporting done. Report anything in the mockup you could not match and why.
