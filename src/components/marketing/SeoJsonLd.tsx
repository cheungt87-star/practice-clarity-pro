import { jsonLdScript } from "@/lib/seo/schema";
import { buildSeoPageSchemas } from "@/lib/seo/page-schema";
import type { SeoPageContent } from "@/data/seo-types";

export function SeoJsonLd({ page }: { page: SeoPageContent }) {
  const schemas = buildSeoPageSchemas(page);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(schemas) }}
    />
  );
}
