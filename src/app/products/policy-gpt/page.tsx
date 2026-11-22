import type { Metadata } from "next";
import { ProductPage } from "@/components/product/ProductPage";
import { POLICY_GPT } from "@/data/products/policy-gpt";
import { createPageMetadata } from "@/lib/seo/metadata";
import { faqPageSchema, jsonLdScript } from "@/lib/seo/schema";

export const metadata: Metadata = createPageMetadata({
  title: POLICY_GPT.seo.title,
  description: POLICY_GPT.seo.description,
  path: POLICY_GPT.path,
});

function flatFaqs() {
  return POLICY_GPT.faqs.groups.flatMap((group) =>
    group.items.map((item) => {
      const answer = item.answerLink
        ? item.answer.replace("{{link}}", item.answerLink.text)
        : item.answer;
      return { question: item.question, answer };
    }),
  );
}

export default function PolicyGptProductPage() {
  const schema = faqPageSchema(flatFaqs());

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(schema) }}
      />
      <ProductPage content={POLICY_GPT} />
    </>
  );
}
