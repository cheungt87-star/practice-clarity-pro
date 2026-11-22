export type ProductScreenKey =
  | "upload"
  | "processing"
  | "ask"
  | "update"
  | "rota-build"
  | "rota-ai-changes"
  | "rota-clashes"
  | "rota-publish"
  | "rota-ask";

export type ProductStepListItem =
  | string
  | {
      /** Bold lead-in, e.g. "Reads the file" */
      lead: string;
      /** Rest of the sentence after the lead */
      rest: string;
    };

export type ProductStepBody = {
  paragraphs: string[];
  list?: {
    ordered: boolean;
    items: ProductStepListItem[];
  };
};

export type ProductStepContent = {
  number: string;
  who: string;
  title: string;
  body: ProductStepBody;
  screen: ProductScreenKey;
  /** Short aria-label for the decorative screenshot */
  screenLabel: string;
};

export type FaqAnswerLink = {
  text: string;
  href: string;
};

export type FaqItemContent = {
  question: string;
  /** Plain answer text. Use `{{link}}` where `answerLink` should appear. */
  answer: string;
  answerLink?: FaqAnswerLink;
};

export type FaqGroupContent = {
  title: string;
  items: FaqItemContent[];
};

export type ProductMoreItem = {
  title: string;
  description: string;
  href: string;
};

export type ProductBreadcrumbItem = {
  name: string;
  href?: string;
};

export type ProductPageContent = {
  slug: string;
  name: string;
  path: string;
  breadcrumb?: ProductBreadcrumbItem[];
  seo: {
    title: string;
    description: string;
  };
  hero: {
    chip: string;
    /** Use `\u00A0` between words that must not wrap */
    title: string;
    subtitle: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
    smallPrint: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: ProductStepContent[];
  };
  faqs: {
    eyebrow: string;
    title: string;
    lead: string;
    groups: FaqGroupContent[];
  };
  cta: {
    heading: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  more?: {
    label: string;
    items: ProductMoreItem[];
  };
};
