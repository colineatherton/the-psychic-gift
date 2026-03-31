const BASE_URL = "https://www.thepsychicgift.com";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "The Psychic Gift",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  telephone: "0800 915 2345",
  openingHours: "Mo-Su 08:00-22:00",
  areaServed: "GB",
  description:
    "The Psychic Gift offers psychic phone readings with experienced clairvoyants, mediums, and tarot readers. Available 24/7 via Credit/Debit Card, Pre-Pay, and Pay by Phone Bill.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "0800 915 2345",
      contactType: "customer service",
      contactOption: "TollFree",
      areaServed: "GB",
    },
    {
      "@type": "ContactPoint",
      telephone: "0906 110 0960",
      contactType: "customer service",
      areaServed: "GB",
    },
  ],
  sameAs: [],
};

export function faqPageJsonLd(faqs: Array<{ question: string; answer: string }>) {
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

export function breadcrumbJsonLd(crumbs: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      ...crumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: crumb.name,
        item: `${BASE_URL}${crumb.path}`,
      })),
    ],
  };
}
