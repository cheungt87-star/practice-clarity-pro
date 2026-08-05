import { ORGANIZATION, SOFTWARE_APPLICATION } from "./constants";

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    logo: ORGANIZATION.logo,
    email: ORGANIZATION.email,
    description: ORGANIZATION.description,
  };
}

export function softwareApplicationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SOFTWARE_APPLICATION.name,
    applicationCategory: SOFTWARE_APPLICATION.applicationCategory,
    operatingSystem: SOFTWARE_APPLICATION.operatingSystem,
    description: SOFTWARE_APPLICATION.description,
    url: SOFTWARE_APPLICATION.url,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "GBP",
      lowPrice: "150",
      highPrice: "400",
      offerCount: SOFTWARE_APPLICATION.offers.length,
      offers: SOFTWARE_APPLICATION.offers.map((offer) => ({
        "@type": "Offer",
        name: offer.name,
        price: offer.price,
        priceCurrency: offer.priceCurrency,
        description: offer.description,
        url: `${SOFTWARE_APPLICATION.url}/pricing`,
      })),
    },
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: {
      "@type": "Person",
      name: article.authorName,
    },
  };
}

export function personSchema(person: {
  name: string;
  jobTitle: string;
  url?: string;
  description?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    ...(person.url ? { url: person.url } : {}),
    ...(person.description ? { description: person.description } : {}),
  };
}

export function homepageSchemas(faqs?: { question: string; answer: string }[]): JsonLd[] {
  const schemas: JsonLd[] = [organizationSchema(), softwareApplicationSchema()];
  if (faqs?.length) {
    schemas.push(faqPageSchema(faqs));
  }
  return schemas;
}

export function jsonLdScript(data: JsonLd | JsonLd[]): string {
  return JSON.stringify(data);
}
