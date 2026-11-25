# SuperGP SEO Audit and Plan

Site: www.supergpapp.co.uk | Audit date: 22 Nov 2026 | Status: recommendations only. No repo changes made.

## Scope and limits
- Sources: site code (src/app, src/lib/seo, src/data), live homepage, robots.txt, sitemap.xml, two live inner pages, web SERP research.
- Not available: Search Console, GA4, Core Web Vitals field data, backlink data, keyword volumes. Every volume below is TBD.
- The mandatory cannibalization check needs GSC page+query data. The conflicts below are title/H1 level only. Confirm in GSC before any rewrite.
- No aboutme/ or projects/ folder exists in the marketing folder, so none was read. Output saved in Claude outputs/.

## Verdict
Technical base is solid. Content depth, internal linking and brand clarity are the gaps.

| Area | Status |
|---|---|
| Robots, sitemap (19 URLs), canonicals, OG/Twitter | Good |
| JSON-LD (Organization, SoftwareApplication, FAQ, Breadcrumb) | Present in code. Live fetch tool strips scripts, so validate in Rich Results Test |
| Redirect non-www to www | Good (301) |
| Duplicate titles | Fail |
| Internal linking to money pages | Fail |
| Content depth | Weak |
| Brand search ambiguity | Risk |
| Blog / informational content | None |

## Findings, ranked by impact

### P0. Fix first
1. **Duplicate title: /features/multi-site and /for/pcn-leaders both use "PCN Rota Software | SuperGP".** Confirmed live. Active cannibalization risk. Both H1s also lead with "PCN rota software".
   - Fix: multi-site owns "PCN rota software". Retitle pcn-leaders around the buyer and a different head term, e.g. "PCN Workforce Planning Software" with H1 "Workforce planning for PCN managers".
