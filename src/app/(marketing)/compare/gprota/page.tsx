import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import SeoContentPage from "@/components/marketing/SeoContentPage";
import { SeoJsonLd } from "@/components/marketing/SeoJsonLd";
import { COMPARE_PAGES } from "@/data/compare";

const page = COMPARE_PAGES.gprota;

export const metadata: Metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function CompareGprotaPage() {
  return (
    <>
      <SeoJsonLd page={page} />
      <SeoContentPage page={page} />
    </>
  );
}
