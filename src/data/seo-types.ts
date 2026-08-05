export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoImage = {
  src: string;
  alt: string;
};

export type SeoRelatedLink = {
  href: string;
  label: string;
};

export type SeoCompareRow = {
  feature: string;
  them: string;
  us: string;
};

export type SeoTeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type SeoPageContent = {
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow?: string;
  intro: string;
  problem: { title: string; body: string };
  solution: { title: string; body: string };
  bullets: string[];
  images: SeoImage[];
  faqs: SeoFaq[];
  relatedLinks?: SeoRelatedLink[];
  compareTable?: {
    themLabel: string;
    usLabel: string;
    rows: SeoCompareRow[];
  };
  team?: SeoTeamMember[];
  schema: "feature" | "audience" | "compare" | "about" | "contact";
};
