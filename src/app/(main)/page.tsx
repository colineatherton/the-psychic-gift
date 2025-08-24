import { ReaderGrid } from "@/components/ReaderGrid/ReaderList";
import {
  READER_CARDS,
  ALL_SKILLS,
  ALL_ABILITIES,
  ALL_TOOLS,
  ALL_TOPICS,
} from "@/lib/constants/readers";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

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
      <Box
        sx={{
          background: "linear-gradient(180deg, #8174bb 15%, #a99fd1 100%)",
          paddingTop: "calc(80px - 32px)", // make constants - nav bar minus sticky reserve space
          // minHeight: "calc(90vh - 32px)", // Subtract AppBar height
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "stretch",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            minHeight: "calc(80vh - 32px)",
            display: "flex",
            // height: "100%",
            alignItems: "center",
          }}
        >
          <Grid container height="100%">
            <Grid size={{ xs: 12, md: 7 }} pt="52px" pr="15%">
              {/* todo, these typographies to be components */}
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={700}
                fontSize="3rem"
                color="#f8f7ff"
                lineHeight="1.2"
                variant="h1"
                component="h1"
                marginBottom={2}
              >
                Psychic Phone Readings
              </Typography>
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="2rem"
                color="#f8f7ff"
                lineHeight="1.6"
                variant="h2"
                component="h2"
                marginBottom={4}
              >
                With Gifted Clairvoyants
              </Typography>
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="1.2rem"
                color="#f8f7ff"
                lineHeight="1.6"
                variant="body2"
                component="p"
                marginBottom={6}
              >
                Speak to a caring psychic and find clarity in love, life, or
                your next steps - trusted for over 25 years.
              </Typography>
              {/* <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="1.5rem"
                color="#f8f7ff"
                lineHeight="1.6"
                variant="h2"
                component="h2"
                marginBottom={4}
              >
                Find guidance and clarity with a gifted psychic, trusted by
                thousands for over 25 years.
              </Typography> */}
              {/* todo, cta component */}
              <Button
                size="large"
                variant="contained"
                sx={{
                  backgroundColor: "#745ddd",
                  borderRadius: 8,
                  mb: 4,
                  py: 2,
                  px: 4,
                }}
              >
                Start Your Reading Now
              </Button>
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="1rem"
                color="#f8f7ff"
                lineHeight="1.6"
                variant="body2"
                component="p"
                marginBottom={4}
              >
                From £30 for 20 mins | Card & Phone Bill Options | All Calls
                Recorded
              </Typography>
              {/* <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={400}
                // fontSize="1.5rem"
                color="#f8f7ff"
                lineHeight="1.6"
                variant="body1"
                component="p"
                marginBottom={4}
              >
                Calls from 45p/min – straightforward, secure, and private.
              </Typography> */}
            </Grid>
            <Grid
              size={{ xs: 12, md: 5 }}
              height={"100%"}
              display={"flex"}
              alignSelf={"center"}
            >
              {/* <Image
                src={`/woman-dove.png`}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "70%",
                  height: "auto",
                  alignSelf: "center",
                  margin: "auto",
                }}
                alt="Amara"
              /> */}
              {/* <Box
                sx={{
                  position: "relative",
                  marginTop: "-80px",
                  marginLeft: "auto",
                  width: "100%",
                  scale: 0.75,
                  height: { xs: 200, md: 550 },
                }}
              >
                <Image
                  src={`/woman-dove.png`}
                  alt="Amara"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box> */}
              <img
                src="/illustrations/4-stars-2.png"
                alt="Illustration"
                style={{
                  width: "80%",
                  height: "auto",
                  display: "flex",
                  margin: "0 auto",
                  alignSelf: "center",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          background: "linear-gradient(180deg, #a99fd1 0%, #f8f7ff 40%)",
          padding: 2,
        }}
      >
        <Container maxWidth="lg">
          <Grid container paddingBottom={8}>
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
        </Container>
      </Box>
    </>
  );
}

{
  /* <div style={{ width: "100%", height: 600 }}>swdsdsd</div>
<div style={{ width: "100%", height: 600, backgroundColor: "#a99fd1" }}>
  swdsdsd
</div>
<h1>home</h1>

<p>✅ Purpose: First impression, brand anchor, user direction</p>
<p>🎯 Goal: Guide new users into action (call, explore, connect)</p>
<p>📦 Content & Elements:</p>
<p>• Hero headline + short intro</p>
<p>• Offer banner (e.g. 5 mins for £5)</p>
<p>• Reader grid preview (top 3–6 live psychics)</p>
<p>• How it works (3-step or icon guide)</p>
<p>• Testimonials / trust block</p>
<p>• Internal link grid (to Readings, Offers, About, etc.)</p>
<p>• Sticky CTA bar for mobile</p>
<hr></hr>
<p>🔁 Shared/Reusable Components Across Pages</p>
<p>• ReaderCard – image, name, status, call options (accordion)</p>
<p>• ReaderGrid – looped list of ReaderCards</p>
<p>• OfferBanner – promo tile or strip</p>
<p>• StickyCTA – mobile-focused call-to-action</p>
<p>
  • FAQAccordion – on pages like How It Works, Psychic Readings, Offers
</p>
<p>• TestimonialBlock – optional, rotate quotes or feedback</p>
<p>• MoonPhaseWidget – small atmospheric touch</p>
<hr></hr>
<p>🔁 Shared Components to Build Now</p>
<p></p>
<p>1. ReaderCard</p>
<p>• Props: name, image, status, skills, callOptions, pin</p>
<p>
  • Behaviours: accordion toggle, status badge, call methods
  (click-to-call etc.)
</p>
<p>• Optional: expand to show full profile or CTA bar</p>
<p>• Mobile: prioritise “Call now” UX</p>
<p></p>
<p>2. ReaderGrid</p>
<p>• Props: array of ReaderCard data</p>
<p>• Behaviours: looped rendering, sort/filter future-proofing</p>
<p>• Mobile: swipeable or responsive stacked layout</p>
<p></p>
<p>3. OfferBanner</p>
<p>• Props: text, type (e.g. bar, tile), optional countdown</p>
<p>• Placement: top of page or sticky in some contexts</p>
<p></p>
<p>4. StickyCTA</p>
<p>• Props: label, href, icon, condition (e.g. only show on scroll)</p>
<p>• Placement: always visible on mobile</p>
<p>• Use: Home, Call Now, Offers, etc.</p>
<p></p>
<p>5. HeaderNav</p>
<p>• Includes hover-sticky dropdown nav</p>
<p>• Props: current page, nav items with optional nesting</p>
<p>• Mobile: burger menu version or collapsible</p>
<p></p>
<p>6. PageSection</p>
<p>
  • Generic section wrapper with title, content, optional icon or divider
</p>
<p>• Use for “How it works”, “Testimonials”, “FAQs”</p>
<hr></hr> */
}
