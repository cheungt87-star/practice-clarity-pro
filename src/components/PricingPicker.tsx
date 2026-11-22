"use client";

import { useState } from "react";
import { PRICING_SECTION, PRICING_TIERS } from "@/data/landing";
import { useDemoDialog } from "@/components/demo-dialog-context";
import { LandingButton } from "@/components/LandingButton";
import { cn } from "@/lib/utils";

type PricingPickerProps = {
  className?: string;
  /** Soften label/risk line for use on dark backgrounds */
  onDark?: boolean;
  showRiskLine?: boolean;
};

const DEFAULT_TIER_INDEX = PRICING_TIERS.findIndex((tier) => Boolean(tier.badge));

function segmentLabel(siteRange: string) {
  return siteRange.replace(/\s*sites?/i, "").trim();
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-ink"
    >
      <path d="M3 8.5l3.2 3L13 4.5" />
    </svg>
  );
}

export default function PricingPicker({
  className,
  onDark = false,
  showRiskLine = true,
}: PricingPickerProps) {
  const { openDemo } = useDemoDialog();
  const [selected, setSelected] = useState(DEFAULT_TIER_INDEX >= 0 ? DEFAULT_TIER_INDEX : 1);
  const tier = PRICING_TIERS[selected];
  const planLabel = `${tier.name} · ${tier.siteRange}`.toUpperCase();

  return (
    <div className={cn("mx-auto flex w-full max-w-[480px] flex-col gap-5", className)}>
      <div role="group" aria-labelledby="sites-label">
        <span
          id="sites-label"
          className={cn(
            "mb-3 block text-sm font-medium",
            onDark ? "text-[#d9cfc6]" : "text-ink-muted",
          )}
        >
          How many sites do you have?
        </span>

        <div
          className={cn(
            "grid grid-cols-3 gap-1 rounded-full p-1",
            onDark ? "bg-cream/8" : "bg-ink/5",
          )}
        >
          {PRICING_TIERS.map((option, index) => {
            const isActive = index === selected;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelected(index)}
                className={cn(
                  "min-h-11 rounded-full px-3 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2",
                  onDark
                    ? cn(
                        "focus-visible:ring-offset-ink",
                        isActive
                          ? "bg-cream font-semibold text-ink"
                          : "bg-transparent text-[#d9cfc6] hover:text-white",
                      )
                    : cn(
                        "focus-visible:ring-offset-cream",
                        isActive
                          ? "bg-ink font-semibold text-cream"
                          : "bg-transparent text-ink-muted hover:text-ink",
                      ),
                )}
              >
                {segmentLabel(option.siteRange)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-6 rounded-[28px] bg-white px-7 py-9 text-ink sm:px-9 sm:py-9">
        <div key={`${tier.id}-header`} className="animate-pricing-fade-slide">
          <span className="text-[13px] font-semibold tracking-[0.08em] text-ink-muted">
            {planLabel}
          </span>
          <div className="mt-2 flex items-baseline gap-2">
            <strong className="font-heading text-[clamp(3rem,8vw,4rem)] font-extrabold leading-none tracking-[-0.04em]">
              {tier.price}
            </strong>
            <span className="text-lg text-ink-muted">/month</span>
          </div>
          <p className="mt-3 mb-0 text-[15px] leading-normal text-ink-muted">{tier.body}</p>
        </div>

        <ul
          key={`${tier.id}-features`}
          className="m-0 flex list-none flex-col gap-3 border-t border-hairline p-0 pt-5 text-base leading-snug animate-pricing-fade-slide"
        >
          {tier.features.map((feat) => (
            <li key={feat} className="flex items-center gap-3">
              <CheckIcon />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-3">
          <LandingButton
            onClick={openDemo}
            size="lg"
            className="min-h-14 w-full rounded-pill px-6 text-[17px] font-semibold shadow-none focus-visible:ring-offset-white"
          >
            {tier.cta}
          </LandingButton>
          <span className="text-[13px] text-ink-muted">Cancel anytime.</span>
        </div>
      </div>

      {showRiskLine ? (
        <p
          className={cn(
            "m-0 text-center text-[13px]",
            onDark ? "text-cream/55" : "text-brand-gray-500",
          )}
        >
          {PRICING_SECTION.riskLine}
        </p>
      ) : null}
    </div>
  );
}
