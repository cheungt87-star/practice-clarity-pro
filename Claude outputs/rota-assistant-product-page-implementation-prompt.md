# Implementation prompt: Rota Assistant product page

## Goal
Build the Rota Assistant product-details page on the SuperGP marketing site (Next.js, repo `SuperGP-app-Marketing`). Reuse the product-page template built for Policy GPT (`claude/policy-gpt-product-page-implementation-prompt.md`). This page is the second instance. Do not fork the template. Extend it only where this page needs it (listed below).

## Source of truth
`rota-assistant-product-page.html` (attached) is a working standalone mockup on the repo's design tokens. Match its layout, copy, spacing and screens exactly. Port it to React/TypeScript. Do not redesign. If the mockup and this prompt disagree, the mockup wins.

## Before you start
1. Read `design-system.md`, `tailwind.config.ts`, `src/index.css`, the home page, and the `ProductPage` template and content types from the Policy GPT page. If the Policy GPT page is not built yet, build the template first, following its prompt.
2. Reuse existing tokens, fonts, header, footer, CTA band and `ScreenFrame`. No new fonts, no duplicated tokens.
3. Do not touch the home page, pricing, the Policy GPT page or the app itself.

## Route and content
- Route: `/products/rota-assistant`.
- Content file: `src/data/products/rota-assistant.ts`, same types as Policy GPT.
- Breadcrumb: SuperGP / Products / Rota Assistant.

### Template changes this page needs
1. **Alternating sides.** Steps alternate: 1, 3 and 5 have text left and screen right; 2 and 4 are reversed. Add an `alternate` flag to the template (default false, so Policy GPT stays text-left). Under 900px every step stacks with text first.
2. **Step count.** This page has five steps. The template must not assume four.
3. **Screen type.** Screens here are scaled replicas of the real app (see "Screens"), not the simple app windows Policy GPT uses. Add a `ScaledStage` wrapper and keep it generic.

## Page copy (final, do not reword)

**Hero**
- Chip: New · AI
- H1: Rota Assistant (non-breaking space between Rota and Assistant). Only `<h1>` on the page. No "Introducing".
- Sub (coral): Change your rota by asking.
- Intro: Add, remove and replace shifts by typing what you need. Ask where anyone is working. Nothing goes live until you confirm.
- Buttons: Start free trial / See how it works. Small print: 14 days free. No credit card.

**How it works** (eyebrow 01). Lead: Build it. Change it by asking. Publish when you're ready.

1. Managers · **Build the rota**: View and edit the rota by site and date range. Schedule all your staff: clinical, non-clinical and admin.
2. Managers · **Make changes with AI**: Add, remove and replace shifts with ease. Just ask Rota Assistant.
3. Automatic · **Clashes flagged**: Rota Assistant checks every request and flags problems before it saves. Ask for Dr Mark on call on a day he's off, and it tells you.
4. Managers · **Publish when ready**: Review the rota before it's published. Preview the week, then confirm each day. Nothing goes live without your say so.
5. Managers · **Ask the rota**: Got a question like "Where is Dr Patel working next week?" Just ask. No more scrolling and searching.

Step 3 and 4 titles were "to be confirmed" in the brief. These are working titles. Keep them in the content file so they are one-line changes.

**FAQs** (eyebrow 02). Lead: Short answers. Tap to open. Four groups.

*Changes*
- What can I ask it to do? Add, move, remove and replace shifts. Fill open slots from a group, like "any available GP". Clear a day, a room or the on-call rows. Small typos are fine.
- Does it change the rota straight away? Adds do, and it tells you what it assumed. Removing, clearing and replacing ask you first, with a count of the shifts affected.
- Does anything go live without my approval? No. Nothing is published until you confirm.
- What if someone is off or already booked? It tells you before it saves. For example: "Isla doesn't work Mon and Wed. Go ahead and add Thursday only?"
- Can I undo it? Yes. Undo all reverses everything from that message.
- What if I change my mind halfway? Hit Cancel, or just type something new. A question never blocks you, and a cancelled one changes nothing.
- Will it overwrite shifts that are already there? Filling open slots never does. If you add a named person to a room that already has someone, it adds alongside and flags it.

