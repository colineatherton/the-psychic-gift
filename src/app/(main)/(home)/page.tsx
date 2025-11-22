import { HeroSection } from "@/components/HeroSection/HeroSection";
import {
  CTA,
  FeaturedReader,
  HowItWorks,
  InternalLinks,
  Testimonials,
  WhyPsychicGift,
} from "@/components/Sections";
import { FAQsSection } from "@/components/Sections/FAQsSection/FAQsSection";
import { homePageFAQs } from "@/lib/constants/faqs/homePage";
import { homePageInternalLinks } from "@/lib/constants/internalLinks";
import ReadersSection from "./components/ReadersSection";
import TrustBadgeSection from "./components/TrustBadgeSection";

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
      <HeroSection />
      <ReadersSection />
      <TrustBadgeSection />
      <WhyPsychicGift />
      <CTA heading="Ready to speak to someone who truly listens?" />
      <HowItWorks />
      <FeaturedReader />
      <Testimonials />
      <InternalLinks links={homePageInternalLinks} />
      <CTA heading="Ready when you are" />
      <FAQsSection items={homePageFAQs} />
    </>
  );
}
// ideas for new sections
// explaining the various skills / tools - tarot, astrology, mediumship etc
// links to blog posts
// links to landing pages
// benefits of a reading
// benefits of the gift (similar to why choose us but more about the service)
// how to prepare for a reading
// what to expect from a reading
// how to make the most of your reading
