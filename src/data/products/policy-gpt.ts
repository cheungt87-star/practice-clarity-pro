import type { ProductPageContent } from "./types";

export const POLICY_GPT_PATH = "/products/policy-gpt";
export const POLICY_GPT_ALIAS = "/PolicyGPT";

export const POLICY_GPT: ProductPageContent = {
  slug: "policy-gpt",
  name: "Policy GPT",
  path: POLICY_GPT_PATH,
  seo: {
    title: "Policy GPT",
    description:
      "Easily accessible by the whole practice. Ask in plain English and get the answer with its source.",
  },
  hero: {
    chip: "New · AI",
    title: "Introducing Policy\u00A0GPT",
    subtitle: "All your policies and SOPs, in one place.",
    intro:
      "Easily accessible by the whole practice. Ask in plain English and get the answer with its source.",
    primaryCta: "Start free trial",
    secondaryCta: "See how it works",
    secondaryHref: "#how",
    smallPrint: "14 days free. No credit card.",
  },
  howItWorks: {
    eyebrow: "01",
    title: "How it works",
    lead: "Four steps. Admins add the documents. Everyone gets the answers.",
    steps: [
      {
        number: "1",
        who: "Admins",
        title: "Upload",
        body: {
          paragraphs: [
            "Drop in PDF, Word or text files. As many as you like, all at once. Add a category or review date if you want.",
          ],
        },
        screen: "upload",
        screenLabel: "Admin policies page with upload controls and a policy library list",
      },
      {
        number: "2",
        who: "Automatic",
        title: "Made searchable",
        body: {
          paragraphs: [
            'Ready in a few minutes. A status queue shows progress. Every file is read and split into sections, so "sick pay" finds "sickness absence".',
          ],
        },
        screen: "processing",
        screenLabel: "Admin policies page showing documents being processed in a status queue",
      },
      {
        number: "3",
        who: "Everyone",
        title: "Ask",
        body: {
          paragraphs: [
            "Ask in plain English. Get a short answer, the exact source and a confidence rating. If your documents don't cover it, it says so instead of guessing.",
          ],
        },
        screen: "ask",
        screenLabel: "Policy GPT chat with sample questions, answers, sources and confidence ratings",
      },
      {
        number: "4",
        who: "Admins",
        title: "Update",
        body: {
          paragraphs: [
            "Policy changed? Upload the new version and pick the document it replaces. Answers switch to the new version once it's ready. The old one stays as read-only history for 12 months.",
          ],
        },
        screen: "update",
        screenLabel: "Admin upload dialog asking whether a file is new or replaces an existing policy",
      },
    ],
  },
  faqs: {
    eyebrow: "02",
    title: "FAQs",
    lead: "Short answers. Tap to open.",
    groups: [
      {
        title: "Answers",
        items: [
          {
            question: "Where do the answers come from?",
            answer: "Only from the policy documents your practice uploaded. Not the internet.",
          },
          {
            question: "Can it get things wrong?",
            answer:
              "It answers only from your documents and shows the section it used. Every quote is checked word for word against your file, and a quote that isn’t there is thrown out. If your documents don’t cover the question, it says so. If it’s low confidence, check the source. It isn’t clinical advice.",
          },
          {
            question: "What’s the confidence rating?",
            answer:
              "How closely the answer matches your documents: high, medium or low. If it’s low, check the source before you rely on it.",
          },
        ],
      },
      {
        title: "Managing documents",
        items: [
          {
            question: "What can I upload?",
            answer: "PDF, Word and text files. As many as you like, all at once.",
          },
          {
            question: "How long does it take to process a document?",
            answer:
              "A few minutes, depending on the size of the files and how many are in the queue. A status queue shows each file as it’s read, split and made searchable.",
          },
          {
            question: "A policy changed. How do I update it?",
            answer:
              "Upload the new version and mark which document it replaces. Once it’s processed, answers come from the new version.",
          },
          {
            question: "What happens to the old version?",
            answer:
              "It stays as read-only history for 12 months so you can see what applied when, then it’s deleted. It’s never used to answer questions. Delete it sooner any time with the trash icon.",
          },
          {
            question: "Can I delete a document?",
            answer: "Yes. Delete a document and its file, sections and fingerprints go with it.",
          },
          {
            question: "Can I upload patient records?",
            answer:
              "Please don’t. Policy GPT is for policies, not people. Policies often mention staff names and contact details, so we treat those with the same care as everything else. If personal data gets uploaded by mistake, tell us and we’ll remove the file and everything made from it, the same day where we can.",
          },
        ],
      },
      {
        title: "Access controls",
        items: [
          {
            question: "Who can upload, replace or delete documents?",
            answer: "Master and admin users only.",
          },
          {
            question: "Who can ask questions?",
            answer: "Everyone in your practice.",
          },
          {
            question: "Who can see the questions people ask?",
            answer: "Only the person who asked. Nobody else can see them, admins included.",
          },
          {
            question: "Can other practices see our documents?",
            answer:
              "No. Each organisation only sees its own. That’s enforced in the database itself, not just on screen.",
          },
          {
            question: "How does my team get access?",
            answer:
              "Every practice has its own invite code. Share it with your staff and they can join your organisation. No code, no entry.",
          },
        ],
      },
      {
        title: "Data",
        items: [
          {
            question: "What happens to my documents when I upload them?",
            answer:
              "The file goes into a private store. We split it into sections and turn each into a numeric fingerprint, so questions can find the right section. All of it stays in your practice’s own space.",
          },
          {
            question: "What gets sent to the AI when I ask a question?",
            answer:
              "Your question and a few short sections of your own policies that match it. Not your whole library. The answer comes only from those sections.",
          },
          {
            question: "Do you train AI on my data?",
            answer:
              "No. By default, OpenAI doesn’t use data sent through its API to train or improve its models. Read {{link}}.",
            answerLink: {
              text: "OpenAI’s business data commitments",
              href: "https://openai.com/business-data/",
            },
          },
          {
            question: "Does the AI provider keep my questions or documents?",
            answer:
              "No. Policy GPT runs with zero data retention, so OpenAI doesn’t keep your prompts or answers after processing.",
          },
          {
            question: "Where is my data stored?",
            answer: "In Europe.",
          },
          {
            question: "How long do you keep questions and answers?",
            answer: "12 months, then they’re deleted automatically. Documents stay until you delete them.",
          },
          {
            question: "Can I delete all my data?",
            answer:
              "Yes. Ask us to close your organisation and we delete everything within 30 days and confirm in writing.",
          },
          {
            question: "Will you sign a data processing agreement?",
            answer:
              "Yes. For the content you upload, you’re the controller and we’re the processor. We’ll send the DPA, a sub-processor list and a short security overview on request.",
          },
        ],
      },
    ],
  },
  cta: {
    heading: "Try Policy GPT free for 14 days.",
    body: "Upload your policies. Ask your first question. No credit card.",
    primaryCta: "Start free trial",
    secondaryCta: "Talk to us",
  },
};
