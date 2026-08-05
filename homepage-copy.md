# SuperGP Homepage Copy

Verbatim extract of all user-facing copy from the homepage (`/`). Sourced from live React components and SEO constants.

**Extracted:** 28 July 2026

---

## Label legend

| Label | Meaning |
|-------|---------|
| **H1** | Primary page headline |
| **H2** | Section heading |
| **H3** | Subsection / card / step heading |
| **Subheading** | Secondary line below a section heading |
| **Body** | Paragraph or descriptive text |
| **Primary CTA** | Main call-to-action button |
| **Secondary CTA** | Secondary call-to-action button or link |
| **Stat label** | Uppercase metric category label |
| **Stat value** | Numeric or symbolic metric |
| **Stat description** | Line below a stat value |
| **Impact line** | Timeline impact callout |
| **Feature label** | Uppercase feature card label (mobile stack) |
| **Tab label** | Feature tab label (desktop showcase) |
| **Badge** | Status or category badge |
| **Bullet (emphasis + text)** | Feature bullet with bold lead-in |
| **Role** | Person's job title / role line |
| **Bio paragraph** | Team member biography paragraph |
| **Link text** | Clickable link label |
| **Dialog title** | Modal heading |
| **Form field label** | Form input label |
| **Placeholder** | Form input placeholder text |
| **Consent copy** | Legal / privacy consent text |
| **Submit button** | Form submit button text |
| **Toast title / body** | Notification message parts |
| **Media aria-label** | Accessible label for media |
| **Logo aria-label** | Accessible label for logo/home link |

---

## SEO & Metadata

*Source: `src/lib/seo/constants.ts`, `src/lib/seo/metadata.ts`*

**Page title:** GP Practice Management Software | SuperGP

**Meta description:** SuperGP is the modern GP practice management platform — built by NHS GPs to replace spreadsheets with smart rota planning, compliance tracking, and task management.

**Site name:** SuperGP

**Site URL:** https://www.supergpapp.co.uk

**OG image URL:** https://www.supergpapp.co.uk/features/dashboard-1.png

**Twitter card:** summary_large_image

**Author:** SuperGP

---

## Header

*Source: `src/components/Header.tsx`*

**Logo aria-label:** SuperGP — home

**Logo wordmark:** SuperGP

**Link text:** I have an invitation code

**Link text:** Login

**Primary CTA:** Book a Demo

---

## Hero

*Source: `src/components/Hero.tsx`*

**H1:** More time on patient care. Less time on admin.

**Subheading:** Built by GPs for GPs.

**Body:** SuperGP replaces spreadsheets with one operating system for rota planning, task management, and compliance — designed by NHS clinicians, trusted by practice teams.

**Primary CTA:** Book a demo now

**Secondary CTA:** See how it works

**Media aria-label:** SuperGP product demo

---

## Pain Points

*Source: `src/components/PainPoints.tsx`*

**H2:** Stop fighting your spreadsheets

### Timeline step 1

**H3:** It's Monday morning. You need to plan rotas for the next 4 weeks.

**Body:** Clinical staff, non-clinical, three sites, different patterns. You open your first spreadsheet. Then your second. Then your third.

### Timeline step 2

**H3:** Juggling multiple files that don't talk to each other

**Body:** Clinical rotas in one sheet. Non-clinical in another. Leave requests scattered in emails. Site-specific rules buried somewhere. Nothing connects.

**Impact line:** Hours wasted on manual data entry.

### Timeline step 3

**H3:** You can't see who's where, when, or available

**Body:** Is Sarah on leave that week? At the city clinic or satellite site? Who's covering that room Thursday? Nobody knows until you cross-reference everything manually.

**Impact line:** 15–20% of appointment capacity sits empty.

### Timeline step 4

**H3:** Then you have to communicate the rota to everyone

**Body:** You print it, email it, send a WhatsApp. Someone spots a conflict. You manually fix it, reprint, resend. The rota is never final.

**Impact line:** 20%+ of your team's time lost to rota admin.

### Timeline step 5

**H3:** Then someone calls in sick

**Body:** Three weeks in, your carefully planned spreadsheet is useless. You can't quickly see coverage options across sites or who's available. Back to WhatsApps and scrambling.

**Impact line:** £50k+ annual locum overspend.

### Timeline step 6

**H3:** And compliance is buried in the chaos

**Body:** Rotas, leave, staffing rules, audit trails—all scattered. You can't prove who worked when or why decisions were made. An audit notice comes in, and you're scrambling to reconstruct the story from a dozen files.

