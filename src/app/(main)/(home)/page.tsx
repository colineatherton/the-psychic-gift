import {
  CTA,
  FAQs,
  FeaturedReader,
  Hero,
  HowItWorks,
  InternalLinks,
  Readers,
  Testimonials,
  TrustBadges,
  WhyPsychicGift,
} from "@/components/Sections";

import { FaqJsonLd } from "@/components/FaqJsonLd/FaqJsonLd";
import { homePageFAQs } from "@/lib/constants/faqs/homePage";
import { homePageInternalLinks } from "@/lib/constants/internalLinks";

export const metadata = {
  title: "The Psychic Gift | Psychic Readings by Phone",
  description:
    "Connect with experienced psychic readers by phone, 24/7. Gifted clairvoyants, mediums, and tarot readers offering guidance on love, relationships, and life. Call now.",
  openGraph: {
    title: "The Psychic Gift | Psychic Readings by Phone",
    description:
      "Speak to an experienced psychic by phone, any time of day or night. Gifted clairvoyants and mediums ready to offer guidance.",
    url: "https://www.thepsychicgift.com",
    siteName: "The Psychic Gift",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <FaqJsonLd />
      <Hero />
      <Readers />
      <TrustBadges />
      <WhyPsychicGift />
      <CTA heading="Ready to speak to someone who really listens?" />
      <HowItWorks />
      <FeaturedReader />
      <Testimonials />
      <InternalLinks links={homePageInternalLinks} />
      <CTA heading="Ready when you are" />
      <FAQs items={homePageFAQs} />
    </>
  );
}
