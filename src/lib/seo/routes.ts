export type PlaceholderRoute = {
  path: string;
  title: string;
  description: string;
};

export const FEATURE_ROUTES: PlaceholderRoute[] = [
  {
    path: "/features/rota-planner",
    title: "GP Rota Software",
    description: "Smart GP rota planning software for surgeries and PCNs.",
  },
  {
    path: "/features/compliance",
    title: "GP Compliance Software",
    description: "Audit-ready GP compliance tracking built into your practice operations.",
  },
  {
    path: "/features/task-manager",
    title: "GP Task Management Software",
    description: "Task management for GP practices — replace WhatsApp and email chaos.",
  },
  {
    path: "/features/capacity-planning",
    title: "GP Appointment Capacity Management",
    description: "Maximise appointment capacity and staffing visibility across your practice.",
  },
  {
    path: "/features/multi-site",
    title: "PCN Rota Software",
    description: "Multi-site and PCN rota management from a single dashboard.",
  },
  {
    path: "/features/locum-management",
    title: "Locum Management Software for GP Practices",
    description: "Manage locum bookings, compliance, and costs in one system.",
  },
];

export const AUDIENCE_ROUTES: PlaceholderRoute[] = [
  {
    path: "/for/practice-managers",
    title: "Practice Manager Software UK",
    description: "Software built for NHS practice managers — rota, compliance, and admin in one place.",
  },
  {
    path: "/for/gp-partners",
    title: "GP Practice Management Software",
    description: "Operational visibility and compliance confidence for GP partners.",
  },
  {
    path: "/for/pcn-leaders",
    title: "PCN Rota Software",
    description: "PCN workforce planning and multi-practice coordination software.",
  },
];

export const COMPARE_ROUTES: PlaceholderRoute[] = [
  {
    path: "/compare/spreadsheets",
    title: "GP Rota Spreadsheet Alternative",
    description: "Compare GP rota spreadsheets vs dedicated practice software.",
  },
  {
    path: "/compare/gprota",
    title: "GPRota Alternative",
    description: "How SuperGP compares to GPRota for GP practices.",
  },
  {
    path: "/compare/rotamaster",
    title: "RotaMaster Alternative for GP Practices",
    description: "A modern GP-first alternative to enterprise rota software.",
  },
];

/** Intentionally noindex — real UX page, not a ranking target */
export const NOINDEX_ROUTES: PlaceholderRoute[] = [
  {
    path: "/contact",
    title: "Contact SuperGP",
    description: "Get in touch with the SuperGP team.",
  },
];

/** @deprecated Use FEATURE_ROUTES / AUDIENCE_ROUTES / COMPARE_ROUTES — kept for any legacy imports */
export const OTHER_PLACEHOLDER_ROUTES: PlaceholderRoute[] = [...NOINDEX_ROUTES];

export const ALL_CONTENT_ROUTES: PlaceholderRoute[] = [
  ...FEATURE_ROUTES,
  ...AUDIENCE_ROUTES,
  ...COMPARE_ROUTES,
  {
    path: "/about",
    title: "GP Practice Software Built by GPs",
    description: "Meet the team behind SuperGP — built by working GPs and expert engineers.",
  },
];

/** @deprecated Prefer ALL_CONTENT_ROUTES + NOINDEX_ROUTES */
export const ALL_PLACEHOLDER_ROUTES: PlaceholderRoute[] = [
  ...ALL_CONTENT_ROUTES,
  ...NOINDEX_ROUTES,
];

const MONEY_PAGE_PATHS = [
  ...FEATURE_ROUTES.map((r) => r.path),
  ...AUDIENCE_ROUTES.map((r) => r.path),
  ...COMPARE_ROUTES.map((r) => r.path),
  "/about",
];

export const INDEXED_ROUTES = ["/", "/pricing", "/privacy", ...MONEY_PAGE_PATHS];
