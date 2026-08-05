export type PainAccent = "indigo" | "critical" | "warning";

export type PainPoint = {
  id: string;
  headline: string;
  body: string;
  accent: PainAccent;
};

export type LandingFeature = {
  id: string;
  headline: string;
  body: string;
  ticks: string[];
  image: string;
  /** When set, the feature media cycles through these images. */
  images?: string[];
  imageAlt: string;
  gradient: string;
};

export type PricingTier = {
  id: string;
  name: string;
  price: string;
  siteRange: string;
  body: string;
  features: string[];
  badge?: string;
  cta: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const HERO = {
  headline: "Run your practice. Not your spreadsheets.",
  subheadline:
    "Cut admin by up to 70% so you can focus on your patients. One system for rota, tasks, and audit-ready compliance",
  primaryCta: "Start My Free Trial",
  secondaryCta: "See Pricing",
  video: "/videos/hero-slideshow.mp4",
  screenshot: "/features/dashboard-1.png",
  screenshotAlt: "SuperGP practice dashboard",
} as const;

export const PROBLEM = {
  title: "Sound familiar?",
  intro:
    "The average GP now cares for over 2,192 patients — up sharply since 2015 — while funding hasn't kept pace. Doing more with a broken system isn't sustainable.",
} as const;

export const PAIN_POINTS: PainPoint[] = [
  {
    id: "everywhere",
    headline: "Everything lives somewhere else.",
    body: "Rota in a spreadsheet, tasks in WhatsApp, staff records in another tab — nothing connects. Your team loses half the day just finding where things live.",
    accent: "indigo",
  },
  {
    id: "rota",
    headline: "Your rota lives in spreadsheets — and it shows.",
    body: "One missed cell or forgotten swap, and you're scrambling for cover by 8am. UK practices report spending £60,000–£120,000 a year on locums plugging gaps a better rota would catch first.",
    accent: "indigo",
  },
  {
    id: "cqc",
    headline: "CQC inspections make you nervous",
    body: "34% of GP practices fail at least one required CQC standard. When evidence is scattered across five systems, you're not ready — you're guessing.",
    accent: "critical",
  },
  {
    id: "admin",
    headline: "Admin eats into patient care time.",
    body: "GPs now spend over 25% of their working time on admin, not care. Workload keeps climbing, and teams are burning out trying to keep up.",
    accent: "warning",
  },
];

export const FEATURES_SECTION = {
  eyebrow: "The platform",
  headline: "One platform. Every site. No more chaos.",
  subheadline:
    "Five tools that replace your spreadsheets, your WhatsApp group, and your compliance folder — in one place.",
} as const;

export const LANDING_FEATURES: LandingFeature[] = [
  {
    id: "rota",
    headline: "Build a safe rota in minutes, not hours.",
    body: "Drag and drop staff into AM, PM, or custom shifts across every site—with built-in validation that catches conflicts before you publish.",
    ticks: [
      "Coordinate rotas across all locations",
      "Fill gaps with temporary or cross-site coverage",
      "Reuse and duplicate shifts instantly",
      "Automated validation catches conflicts",
      "Instant team notifications",
    ],
    image: "/features/rota-2.png",
    images: ["/features/rota-2.png", "/features/rota-1.png", "/features/rota-3.png"],
    imageAlt: "SuperGP rota planner",
    gradient: "radial-gradient(circle at 25% 20%, #2b5cf5 0%, #8b3ff0 55%, #f0399e 100%)",
  },
  {
    id: "dashboard",
    headline: "See your whole practice at a glance.",
    body: "See everything that's happening across your operation right now. Track shifts, room assignments, capacity, and upcoming tasks—all in one view.",
    ticks: [
      "View current shifts and room assignments at a glance",
      "Access historical rotas for planning and print anytime",
      "Track upcoming deadlines and tasks in one place",
      "Monitor patient capacity across all sites in real-time",
      "See on-call leads and coverage status instantly",
      "Export data for reporting or offline use",
    ],
    image: "/features/dashboard-3.png",
    images: [
      "/features/dashboard-3.png",
      "/features/dashboard-4.png",
      "/features/dashboard-2.png",
      "/features/dashboard-1.png",
    ],
    imageAlt: "SuperGP dashboard",
    gradient: "radial-gradient(circle at 75% 75%, #f0399e 0%, #8b3ff0 50%, #2b5cf5 100%)",
  },
  {
    id: "tasks",
    headline: "Replace the WhatsApp thread with an audit trail.",
    body: "Automate routine tasks and track completion across your entire operation. Assign tasks to individuals, teams, or specific sites—and monitor progress in real-time.",
    ticks: [
      "Create repeatable tasks and deploy them in seconds",
      "Assign to individuals, job families, or entire teams",
      "Roll out tasks across one or multiple sites at once",
      "Filter and sort tasks to stay on top of what's due",
      "Auto-email reminders and track completion status",
      "Full audit trail of every task and action",
    ],
    image: "/features/tasks-3.png",
    images: [
      "/features/tasks-3.png",
      "/features/tasks-2.png",
      "/features/tasks-1.png",
    ],
    imageAlt: "SuperGP task manager",
    gradient: "radial-gradient(circle at 20% 80%, #16a34a 0%, #1e61f0 55%, #8b3ff0 100%)",
  },
  {
    id: "sites",
    headline: "Run every location from one place.",
    body: "Manage all your practice locations from one control center. Add sites, update hours, and allocate rooms and resources—instantly across your entire network.",
    ticks: [
      "Manage all practice locations from one dashboard",
      "Add new sites as your practice expands",
      "Update opening hours and operating days instantly",
      "Assign and track clinical and non-clinical rooms",
      "Set resource allocation per site",
      "Control operations across your entire network",
    ],
    image: "/features/multisite-1.png",
    images: [
      "/features/multisite-1.png",
      "/features/multisite-2.png",
      "/features/multisite-3.png",
    ],
    imageAlt: "SuperGP sites manager",
    gradient: "radial-gradient(circle at 80% 25%, #8b3ff0 0%, #f0399e 55%, #ff8a4c 100%)",
  },
  {
    id: "teams",
    headline: "One source of truth for your whole team.",
    body: "Centralize your staff directory and control who can access what. Manage roles, permissions, and user lifecycles—all from one place.",
    ticks: [
      "Maintain a single staff directory with contact details",
      "Set roles and permissions for each user",
      "Organize staff by site, job family, and title",
      "Add, update, or offboard users easily",
      "Control access to sensitive data and features",
      "Keep your practice secure and compliant",
    ],
    image: "/features/team-4.png",
    images: [
      "/features/team-4.png",
      "/features/team-5.png",
      "/features/team-1.png",
      "/features/team-3.png",
      "/features/team-2.png",
    ],
    imageAlt: "SuperGP teams manager",
    gradient: "radial-gradient(circle at 50% 50%, #1e61f0 0%, #2b5cf5 45%, #8b3ff0 100%)",
  },
];

export const PRICING_SECTION = {
  headline: "Simple transparent pricing",
  subheadline: "Less than the cost of one locum shift a month — for your whole practice.",
  riskLine: "14 days free on any plan. No credit card required. Cancel anytime.",
} as const;

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "£150",
    siteRange: "1-4 sites",
    body: "Everything you need to run rota, tasks, and staffing for a single practice or small group.",
    features: [
      "Up to 4 sites",
      "Unlimited staff members",
      "Ongoing feature updates",
      "Self-service set-up",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "growth",
    name: "Growth",
    price: "£250",
    siteRange: "4-8 sites",
    body: "For growing practice groups managing more sites, more staff, and more moving parts.",
    features: [
      "Up to 8 sites",
      "Unlimited staff members",
      "Ongoing feature updates",
      "We will set-up for you",
      "Support via E-mail and Whatsapp",
    ],
    badge: "Most Popular",
    cta: "Start Free Trial",
  },
  {
    id: "network",
    name: "Network",
    price: "£400",
    siteRange: "9+ sites",
    body: "Built for PCNs and larger networks coordinating staffing and compliance across many sites.",
    features: [
      "Unlimited sites",
      "Unlimited staff members",
      "Ongoing feature updates",
      "We will set-up for you",
      "Full team onboarding and training",
      "Dedicated Account Manager",
      "Support via E-mail and Whatsapp",
      "Quarterly reviews",
    ],
    cta: "Start Free Trial",
  },
];