*Questions*
- Can I ask it questions about the rota? Yes. Who is free, how many slots are open, who has no shift on a day, who doesn't work a certain day. Answers come from the rota on screen.
- Does asking change anything? No. Questions never touch the rota.
- What if it doesn't understand me? It says so and gives examples to try. Nothing changes.
- Does it work across sites? It works on the site on screen. Group fills and questions only use staff whose home site is that one.

*Control*
- Does the AI change my rota on its own? No. It acts only when you ask. It flags clashes before it saves, removals ask you to confirm, and Undo all reverses it.
- Can I see what it did? Yes. Every change is recorded: who asked, what changed and when.
- Can I turn it off? Yes. Admins can switch AI features off for your organisation. Building the rota by hand always works.

*Data*
- What gets sent to the AI? What you typed, plus the rota context it needs for that request. Not contact details, pay or HR records. SuperGP doesn't hold patient records.
- Do you train AI on my data? No. By default, Anthropic doesn't use data sent through its commercial API to train its models. Link text "Anthropic's commercial data commitments" to https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training (new tab, `rel="noopener"`).
- Where is my data stored? In Europe.
- Can I delete all my data? Yes. Ask us to close your organisation and we delete everything and confirm in writing.
- Will you sign a data processing agreement? Yes. For the content you add, you're the controller and we're the processor. We'll send the DPA, a sub-processor list and a security overview on request.

**CTA band:** Try Rota Assistant free for 14 days. Sub: Open your rota. Tell it what to change. No credit card.
**More from SuperGP:** Policy GPT ("All your policies and SOPs, in one place.") and Task Manager ("Every task tracked. Nothing left to chance."). Exclude the current product.

## Layout and tokens
Same as the Policy GPT page: 1200px container, text about 36% and screen about 62%, 48px gap, 40px vertical padding per step. Screen frame: radius 28px, shadow `0 0 0 1px rgba(59,130,246,.5), 0 18px 44px rgba(35,24,21,.14)`, background `#fffcf8`, 44px vertical padding, no border, no pill, no footnote. Use the existing tokens (cream `#fffaf4`, ink `#231815`, coral `#e8452c`, coral-cta `#c2351d`, hairline `#e8e1d8`, chips amber, green, ai, grey).

## Screens
Each screen is a faithful replica of the live Smart Rota page, drawn in HTML/CSS with sample data, inside `ScreenFrame`. The mockup holds the exact markup and styles (`.st`, `.xl`, `.xc`, `.xr` and friends). Port them.

**Scaling.** Each screen is laid out at a fixed logical width of 940px and scaled to fit the frame. The mockup uses a container query with `scale: tan(atan2(100cqw, 940px))`, with `scale: .7` as a fallback. Keep that approach (no JS). Logical heights: 640px for screens 1, 2 and 4, and 506px for screens 3 and 5. Set the aspect ratio from those.

**Panels (match the real app):**
- Left, Available Staff (244px): title, count chip, site select, search, title chips, groups with initials avatar, name, role and a status (Free green text, AM or PM booked amber chip, Assigned faded).
- Centre: site select and date range pills, dark "Preview week" pill, "52 open slots" amber text, All slots / Open slots toggle, a Schedule header with five day columns (count chip and Confirm day button, the first day has a coral top border), then sections as tinted pills: On-Call (blue), Clinical Rooms (green), Non-Clinical (lilac). Each row has a tinted label cell and AM and PM name pills or dashed "+ Add".
- Right, Rota assistant (282px, 360px on screen 5): near-black header with coral tile, "Rota assistant" and an AI badge, a 3px coral bottom border, warm grey body, coral-wash user bubbles, white assistant bubbles with a coral tile, and a composer with the placeholder "Tell me what to change. @ for people, / for rooms.".

If the real rota components can render read-only with injected sample data, reuse them instead of porting markup. Otherwise port the mockup markup. Never use real staff, practice or patient data.

