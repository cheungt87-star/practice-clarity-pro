"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LANDING_FAQS } from "@/data/landing";
import { cn } from "@/lib/utils";

type FaqSectionProps = {
  showHeading?: boolean;
  className?: string;
};

export default function FaqSection({ showHeading = true, className }: FaqSectionProps) {
  return (
    <section
      id="faq"
      className={cn(
        "scroll-mt-nav bg-section-sand px-6 py-20 sm:px-8 sm:py-24",
        className,
      )}
    >
      <div className="mx-auto max-w-[760px]">
        {showHeading ? (
          <h2 className="mb-12 text-center font-heading text-[clamp(2rem,4vw,3.25rem)] font-bold leading-none tracking-[-0.04em] text-ink">
            Questions, answered.
          </h2>
        ) : null}
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {LANDING_FAQS.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`} className="border-brand-gray-200">
              <AccordionTrigger className="py-[22px] text-left font-display text-[17px] font-normal text-black hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[15px] leading-relaxed text-brand-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
