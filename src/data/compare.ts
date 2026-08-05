import type { SeoPageContent } from "./seo-types";

export const COMPARE_PAGES: Record<string, SeoPageContent> = {
  spreadsheets: {
    path: "/compare/spreadsheets",
    title: "GP Rota Spreadsheet Alternative",
    description:
      "Compare GP rota spreadsheets vs SuperGP — fewer errors, less locum scramble, and an audit trail spreadsheets can't give you.",
    h1: "The GP rota spreadsheet alternative practices switch to",
    eyebrow: "Compare",
    intro:
      "Spreadsheets got you this far. They won't get you through multi-site cover, CQC evidence, or another winter of last-minute locums. Here's how SuperGP compares to running the rota in Excel or Google Sheets.",
    problem: {
      title: "The cost of spreadsheet rotas is rarely in the licence fee",
      body: "It's the missed shift, the version someone emailed last Tuesday, the £60k–£120k locum bill plugging gaps a clearer system would have shown weeks earlier — and the zero audit trail when something goes wrong.",
    },
    solution: {
      title: "Purpose-built GP rota software instead of cells and hope",
      body: "Drag-and-drop planning, conflict validation, multi-site visibility, task tracking, and notifications — designed for how UK practices actually work.",
    },
    bullets: [
      "Conflict validation before publish — not after clinic starts",
      "One live rota, not five emailed versions",
      "Multi-site cover without tab gymnastics",
      "Tasks and compliance trails Excel can't provide",
      "Team notifications when shifts change",
      "14-day free trial to prove it on your real rota",
    ],
    images: [
      { src: "/features/rota-2.png", alt: "SuperGP as a GP rota spreadsheet alternative" },
      { src: "/features/dashboard-3.png", alt: "Live staffing visibility vs spreadsheet tabs" },
    ],
    compareTable: {
      themLabel: "Spreadsheets",
      usLabel: "SuperGP",
      rows: [
        {
          feature: "Conflict detection",
          them: "Manual / easy to miss",
          us: "Automated validation before publish",
        },
        {
          feature: "Multi-site view",
          them: "Separate files or tabs",
          us: "Single dashboard across locations",
        },
        {
          feature: "Team notifications",
          them: "Email or WhatsApp manually",
          us: "Instant notifications on change",
        },
        {
          feature: "Audit trail",
          them: "None",
          us: "Time-stamped task and action history",
        },
        {
          feature: "Task management",
          them: "Separate chats and lists",
          us: "Built-in assignable workflows",
        },
        {
          feature: "Version control",
          them: "Filename chaos",
          us: "One live source of truth",
        },
      ],
    },
    faqs: [
      {
        question: "Can we import our existing spreadsheet rota?",
        answer:
          "We'll help you import staff lists and site details quickly. Rota history migration is scoped during onboarding based on your setup.",
      },
      {
        question: "Will the team still need Excel for anything?",
        answer:
          "Many practices stop using Excel for day-to-day rotas entirely. You can still export data from SuperGP when you need a spreadsheet for reporting.",
      },
      {
        question: "Is SuperGP expensive compared to free spreadsheets?",
        answer:
          "Plans start at £150/month for the whole practice — typically less than one locum shift. The comparison that matters is avoidable locum and admin cost, not licence fee vs £0.",
      },
    ],
    relatedLinks: [
      { href: "/features/rota-planner", label: "GP rota software" },
      { href: "/compare/gprota", label: "SuperGP vs GPRota" },
      { href: "/pricing", label: "Pricing" },
    ],
    schema: "compare",
  },

  gprota: {
    path: "/compare/gprota",
    title: "GPRota Alternative",
    description:
      "Looking for a GPRota alternative? See how SuperGP compares on UI, multi-site ops, compliance, tasks, and transparent practice pricing.",
    h1: "A modern GPRota alternative for GP practices",
    eyebrow: "Compare",
    intro:
      "Evaluating GPRota or searching for a GPRota alternative? SuperGP is a practice operating system — rota plus tasks, multi-site control, and audit-ready workflows — built by a working GP and product team who've scaled consumer-grade UX.",
    problem: {
      title: "Rota-only tools leave the rest of the day broken",
      body: "If tasks still live in WhatsApp and compliance still lives in folders, swapping one rota tool for another doesn't fix how the practice actually runs.",
    },
    solution: {
      title: "Rota inside a full practice OS",
      body: "SuperGP combines scheduling with multi-site management, task workflows, staffing visibility, and a path to policy/compliance support — with simple monthly pricing and a 14-day trial.",
    },
    bullets: [
      "Modern drag-and-drop UX built for busy practice teams",
      "Multi-site and PCN-ready from day one",
      "Tasks and audit trails included — not bolt-ons later",
      "Transparent Starter / Growth / Network pricing",
      "No long-term contract",
      "Founded by a GP who ran three clinics on the old way",
    ],
    images: [
      { src: "/features/rota-1.png", alt: "SuperGP rota planner as a GPRota alternative" },
      { src: "/features/tasks-2.png", alt: "Tasks beyond rota-only tools" },
      { src: "/features/multisite-1.png", alt: "Multi-site capabilities in SuperGP" },
    ],
    compareTable: {
      themLabel: "Typical rota-only tools",
      usLabel: "SuperGP",
      rows: [
        {
          feature: "Core rota planning",
          them: "Yes",
          us: "Yes — with conflict validation",
        },
        {
          feature: "Task management",
          them: "Limited / separate",
          us: "Built-in with audit trail",
        },
        {
          feature: "Multi-site / PCN",
          them: "Varies",
          us: "First-class multi-site dashboard",
        },
        {
          feature: "Compliance / policy support",
          them: "Often out of scope",
          us: "Audit trails + Policy GPT roadmap",
        },
        {
          feature: "Pricing philosophy",
          them: "Often opaque / sales-led",
          us: "Public monthly plans, trial first",
        },
        {
          feature: "Built by working GPs",
          them: "Varies",
          us: "Yes — clinical founder + product team",
        },
      ],
    },
    faqs: [
      {
        question: "Is SuperGP a direct GPRota replacement?",
        answer:
          "For practices that want rota plus broader ops, yes. If you only need a narrow scheduling tool and nothing else, compare feature-by-feature on a demo — most teams find the integrated workflow is the point.",
      },
      {
        question: "How do we evaluate the switch?",
        answer:
          "Start a 14-day free trial with your real sites and staff. No card, no sales call required to begin.",
      },
      {
        question: "What about pricing vs GPRota?",
        answer:
          "SuperGP publishes clear monthly plans from £150. Book a demo if you want a side-by-side against your current quote.",
      },
    ],
    relatedLinks: [
      { href: "/features/rota-planner", label: "GP rota software" },
      { href: "/compare/rotamaster", label: "vs RotaMaster" },
      { href: "/pricing", label: "Pricing" },
    ],
    schema: "compare",
  },

  rotamaster: {
    path: "/compare/rotamaster",
    title: "RotaMaster Alternative for GP Practices",
    description:
      "RotaMaster alternative for GP practices — GP-first design, faster onboarding, and pricing built for surgeries and PCNs rather than enterprise trusts.",
    h1: "A GP-first RotaMaster alternative",
    eyebrow: "Compare",
    intro:
      "Enterprise NHS rota platforms can be powerful — and heavy. If you're a GP practice or PCN that needs clarity without a six-month implementation, SuperGP is a RotaMaster alternative built around surgery reality.",
    problem: {
      title: "Enterprise tools aren't always practice-shaped",
      body: "Long onboarding, complex configuration, and workflows designed for large organisations leave small and mid-size GP teams waiting for value — or stuck on spreadsheets instead.",
    },
    solution: {
      title: "GP practice OS with fast time-to-value",
      body: "Most SuperGP practices are live within a day. Drag-and-drop rota, multi-site control, tasks, and transparent pricing — designed with a GP founder who lived the frontline admin load.",
    },
    bullets: [
      "Built for GP practices and PCNs, not hospital trusts first",
      "Onboarding measured in days, not quarters",
      "Modern UI practice teams actually use",
      "Tasks and multi-site included",
      "Clear monthly pricing with a free trial",
      "Clinical + product leadership with NHS frontline experience",
    ],
    images: [
      { src: "/features/rota-3.png", alt: "SuperGP as a RotaMaster alternative for GP practices" },
      { src: "/features/multisite-3.png", alt: "Simpler multi-site onboarding in SuperGP" },
      { src: "/features/dashboard-1.png", alt: "Practice-first operations dashboard" },
    ],
    compareTable: {
      themLabel: "Enterprise rota platforms",
      usLabel: "SuperGP",
      rows: [
        {
          feature: "Primary design centre",
          them: "Large NHS / enterprise workforce",
          us: "GP practices and PCNs",
        },
        {
          feature: "Typical onboarding",
          them: "Long / project-led",
          us: "Often live within a day",
        },
        {
          feature: "Practice manager UX",
          them: "Can feel heavy",
          us: "Modern, focused daily workflows",
        },
        {
          feature: "Tasks & audit trail",
          them: "Depends on modules",
          us: "Included in the platform",
        },
        {
          feature: "Pricing transparency",
          them: "Often quote-led",
          us: "Published monthly plans",
        },
        {
          feature: "Contract flexibility",
          them: "Often longer commitments",
          us: "Monthly, cancel anytime",
        },
      ],
    },
    faqs: [
      {
        question: "Is SuperGP less capable than enterprise rota software?",
        answer:
          "It's differently scoped. SuperGP focuses on what GP practices and PCNs need daily — rota, multi-site, tasks, visibility — without the weight of trust-scale workforce suites.",
      },
      {
        question: "Can a PCN use SuperGP instead of an enterprise platform?",
        answer:
          "Many PCNs and practice groups can. Network plans support unlimited sites with dedicated onboarding. Book a demo if you want to map your network structure.",
      },
      {
        question: "How do we compare fairly?",
        answer:
          "Trial SuperGP on a real rota for 14 days, and compare time-to-live, daily usability for practice managers, and total cost — not just feature checklists.",
      },
    ],
    relatedLinks: [
      { href: "/for/pcn-leaders", label: "For PCN leaders" },
      { href: "/features/multi-site", label: "Multi-site features" },
      { href: "/compare/gprota", label: "vs GPRota" },
      { href: "/pricing", label: "Pricing" },
    ],
    schema: "compare",
  },
};
