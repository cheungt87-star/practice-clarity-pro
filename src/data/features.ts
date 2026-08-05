import type { SeoPageContent } from "./seo-types";

export const FEATURE_PAGES: Record<string, SeoPageContent> = {
  "rota-planner": {
    path: "/features/rota-planner",
    title: "GP Rota Software",
    description:
      "Smart GP rota planning software for surgeries and PCNs — drag-and-drop scheduling, conflict validation, and multi-site coverage in one place.",
    h1: "GP rota software built for real practice chaos",
    eyebrow: "Rota Planner",
    intro:
      "Stop rebuilding the rota every Monday morning. SuperGP is GP rota software designed by working clinicians — so shifts, cover, and notifications actually hold together across your surgery.",
    problem: {
      title: "Your rota lives in spreadsheets — and it shows",
      body: "One missed cell, one forgotten shift swap, and you're scrambling for cover by 8am. Real UK practices report spending £60,000–£120,000 a year on locums plugging gaps a better rota would have caught before they happened.",
    },
    solution: {
      title: "Build a safe rota in minutes, not hours",
      body: "Drag and drop staff into AM, PM, or custom shifts across every site — with built-in validation that catches conflicts before you publish, and instant notifications to the whole team.",
    },
    bullets: [
      "Coordinate rotas across all locations from one planner",
      "Fill gaps with temporary or cross-site coverage in a few clicks",
      "Reuse and duplicate daily or weekly schedules instantly",
      "Automated validation catches conflicts before publish",
      "Instant team notifications when the rota changes",
      "Preset shifts (AM, PM, full-day) for rapid replication",
    ],
    images: [
      { src: "/features/rota-2.png", alt: "SuperGP GP rota planner with drag-and-drop shifts" },
      { src: "/features/rota-1.png", alt: "SuperGP rota view across practice sites" },
      { src: "/features/rota-3.png", alt: "SuperGP rota scheduling interface" },
    ],
    faqs: [
      {
        question: "Is SuperGP GP rota software or a full practice OS?",
        answer:
          "Both. The rota planner is the core of SuperGP, but it sits alongside tasks, multi-site management, staffing visibility, and compliance tracking — so you're not bouncing between spreadsheets and WhatsApp for the rest of ops.",
      },
      {
        question: "Can we run rotas across multiple sites?",
        answer:
          "Yes. SuperGP is built for multi-site practices and PCNs — coordinate coverage across locations, move staff between sites, and see the whole network from one dashboard.",
      },
      {
        question: "How do we stop rota conflicts before they hit clinic?",
        answer:
          "Automated validation catches double-bookings and coverage gaps before you publish. The team gets notified when shifts change, so nobody is surprised on the day.",
      },
      {
        question: "How long does setup take?",
        answer:
          "Most practices are up and running within a day. Add your sites, bring in your team, and start building your first rota straight away.",
      },
    ],
    relatedLinks: [
      { href: "/features/multi-site", label: "PCN & multi-site rota software" },
      { href: "/features/locum-management", label: "Locum management" },
      { href: "/compare/spreadsheets", label: "Spreadsheets vs SuperGP" },
      { href: "/for/practice-managers", label: "For practice managers" },
    ],
    schema: "feature",
  },

  compliance: {
    path: "/features/compliance",
    title: "GP Compliance Software",
    description:
      "Audit-ready GP compliance software — policy retrieval, time-stamped evidence, and CQC readiness built into everyday practice operations.",
    h1: "GP compliance software that stays audit-ready",
    eyebrow: "Compliance",
    intro:
      "When CQC is on the horizon, scattered folders and last-minute scrambles aren't a strategy. SuperGP keeps compliance evidence in the same system you already use to run the practice.",
    problem: {
      title: "CQC inspections make you nervous for a reason",
      body: "34% of GP practices fail to meet at least one required CQC standard. When compliance evidence is scattered across five different systems, you're not ready — you're guessing.",
    },
    solution: {
      title: "One system, time-stamped and inspection-ready",
      body: "Compliance data lives alongside rotas and tasks — with an audit trail of who did what and when. Policy GPT (coming soon) surfaces your SOPs in plain English so the team never digs through outdated PDFs.",
    },
    bullets: [
      "Audit trail of tasks, actions, and completions in one place",
      "Time-stamped evidence ready for inspection",
      "Policy GPT — query your practice SOPs in plain English (coming soon)",
      "Private, ring-fenced AI trained only on your uploaded policies",
      "No more last-minute compliance scrambles across disconnected folders",
      "Operational and compliance work in the same daily workflow",
    ],
    images: [
      { src: "/features/policy-gpt-mockup.png", alt: "SuperGP Policy GPT compliance assistant" },
      { src: "/features/tasks-3.png", alt: "SuperGP task audit trail for compliance evidence" },
      { src: "/features/dashboard-1.png", alt: "SuperGP practice dashboard for operational oversight" },
    ],
    faqs: [
      {
        question: "How does SuperGP help with CQC readiness?",
        answer:
          "By keeping rota, task, and operational records in one audit-ready system. Evidence is time-stamped and searchable — so you're not reconstructing a paper trail the week before inspection.",
      },
      {
        question: "What is Policy GPT?",
        answer:
          "A private assistant trained on your practice's SOPs and policy docs. Ask in plain English, get answers grounded in your uploaded documents — never shared externally or used to train global models.",
      },
      {
        question: "Is compliance a separate product?",
        answer:
          "No. Compliance sits inside SuperGP alongside rota and tasks, so audit readiness is part of how you run the practice every day — not a bolt-on checklist tool.",
      },
    ],
    relatedLinks: [
      { href: "/features/task-manager", label: "GP task management" },
      { href: "/for/gp-partners", label: "For GP partners" },
      { href: "/pricing", label: "Pricing" },
    ],
    schema: "feature",
  },

  "task-manager": {
    path: "/features/task-manager",
    title: "GP Task Management Software",
    description:
      "GP task management software that replaces WhatsApp and email chaos — assign, track, and prove completion across your practice.",
    h1: "GP task management software with a real audit trail",
    eyebrow: "Task Manager",
    intro:
      "WhatsApp isn't a workflow system. SuperGP gives practice teams assignable tasks, reminders, and a single trail of what got done — across every site.",
    problem: {
      title: "Admin lives in threads nobody can search",
      body: "Endless WhatsApps, emails, and verbal updates eat into the day. When something falls through, there's no owner, no due date, and no proof it was ever assigned.",
    },
    solution: {
      title: "Replace the WhatsApp thread with an audit trail",
      body: "Automate routine tasks and track completion across your entire operation. Assign to individuals, teams, or sites — and monitor progress in real time.",
    },
    bullets: [
      "Create repeatable tasks and deploy them in seconds",
      "Assign to individuals, job families, or entire teams",
      "Roll out tasks across one or multiple sites at once",
      "Filter and sort to stay on top of what's due",
      "Auto-email reminders and track completion status",
      "Full audit trail of every task and action",
    ],
    images: [
      { src: "/features/tasks-3.png", alt: "SuperGP GP task management board" },
      { src: "/features/tasks-2.png", alt: "SuperGP task assignment across practice teams" },
      { src: "/features/tasks-1.png", alt: "SuperGP task tracking and reminders" },
    ],
    faqs: [
      {
        question: "Can tasks replace our practice WhatsApp group?",
        answer:
          "For operational work, yes. SuperGP gives ownership, due dates, and completion tracking that chat threads can't. Keep WhatsApp for quick chat — move assignable work into SuperGP.",
      },
      {
        question: "Can we roll out the same task to every site?",
        answer:
          "Yes. Deploy recurring workflows across one or multiple sites, assigned by person, job family, or whole team — with automated reminders.",
      },
      {
        question: "Is there an audit trail for CQC?",
        answer:
          "Every action is captured — status, due dates, and completion — so you have a single trail when you need evidence.",
      },
    ],
    relatedLinks: [
      { href: "/features/compliance", label: "GP compliance software" },
      { href: "/for/practice-managers", label: "For practice managers" },
      { href: "/features/rota-planner", label: "GP rota software" },
    ],
    schema: "feature",
  },

  "capacity-planning": {
    path: "/features/capacity-planning",
    title: "GP Appointment Capacity Management",
    description:
      "GP appointment capacity management with real-time staffing and room visibility — maximise throughput across every site and session.",
    h1: "GP appointment capacity management you can see",
    eyebrow: "Capacity Planning",
    intro:
      "Practices often leave 15–20% of capacity unused simply because nobody can see rooms, shifts, and demand in one place. SuperGP surfaces staffing and capacity so you can plan the day, not guess it.",
    problem: {
      title: "Staffing blind spots waste appointments",
      body: "When shifts, rooms, and patient demand live in separate spreadsheets, you can't see unused capacity until the day is over — and patients are waiting meanwhile.",
    },
    solution: {
      title: "See capacity across every site in real time",
      body: "Track shifts, room assignments, and daily patient capacity from one dashboard. Know who's working, where, and when — so you can maximise throughput without burning out the team.",
    },
    bullets: [
      "View current shifts and room assignments at a glance",
      "Monitor patient capacity across all sites in real time",
      "See on-call leads and coverage status instantly",
      "Access historical rotas for planning and print anytime",
      "Export data for reporting or offline use",
      "Plan daily sessions with full staffing visibility",
    ],
    images: [
      { src: "/features/dashboard-3.png", alt: "SuperGP capacity and staffing dashboard" },
      { src: "/features/dashboard-4.png", alt: "SuperGP practice capacity overview" },
      { src: "/features/dashboard-2.png", alt: "SuperGP room and shift visibility" },
    ],
    faqs: [
      {
        question: "How does SuperGP help with appointment capacity?",
        answer:
          "By tying rota, rooms, and site capacity into one view. You see who's available and where rooms are free — so unused slots become visible before the day ends.",
      },
      {
        question: "Does this work across multiple sites?",
        answer:
          "Yes. Capacity and staffing visibility spans every location you run, which is especially useful for practice groups and PCNs.",
      },
      {
        question: "Can we export capacity data?",
        answer:
          "Yes. Export for reporting or offline use whenever you need to share with partners or review historical sessions.",
      },
    ],
    relatedLinks: [
      { href: "/features/rota-planner", label: "GP rota software" },
      { href: "/features/multi-site", label: "Multi-site & PCN" },
      { href: "/for/pcn-leaders", label: "For PCN leaders" },
    ],
    schema: "feature",
  },

  "multi-site": {
    path: "/features/multi-site",
    title: "PCN Rota Software",
    description:
      "PCN rota software and multi-site GP practice management — run every location, hours, rooms, and team from a single dashboard.",
    h1: "PCN rota software for multi-site practices",
    eyebrow: "Multi-Site & PCN",
    intro:
      "Different hours, rooms, and teams — one operating system. SuperGP is built for practices and PCNs that need staffing visibility across every site without juggling separate spreadsheets.",
    problem: {
      title: "Each site runs like its own island",
      body: "When every location has its own rota file and WhatsApp group, cross-site cover is guesswork. PCN leaders can't see workforce reality across the network — only fragments.",
    },
    solution: {
      title: "Run every location from one place",
      body: "Manage all practice locations from one control centre. Add sites, update hours, allocate rooms, and coordinate rotas — instantly across your entire network.",
    },
    bullets: [
      "Manage all practice locations from one dashboard",
      "Add new sites as your practice or PCN expands",
      "Update opening hours and operating days instantly",
      "Assign and track clinical and non-clinical rooms",
      "Set resource allocation per site",
      "Coordinate rotas and cover across the whole network",
    ],
    images: [
      { src: "/features/multisite-1.png", alt: "SuperGP multi-site PCN rota dashboard" },
      { src: "/features/multisite-2.png", alt: "SuperGP site management for GP practices" },
      { src: "/features/multisite-3.png", alt: "SuperGP multi-location operations view" },
    ],
    faqs: [
      {
        question: "Is SuperGP PCN rota software or just for single practices?",
        answer:
          "Both. Single practices start on Starter; growing groups and PCNs use Growth or Network for more sites, onboarding support, and network-level visibility.",
      },
      {
        question: "Can each site keep different hours and rooms?",
        answer:
          "Yes. Configure hours, rooms, and resources per site while still coordinating staffing from one dashboard.",
      },
      {
        question: "How does SuperGP scale from one site to many?",
        answer:
          "Add sites as you grow — no re-platforming. Network plans include unlimited sites, full onboarding, and a dedicated account manager.",
      },
    ],
    relatedLinks: [
      { href: "/for/pcn-leaders", label: "For PCN leaders" },
      { href: "/features/rota-planner", label: "GP rota software" },
      { href: "/pricing", label: "Network pricing" },
    ],
    schema: "feature",
  },

  "locum-management": {
    path: "/features/locum-management",
    title: "Locum Management Software for GP Practices",
    description:
      "Locum management software for GP practices — fill gaps with temporary cover, keep a clear trail, and cut avoidable locum overspend.",
    h1: "Locum management software for GP practices",
    eyebrow: "Locum Management",
    intro:
      "Locum spend spirals when rota gaps are invisible until the last minute. SuperGP helps you spot coverage holes earlier, fill them cleanly, and keep temp cover traceable.",
    problem: {
      title: "£50k+ locum overspend is often a rota problem",
      body: "When gaps only appear the morning of clinic, you're buying expensive cover that a clearer rota and cross-site view would have prevented. Ad-hoc booking with no trail makes it worse.",
    },
    solution: {
      title: "Fill gaps with temporary or cross-site coverage",
      body: "See where cover is thin before the day starts. Add temporary staff into the same planner as your permanent team — with the same validation, notifications, and audit trail.",
    },
    bullets: [
      "Spot coverage gaps before they become emergency locum bookings",
      "Add temporary or cross-site cover in a few clicks",
      "Keep locum shifts in the same validated rota as permanent staff",
      "Notify the team when cover changes",
      "Maintain a clear trail of who covered what and when",
      "Reduce avoidable spend driven by last-minute scrambling",
    ],
    images: [
      { src: "/features/rota-4.png", alt: "SuperGP rota with temporary locum cover" },
      { src: "/features/rota-2.png", alt: "SuperGP gap filling in GP rota planner" },
      { src: "/features/team-4.png", alt: "SuperGP staff directory including temporary cover" },
    ],
    faqs: [
      {
        question: "Does SuperGP replace our locum agency relationships?",
        answer:
          "No. It helps you need fewer emergency bookings by making gaps visible earlier, and keeps whatever cover you do book inside the same rota and audit trail as everyone else.",
      },
      {
        question: "Can temporary staff appear in the rota?",
        answer:
          "Yes. Add temporary or cross-site coverage into the planner with the same conflict checks and team notifications as permanent shifts.",
      },
      {
        question: "How does this reduce locum costs?",
        answer:
          "Most overspend comes from late surprises. Better rota visibility and multi-site cover options mean fewer morning scrambles and fewer premium last-minute bookings.",
      },
    ],
    relatedLinks: [
      { href: "/features/rota-planner", label: "GP rota software" },
      { href: "/compare/spreadsheets", label: "Why leave spreadsheets" },
      { href: "/for/gp-partners", label: "For GP partners" },
    ],
    schema: "feature",
  },
};
