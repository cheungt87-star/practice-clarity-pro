import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import SeoContentPage from "@/components/marketing/SeoContentPage";
import { SeoJsonLd } from "@/components/marketing/SeoJsonLd";
import { AUDIENCE_PAGES } from "@/data/audiences";

const page = AUDIENCE_PAGES["gp-partners"];

export const metadata: Metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function GpPartnersPage() {
  return (
    <>
      <SeoJsonLd page={page} />
      <SeoContentPage page={page} />
    </>
  );
}
