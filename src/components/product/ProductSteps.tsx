import type { ProductPageContent } from "@/data/products/types";
import { ProductStep } from "./ProductStep";

type ProductStepsProps = {
  howItWorks: ProductPageContent["howItWorks"];
};

export function ProductSteps({ howItWorks }: ProductStepsProps) {
  return (
    <section id="how" className="scroll-mt-24 pb-[72px]">
      <div className="mb-2.5 text-xs font-bold uppercase tracking-[0.08em] text-coral-text">
        {howItWorks.eyebrow}
      </div>
      <h2 className="mb-3 font-heading text-[clamp(34px,4vw,52px)] font-extrabold leading-none tracking-[-0.04em] text-ink">
        {howItWorks.title}
      </h2>
      <p className="mb-8 max-w-[620px] text-lg leading-[1.55] text-muted-strong">{howItWorks.lead}</p>
      {howItWorks.steps.map((step, index) => (
        <ProductStep key={step.number} step={step} index={index} />
      ))}
    </section>
  );
}
