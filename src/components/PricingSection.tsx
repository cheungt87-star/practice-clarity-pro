"use client";

import { useState } from "react";
import { PRICING_SECTION, PRICING_TIERS } from "@/data/landing";
import { useDemoDialog } from "@/components/demo-dialog-context";
import { LandingButton } from "@/components/LandingButton";
import { cn } from "@/lib/utils";

type PricingSectionProps = {
  className?: string;
  showHeader?: boolean;
};

const DEFAULT_TIER_INDEX = PRICING_TIERS.findIndex((tier) => Boolean(tier.badge));

export default function PricingSection({ className, showHeader = true }: PricingSectionProps) {
  const { openDemo } = useDemoDialog();
  const [selected, setSelected] = useState(DEFAULT_TIER_INDEX >= 0 ? DEFAULT_TIER_INDEX : 1);
  const tier = PRICING_TIERS[selected];

  return (
    <section
      id="pricing"
      className={cn("scroll-mt-nav bg-section-pricing px-6 py-20 sm:px-8 sm:py-24", className)}
    >
      <div className="mx-auto max-w-[1160px]">
        {showHeader ? (
          <div className="mx-auto mb-12 max-w-[640px] text-center sm:mb-14">
            <h2 className="mb-3 font-hero text-[clamp(1.625rem,3.5vw,2.125rem)] font-bold uppercase leading-[1.08] tracking-tight text-black">
              {PRICING_SECTION.headline}
            </h2>
            <p className="m-0 text-[17px] leading-relaxed text-brand-gray-700">
              {PRICING_SECTION.subheadline}
            </p>
          </div>
        ) : null}

        <div className="mx-auto w-full max-w-[440px]">
          <p className="mb-3 text-center text-[15px] font-semibold text-[#3B4250]">
            How many sites do you have?
          </p>

          <div
            className="mb-7 flex justify-center gap-2 rounded-full bg-white p-1.5 shadow-[0_1px_2px_rgba(16,24,40,0.06)]"
            role="tablist"
            aria-label="Select number of sites"
          >
            {PRICING_TIERS.map((option, index) => {
              const isActive = index === selected;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelected(index)}
                  className={cn(
                    "flex-1 rounded-full px-4 py-2.5 text-sm font-bold transition-colors",
                    isActive ? "bg-[#0B0D10] text-white" : "bg-transparent text-brand-gray-700",
                  )}
                >
                  {option.siteRange}
                </button>
              );
            })}
          </div>

          <div
            className={cn(
              "rounded-3xl bg-white px-8 pb-8 pt-10 shadow-[0_1px_3px_rgba(16,24,40,0.06)]",
              tier.badge ? "border-2 border-brand-blue" : "border border-[#E5E7F0]",
            )}
          >
            <div key={tier.id} className="animate-pricing-fade-slide">
              <div className="mb-[18px] font-hero text-[26px] font-bold uppercase leading-[1.08] tracking-tight text-black">{tier.name}</div>

              <div className="mb-3.5 flex items-end gap-1.5">
                <span className="font-display text-[52px] font-extrabold leading-none tracking-tight text-black">
                  {tier.price}
                </span>
                <span className="mb-2 font-sans text-lg text-[#8A8F98]">/month</span>
              </div>

              <div className="mb-4 inline-block text-[15px] font-bold text-brand-blue">{tier.siteRange}</div>

              <p className="mb-[22px] text-[15px] leading-[1.55] text-[#5B6472]">{tier.body}</p>

              <div className="mb-7 flex flex-col gap-3.5">
                {tier.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <span className="mt-px flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-[13px] font-bold text-white">
                      ✓
                    </span>
                    <span className="text-[15px] leading-snug text-[#1A1D22]">{feat}</span>
                  </div>
                ))}
              </div>

              <LandingButton onClick={openDemo} size="md" className="w-full py-[18px] text-base font-bold">
                {tier.cta}
              </LandingButton>
            </div>
          </div>
        </div>

        <p className="mt-9 text-center text-[13px] text-brand-gray-500">{PRICING_SECTION.riskLine}</p>
      </div>
    </section>
  );
}
