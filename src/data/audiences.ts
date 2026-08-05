import type { SeoPageContent } from "./seo-types";

export const AUDIENCE_PAGES: Record<string, SeoPageContent> = {
  "practice-managers": {
    path: "/for/practice-managers",
    title: "Practice Manager Software UK",
    description:
      "Practice manager software for UK NHS practices — rota chaos, compliance scrambles, and WhatsApp admin replaced by one operating system.",
    h1: "Practice manager software built for UK NHS surgeries",
    eyebrow: "For Practice Managers",
    intro:
      "You didn't become a practice manager to live inside spreadsheets and group chats. SuperGP is practice manager software designed around the day you actually have — not a generic NHS workforce tool adapted after the fact.",
    problem: {
      title: "A typical day is already full before clinic opens",
      body: "Rota gaps, staff messages, compliance chasing, and tasks that live in five places. By mid-morning you're the glue holding everything together — and there's no single system that reflects that job.",
    },
    solution: {
      title: "One place for the work that fills your day",
      body: "SuperGP pulls rota planning, task assignment, multi-site visibility, and audit-ready trails into one platform — so you're running the practice, not hunting for the latest version of the spreadsheet.",
    },
    bullets: [
      "Build and publish safe rotas without spreadsheet fear",
      "Assign tasks with owners, due dates, and reminders",
      "See staffing across every site you manage",
      "Keep an audit trail when CQC or partners ask questions",
      "Cut the WhatsApp-as-ops-system habit",
      "Start a 14-day trial without a sales call",
    ],
    images: [
      { src: "/features/rota-2.png", alt: "Practice manager rota planning in SuperGP" },
      { src: "/features/tasks-3.png", alt: "Practice manager task board in SuperGP" },
      { src: "/features/dashboard-3.png", alt: "Practice manager operations dashboard" },
    ],
    faqs: [
      {
        question: "Is this practice manager software or clinical software?",
        answer:
          "Operational. SuperGP is built for practice managers and partners who run rota, staffing, tasks, and compliance day-to-day — not for clinical notes or appointments booking in EMIS/SystmOne.",
      },
      {
        question: "How quickly can a practice manager get started?",
        answer:
          "Most practices are up within a day. Add sites and staff, then build your first rota. Growth and Network plans include setup support if you want hands-on help.",
      },
      {
        question: "Will this replace our spreadsheets completely?",
        answer:
          "For rota, tasks, and multi-site staffing visibility — that's the goal. Teams typically stop maintaining parallel Excel rotas once SuperGP is live.",
      },
    ],
    relatedLinks: [
      { href: "/features/rota-planner", label: "GP rota software" },
      { href: "/features/task-manager", label: "Task management" },
      { href: "/compare/spreadsheets", label: "Spreadsheets vs SuperGP" },
      { href: "/pricing", label: "Pricing" },
    ],
    schema: "audience",
  },

  "gp-partners": {
    path: "/for/gp-partners",
    title: "GP Practice Management Software",
    description:
      "GP practice management software for partners — financial clarity on locum risk, compliance confidence, and staffing oversight without micromanagement.",
    h1: "GP practice management software for partners",
    eyebrow: "For GP Partners",
    intro:
      "You need to know the practice is safe, staffed, and not bleeding money on avoidable locums — without living in the rota yourself. SuperGP gives partners operational visibility designed by a working GP who ran three clinics.",
    problem: {
      title: "Oversight without a single source of truth is guesswork",
      body: "Locum invoices arrive after the damage. Compliance evidence is scattered. Staffing problems surface as partner conversations, not dashboards. You're accountable without clear instruments.",
    },
    solution: {
      title: "Visibility without micromanagement",
      body: "See staffing, capacity, and operational completion across sites. Know the practice is audit-ready and that rota gaps aren't becoming a six-figure locum habit — while your practice manager runs the day-to-day in the same system.",
    },
    bullets: [
      "Staffing and capacity visibility across every site",
      "Fewer last-minute locum surprises driven by invisible gaps",
      "Audit-ready trails for compliance confidence",
      "Built with clinical leadership from a working GP founder",
      "Transparent pricing — less than one locum shift a month for many practices",
      "No long-term contract; cancel anytime",
    ],
    images: [
      { src: "/features/dashboard-1.png", alt: "GP partner practice oversight dashboard" },
      { src: "/features/rota-1.png", alt: "Partner-visible rota coverage in SuperGP" },
      { src: "/features/policy-gpt-mockup.png", alt: "Compliance confidence with SuperGP" },
    ],
    faqs: [
      {
        question: "Who is SuperGP for — partners or practice managers?",
        answer:
          "Both. Practice managers run the daily workflow; partners get the visibility and confidence that ops, staffing, and compliance aren't held together with spreadsheets.",
      },
      {
        question: "How does SuperGP relate to locum spend?",
        answer:
          "Better rota visibility and multi-site cover reduce the emergency bookings that drive £60k–£120k annual locum overspend in many UK practices.",
      },
      {
        question: "Who built SuperGP?",
        answer:
          "Dr Mirran Carpenter — a GP who ran three clinics, 10,000+ patients, and a team of 50+ — alongside product and engineering leaders from Amazon and BT. See our About page for full bios.",
      },
    ],
    relatedLinks: [
      { href: "/about", label: "Meet the founders" },
      { href: "/features/compliance", label: "GP compliance software" },
      { href: "/features/locum-management", label: "Locum management" },
      { href: "/pricing", label: "Pricing" },
    ],
    schema: "audience",
  },

  "pcn-leaders": {
    path: "/for/pcn-leaders",
    title: "PCN Rota Software",
    description:
      "PCN rota software and workforce planning for primary care networks — multi-practice coordination and staffing visibility that scales from one site to many.",
    h1: "PCN rota software for network-level coordination",
    eyebrow: "For PCN Leaders",
    intro:
      "PCNs need workforce visibility across practices — not six different Excel files and a hope that cover will appear. SuperGP is PCN rota software built to scale from a single surgery to a full network.",
    problem: {
      title: "Network ambition, practice-level tools",
      body: "Each practice runs its own rota island. Cross-practice cover, ARRS workforce, and shared clinics become WhatsApp negotiations. Leaders can't see the network's real staffing picture.",
    },
    solution: {
      title: "One dashboard for every site in the network",
      body: "Coordinate rotas, rooms, hours, and tasks across practices. Add sites as you grow. Network plans include unlimited sites, full onboarding, and a dedicated account manager.",
    },
    bullets: [
      "Multi-practice rota and staffing visibility",
      "Per-site hours, rooms, and resource configuration",
      "Cross-site cover without parallel spreadsheets",
      "Shared task rollout across the network",
      "Scales from one site to unlimited on Network",
      "Onboarding and training included on higher tiers",
    ],
    images: [
      { src: "/features/multisite-1.png", alt: "PCN multi-practice rota dashboard in SuperGP" },
      { src: "/features/multisite-2.png", alt: "PCN site management in SuperGP" },
      { src: "/features/dashboard-3.png", alt: "PCN workforce visibility dashboard" },
    ],
    faqs: [
      {
        question: "Is SuperGP suitable for a whole PCN?",
        answer:
          "Yes. Network pricing is built for 9+ sites with unlimited locations, dedicated account management, and quarterly reviews — while smaller groups can start on Growth.",
      },
      {
        question: "Can practices keep local control?",
        answer:
          "Yes. Each site can have its own hours, rooms, and team setup while PCN leaders still see the coordinated picture.",
      },
      {
        question: "How is this different from enterprise NHS rota tools?",
        answer:
          "SuperGP is GP-practice-first — faster to onboard, designed with working clinicians, and priced for practices and PCNs rather than large hospital trusts. See our RotaMaster comparison for more.",
      },
    ],
    relatedLinks: [
      { href: "/features/multi-site", label: "Multi-site features" },
      { href: "/compare/rotamaster", label: "SuperGP vs RotaMaster" },
      { href: "/pricing", label: "Network pricing" },
    ],
    schema: "audience",
  },
};
