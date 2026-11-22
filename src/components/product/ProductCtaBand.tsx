"use client";

import Link from "next/link";
import { useDemoDialog } from "@/components/demo-dialog-context";
import type { ProductPageContent } from "@/data/products/types";

type ProductCtaBandProps = {
  cta: ProductPageContent["cta"];
};

export function ProductCtaBand({ cta }: ProductCtaBandProps) {
  const { openDemo } = useDemoDialog();

  return (
    <div className="flex flex-wrap items-center justify-between gap-6 rounded-cta bg-coral-cta px-8 py-8 text-white sm:px-14 sm:py-14">
      <div className="min-w-0 flex-[1_1_400px]">
        <h2 className="mb-2.5 font-heading text-[clamp(30px,3.4vw,46px)] font-extrabold leading-none tracking-[-0.04em]">
          {cta.heading}
        </h2>
        <p className="m-0 text-[17px]">{cta.body}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={openDemo}
          className="inline-flex min-h-11 items-center justify-center rounded-pill border-[1.5px] border-cream bg-cream px-[26px] py-3.5 text-[15px] font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-coral-cta"
        >
          {cta.primaryCta}
        </button>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center justify-center rounded-pill border-[1.5px] border-white bg-transparent px-[26px] py-3.5 text-[15px] font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-coral-cta"
        >
          {cta.secondaryCta}
        </Link>
      </div>
    </div>
  );
}
