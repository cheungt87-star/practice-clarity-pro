"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DemoDialogProvider } from "@/components/demo-dialog-context";
import type { ProductPageContent } from "@/data/products/types";
import { FaqGroups } from "./FaqGroups";
import { MoreFromSuperGP } from "./MoreFromSuperGP";
import { ProductBreadcrumb } from "./ProductBreadcrumb";
import { ProductCtaBand } from "./ProductCtaBand";
import { ProductHero } from "./ProductHero";
import { ProductSteps } from "./ProductSteps";

type ProductPageProps = {
  content: ProductPageContent;
};

export function ProductPage({ content }: ProductPageProps) {
  return (
    <DemoDialogProvider>
      <div className="min-h-screen bg-cream text-ink">
        <Header />
        <main className="overflow-x-hidden">
          {content.breadcrumb?.length ? (
            <ProductBreadcrumb items={content.breadcrumb} />
          ) : null}
          <ProductHero hero={content.hero} />
          <div className="mx-auto max-w-[1200px] px-5 pb-6 pt-14 sm:px-10">
            <ProductSteps howItWorks={content.howItWorks} />
            <FaqGroups
              eyebrow={content.faqs.eyebrow}
              title={content.faqs.title}
              lead={content.faqs.lead}
              groups={content.faqs.groups}
            />
          </div>
          <section className="mx-auto max-w-[1200px] px-5 pb-16 sm:px-10">
            <ProductCtaBand cta={content.cta} />
            {content.more ? <MoreFromSuperGP more={content.more} /> : null}
          </section>
        </main>
        <Footer />
      </div>
    </DemoDialogProvider>
  );
}
