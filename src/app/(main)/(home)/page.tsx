import { FAQs } from "@/components/FAQs/FAQs";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { LinkCard } from "@/components/LinkCard/LinkCard";
import { PageContainer } from "@/components/PageContainer/PageContainer";
import { PageSection } from "@/components/PageSection/PageSection";
import {
  CTA,
  FeaturedReader,
  HowItWorks,
  InternalLinks,
  Testimonials,
  WhyPsychicGift,
} from "@/components/Sections";
import { Grid } from "@mui/material";
import ReadersSection from "./components/ReadersSection";
import TrustBadgeSection from "./components/TrustBadgeSection";
import { Inter } from "next/font/google";
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

      <PageSection background="secondary.light">
        <PageContainer centered>
          <Grid container height="100%" pt={6} pb={16} width={"100%"}>
            <FAQs
              items={[
                {
                  question: "What is a psychic phone reading?",
                  answer:
                    "A psychic phone reading is a live call with a gifted clairvoyant who offers insights into your love life, career, future, and more.",
                },
                {
                  question: "How do I speak to a psychic?",
                  answer:
                    "Simply call one of our Freephone or Premium Rate numbers to be connected directly to an available psychic.",
                },
                {
                  question: "How much does a psychic reading cost?",
                  answer:
                    "Our readings start at £1.50 per minute. You can also purchase Pre-Pay minutes for discounts and bonuses.",
                },
                {
                  question: "How do I choose the right psychic for me?",
                  answer:
                    "You can browse each psychic's profile to see their specialties and background. Some focus on love and relationships, others on life path or spiritual guidance. All our readers are hand-picked for their warmth, intuitive insight, and experience — choose the one who resonates with your needs.",
                },
                {
                  question: "Are psychic readings confidential?",
                  answer:
                    "Yes. All readings are private and confidential. We also do not store call recordings beyond what's required for customer service and compliance.",
                },
              ]}
            />
          </Grid>
        </PageContainer>
      </PageSection>
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
