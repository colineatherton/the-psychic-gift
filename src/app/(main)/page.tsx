"use client";

import { ReaderGrid } from "@/components/ReaderGrid/ReaderList";
import {
  ALL_ABILITIES,
  ALL_SKILLS,
  ALL_TOOLS,
  ALL_TOPICS,
  READER_CARDS,
} from "@/lib/constants/readers";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";

// todo, keep this here but make small components for sections below
// export const metadata = {
//   title: "Phoenix Rising | Awaken Your Vision",
//   description: "Track your creative ascent with clarity, focus, and fire.",
//   openGraph: {
//     title: "Phoenix Rising",
//     description: "An app to help you rise from the ashes.",
//     url: "https://phoenixrising.app",
//     siteName: "Phoenix Rising",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     type: "website",
//   },
// };

export default function Home() {
  const { getReaderByPin } = useReaderFeedContext();

  const getStatus = (
    status: number | undefined
  ): "offline" | "online" | "busy" => {
    switch (status) {
      case 0:
        return "offline";
      case 1:
        return "online";
      case 2:
        return "busy";
      default:
        return "online";
    }
  };

  const readersWithStatusOnline = useMemo(() => {
    return READER_CARDS.map((reader) => {
      const apiReader = getReaderByPin(Number(reader.pin));
      return {
        ...reader,
        status: getStatus(apiReader?.status),
      };
    }).filter((r) => r.status === "online");
  }, [getReaderByPin]);

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
            </Grid>
            <Grid
              size={{ xs: 12, md: 5 }}
              height={"100%"}
              display={"flex"}
              alignSelf={"center"}
            >
              <img
                src="/illustrations/4-stars-3.png"
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
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            // height: "100%",
            alignItems: "center",
          }}
        >
          <Grid container height="100%" py={6} width={"100%"}>
            <Stack
              direction="column"
              alignItems="center"
              spacing={4}
              width="100%"
              justifyItems={"center"}
            >
              {/* todo, these typographies to be components */}
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="2rem"
                color="#274149"
                lineHeight="1.6"
                variant="h2"
                component="h2"
                marginBottom={4}
                textAlign="center"
              >
                Why Choose The Psychic Gift?
              </Typography>
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="1rem"
                color="#274149"
                lineHeight="1.6"
                variant="body2"
                component="p"
                textAlign="center"
                width={"80%"}
              >
                We’ve been guiding callers for over 25 years — but our story
                goes back further. John, our founder, was inspired by his
                grandmother, a gifted medium who helped people long before it
                was mainstream. Today, we continue that legacy with a carefully
                selected team of clairvoyants, mediums, and tarot readers — all
                chosen for their empathy, integrity, and insight.
              </Typography>
              <Grid container direction={"row"} py={4} spacing={6}>
                <Grid size={4}>
                  <img
                    src="/icons/crystal-ball.png"
                    alt="Illustration"
                    style={{
                      width: "80px",
                      height: "auto",
                      display: "flex",
                      margin: "0 auto",
                      alignSelf: "center",
                    }}
                  />
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={600}
                    fontSize="1.1rem"
                    color="#8174bb"
                    lineHeight="1.6"
                    variant="h3"
                    component="h3"
                    textAlign="center"
                    marginTop={4}
                  >
                    Founded on a Family Legacy
                  </Typography>
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={500}
                    fontSize="1rem"
                    color="#274149"
                    lineHeight="1.6"
                    variant="body2"
                    component="p"
                    textAlign="center"
                    marginTop={2}
                  >
                    Started by John and inspired by his grandmother’s own
                    psychic gifts, our story is personal — not corporate.
                  </Typography>
                </Grid>
                <Grid size={4}>
                  <img
                    src="/icons/stars.png"
                    alt="Illustration"
                    style={{
                      width: "80px",
                      height: "auto",
                      display: "flex",
                      margin: "0 auto",
                      alignSelf: "center",
                    }}
                  />
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={600}
                    fontSize="1.1rem"
                    color="#8174bb"
                    lineHeight="1.6"
                    variant="h3"
                    component="h3"
                    textAlign="center"
                    marginTop={4}
                  >
                    Hand-Picked, Gifted Psychics
                  </Typography>
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={500}
                    fontSize="1rem"
                    color="#274149"
                    lineHeight="1.6"
                    variant="body2"
                    component="p"
                    textAlign="center"
                    marginTop={2}
                  >
                    Each reader is tested, verified, and chosen for their
                    experience, empathy, and integrity.
                  </Typography>
                </Grid>
                <Grid size={4}>
                  <img
                    src="/icons/hands-heart.png"
                    alt="Illustration"
                    style={{
                      width: "80px",
                      height: "auto",
                      display: "flex",
                      margin: "0 auto",
                      alignSelf: "center",
                    }}
                  />
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={600}
                    fontSize="1.1rem"
                    color="#8174bb"
                    lineHeight="1.6"
                    variant="h3"
                    component="h3"
                    textAlign="center"
                    marginTop={4}
                  >
                    Trusted by Thousands
                  </Typography>
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={500}
                    fontSize="1rem"
                    color="#274149"
                    lineHeight="1.6"
                    variant="body2"
                    component="p"
                    textAlign="center"
                    marginTop={2}
                  >
                    We’ve supported countless callers through love, life, and
                    difficult decisions. All calls are confidential and recorded
                    for your peace of mind.
                  </Typography>
                </Grid>
                <Grid size={12}>
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={500}
                    fontSize="1rem"
                    color="#274149"
                    lineHeight="1.6"
                    variant="body2"
                    component="p"
                    textAlign="center"
                    marginTop={4}
                  >
                    The Psychic Gift has helped thousands find clarity, comfort,
                    and insight - through genuine readings from gifted
                    clairvoyants and mediums.{" "}
                    <Link href="/about">Learn more about our story.</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          background: "#8174bb",
          padding: 2,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container height="100%" py={6} width={"100%"}>
            <Stack
              direction="column"
              alignItems="center"
              spacing={4}
              width="100%"
              justifyItems={"center"}
            >
              {/* todo, these typographies to be components */}
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="2rem"
                color="#f8f7ff"
                lineHeight="1.6"
                variant="h2"
                component="h2"
                marginBottom={4}
                textAlign="center"
              >
                Ready to speak to someone who truly listens?
              </Typography>
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={600}
                fontSize="1.1rem"
                color="#f8f7ff"
                lineHeight="1.6"
                variant="h3"
                component="h3"
                textAlign="center"
                marginTop={4}
              >
                Our gifted psychics are here when you’re ready.
              </Typography>
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
                textAlign="center"
                marginTop={2}
              >
                ✨ {readersWithStatusOnline.length} psychics online - ready when
                you are ✨
              </Typography>
            </Stack>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          background: "#f8f7ff",
          padding: 2,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container height="100%" py={6} width={"100%"}>
            <Stack
              direction="column"
              alignItems="center"
              spacing={4}
              width="100%"
              justifyItems={"center"}
            >
              {/* todo, these typographies to be components */}
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="2rem"
                color="#8174bb"
                lineHeight="1.6"
                variant="h2"
                component="h2"
                marginBottom={4}
                textAlign="center"
              >
                How it works
              </Typography>
              <Grid container direction={"row"} py={4} spacing={6}>
                <Grid size={4}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    mb={2}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Avatar
                      sx={{
                        width: 56,
                        height: 56,
                        backgroundColor: "#8174bb",
                      }}
                    >
                      1
                    </Avatar>
                  </Box>
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={600}
                    fontSize="1.1rem"
                    color="#8174bb"
                    lineHeight="1.6"
                    variant="h3"
                    component="h3"
                    textAlign="center"
                    marginTop={4}
                  >
                    Choose a psychic
                  </Typography>
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={500}
                    fontSize="1rem"
                    color="#8174bb"
                    lineHeight="1.6"
                    variant="body2"
                    component="p"
                    textAlign="center"
                    marginTop={2}
                  >
                    View our gifted psychics, see who&apos;s available now and
                    learn more about them, their techniques, and specialties on
                    their profiles.
                  </Typography>
                </Grid>
                <Grid size={4}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    mb={2}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Avatar
                      sx={{
                        width: 56,
                        height: 56,
                        backgroundColor: "#8174bb",
                      }}
                    >
                      2
                    </Avatar>
                  </Box>
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={600}
                    fontSize="1.1rem"
                    color="#8174bb"
                    lineHeight="1.6"
                    variant="h3"
                    component="h3"
                    textAlign="center"
                    marginTop={4}
                  >
                    Call using your preferred method
                  </Typography>
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={500}
                    fontSize="1rem"
                    color="#8174bb"
                    lineHeight="1.6"
                    variant="body2"
                    component="p"
                    textAlign="center"
                    marginTop={2}
                  >
                    When you select a reader, you&apos;ll see our call options.
                    Choose to pay on your phone bill, debit or credit card or
                    receive bonus minutes with our pre-pay options.
                  </Typography>
                </Grid>
                <Grid size={4}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    mb={2}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Avatar
                      sx={{
                        width: 56,
                        height: 56,
                        backgroundColor: "#8174bb",
                      }}
                    >
                      3
                    </Avatar>
                  </Box>
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={600}
                    fontSize="1.1rem"
                    color="#8174bb"
                    lineHeight="1.6"
                    variant="h3"
                    component="h3"
                    textAlign="center"
                    marginTop={4}
                  >
                    Get insights and guidance instantly
                  </Typography>
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={500}
                    fontSize="1rem"
                    color="#8174bb"
                    lineHeight="1.6"
                    variant="body2"
                    component="p"
                    textAlign="center"
                    marginTop={2}
                  >
                    Start your reading and get the clarity you’re seeking. Every
                    call is recorded for your peace of mind.
                  </Typography>
                </Grid>
                <Grid size={12}>
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={500}
                    fontSize="1rem"
                    color="#274149"
                    lineHeight="1.6"
                    variant="body2"
                    component="p"
                    textAlign="center"
                    marginTop={4}
                  >
                    <Link href="/about">
                      Learn more about how a reading works.
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
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
          <Grid container paddingTop={8} paddingBottom={12}>
            <Grid size={{ xs: 12, md: 6 }}>
              <img
                src="/featured/featured-robbie.png"
                alt="Illustration"
                style={{
                  width: "50%",
                  height: "auto",
                  display: "flex",
                  margin: "0 auto",
                  alignSelf: "center",
                }}
              />
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              alignContent={"center"}
              justifyContent={"center"}
              // display={"flex"}
              flexDirection={"column"}
            >
              {/* todo, these typographies to be components */}
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="2rem"
                color="#8174bb"
                lineHeight="1.6"
                variant="h2"
                component="h2"
                marginBottom={4}
                textAlign="center"
              >
                This week&apos;s star reader: Robbie
              </Typography>
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="1rem"
                color="#8174bb"
                lineHeight="1.6"
                variant="body2"
                component="p"
                textAlign="center"
                marginTop={2}
              >
                Robbie is a very warm and eloquent medium and psychic; he
                believes in spiritual transformation and positive thinking. If
                your life is off balance then he is the right reader to make you
                feel healed and back on your correct pathway. Robbie believes in
                harnessing the law of attraction - everything is possible when
                you believe.
              </Typography>
              <Stack
                direction="column"
                alignItems={"center"}
                display={"flex"}
                justifyContent={"center"}
                marginTop={4}
              >
                <Button
                  size="medium"
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
                <Button
                  size="medium"
                  variant="outlined"
                  sx={{
                    borderColor: "#745ddd",
                    borderRadius: 8,
                    mb: 4,
                    py: 2,
                    px: 4,
                  }}
                >
                  Learn more about Robbie
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

// ⸻

// ⸻
// featured reader
// ⸻

// Testimonials / Reviews

// Use genuine short quotes — ideally with a name and service used (e.g. “Reading with Alex was life-changing”).

// ⸻

// Internal Link Grid

// Blocks for:
// 	•	📞 Readings
// 	•	🎁 Offers
// 	•	🧑‍🎤 Meet Our Psychics
// 	•	📚 About
// 	•	❓ FAQ

// ⸻

// FAQ (Preview)

// Mimic Calm’s style — dropdowns, short answers. Link to full page.

// ⸻
