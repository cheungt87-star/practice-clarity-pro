import Link from "next/link";
import type { ProductPageContent } from "@/data/products/types";

type MoreFromSuperGPProps = {
  more: NonNullable<ProductPageContent["more"]>;
};

export function MoreFromSuperGP({ more }: MoreFromSuperGPProps) {
  return (
    <div>
      <div className="mb-3.5 mt-11 text-xs font-bold uppercase tracking-[0.08em] text-ink-muted">
        {more.label}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3">
        {more.items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center justify-between rounded-panel border border-hairline bg-white px-[26px] py-[22px] shadow-soft no-underline transition-colors hover:border-ink/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            <span>
              <b className="block text-base text-ink">{item.title}</b>
              <span className="text-[13px] text-ink-muted">{item.description}</span>
            </span>
            <span aria-hidden className="text-ink">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
