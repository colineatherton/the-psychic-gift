"use client";

import { homePageFAQs } from "@/lib/constants/faqs/homePage";
import { faqPageJsonLd } from "@/lib/jsonld";

export function FaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(homePageFAQs)) }}
    />
  );
}
