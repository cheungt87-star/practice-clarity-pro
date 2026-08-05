import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import SeoContentPage from "@/components/marketing/SeoContentPage";
import { CONTACT_PAGE } from "@/data/about";

const page = CONTACT_PAGE;

export const metadata: Metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  noIndex: true,
});

export default function ContactPage() {
  return <SeoContentPage page={page} showContactActions />;
}
