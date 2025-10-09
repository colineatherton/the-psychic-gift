import { FAQs } from "@/components/FAQs/FAQs";
import { LinkCard } from "@/components/LinkCard/LinkCard";
import { PageContainer } from "@/components/PageContainer/PageContainer";
import { PageSection } from "@/components/PageSection/PageSection";
import { ReaderGrid } from "@/components/ReaderGrid/ReaderGrid";
import {
  ALL_ABILITIES,
  ALL_SKILLS,
  ALL_TOOLS,
  ALL_TOPICS,
  READER_CARDS,
} from "@/lib/constants/readers";
import { Grid } from "@mui/material";
import CTASection from "./components/CTASection";
import FeaturedReaderSection from "./components/FeaturedReaderSection";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TrustBadgeSection from "./components/TrustBadgeSection";
import WhyPsychicGiftSection from "./components/WhyPsychicGiftSection";

// todo: make it better to build a page - make it better on the next pages then refactor this
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
      <PageSection background="primary.gradient">
        <PageContainer>
          <Grid container height="100%" py={6} width={"100%"}>
            <ReaderGrid
              readers={READER_CARDS}
              allSkills={ALL_SKILLS()}
              allAbilities={ALL_ABILITIES()}
              allTools={ALL_TOOLS()}
              allTopics={ALL_TOPICS()}
              withFilters={false}
              onlineOnly={true}
              sortBy="status"
            />
          </Grid>
        </PageContainer>
        <PageContainer centered>
          <Grid container height="100%" py={6} width={"100%"}>
            <TrustBadgeSection />
          </Grid>
        </PageContainer>
        <PageContainer centered>
          <Grid container height="100%" py={6} width={"100%"}>
            <WhyPsychicGiftSection />
          </Grid>
        </PageContainer>
      </PageSection>
      <PageSection background="primary.main">
        <PageContainer centered>
          <Grid container height="100%" py={6} width={"100%"}>
            <CTASection
              heading="Ready to speak to someone who truly listens?"
              subheading="Our gifted psychics are here when you’re ready."
            />
          </Grid>
        </PageContainer>
      </PageSection>
      <PageSection background="secondary.light">
        <PageContainer centered>
          <Grid container height="100%" py={6} width={"100%"}>
            <HowItWorksSection />
          </Grid>
        </PageContainer>
      </PageSection>
      <PageSection background="primary.gradient">
        <PageContainer>
          <Grid container height="100%" py={6} width={"100%"}>
            <FeaturedReaderSection />
          </Grid>
        </PageContainer>
      </PageSection>
      <PageSection background="secondary.light" stretchItems>
        <PageContainer centered>
          <Grid container height="100%" py={6} width={"100%"}>
            <TestimonialsSection />
          </Grid>
        </PageContainer>
      </PageSection>
      <PageSection
        background="primary.main"
        stretchItems
        paddingTop={8}
        paddingBottom={12}
      >
        <PageContainer centered>
          <Grid container spacing={4} width={"100%"}>
            <Grid size={4}>
              <LinkCard
                iconPath="readers"
                title="All Our Psychic Readers"
                description="Meet our hand-picked psychics, browse their profiles, and see who’s available right now."
                href="/psychic-readers"
              />
            </Grid>
            <Grid size={4}>
              <LinkCard
                iconPath="gift"
                title="Current Offers"
                description="Discover today’s exclusive call offers and bonus-minute packages."
                href="/offers"
              />
            </Grid>
            <Grid size={4}>
              <LinkCard
                iconPath="book"
                title="How It Works"
                description="A quick guide to choosing a psychic and starting your reading in just a few steps."
                href="/how-it-works"
              />
            </Grid>
            <Grid size={4}>
              <LinkCard
                iconPath="heart-hands-2"
                title="Why The Psychic Gift"
                description="Learn what makes us different – a family legacy rooted in care, not corporations."
                href="/why-the-psychic-gift"
              />
            </Grid>
            <Grid size={4}>
              <LinkCard
                iconPath="phone"
                title="Telephone Psychics"
                description="Explore our clairvoyant services and discover how psychic insights can support your journey."
                href="/psychic-phone-readings"
              />
            </Grid>
            <Grid size={4}>
              <LinkCard
                iconPath="speech"
                title="Testimonials"
                description="Real feedback from people just like you – honest, heartfelt, and reassuring."
                href="/testimonials"
              />
            </Grid>
          </Grid>
        </PageContainer>
      </PageSection>
      <PageSection background="primary.main">
        <PageContainer centered>
          <Grid container height="100%" pt={6} pb={16} width={"100%"}>
            <CTASection
              heading="Ready when you are"
              showAvailableReadersSubHeading
              showAvailableReadersCount={false}
            />
          </Grid>
        </PageContainer>
      </PageSection>
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
