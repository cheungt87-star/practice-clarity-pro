import type { ProductStepContent, ProductStepListItem } from "@/data/products/types";
import { cn } from "@/lib/utils";
import { PRODUCT_SCREENS } from "./screens";
import { ScreenFrame } from "./ScreenFrame";

function renderListItem(item: ProductStepListItem, index: number) {
  if (typeof item === "string") {
    return <li key={index}>{item}</li>;
  }
  return (
    <li key={index}>
      <strong className="text-ink">{item.lead}</strong>
      {item.rest}
    </li>
  );
}

type ProductStepProps = {
  step: ProductStepContent;
  /** 0-based index — odd steps put the screenshot on the left (landing pattern). */
  index: number;
};

export function ProductStep({ step, index }: ProductStepProps) {
  const Screen = PRODUCT_SCREENS[step.screen];
  const mediaLeft = index % 2 === 1;

  return (
    <div className="border-t border-hairline py-10 last:border-b">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-12">
        <div
          className={cn(
            "w-full lg:w-[36%] lg:shrink-0",
            mediaLeft ? "lg:order-2" : "lg:order-1",
          )}
        >
          <div className="mb-4 flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm font-bold text-cream">
              {step.number}
            </span>
            <span className="inline-block rounded-pill border-[1.5px] border-ink px-3.5 py-1.5 text-[13px] font-semibold text-ink">
              {step.who}
            </span>
          </div>
          <h3 className="mb-3 font-heading text-[clamp(28px,2.8vw,40px)] font-bold leading-none tracking-[-0.04em] text-ink">
            {step.title}
          </h3>
          {step.body.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-2.5 text-[17px] leading-[1.6] text-muted-strong">
              {paragraph}
            </p>
          ))}
          {step.body.list ? (
            step.body.list.ordered ? (
              <ol className="mb-3 list-decimal pl-5 text-[17px] leading-[1.6] text-muted-strong">
                {step.body.list.items.map(renderListItem)}
              </ol>
            ) : (
              <ul className="mb-3 list-disc pl-5 text-[17px] leading-[1.6] text-muted-strong">
                {step.body.list.items.map(renderListItem)}
              </ul>
            )
          ) : null}
        </div>
        <ScreenFrame
          label={step.screenLabel}
          className={cn(
            "w-full lg:w-[62%] lg:shrink-0",
            mediaLeft ? "lg:order-1" : "lg:order-2",
          )}
        >
          <Screen />
        </ScreenFrame>
      </div>
    </div>
  );
}
