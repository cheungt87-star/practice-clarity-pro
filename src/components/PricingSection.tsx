"use client";

import { PRICING_SECTION } from "@/data/landing";
import PricingPicker from "@/components/PricingPicker";
import { cn } from "@/lib/utils";

type PricingSectionProps = {
  className?: string;
  showHeader?: boolean;
};

export default function PricingSection({ className, showHeader = true }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className={cn("scroll-mt-nav bg-section-pricing px-6 py-20 sm:px-8 sm:py-24", className)}
    >
      <div className="mx-auto max-w-[1160px]">
        {showHeader ? (
          <div className="mx-auto mb-12 max-w-[640px] text-center sm:mb-14">
            <h2 className="mb-3 font-heading text-[clamp(2rem,4vw,3.25rem)] font-bold leading-none tracking-[-0.04em] text-ink">
              {PRICING_SECTION.headline}
            </h2>
            <p className="m-0 text-[17px] leading-relaxed text-ink-muted">
              {PRICING_SECTION.subheadline}
            </p>
          </div>
        ) : null}

        <PricingPicker />
      </div>
    </section>
  );
}