**Impact line:** Critical audit risk. Hours of evidence-chasing.

### Timeline step 7

**H3:** You're stuck in a four-week cycle

**Body:** Every Monday, repeat. Planning should give you peace of mind. Instead, it's weeks of manual work that falls apart anyway. Clinical, non-clinical, sites, rooms, leave—nothing talks to each other.

**Impact line:** This isn't planning. This is survival.

### Impact metrics

**H3:** This is what it actually costs you

**Stat label:** ANNUAL OVERSPEND

**Stat value:** £50k+

**Stat description:** locum overspend risk

**Stat label:** LOST CAPACITY

**Stat value:** 15–20%

**Stat description:** appointment capacity wasted

**Stat label:** TEAM BANDWIDTH

**Stat value:** 20%+

**Stat description:** lost to admin

**Stat label:** ANNUAL EFFORT

**Stat value:** 90 days

**Stat description:** on manual processes

---

## Key Features

*Source: `src/components/KeyFeatures.tsx`, `src/data/key-features.ts`*

**H2:** Everything you need to operate smoothly

**Subheading:** Brought together in a single app with a modern UI, not something from the 90's!

### Smart Rota planner

**Feature label:** SMART ROTA PLANNER

**Tab label:** Smart Rota Planner

**H3:** Smart Rota planner

**Bullet (emphasis + text):** **Multi-Site Scheduling:** Coordinate rotas across locations and weeks with an intuitive drag-and-drop interface.

**Bullet (emphasis + text):** **Instant Filtering:** Quickly surface staff by site or role, and add temporary or cross-site coverage in a few clicks.

**Bullet (emphasis + text):** **Rapid Replication:** Use preset shifts (AM, PM, Full-day) and duplicate daily or weekly schedules in seconds.

**Bullet (emphasis + text):** **Error-Free Publishing:** Automated validation catches conflicts before you publish, with instant notifications sent to the entire team.

### Dashboard

**Feature label:** OPERATIONAL DASHBOARD

**Tab label:** Operational Dashboard

**H3:** Dashboard

**Bullet (emphasis + text):** **Real-Time Clarity:** At-a-glance visibility of current shifts, room assignments, and on-call leads.

**Bullet (emphasis + text):** **Operational Foresight:** Access historical rotas for planning and export physical copies whenever needed.

**Bullet (emphasis + text):** **Unified Task Tracking:** Monitor upcoming deadlines and due tasks from a single, centralized view.

**Bullet (emphasis + text):** **Capacity Intelligence:** Track daily patient capacity across every site and session in real-time.

### Task Manager

**Feature label:** TASK MANAGER

**Tab label:** Task Manager

**H3:** Task Manager

**Bullet (emphasis + text):** **Recurring Workflows:** Deploy repeatable tasks in seconds, assigned by individual, job family, or the entire team.

**Bullet (emphasis + text):** **Multi-Site Deployment:** Roll out operational tasks across one or multiple sites simultaneously with automated email triggers.

**Bullet (emphasis + text):** **Dynamic Oversight:** Instantly filter and sort your task list to maintain total control; edit or retire workflows on the fly.

**Bullet (emphasis + text):** **Audit-Ready Tracking:** Every action is captured in a single, unified audit trail—tracking status, due dates, and completion.

### Sites Manager

**Feature label:** SITES MANAGER

**Tab label:** Sites Manager

**H3:** Sites Manager

**Bullet (emphasis + text):** **Centralized Control:** Orchestrate all practice locations from a single, high-level command center.

**Bullet (emphasis + text):** **Scalable Growth:** Add new sites to your infrastructure seamlessly as your practice group expands.

**Bullet (emphasis + text):** **Flexible Operations:** Update opening hours and operating days across your network with immediate effect.

**Bullet (emphasis + text):** **Resource Mapping:** Precisely assign and manage clinical and non-clinical rooms and facilities for every site.

### Teams Manager

**Feature label:** TEAMS MANAGER

**Tab label:** Teams Manager

**H3:** Teams Manager

**Bullet (emphasis + text):** **Global Directory:** Maintain a single source of truth for all staff, with instant contact details for every team member.

**Bullet (emphasis + text):** **Granular Access Control:** Centrally manage user profiles, specific roles, and system permissions with surgical precision.

**Bullet (emphasis + text):** **Intelligent Organization:** Categorize your workforce by site, job family, and clinical title for streamlined management.

**Bullet (emphasis + text):** **Lifecycle Management:** Add, update, or offboard users with ease, keeping your practice security-tight.

### Policy GPT