export const LANDING_FAQS: FaqItem[] = [
  {
    question: "How long does setup take?",
    answer:
      "Most practices are up and running within a day. Add your sites, bring in your team, and start building your first rota straight away.",
  },
  {
    question: "Do you migrate our existing rota data?",
    answer:
      "We'll help you import your existing staff list and site details to get set up fast. For rota history migration, our team will scope what's possible with your specific setup during onboarding.",
  },
  {
    question: "What happens after my 14-day trial?",
    answer:
      "If SuperGP's working for you, pick a plan and keep going — your setup carries over with no interruption. If it's not for you, there's no charge and nothing renews automatically.",
  },
  {
    question: "Can I change plans later?",
    answer: "Yes. As you add sites, move up a tier any time — no lock-in, no long-term contract.",
  },
  {
    question: "Is there a contract?",
    answer: "No. SuperGP is billed monthly and you can cancel anytime.",
  },
  {
    question: "Who's behind SuperGP?",
    answer:
      "SuperGP is built by Dr Mirran Carpenter, a working GP who ran three clinics, 10,000+ patients, and a team of 50+ staff on the same broken rota and admin systems you're using today — alongside a technical team with over a decade building at scale for Amazon and BT. It's designed by people who've actually run a practice, not adapted from generic NHS workforce software. As Dr Mirran puts it: 'SuperGP is what I wish I'd had.'",
  },
];

export const FINAL_CTA = {
  headline: "Run your practice. Not your spreadsheets.",
  body: "Start your 14-day free trial today. No card required, no sales call.",
  cta: "Start My Free Trial",
  riskLine: "14 days free. No credit card. Cancel anytime.",
} as const;

export const FOOTER_COPY = {
  blurb: "GP practice management software — rota, tasks, and staffing visibility, built by NHS GPs.",
} as const;
