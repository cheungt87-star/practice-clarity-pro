export type Person = {
  n: string;
  r: string;
  st: "Free" | "AM booked" | "PM booked" | "Assigned";
};

export type ScriptStep =
  | ["t", string]
  | ["m", string]
  | ["p", number]
  | ["i", string];

export type TextPart = { v: string; m: boolean };

export type PopupData = {
  head: string;
  rows: Person[];
};

export type Frame = {
  parts: TextPart[];
  popup: PopupData | null;
};

export const LABELS = [
  "Rota assistant",
  "Rota assistant",
  "Policy assistant",
  "Task assistant",
] as const;

export const LONG = [
  "Swap Sam for Priya on Thursday AM",
  "Move Dr Patel to Friday",
  "How much notice do we need for annual leave?",
  "What's due this week?",
] as const;

export const PH = [
  "Tell me what to change. @ for people, / for rooms.",
  "Tell me what to change. @ for people, / for rooms.",
  "Got a question about SOPs and policies? Ask away!",
  "Ask about tasks, checks and audits.",
] as const;

export const FOOT = [
  "Type @ for people, / for rooms. Prefer to edit by hand? Use + or click a shift.",
  "Type @ for people, / for rooms. Prefer to edit by hand? Use + or click a shift.",
  "Answers come only from your practice's uploaded policies and always show the source. If no policy covers it, I'll say so.",
  "Answers come from your practice's task list.",
] as const;

export const THINK = [
  "Thinking...",
  "Thinking...",
  "Checking your policies...",
  "Checking your tasks...",
] as const;

export const PEOPLE: Person[] = [
  { n: "Sam Reid", r: "Healthcare assistant", st: "AM booked" },
  { n: "Sara Mills", r: "Phlebotomist", st: "Free" },
  { n: "Priya Shah", r: "Practice nurse", st: "Free" },
  { n: "Preeti Nair", r: "Receptionist", st: "PM booked" },
  { n: "Dr Amir Patel", r: "GP", st: "Assigned" },
  { n: "Dr Ngozi Okafor", r: "GP", st: "Free" },
];

export const SCRIPT: ScriptStep[][] = [
  [
    ["t", "Swap "],
    ["m", "@Sa"],
    ["p", 9],
    ["i", "@Sam Reid "],
    ["t", "for "],
    ["m", "@Pr"],
    ["p", 9],
    ["i", "@Priya Shah "],
    ["t", "on Thursday AM"],
    ["p", 10],
  ],
  [
    ["t", "Move "],
    ["m", "@Dr"],
    ["p", 9],
    ["i", "@Dr Amir Patel "],
    ["t", "to Friday"],
    ["p", 10],
  ],
  [["t", "How much notice do we need for annual leave?"], ["p", 10]],
  [["t", "What's due this week?"], ["p", 10]],
];

export const POLICY_COPY_TEXT =
  "Four weeks' notice for full days of annual leave. Shorter notice needs partner approval.";

export const SCENARIO_COUNT = 4;

export function popupFor(q: string): PopupData {
  const ql = q.toLowerCase();
  const rows = PEOPLE.filter((p) => {
    if (!ql) return true;
    return p.n
      .toLowerCase()
      .split(" ")
      .some((w) => w.indexOf(ql) === 0);
  }).slice(0, 4);
  return {
    head: q ? `People · ${rows.length} match${rows.length === 1 ? "" : "es"}` : "People",
    rows,
  };
}

const frameCache: Record<number, Frame[]> = {};

export function framesForScenario(s: number): Frame[] {
  if (frameCache[s]) return frameCache[s];

  const out: Frame[] = [];
  const parts: TextPart[] = [];
  let popup: PopupData | null = null;
  let tok = 0;

  function snap() {
    out.push({
      parts: parts.map((p) => ({ v: p.v, m: p.m })),
      popup,
    });
  }

  function add(ch: string) {
    const last = parts[parts.length - 1];
    if (last && !last.m) last.v += ch;
    else parts.push({ v: ch, m: false });
  }

  for (let i = 0; i < 12; i++) snap();

  SCRIPT[s].forEach((st) => {
    const k = st[0];
    if (k === "t") {
      const text = st[1];
      for (let j = 0; j < text.length; j++) {
        add(text[j]);
        snap();
      }
    } else if (k === "m") {
      const text = st[1];
      tok = 0;
      for (let j = 0; j < text.length; j++) {
        add(text[j]);
        tok++;
        popup = popupFor(text.slice(1, tok));
        snap();
      }
    } else if (k === "p") {
      const n = st[1];
      for (let j = 0; j < n; j++) snap();
    } else if (k === "i") {
      const mention = st[1];
      const last = parts[parts.length - 1];
      if (last) {
        last.v = last.v.slice(0, last.v.length - tok);
        if (!last.v) parts.pop();
      }
      parts.push({ v: mention.trim(), m: true });
      parts.push({ v: " ", m: false });
      popup = null;
      tok = 0;
      snap();
    }
  });

  frameCache[s] = out;
  return out;
}

export function initials(n: string): string {
  return n
    .split(" ")
    .filter((w) => w !== "Dr")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}
