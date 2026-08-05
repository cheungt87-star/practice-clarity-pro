import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import MarketingPageLayout from "@/components/marketing/MarketingPageLayout";
import PricingSection from "@/components/PricingSection";
import { PRICING_SECTION } from "@/data/landing";

export const metadata: Metadata = createPageMetadata({
  title: "GP Practice Software Pricing",
  description:
    "Simple transparent SuperGP pricing for GP practices and PCNs. Start a 14-day free trial — no card, no sales call.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <MarketingPageLayout bare>
      <div className="border-b border-brand-gray-200 px-6 pb-4 pt-10 text-center sm:px-8">
        <h1 className="font-hero text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold uppercase leading-[1.08] tracking-tight text-black">
          {PRICING_SECTION.headline}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-[17px] text-brand-gray-700">
          {PRICING_SECTION.subheadline}
        </p>
      </div>
      <PricingSection showHeader={false} className="pt-10" />
    </MarketingPageLayout>
  );
}
