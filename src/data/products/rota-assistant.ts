import type { ProductPageContent } from "./types";

export const ROTA_ASSISTANT_PATH = "/products/rota-assistant";

export const ROTA_ASSISTANT: ProductPageContent = {
  slug: "rota-assistant",
  name: "Rota Assistant",
  path: ROTA_ASSISTANT_PATH,
  breadcrumb: [
    { name: "SuperGP", href: "/" },
    { name: "Products" },
    { name: "Rota Assistant" },
  ],
  seo: {
    title: "Rota Assistant",
    description:
      "Add, remove and replace shifts by typing what you need. Ask where anyone is working. Nothing goes live until you confirm.",
  },
  hero: {
    chip: "New · AI",
    title: "Rota\u00A0Assistant",
    subtitle: "Change your rota by asking.",
    intro:
      "Add, remove and replace shifts by typing what you need. Ask where anyone is working. Nothing goes live until you confirm.",
    primaryCta: "Start free trial",
    secondaryCta: "See how it works",
    secondaryHref: "#how",
    smallPrint: "14 days free. No credit card.",
  },
  howItWorks: {
    eyebrow: "01",
    title: "How it works",
    lead: "Build it. Change it by asking. Publish when you're ready.",
    steps: [
      {
        number: "1",
        who: "Managers",
        title: "Build the rota",
        body: {
          paragraphs: [
            "View and edit the rota by site and date range. Schedule all your staff: clinical, non-clinical and admin.",
          ],
        },
        screen: "rota-build",
        screenLabel:
          "Smart Rota with available staff panel and weekly schedule for On-Call, Clinical Rooms and Non-Clinical",
      },
      {
        number: "2",
        who: "Managers",
        title: "Make changes with AI",
        body: {
          paragraphs: [
            "Add, remove and replace shifts with ease. Just ask Rota Assistant.",
          ],
        },
        screen: "rota-ai-changes",
        screenLabel:
          "Rota Assistant completing three shift instructions with an undo-all control and updated grid",
      },
      {
        number: "3",
        who: "Automatic",
        title: "Clashes flagged",
        body: {
          paragraphs: [
            "Rota Assistant checks every request and flags problems before it saves. Ask for Dr Mark on call on a day he's off, and it tells you.",
          ],
        },
        screen: "rota-clashes",
        screenLabel:
          "Rota Assistant refusing to add a doctor who is off and offering alternatives",
      },
      {
        number: "4",
        who: "Managers",
        title: "Publish when ready",
        body: {
          paragraphs: [
            "Review the rota before it's published. Preview the week, then confirm each day. Nothing goes live without your say so.",
          ],
        },
        screen: "rota-publish",
        screenLabel:
          "Weekly rota in preview with one day confirmed and an unconfirmed on-call shift highlighted",
      },
      {
        number: "5",
        who: "Managers",
        title: "Ask the rota",
        body: {
          paragraphs: [
            'Got a question like "Where is Dr Patel working next week?" Just ask. No more scrolling and searching.',
          ],
        },
        screen: "rota-ask",
        screenLabel:
          "Rota Assistant answering where a doctor works next week with highlighted shifts on the grid",
      },
    ],
  },
  faqs: {
    eyebrow: "02",
    title: "FAQs",
    lead: "Short answers. Tap to open.",
    groups: [
      {
        title: "Changes",
        items: [
          {
            question: "What can I ask it to do?",
            answer:
              'Add, move, remove and replace shifts. Fill open slots from a group, like "any available GP". Clear a day, a room or the on-call rows. Small typos are fine.',
          },
          {
            question: "Does it change the rota straight away?",
            answer:
              "Adds do, and it tells you what it assumed. Removing, clearing and replacing ask you first, with a count of the shifts affected.",
          },
          {
            question: "What if someone is off or already booked?",
            answer:
              'It tells you before it saves. For example: "Isla doesn\'t work Mon and Wed. Go ahead and add Thursday only?"',
          },
          {
            question: "Does anything go live without my approval?",
            answer: "No. Nothing is published until you confirm.",
          },
          {
            question: "Can I undo it?",
            answer: "Yes. Undo all reverses everything from that message.",
          },
          {
            question: "What if I change my mind halfway?",
            answer:
              "Hit Cancel, or just type something new. A question never blocks you, and a cancelled one changes nothing.",
          },
          {
            question: "Will it overwrite shifts that are already there?",
            answer:
              "Filling open slots never does. If you add a named person to a room that already has someone, it adds alongside and flags it.",
          },
        ],
      },
      {
        title: "Questions",
        items: [
          {
            question: "Can I ask it questions about the rota?",
            answer:
              "Yes. Who is free, how many slots are open, who has no shift on a day, who doesn't work a certain day. Answers come from the rota on screen.",
          },
          {
            question: "Does asking change anything?",
            answer: "No. Questions never touch the rota.",
          },
          {
            question: "What if it doesn't understand me?",
            answer: "It says so and gives examples to try. Nothing changes.",
          },
          {
            question: "Does it work across sites?",
            answer:
              "It works on the site on screen. Group fills and questions only use staff whose home site is that one.",
          },
        ],
      },
      {
        title: "Control",
        items: [
          {
            question: "Does the AI change my rota on its own?",
            answer:
              "No. It acts only when you ask. It flags clashes before it saves, removals ask you to confirm, and Undo all reverses it.",
          },
          {
            question: "Can I see what it did?",
            answer: "Yes. Every change is recorded: who asked, what changed and when.",
          },
          {
            question: "Can I turn it off?",
            answer:
              "Yes. Admins can switch AI features off for your organisation. Building the rota by hand always works.",
          },
        ],
      },
      {
        title: "Data",
        items: [
          {
            question: "What gets sent to the AI?",
            answer:
              "What you typed, plus the rota context it needs for that request. Not contact details, pay or HR records. SuperGP doesn't hold patient records.",
          },
          {
            question: "Do you train AI on my data?",
            answer:
              "No. By default, Anthropic doesn't use data sent through its commercial API to train its models. Read {{link}}.",
            answerLink: {
              text: "Anthropic's commercial data commitments",
              href: "https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training",
            },
          },
          {
            question: "Where is my data stored?",
            answer: "In Europe.",
          },
          {
            question: "Can I delete all my data?",
            answer:
              "Yes. Ask us to close your organisation and we delete everything and confirm in writing.",
          },
          {
            question: "Will you sign a data processing agreement?",
            answer:
              "Yes. For the content you add, you're the controller and we're the processor. We'll send the DPA, a sub-processor list and a short security overview on request.",
          },
        ],
      },
    ],
  },
  cta: {
    heading: "Try Rota Assistant free for 14 days.",
    body: "Open your rota. Tell it what to change. No credit card.",
    primaryCta: "Start free trial",
    secondaryCta: "Talk to us",
  },
};
