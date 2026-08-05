import {
  breadcrumbSchema,
  faqPageSchema,
  organizationSchema,
  personSchema,
  softwareApplicationSchema,
} from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/constants";
import type { SeoPageContent } from "@/data/seo-types";

export function buildSeoPageSchemas(page: SeoPageContent): Record<string, unknown>[] {
  const schemas: Record<string, unknown>[] = [
    breadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: page.title, url: `${SITE_URL}${page.path}` },
    ]),
  ];

  if (page.faqs.length > 0) {
    schemas.push(faqPageSchema(page.faqs));
  }

  if (page.schema === "feature") {
    schemas.push({
      ...softwareApplicationSchema(),
      name: `SuperGP — ${page.title}`,
      description: page.description,
      url: `${SITE_URL}${page.path}`,
    });
  }

  if (page.schema === "about") {
    schemas.push(organizationSchema());
    if (page.team) {
      for (const member of page.team) {
        schemas.push(
          personSchema({
            name: member.name,
            jobTitle: member.role,
            description: member.bio,
            url: `${SITE_URL}/about`,
          }),
        );
      }
    }
    schemas.push({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: page.title,
      description: page.description,
      url: `${SITE_URL}${page.path}`,
    });
  }

  return schemas;
}
