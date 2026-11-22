"use client";

import { Chip } from "@/components/Chip";
import { useDemoDialog } from "@/components/demo-dialog-context";
import type { ProductPageContent } from "@/data/products/types";

type ProductHeroProps = {
  hero: ProductPageContent["hero"];
};

export function ProductHero({ hero }: ProductHeroProps) {
  const { openDemo } = useDemoDialog();

  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-[1200px] px-5 pb-16 pt-20 sm:px-10">
        <Chip variant="ai" showSparkle>
          {hero.chip}
        </Chip>
        <h1 className="mt-5 max-w-[1000px] font-heading text-[clamp(48px,7.4vw,104px)] font-extrabold leading-none tracking-[-0.04em] text-ink">
          {hero.title}
        </h1>
        <p className="mt-5 max-w-[760px] font-heading text-[clamp(22px,2.6vw,34px)] font-extrabold leading-[1.05] tracking-[-0.035em] text-coral">
          {hero.subtitle}
        </p>
        <p className="mt-8 max-w-[620px] text-[19px] leading-[1.55] text-muted-strong">{hero.intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={openDemo}
            className="inline-flex min-h-11 items-center justify-center rounded-pill border-[1.5px] border-ink bg-ink px-[26px] py-3.5 text-[15px] font-semibold text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            {hero.primaryCta}
          </button>
          <a
            href={hero.secondaryHref}
            className="inline-flex min-h-11 items-center justify-center rounded-pill border-[1.5px] border-ink bg-transparent px-[26px] py-3.5 text-[15px] font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            {hero.secondaryCta}
          </a>
          <span className="text-[13px] text-ink-muted">{hero.smallPrint}</span>
        </div>
      </div>
    </section>
  );
}
