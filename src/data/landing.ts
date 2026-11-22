export type ProblemSpot = {
  id: string;
  number: string;
  tint: "butter" | "pink" | "lilac" | "peach";
  /** Theme label shown next to the number (e.g. "Rota"). */
  step: string;
  /** Recognisable practice-manager moment, shown as a quote. */
  moment: string;
  title: string;
  body: string;
};

/** @deprecated Prefer ProblemSpot */
export type ProblemBlindSpot = ProblemSpot;

export type ProductFeature = {
  id: string;
  tag: string;
  headline: string;
  subheadline: string;
  ticks: string[];
  image: string;
  imageAlt: string;
  /** Optional demo video; when set, ProductScreen plays it instead of the static image. */
  video?: string;
  tile: "butter" | "lilac" | "mint" | "peach";
  /** Optional product-details page link shown under the feature ticks. */
  learnMoreHref?: string;
  learnMoreLabel?: string;
};

export type Benefit = {
  id: string;
  struck: string;
  headline: string;
  body: string;
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

/** @deprecated Kept for any legacy imports; prefer PRODUCT_FEATURES. */
export type LandingFeature = {
  id: string;
  headline: string;
  body: string;
  ticks: string[];
  image: string;
  images?: string[];
  imageAlt: string;
  gradient: string;
};

export const HERO = {
  tag: "The AI-powered app for GP practices",
  headlineLead: "Less faff.",
  headlineAccent: "More patients.",
  subheadline:
    "SuperGP’s AI assistants handle your rotas, policies and tasks, so you can focus on patient care.",
  primaryCta: "Start free trial",
  secondaryCta: "See how it works",
  riskLine: "14 days free. No credit card. Cancel anytime.",
} as const;

export const PROBLEM = {
  eyebrow: "The problem",
  headline: "Rota. Policies. Tasks.",
  headlineAccent: "Scattered across tools — so everything takes longer than it should.",
} as const;

export const PROBLEM_SPOTS: ProblemSpot[] = [
  {
    id: "rota",
    number: "01",
    tint: "butter",
    step: "Rota",
    moment: "Who's covering Thursday?",
    title: "The rota lives in a spreadsheet. Swaps live in WhatsApp.",
    body: "One version in Excel, another in a group chat, leave requests in someone's inbox. Finding who's on — and who's free — means chasing three places before the clinic even opens.",
  },
  {
    id: "policies",
    number: "02",
    tint: "pink",
    step: "Policies & SOPs",
    moment: "What's our leave notice?",
    title: "Policies sit on a shared drive. Nobody knows which file is current.",
    body: "SOPs buried in folders, old PDFs still circulating, answers by guesswork. When someone asks a simple question, you're hunting documents instead of getting on with the day.",
  },
  {
    id: "tasks",
    number: "03",
    tint: "lilac",
    step: "Tasks",
    moment: "Has the fridge check been done?",
    title: "Checks and audits live in lists nobody opens.",
    body: "Training due dates in one place, fridge logs in another, CQC evidence in a third. Things slip because ownership is unclear — and you only find out when it's late.",
  },
];

export const SOLUTION = {
  eyebrow: "The platform",
  headline: "One app that does the faff.",
  subheadline: "Your rota, your policies and your compliance, in one place. Just ask, and it's done.",
} as const;

export const PRODUCT_FEATURES: ProductFeature[] = [
  {
    id: "all-in-one",
    tag: "All in 1 system",
    headline: "One app. Not five tabs.",
    subheadline: "Everything your practice runs on, in one place.",
    ticks: [
      "One app for your rota, policies and compliance",
      "No more hopping between a spreadsheet, a shared drive, a WhatsApp group and your inbox",
      "Your whole team sees the same thing, at the same time",
      "AI where it saves you effort. A simple list where it doesn't",
      "If you can send a text, you can use it",
    ],
    image: "/features/dashboard-3.png",
    imageAlt: "SuperGP dashboard — all in one system",
    video: "/videos/all-in-one-demo.mp4",
    tile: "butter",
  },
  {
    id: "rota",
    tag: "Rota Assistant",
    headline: "Say what you need. The rota sorts itself.",
    subheadline: "Plan, swap and cover shifts in plain English.",
    ticks: [
      'Type "Swap Sam for Priya on Thursday morning" and it gets on with it',
      "Checks leave, other shifts and your own rules first",
      "Clashes are held back, with the reason",
      "No more finding out on the day",
    ],
    image: "/features/rota-2.png",
    imageAlt: "SuperGP Rota Assistant",
    video: "/videos/rota-demo.mp4",
    tile: "lilac",
    learnMoreHref: "/products/rota-assistant",
    learnMoreLabel: "Learn more",
  },
  {
    id: "policy",
    tag: "Policy GPT",
    headline: "Ask your policies. Get the answer and the source.",
    subheadline: "A search bar that actually knows your practice.",
    ticks: [
      'Ask in your own words: "How much notice do we need for annual leave?"',
      "Get a short answer, the exact section it came from and how confident it is",
      "Searches your practice's documents, not the internet",
      "No more scrolling through PDFs",
      "Not clinical advice",
    ],
    image: "/features/policy-gpt-mockup.png",
    imageAlt: "SuperGP Policy GPT",
    video: "/videos/policy-gpt-demo.mp4",
    tile: "lilac",
    learnMoreHref: "/PolicyGPT",
    learnMoreLabel: "Learn more",
  },
  {
    id: "audit",
    tag: "Audit Manager",
    headline: "Every task tracked. Nothing left to chance.",
    subheadline: "A simple list that never forgets.",
    ticks: [
      "Every check, training and audit in one list",
      "An owner and a due date on every task",
      "Reminders go out before things run late",
      "See what's done and what's open at a glance",
      "No AI here. Just a tidy list that does its job",
    ],
    image: "/features/tasks-3.png",
    imageAlt: "SuperGP Audit Manager",
    video: "/videos/tasks-demo.mp4",
    tile: "mint",
  },
];

export const BENEFITS = {
  eyebrow: "Benefits",
  headline: "What changes when the faff goes.",
  subheadline: "Less time on admin. More time for patients.",
} as const;

export const BENEFIT_ITEMS: Benefit[] = [
  {
    id: "hours",
    struck: "Rebuilding the rota by hand",
    headline: "Hours back.",
    body: "Instead of rebuilding the rota by hand, you type a sentence. Your team gets its week back.",
  },
  {
    id: "hidden",
    struck: "Blind spots found too late",
    headline: "Nothing hidden.",
    body: "Instead of blind spots found too late, every clash, overdue task and missing answer shows up early, while you can still fix it.",
  },
  {
    id: "clinics",
    struck: "Slots lost to rota slips",
    headline: "Fuller clinics.",
    body: "Instead of slots lost to rota slips, the right people are in the right place. More appointments run, and more patients are seen.",
  },
  {
    id: "easy",
    struck: "Training days and manuals",
    headline: "Easy from day one.",
    body: "Instead of training days and manuals, SuperGP works like the apps you already use. Ask, tap, done.",
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
    cta: "Start free trial",
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
    cta: "Start free trial",
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
    cta: "Start free trial",
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
  headlineLead: "Ready for",
  headlineAccent: "less faff?",
  body: "Try SuperGP free for 14 days. No card needed.",
  primaryCta: "Start free trial",
  secondaryCta: "Book a demo",
} as const;

export const FOOTER_COPY = {
  disclaimer:
    "SuperGP’s AI assistants handle your rotas, policies and tasks, so you can focus on patient care.",
} as const;

/** Legacy aliases so older components compile during rebuild. */
export const FEATURES_SECTION = {
  eyebrow: SOLUTION.eyebrow,
  headline: SOLUTION.headline,
  subheadline: SOLUTION.subheadline,
} as const;

export const LANDING_FEATURES: LandingFeature[] = PRODUCT_FEATURES.map((feature) => ({
  id: feature.id,
  headline: feature.headline,
  body: feature.subheadline,
  ticks: feature.ticks,
  image: feature.image,
  imageAlt: feature.imageAlt,
  gradient: "none",
}));

export const PAIN_POINTS = PROBLEM_SPOTS.map((spot) => ({
  id: spot.id,
  headline: spot.title,
  body: spot.body,
  accent: "indigo" as const,
}));
