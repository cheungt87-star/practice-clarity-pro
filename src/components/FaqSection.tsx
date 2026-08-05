"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LANDING_FAQS } from "@/data/landing";

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-nav bg-section-sand px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[760px]">
        <h2 className="mb-12 text-center font-hero text-[clamp(1.625rem,3.5vw,2.125rem)] font-bold uppercase leading-[1.08] tracking-tight text-black">
          Questions, answered.
        </h2>
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
