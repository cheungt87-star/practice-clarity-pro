import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import { faqPageSchema, jsonLdScript } from "@/lib/seo/schema";
import { LANDING_FAQS } from "@/data/landing";
import MarketingPageLayout from "@/components/marketing/MarketingPageLayout";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ — SuperGP Practice Software",
  description:
    "Answers to common questions about SuperGP setup, trials, pricing plans, contracts, and who builds the product.",
  path: "/faq",
});

export default function FaqPage() {
  const schema = faqPageSchema(
    LANDING_FAQS.map((item) => ({ question: item.question, answer: item.answer })),
  );

  return (
    <MarketingPageLayout bare>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(schema) }}
      />
      <div className="border-b border-brand-gray-200 px-6 pb-4 pt-10 text-center sm:px-8">
        <h1 className="font-heading text-[clamp(2rem,4vw,3.25rem)] font-bold leading-none tracking-[-0.04em] text-ink">
          Questions, answered.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-[17px] text-brand-gray-700">
          Everything you need to know about getting started with SuperGP.
        </p>
      </div>
      <FaqSection showHeading={false} className="pt-10" />
    </MarketingPageLayout>
  );
}
