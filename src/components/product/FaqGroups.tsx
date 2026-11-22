"use client";

import { useId, useState } from "react";
import type { FaqGroupContent, FaqItemContent } from "@/data/products/types";

function renderAnswer(item: FaqItemContent) {
  if (!item.answerLink) {
    return item.answer;
  }

  const [before, after = ""] = item.answer.split("{{link}}");
  return (
    <>
      {before}
      <a
        href={item.answerLink.href}
        target="_blank"
        rel="noopener"
        className="underline underline-offset-2"
      >
        {item.answerLink.text}
      </a>
      {after}
    </>
  );
}

function FaqItem({
  item,
  open,
  onToggle,
}: {
  item: FaqItemContent;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border-b border-hairline py-5">
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full min-h-11 items-start justify-between gap-4 pr-1 text-left text-[17px] font-semibold leading-[1.35] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      >
        <span>{item.question}</span>
        <span aria-hidden className="text-2xl font-normal leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
        {open ? (
          <p className="mt-2.5 text-[15px] leading-[1.6] text-muted-strong">{renderAnswer(item)}</p>
        ) : null}
      </div>
    </div>
  );
}

function FaqGroup({ group }: { group: FaqGroupContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="mb-2 mt-11 text-xs font-bold uppercase tracking-[0.08em] text-coral-text">
        {group.title}
      </div>
      <div className="border-t border-hairline">
        {group.items.map((item, index) => (
          <FaqItem
            key={item.question}
            item={item}
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}

type FaqGroupsProps = {
  eyebrow: string;
  title: string;
  lead: string;
  groups: FaqGroupContent[];
};

export function FaqGroups({ eyebrow, title, lead, groups }: FaqGroupsProps) {
  return (
    <section id="faq" className="scroll-mt-24 pb-[72px]">
      <div className="mb-2.5 text-xs font-bold uppercase tracking-[0.08em] text-coral-text">
        {eyebrow}
      </div>
      <h2 className="mb-3 font-heading text-[clamp(34px,4vw,52px)] font-extrabold leading-none tracking-[-0.04em] text-ink">
        {title}
      </h2>
      <p className="max-w-[620px] text-lg leading-[1.55] text-muted-strong">{lead}</p>
      {groups.map((group) => (
        <FaqGroup key={group.title} group={group} />
      ))}

      {/* Readable without JavaScript; ignored when JS is on */}
      <noscript>
        {groups.map((group) => (
          <div key={`noscript-${group.title}`}>
            <div className="mb-2 mt-11 text-xs font-bold uppercase tracking-[0.08em] text-coral-text">
              {group.title}
            </div>
            <div className="border-t border-hairline">
              {group.items.map((item) => (
                <details key={item.question} className="border-b border-hairline py-5" open>
                  <summary className="text-[17px] font-semibold leading-[1.35] text-ink">
                    {item.question}
                  </summary>
                  <p className="mt-2.5 text-[15px] leading-[1.6] text-muted-strong">
                    {renderAnswer(item)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </noscript>
    </section>
  );
}
