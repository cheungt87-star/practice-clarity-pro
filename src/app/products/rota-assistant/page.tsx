import type { Metadata } from "next";
import { ProductPage } from "@/components/product/ProductPage";
import { ROTA_ASSISTANT } from "@/data/products/rota-assistant";
import { SITE_URL } from "@/lib/seo/constants";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqPageSchema, jsonLdScript } from "@/lib/seo/schema";

export const metadata: Metadata = createPageMetadata({
  title: ROTA_ASSISTANT.seo.title,
  description: ROTA_ASSISTANT.seo.description,
  path: ROTA_ASSISTANT.path,
});

function flatFaqs() {
  return ROTA_ASSISTANT.faqs.groups.flatMap((group) =>
    group.items.map((item) => {
      const answer = item.answerLink
        ? item.answer.replace("{{link}}", item.answerLink.text)
        : item.answer;
      return { question: item.question, answer };
    }),
  );
}

export default function RotaAssistantProductPage() {
  const schemas = [
    faqPageSchema(flatFaqs()),
    breadcrumbSchema([
      { name: "SuperGP", url: SITE_URL },
      { name: "Products", url: `${SITE_URL}/` },
      { name: "Rota Assistant", url: `${SITE_URL}${ROTA_ASSISTANT.path}` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(schemas) }}
      />
      <ProductPage content={ROTA_ASSISTANT} />
    </>
  );
}
