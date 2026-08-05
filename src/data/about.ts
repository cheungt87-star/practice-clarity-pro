import type { SeoPageContent } from "./seo-types";

export const ABOUT_PAGE: SeoPageContent = {
  path: "/about",
  title: "GP Practice Software Built by GPs",
  description:
    "Meet the SuperGP team — Dr Mirran Carpenter, Tak Cheung, and Kazim Hussein. GP practice software built by working clinicians and experienced product engineers.",
  h1: "GP practice software built by people who've run the chaos",
  eyebrow: "About SuperGP",
  intro:
    "SuperGP was designed alongside NHS practitioners and built by a team experienced in healthcare systems, product, and scaling complex operations. We've seen how broken practice management can be — and built SuperGP to fix it.",
  problem: {
    title: "Most practice software isn't designed on the front line",
    body: "Generic workforce tools get adapted for primary care after the fact. The result is clunky workflows that don't match how practice managers and partners actually spend their day.",
  },
  solution: {
    title: "Built by a working GP and a product team who've shipped at scale",
    body: "Clinical leadership from someone who ran three clinics. Product and engineering from leaders who've built at Amazon, BT, and complex operational systems. The brief was simple: what we wish we'd had.",
  },
  bullets: [
    "Designed with NHS practice reality, not enterprise abstractions",
    "Clinical founder still close to the front line",
    "Product obsession with clarity and speed for busy teams",
    "Secure, reliable infrastructure practices can depend on",
    "Transparent pricing and a trial-first buying motion",
  ],
  images: [
    { src: "/features/dashboard-1.png", alt: "SuperGP practice operating system" },
    { src: "/landing/supergp-logo.png", alt: "SuperGP logo" },
  ],
  team: [
    {
      name: "Dr Mirran Carpenter",
      role: "The Clinical Voice",
      bio: "A GP by trade, I currently run three clinics supporting over 10,000 patients. Having managed a team of 50+, I've lived the exact frustrations SuperGP is designed to solve. I act as Voice of the customer here, making sure every feature we build genuinely meets the shifting demands of the NHS and makes sense on the front lines.",
    },
    {
      name: "Tak Cheung",
      role: "The Product Architect",
      bio: "With over 12 years of experience building digital products for the likes of Amazon and BT, I now focus on creating tools that have a tangible real-world impact. At SuperGP, I lead product development — obsessing over the user experience to ensure our platform is as intuitive as it is powerful, ultimately making life easier for practice teams.",
    },
    {
      name: "Kazim Hussein",
      role: "The Tech Lead",
      bio: "Backed by 15 years in technology and consulting, I oversee the technical delivery of the platform. My focus is on ensuring SuperGP isn't just fast and responsive, but built on a secure, best-in-class infrastructure that practices can rely on 24/7.",
    },
  ],
  faqs: [
    {
      question: "Who founded SuperGP?",
      answer:
        "SuperGP is led by Dr Mirran Carpenter (clinical), Tak Cheung (product), and Kazim Hussein (technology) — combining frontline GP experience with product and engineering leadership from Amazon, BT, and complex systems delivery.",
    },
    {
      question: "Is SuperGP an NHS organisation?",
      answer:
        "SuperGP is an independent product company building software for NHS GP practices and PCNs. It was designed with practitioners, not as a generic trust workforce suite.",
    },
    {
      question: "How can we get in touch?",
      answer:
        "Book a demo from any page, email info@supergpapp.co.uk, or use our contact page.",
    },
  ],
  relatedLinks: [
    { href: "/contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" },
    { href: "/features/rota-planner", label: "GP rota software" },
  ],
  schema: "about",
};

export const CONTACT_PAGE: SeoPageContent = {
  path: "/contact",
  title: "Contact SuperGP",
  description: "Get in touch with the SuperGP team — book a demo or email us about GP practice rota and operations software.",
  h1: "Contact SuperGP",
  eyebrow: "Contact",
  intro:
    "Questions about SuperGP for your practice or PCN? Book a demo, start a trial, or email the team directly — we usually reply within one working day.",
  problem: {
    title: "Prefer to talk it through?",
    body: "Tell us how many sites you run and what's broken today — rota, tasks, multi-site visibility, or compliance. We'll point you to the right plan and setup path.",
  },
  solution: {
    title: "Or just start the trial",
    body: "Many practices prefer to try SuperGP on a real rota first. 14 days free, no credit card, no sales call required.",
  },
  bullets: [
    "Email: info@supergpapp.co.uk",
    "Book a demo from the button below",
    "14-day free trial available anytime",
    "Serving GP practices and PCNs across the UK",
  ],
  images: [],
  faqs: [
    {
      question: "What's the best way to reach you?",
      answer:
        "Email info@supergpapp.co.uk or use Book a demo. For product questions, a short demo is usually fastest.",
    },
    {
      question: "Do I need a demo before the trial?",
      answer:
        "No. You can start a 14-day free trial without a sales call. Book a demo if you want help mapping SuperGP to your sites.",
    },
  ],
  relatedLinks: [
    { href: "/pricing", label: "View pricing" },
    { href: "/about", label: "About the team" },
  ],
  schema: "contact",
};
