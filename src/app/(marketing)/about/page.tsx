import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import SeoContentPage from "@/components/marketing/SeoContentPage";
import { SeoJsonLd } from "@/components/marketing/SeoJsonLd";
import { ABOUT_PAGE } from "@/data/about";

const page = ABOUT_PAGE;

export const metadata: Metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function AboutPage() {
  return (
    <>
      <SeoJsonLd page={page} />
      <SeoContentPage page={page} />
    </>
  );
}