**Feature label:** POLICY GPT

**Tab label:** Policy GPT

**H3:** Policy GPT

**Badge:** Coming Soon

**Bullet (emphasis + text):** **Context-Aware AI:** A private LLM trained exclusively on your practice's SOPs and policy documentation.

**Bullet (emphasis + text):** **Natural Language Retrieval:** Query your internal knowledge base in plain English to surface the latest SOPs in seconds.

**Bullet (emphasis + text):** **Enterprise-Grade Privacy:** Your data is strictly ring-fenced—never shared with external providers or used for training global models.

**Bullet (emphasis + text):** **Grounded Accuracy:** Every response is anchored directly to your uploaded data, eliminating hallucinations and ensuring clinical compliance.

---

## Team

*Source: `src/components/TeamSection.tsx`*

**H2:** Built by People Who Get It

**Subheading:** SuperGP is designed by GP's and built by tech Experts.

### Dr Mirran Carpenter

**H3:** Dr Mirran Carpenter

**Role:** Clinical Lead | Voice of the customer

**Bio paragraph:** I'm Mirran, a doctor running three clinics with over 10,000 patients. I built SuperGP because I was exhausted—watching legacy systems slow us down daily, replacing patient time with paperwork. There had to be something better.

**Bio paragraph:** I didn't do this alone. I brought in a product leader from Amazon and BT, and a technologist with 15+ years building infrastructure at scale. Together, we're creating the operating system GPs actually need—one platform that ends the chaos.

**Bio paragraph:** The roadmap ahead is ambitious. We're building what every practice will depend on—a platform so intuitive, so powerful, that going back to the old way becomes unthinkable.

**Image alt text:** Dr Mirran Carpenter

---

## Benefits

*Source: `src/components/BenefitsSection.tsx`*

**H2:** Upgrade to SuperGP and remove the chaos

### Benefit 1 (hero card)

**Stat value:** 70%

**Stat label:** less admin time

**H3:** Cut Admin by 70%

**Body:** Automate rotas, tasks, and compliance tracking so your team spends time on patients, not paperwork.

### Benefit 2

**Stat value:** 100%

**Stat label:** staffing visibility

**H3:** Eliminate Staffing Blind Spots

**Body:** See exactly who's working, where, and when — maximise patient throughput across every site.

### Benefit 3

**Stat value:** 0

**Stat label:** audit surprises

**H3:** Stay Audit-Ready, Always

**Body:** Compliance data lives in one place, time-stamped and inspection-ready — no more last-minute scrambles.

### Benefit 4

**Stat value:** 1

**Stat label:** system for all sites

**H3:** One System, Every Site

**Body:** Manage multiple locations with different hours, rooms, and teams — all from a single dashboard.

### Benefit 5

**Stat value:** 24/7

**Stat label:** reliable operations

**H3:** Minimise Daily Disruptions

**Body:** Reliable scheduling and automated task flows keep your practice running smoothly, every single day.

### Closing CTA block

**H3:** Less Admin. More Patient Care.

**Subheading:** What are you waiting for?

**Body:** Start transforming your practice operations today.

**Primary CTA:** Start Your Journey

---

## Footer

*Source: `src/components/Footer.tsx`*

**Copyright:** © {year} SuperGP. All rights reserved.

**Link text:** Privacy Policy

**Link text:** Contact

---

## Book Demo Dialog

*Source: `src/components/BookDemoDialog.tsx` — triggered from Header, Hero, and Benefits CTAs*

**Dialog title:** Book a Demo

**Body:** See how SuperGP can transform your practice. Fill in your details and we'll be in touch.

**Form field label:** First Name *

**Placeholder:** Jane

**Form field label:** Last Name *

**Placeholder:** Smith

**Form field label:** What is your job? *

**Placeholder:** Practice Manager

**Form field label:** Email *

**Placeholder:** jane@surgery.nhs.uk

**Form field label:** What is your biggest pain point right now? *

**Placeholder:** Tell us what is most challenging for your practice…

**Consent copy:** By submitting this form, you agree that we may contact you about your demo request. We use your details only for that purpose and do not sell them. See our Privacy Policy for more information.

**Submit button:** Book now

**Submit button (loading):** Sending...

**Toast title (success):** E-mail sent!

**Toast body (success):** The SuperGP team will be in touch shortly.

**Toast title (error — not configured):** Form is not configured

**Toast body (error — not configured):** Please try again later.

**Toast title (error — send failed):** Could not send request

**Toast body (error — send failed):** Please try again in a moment or email us directly.
