"use client";

import { FINAL_CTA } from "@/data/landing";
import { useDemoDialog } from "@/components/demo-dialog-context";
import { LandingButton } from "@/components/LandingButton";

export default function FinalCta() {
  const { openDemo } = useDemoDialog();

  return (
    <section className="px-6 py-20 pb-28 sm:px-8">
      <div className="relative mx-auto max-w-[1160px]">
        <div className="relative flex flex-wrap items-center justify-between gap-8 overflow-hidden rounded-[28px] bg-navy px-8 py-14 sm:px-12">
          <div className="max-w-[480px]">
            <h3 className="mb-3 font-hero text-[clamp(1.625rem,4vw,2.125rem)] font-bold uppercase leading-[1.08] tracking-tight text-white">
              {FINAL_CTA.headline}
            </h3>
            <p className="m-0 text-base leading-relaxed text-[#c8cbe0]">{FINAL_CTA.body}</p>
          </div>
          <LandingButton onClick={openDemo} className="shrink-0">
            {FINAL_CTA.cta}
          </LandingButton>
        </div>
      </div>
    </section>
  );
}
