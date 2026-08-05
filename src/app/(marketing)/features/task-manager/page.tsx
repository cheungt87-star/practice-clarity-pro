import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import SeoContentPage from "@/components/marketing/SeoContentPage";
import { SeoJsonLd } from "@/components/marketing/SeoJsonLd";
import { FEATURE_PAGES } from "@/data/features";

const page = FEATURE_PAGES["task-manager"];

export const metadata: Metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function TaskManagerPage() {
  return (
    <>
      <SeoJsonLd page={page} />
      <SeoContentPage page={page} />
    </>
  );
}