2. **Money pages have no global links.** No component links to /features/*, /for/* or /compare/*. They are linked only by "Related" blocks inside each other. Header "Features" points to /#solution. Link equity and crawl paths are weak.
   - Fix: add a Features menu (6 pages), "Who it's for" (3) and "Compare" (3) to header or footer. Add contextual links from the homepage Solution cards.
3. **Homepage links to /PolicyGPT, which is a temporary (307) redirect** (permanent: false in next.config.ts). Link directly to /products/policy-gpt. Make the redirects permanent.
4. **Search Console and GA are env-var optional.** Confirm NEXT_PUBLIC_GSC_VERIFICATION and GA ID are set in Vercel production. Without GSC there is no ranking data. Also verify in Bing Webmaster Tools.

### P1. Next 30 days
5. **Thin pages.** Feature and audience pages carry roughly 300 to 400 words including nav and footer. Target 800 to 1,200 useful words each: workflow, rules handled, a worked example, UK context (CQC, ARRS, PCN DES, contractual hours), comparison table, 5 to 8 FAQs.
6. **Two pages split one topic.** /features/compliance ("GP Compliance Software") and /features/task-manager overlap, since the Task Manager is compliance tracking. Compliance owns "CQC / compliance" terms. Task manager owns "practice task tracking, reminders, audit trail". Keep "CQC" out of the task-manager title and H1.
7. **Naming drift.** Homepage card says "Audit Manager" (data/landing.ts). Product name is "Task Manager". One name everywhere, including schema and alt text.
8. **Brand collision.** A search for "SuperGP" returns F1 games, GPS apps and racing apps. supergpapp.co.uk did not surface. The rename is parked, but every month of authority built on "SuperGP" raises the cost of switching.
   - Decide the rename before investing heavily in links and content. If keeping the name, always pair it with "GP practice software" in titles, add `sameAs` links (LinkedIn etc.) to Organization schema, and claim a Google Business Profile if eligible.
9. **Single OG image.** Every page uses dashboard-1.png. Create per-page share images.
10. **Sitemap `lastModified` is `new Date()` on every build.** Google learns to ignore it. Use real content dates. Drop `priority` and `changeFrequency` (ignored). Remove /privacy from the sitemap.

### P2. Quarter
11. Add VideoObject schema for the demo videos in /public/videos.
12. Add Article schema with named expert authors on guides (E-E-A-T). The /about page already uses Person schema.
13. Validate Core Web Vitals once GSC has field data (LCP <2.5s, INP <200ms, CLS <0.1). Hero videos and large PNGs in /public/features are the likely risks. Use `images.formats` AVIF as well as WebP.
14. Legal check on /compare pages: competitor claims must be factual and sourced.

## Competitive landscape (from SERP research)
- **Agilio TeamNet**: compliance, HR, rota, training in one hub. Claims 70% of GP practices in England. Owns the "all-in-one" angle.
- **RotaMaster**: rota specialist, in primary care since 1999. Practice, PCN, federation focus.
- **Lantum**: claims 300+ PCNs and 50% of UK GP practices. Strong for PCN rostering and locums.
- **Others in results**: Practice Index, QCS, CQC Ready, Pabau, Rotageek, OmniRota, GPRota (locum app).
- Gap SuperGP can own: AI rota assistant, policy Q&A with sources, transparent pricing (£150 / £250 / £400 per month), and a modern, plain-English voice. Incumbents show no pricing and sell by demo.

## Keyword map (volumes TBD, pull from GSC / Semrush / Ahrefs)

| Cluster | Primary target | Owner URL | Intent | Status |
|---|---|---|---|---|
| Rota | GP rota software | /features/rota-planner | Commercial | Exists |
| AI rota | AI rota assistant GP practice | /products/rota-assistant | Commercial | Exists |
| Multi-site | PCN rota software | /features/multi-site | Commercial | Exists, retitle partner page |
| PCN buyer | PCN workforce planning software | /for/pcn-leaders | Commercial | Retitle |
| Compliance | GP compliance software, CQC compliance software | /features/compliance | Commercial | Exists |
| Tasks | GP practice task management | /features/task-manager | Commercial | Exists, avoid CQC overlap |
| Policies | GP practice policy management, AI policy search | /products/policy-gpt | Commercial | Exists, check title |
| Capacity | GP appointment capacity management | /features/capacity-planning | Commercial | Exists |
| Locum | Locum management software GP practice | /features/locum-management | Commercial | Exists |
| Alternatives | GPRota / RotaMaster / spreadsheet alternative | /compare/* | Commercial | Exist. Add TeamNet and Lantum alternatives |
| Guides | GP rota template, CQC checklist for GP practices, GP practice policy list | /resources/* | Informational | New |

Rule: one primary keyword per title and H1. No satellite uses a head term owned by another page.

## New content (informational cluster, links back to owner pages)
1. GP rota template (free download) → /features/rota-planner
2. CQC readiness checklist for GP practices → /features/compliance
3. How to run rotas across a PCN: ARRS staff, shared sessions → /features/multi-site
4. GP practice policies: the list, review cycles, version control → /products/policy-gpt
5. Locum cost control: where £50k+ overspend comes from (cite source for the figure currently on the locum page)
6. "GP appointment capacity: how to calculate it"
Use real UK sources (CQC, NHS England, BMA). Named author with credentials on each.

## 90-day roadmap

| Weeks | Work | Output |
|---|---|---|
| 1 | Confirm GSC, Bing, GA live. Submit sitemap. Run the GSC page+query cannibalization map. | Baseline report |
| 1-2 | Fix P0: retitle pcn-leaders, add nav/footer links, link /products/policy-gpt directly, permanent redirects. | Cursor prompt |
| 2-4 | Expand 6 feature pages and 3 audience pages to 800+ words with FAQ. Unify "Task Manager" naming. | Page copy |
| 3-4 | Rename decision. | Decision |
| 4-6 | Per-page OG images. Sitemap clean-up. VideoObject schema. | Cursor prompt |
| 5-10 | Publish 6 guides, one every 10 days. Free rota template as link magnet. | /resources |
| 6-12 | Link building: NHS/primary care directories, PCN and practice manager communities, LMC and federation newsletters, G-Cloud / Digital Marketplace listing, case study from first customer. | 10+ referring domains |
| 12 | Review rankings, CTR, demo requests. Retitle pages under 2% CTR at position <10. | Report |

## KPIs
- Indexed pages = all 19 sitemap URLs (/contact is noindex and not listed)
- Non-brand impressions and clicks (GSC), tracked weekly
- Top-10 for "GP rota software", "PCN rota software", "GPRota alternative" by month 6 (realistic only with links and content depth)
- Demo requests from organic (Formspree event in GA4)
- Referring domains: 10 by day 90

## Realistic timelines
New domain, no live customers, no reviews. Expect 3 to 6 months before non-brand traffic is meaningful. Comparison and long-tail terms move first.

## Sources
- Live pages: supergpapp.co.uk, /robots.txt, /sitemap.xml, /features/multi-site, /for/pcn-leaders
- Competitor pages found via search: agiliosoftware.com, practiceindex.co.uk (RotaMaster listing), Lantum NHS BSW ICB PDF, GPRota App Store listing
