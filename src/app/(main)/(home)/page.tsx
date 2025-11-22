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
  title: "Phoenix Rising | Awaken Your Vision",
  description: "Track your creative ascent with clarity, focus, and fire.",
  openGraph: {
    title: "Phoenix Rising",
    description: "An app to help you rise from the ashes.",
    url: "https://phoenixrising.app",
    siteName: "Phoenix Rising",
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
