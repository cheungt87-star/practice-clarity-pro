import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import SeoContentPage from "@/components/marketing/SeoContentPage";
import { SeoJsonLd } from "@/components/marketing/SeoJsonLd";
import { AUDIENCE_PAGES } from "@/data/audiences";

const page = AUDIENCE_PAGES["pcn-leaders"];

export const metadata: Metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function PcnLeadersPage() {
  return (
    <>
      <SeoJsonLd page={page} />
      <SeoContentPage page={page} />
    </>
  );
}
