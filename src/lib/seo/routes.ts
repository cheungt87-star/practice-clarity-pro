export type PlaceholderRoute = {
  path: string;
  title: string;
  description: string;
};

/** Intentionally noindex — real UX page, not a ranking target */
export const NOINDEX_ROUTES: PlaceholderRoute[] = [
  {
    path: "/contact",
    title: "Contact SuperGP",
    description: "Get in touch with the SuperGP team.",
  },
];

/** @deprecated Use NOINDEX_ROUTES — kept for any legacy imports */
export const OTHER_PLACEHOLDER_ROUTES: PlaceholderRoute[] = [...NOINDEX_ROUTES];

export const ALL_CONTENT_ROUTES: PlaceholderRoute[] = [
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

export const PRODUCT_ROUTES = [
  "/products/policy-gpt",
  "/products/rota-assistant",
] as const;

export const INDEXED_ROUTES = [
  "/",
  "/pricing",
  "/faq",
  "/privacy",
  "/about",
  ...PRODUCT_ROUTES,
];