**The five screens:**
1. **Build the rota.** Staff panel plus centre. Coral rings on the site select and date range. Sections: On-Call, Clinical Rooms, Non-Clinical. Staff groups: General Assistant, GP, Nurse.
2. **Make changes with AI.** Centre plus assistant. User message: "Add Henry to Reception Monday AM. Remove Grace from on call Friday AM. Replace Mark with Jack on Thursday AM." Reply: a checklist card with three ticks, then "3 instructions · 3 done" and an "Undo all" button. The grid shows the changes: Henry (green outline), Grace's slot removed (dashed red "+ Add"), Jack (green outline).
3. **Clashes flagged.** Centre plus assistant. User: "Add Dr Mark on call Wednesday". Reply: "Dr Mark Ellis is off on Wednesday. It's his scheduled day off, so I haven't added him. Want someone else on call?" with chips "Show who's free" and "Cancel". The Wednesday on-call AM cell has an amber ring. Mark is on Consultation Room 1 every day except Wednesday.
4. **Publish when ready.** Centre only. Coral ring on Preview week. Monday shows a green "Confirmed" pill, the other days "Confirm day". One on-call shift shows a TBC pill with a red "Unconfirmed" badge.
5. **Ask the rota.** Centre (dimmed) plus a wider assistant. Week 30 Nov – 6 Dec. User: "Where is Dr Patel working next week?" Reply: a card listing Mon 30, Tue 1 and Wed 2 with room and AM chips, then "3 shifts. No changes made." Dr Patel's shifts are green on the grid.

Open questions, check with Tak before building:
- Step 4 is a best guess at how a confirmed day looks. Compare it with the real Preview week and confirmed-day UI, and ask Tak for screenshots if they differ. Do not invent a publish flow.
- On mobile (under 520px) the staff panel hides and the rest scales down. Confirm it reads well.

## Accessibility
- Every screen: `role="img"` with a short `aria-label` describing the step, and the inner markup `aria-hidden`.
- FAQ accordion: real `<button aria-expanded aria-controls>`, keyboard operable, visible focus ring (2px ink, 2px offset). Readable with JavaScript off.
- 44px minimum tap targets, contrast at least 4.5:1 (coral-text `#c2351d` on cream), reduced-motion respected.

## SEO
Title "Rota Assistant | SuperGP". Meta description from the hero intro. One `<h1>`, H2 per section, `FAQPage` JSON-LD from the content object, canonical URL, sitemap entry, add to the Products menu if one exists.

## Open claims to resolve before this goes live
The page states these as fact. Do not ship until each is true in the product. Put them in the PR description as a checklist, not on the page:
1. Named-person questions ("Where is Dr Patel working next week?", step 5). The QA log lists these as not built.
2. Step 3 as shown: the assistant refuses a single day when the person is off and offers to find someone else. Today the QA rules say it adds the other days and asks, or replies "Nothing to add".
3. Preview week and Confirm day behave as shown in step 4.
4. Every change is recorded in an audit log (who, what, when).
5. Admins can switch AI features off for an organisation.
6. What is sent to the AI: only what the user typed plus the rota context needed, with no contact, pay or HR data.
7. Data stored in Europe. Zero-retention and no-training terms confirmed with Anthropic.
8. Undo all reliably removes everything a message created (QA-20 is still on watch).
9. DPA, sub-processor list and security overview exist and can be sent on request.

## Out of scope
Other pages, the app, backend work, new fonts, the earlier @ and / mention screen (it was dropped from the steps), any animation beyond what the template already has.

## Acceptance criteria
1. At 1440px the page matches the mockup: alternating sides, screens at the right scale, no clipped text in any panel.
2. At 1100, 768 and 390px: no horizontal scroll, steps stack with text first under 900px, screens stay legible.
3. Five steps and four FAQ groups render from the content file. Policy GPT still renders with text left on every step.
4. No amber chips, pending flags, mockup notes or "illustrative" footnotes anywhere.
5. Keyboard: Tab reaches CTAs, FAQ buttons and links in order, with visible focus.
6. `next build`, type-check and lint pass. No console errors or hydration warnings.
7. Screenshots at 1440, 1100, 768 and 390 attached to the PR, plus the open-claims checklist.

## Working notes
Small commits: template changes (alternate flag, step count, ScaledStage), then content file, then screens one by one, then FAQ, then SEO and accessibility. Run the app locally and check each breakpoint in the browser before reporting done. Report anything in the mockup you could not match and why.
