"use client";

import { FINAL_CTA } from "@/data/landing";
import { useDemoDialog } from "@/components/demo-dialog-context";
import { LandingButton } from "@/components/LandingButton";
import PricingPicker from "@/components/PricingPicker";

type FinalCtaProps = {
  withPricing?: boolean;
};

export default function FinalCta({ withPricing = true }: FinalCtaProps) {
  const { openDemo } = useDemoDialog();

  const ctaButtons = (
    <div className="flex flex-wrap items-center gap-3">
      <LandingButton
        onClick={openDemo}
        variant="secondary"
        size="lg"
        className="min-h-[48px] bg-cream px-6 text-[15px] text-ink ring-0 hover:bg-cream/90 focus-visible:ring-cream focus-visible:ring-offset-ink"
      >
        {FINAL_CTA.primaryCta}
      </LandingButton>
      <LandingButton
        onClick={openDemo}
        variant="on-coral"
        size="lg"
        className="min-h-[48px] px-6 text-[15px] focus-visible:ring-cream focus-visible:ring-offset-ink"
      >
        {FINAL_CTA.secondaryCta}
      </LandingButton>
    </div>
  );

  const headline = (
    <h2 className="text-balance font-heading text-[clamp(2.75rem,5.6vw,4.5rem)] font-extrabold leading-none tracking-[-0.04em]">
      {FINAL_CTA.headlineLead}{" "}
      <span className="text-coral">{FINAL_CTA.headlineAccent}</span>
    </h2>
  );

  return (
    <section
      id={withPricing ? "pricing" : "cta"}
      className="scroll-mt-nav bg-cream px-6 pb-20 pt-4 sm:px-8 sm:pb-24"
    >
      <div className="mx-auto max-w-[1216px]">
        {withPricing ? (
          <div className="grid items-center gap-10 rounded-cta bg-ink px-6 py-12 text-cream sm:gap-12 sm:px-12 sm:py-16 lg:grid-cols-[1fr_minmax(380px,480px)] lg:gap-16 lg:px-20 lg:py-[88px]">
            <div className="flex flex-col gap-5">
              {headline}
              <p className="m-0 text-lg leading-normal text-[#e6dcd2] sm:text-xl sm:leading-normal">
                {FINAL_CTA.body}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-base text-[#d9cfc6]">
                <span>Got questions?</span>
                <button
                  type="button"
                  onClick={openDemo}
                  className="group inline-flex min-h-11 items-center gap-2 font-semibold text-cream underline decoration-coral underline-offset-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  {FINAL_CTA.secondaryCta}
                  <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full">
              <PricingPicker onDark showRiskLine={false} className="max-w-none" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-start justify-between gap-10 rounded-cta bg-ink px-8 py-12 text-cream sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:gap-16 lg:px-14 lg:py-16">
            <h2 className="text-balance font-heading text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
              {FINAL_CTA.headlineLead}{" "}
              <span className="text-coral">{FINAL_CTA.headlineAccent}</span>
            </h2>
            <div className="flex w-full max-w-[420px] flex-col gap-5 lg:shrink-0">
              <p className="text-lg font-medium leading-snug text-cream sm:text-xl">{FINAL_CTA.body}</p>
              {ctaButtons}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
