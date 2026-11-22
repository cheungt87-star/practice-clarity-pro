import Link from "next/link";
import type { ProductBreadcrumbItem } from "@/data/products/types";

type ProductBreadcrumbProps = {
  items: ProductBreadcrumbItem[];
};

export function ProductBreadcrumb({ items }: ProductBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-hairline">
      <ol className="mx-auto flex max-w-[1200px] list-none flex-wrap items-center gap-2 px-5 py-3.5 text-[13px] text-ink-muted sm:px-10">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden className="text-ink-muted/70">
                  /
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="font-semibold text-ink underline-offset-2 hover:text-coral-text hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className={isLast ? "font-semibold text-ink" : undefined}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
