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

import { homePageFAQs } from "@/lib/constants/faqs/homePage";
import { homePageInternalLinks } from "@/lib/constants/internalLinks";

export const metadata = {
  title: "The Psychic Gift | Trusted Psychic Readings by Phone",
  description:
    "Connect with experienced psychic readers by phone, 24/7. Trusted clairvoyants, mediums, and tarot readers offering guidance on love, relationships, and life. Call now.",
  openGraph: {
    title: "The Psychic Gift | Trusted Psychic Readings by Phone",
    description:
      "Speak to a trusted psychic by phone, any time of day or night. Experienced clairvoyants and mediums ready to help.",
    url: "https://thepsychicgift.co.uk",
    siteName: "The Psychic Gift",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Readers />
      <TrustBadges />
      <WhyPsychicGift />
      <CTA heading="Ready to speak to someone who truly listens?" />
      <HowItWorks />
      <FeaturedReader />
      <Testimonials />
      <InternalLinks links={homePageInternalLinks} />
      <CTA heading="Ready when you are" />
      <FAQs items={homePageFAQs} />
    </>
  );
}
