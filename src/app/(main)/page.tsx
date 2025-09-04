"use client";

import LinkCard from "@/components/LinkCard/LinkCard";
import { ReaderGrid } from "@/components/ReaderGrid/ReaderList";
import {
  ALL_ABILITIES,
  ALL_SKILLS,
  ALL_TOOLS,
  ALL_TOPICS,
  READER_CARDS,
} from "@/lib/constants/readers";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
                marginTop={6}
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
                {/* With Gifted Clairvoyants */}
                Speak with Gifted Clairvoyants by Phone Today
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
              direction="row"
              alignItems="center"
              width="100%"
              justifyContent="space-between"
            >
              <Box
                sx={{
                  maxWidth: "250px",
                  margin: "0 auto",
                  alignSelf: "center",
                  transition: "transform 0.25s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src="/badges/readings-given.png"
                  alt="Illustration"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
              <Box
                sx={{
                  maxWidth: "250px",
                  margin: "0 auto",
                  alignSelf: "center",
                  transition: "transform 0.25s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src="/badges/est-2002.png"
                  alt="Illustration"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
              <Box
                sx={{
                  maxWidth: "250px",
                  margin: "0 auto",
                  alignSelf: "center",
                  transition: "transform 0.25s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src="/badges/satisfaction-guarantee-2.png"
                  alt="Illustration"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
              {/* <p>trust badge - 20 years</p> */}
              {/* <p>trust badge - 1000's of happy customers</p> */}
              {/* <p>trust badge - satisfaction guaranteed</p> */}
            </Stack>
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
                color="#8174bb"
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
                We’ve been guiding callers since 2002 — but our story goes back
                further. John, our founder, was inspired by his grandmother, a
                gifted medium who helped people long before it was mainstream.
                Today, we continue that legacy with a carefully selected team of
                clairvoyants, mediums, and tarot readers — all chosen for their
                empathy, integrity, and insight.
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
                  border: "1px solid #f8f7ff",
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
                ✨ {readersWithStatusOnline.length} available psychics - ready
                when you are ✨
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
                        backgroundColor: "#745ddd",
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
                        backgroundColor: "#745ddd",
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
                        backgroundColor: "#745ddd",
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
      <Box
        sx={{
          background: "#f8f7ff",
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
            display: "flex",
            // height: "100%",
            alignItems: "center",
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            spacing={4}
            width="100%"
            justifyItems={"center"}
            paddingBottom={8}
          >
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
              paddingBottom={4}
            >
              Loved by Thousands
            </Typography>
            <Grid container width={"100%"} spacing={8} textAlign={"center"}>
              <Grid size={4} flexGrow={1} pb={4}>
                <img
                  src="/icons/quote.png"
                  alt="Illustration"
                  style={{
                    width: "30px",
                    height: "auto",
                    display: "flex",
                    marginRight: "0 auto",
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
                  textAlign="left"
                  marginTop={2}
                >
                  Karon, Devon
                </Typography>
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontWeight={500}
                  fontSize="1rem"
                  color="#274149"
                  lineHeight="1.6"
                  variant="body2"
                  component="p"
                  textAlign="left"
                  marginTop={2}
                >
                  I thoroughly enjoyed connecting with Angel. We ended up
                  talking at great length with her passing on some guidance from
                  loved ones in spirit, who stepped forward with some uplifting
                  messages. Linking in with her cards, she put a query of mine
                  over a person of interest into some perspective. I felt
                  encouraged and enlightened after such a positive reading and I
                  would highly recommend this psychic for a very detailed
                  reading. Many Blessings from the lady by the coast xx.
                </Typography>
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontWeight={700}
                  fontSize="1rem"
                  color="#8174bb"
                  lineHeight="1.6"
                  variant="body2"
                  component="p"
                  textAlign="left"
                  marginTop={2}
                >
                  Reading by Angel - PIN: 1441
                </Typography>
              </Grid>
              <Grid size={4} flexGrow={1} pb={4}>
                <img
                  src="/icons/quote.png"
                  alt="Illustration"
                  style={{
                    width: "30px",
                    height: "auto",
                    display: "flex",
                    marginRight: "0 auto",
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
                  textAlign="left"
                  marginTop={2}
                >
                  Rose, UK
                </Typography>
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontWeight={500}
                  fontSize="1rem"
                  color="#274149"
                  lineHeight="1.6"
                  variant="body2"
                  component="p"
                  textAlign="left"
                  marginTop={2}
                >
                  Hi Jasmine, thank you so much for the very honest reading you
                  gave me, no point in sugar coating events. It was nice to feel
                  that I had someone on my side guiding me to make the right
                  decisions. What you advised made a lot of sense and I’ve put
                  what we discussed into practice. I’ve had readings off you
                  before and on each occasion, I have come off the phone feeling
                  empowered. I thank you again and hope to speak again soon.
                  Thanks, Rose xx.
                </Typography>
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontWeight={700}
                  fontSize="1rem"
                  color="#8174bb"
                  lineHeight="1.6"
                  variant="body2"
                  component="p"
                  textAlign="left"
                  marginTop={2}
                >
                  Reading by Jasmine - 5115
                </Typography>
              </Grid>
              <Grid size={4} flexGrow={1} pb={4}>
                <img
                  src="/icons/quote.png"
                  alt="Illustration"
                  style={{
                    width: "30px",
                    height: "auto",
                    display: "flex",
                    marginRight: "0 auto",
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
                  textAlign="left"
                  marginTop={2}
                >
                  Ludwig, Warrington
                </Typography>
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontWeight={500}
                  fontSize="1rem"
                  color="#274149"
                  lineHeight="1.6"
                  variant="body2"
                  component="p"
                  textAlign="left"
                  marginTop={2}
                >
                  Mary has been reading for me for well over a decade. Her
                  steady succinct advice is really remarkable. I make notes
                  during readings so I can check discussions years later.
                  There's a consistency with Mary which is confirmed over and
                  over again. This is a serious person with highly developed
                  clairvoyant abilities.
                </Typography>
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontWeight={700}
                  fontSize="1rem"
                  color="#8174bb"
                  lineHeight="1.6"
                  variant="body2"
                  component="p"
                  textAlign="left"
                  marginTop={2}
                >
                  Reading by Mary - 5055
                </Typography>
              </Grid>
              <Grid size={4} flexGrow={1} pb={4}>
                <img
                  src="/icons/quote.png"
                  alt="Illustration"
                  style={{
                    width: "30px",
                    height: "auto",
                    display: "flex",
                    marginRight: "0 auto",
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
                  textAlign="left"
                  marginTop={2}
                >
                  E, UK
                </Typography>
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontWeight={500}
                  fontSize="1rem"
                  color="#274149"
                  lineHeight="1.6"
                  variant="body2"
                  component="p"
                  textAlign="left"
                  marginTop={2}
                >
                  Fran has read for me for a number of years and I like her
                  style. She's a sincere reader, tells you how it is, won't make
                  things fit and open to sharing her psychic knowledge. She's
                  got answers to every question and I see her as a psychic
                  mentor. She has brought through people from the spirit world
                  and I've been grateful to hear from them. She's been very
                  thorough with past events, spot on with the present and made
                  some interesting insights for the future. I wouldn't choose
                  any other reader. I like her a lot.
                </Typography>
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontWeight={700}
                  fontSize="1rem"
                  color="#8174bb"
                  lineHeight="1.6"
                  variant="body2"
                  component="p"
                  textAlign="left"
                  marginTop={2}
                >
                  Reading by Fran - 1133
                </Typography>
              </Grid>
              <Grid size={4} flexGrow={1} pb={4}>
                <img
                  src="/icons/quote.png"
                  alt="Illustration"
                  style={{
                    width: "30px",
                    height: "auto",
                    display: "flex",
                    marginRight: "0 auto",
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
                  textAlign="left"
                  marginTop={2}
                >
                  Carol, London
                </Typography>
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontWeight={500}
                  fontSize="1rem"
                  color="#274149"
                  lineHeight="1.6"
                  variant="body2"
                  component="p"
                  textAlign="left"
                  marginTop={2}
                >
                  Karen has been reading for me for many years. She is a great
                  reader and very warm.
                </Typography>
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontWeight={700}
                  fontSize="1rem"
                  color="#8174bb"
                  lineHeight="1.6"
                  variant="body2"
                  component="p"
                  textAlign="left"
                  marginTop={2}
                >
                  Reading by Karen - 5791
                </Typography>
              </Grid>
              <Grid size={4} flexGrow={1}>
                <img
                  src="/icons/quote.png"
                  alt="Illustration"
                  style={{
                    width: "30px",
                    height: "auto",
                    display: "flex",
                    marginRight: "0 auto",
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
                  textAlign="left"
                  marginTop={2}
                >
                  C, London
                </Typography>
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontWeight={500}
                  fontSize="1rem"
                  color="#274149"
                  lineHeight="1.6"
                  variant="body2"
                  component="p"
                  textAlign="left"
                  marginTop={2}
                >
                  Pauline is a lovely lady. Very kind and great with timings.
                </Typography>
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontWeight={700}
                  fontSize="1rem"
                  color="#8174bb"
                  lineHeight="1.6"
                  variant="body2"
                  component="p"
                  textAlign="left"
                  marginTop={2}
                >
                  Reading by Pauline - 3798
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
      <Box
        sx={{
          background: "#8174bb",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "stretch",
          paddingTop: 8,
          paddingBottom: 12,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container direction={"row"} spacing={4} width={"100%"}>
            <Grid size={4}>
              <LinkCard
                iconPath="readers"
                title="All Our Psychic Readers"
                description="Meet our hand-picked psychics, browse their profiles, and
                      see who’s available right now."
              />
            </Grid>
            <Grid size={4}>
              <LinkCard
                iconPath="gift"
                title="Current Offers"
                description="Discover today’s exclusive call offers and bonus-minute
                      packages."
              />
            </Grid>
            <Grid size={4}>
              <LinkCard
                iconPath="book"
                title="How It Works"
                description="A quick guide to choosing a psychic and starting your
                      reading in just a few steps."
              />
            </Grid>
            <Grid size={4}>
              <LinkCard
                iconPath="heart-hands-2"
                title="Why The Psychic Gift"
                description="Learn what makes us different – a family legacy rooted in
                      care, not corporations."
              />
            </Grid>
            <Grid size={4}>
              <LinkCard
                iconPath="phone"
                title="Telephone Psychics"
                description="Explore our clairvoyant services and discover how psychic
                      insights can support your journey."
              />
            </Grid>
            <Grid size={4}>
              <LinkCard
                iconPath="speech"
                title="Testimonials"
                description="Real feedback from people just like you – honest,
                      heartfelt, and reassuring."
              />
            </Grid>
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
          <Grid container height="100%" pt={6} pb={16} width={"100%"}>
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
                Ready when you are
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
                ✨ {readersWithStatusOnline.length} psychics are available to
                take your call ✨
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
          <Grid container height="100%" pt={6} pb={16} width={"100%"}>
            <Stack direction="column" spacing={4} width="100%">
              {/* todo, these typographies to be components */}
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="2rem"
                color="#8174bb"
                lineHeight="1.6"
                variant="h2"
                component="h2"
                marginBottom={12}
                paddingBottom={6}
                textAlign="center"
              >
                Frequently asked questions
              </Typography>
              <Accordion
                square
                sx={{
                  backgroundColor: "#f8f7ff",
                  boxShadow: "none",
                  borderTop: "1px solid #7a8486",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={600}
                    fontSize="1.1rem"
                    color="#8174bb"
                    lineHeight="1.6"
                    variant="h3"
                    component="h3"
                  >
                    What is a psychic phone reading?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  A psychic phone reading is a live call with a gifted
                  clairvoyant who offers insights into your love life, career,
                  future, and more.
                </AccordionDetails>
              </Accordion>
              <Accordion
                square
                sx={{
                  backgroundColor: "#f8f7ff",
                  boxShadow: "none",
                  borderTop: "1px solid #7a8486",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={600}
                    fontSize="1.1rem"
                    color="#8174bb"
                    lineHeight="1.6"
                    variant="h3"
                    component="h3"
                  >
                    How do I speak to a psychic?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Simply call one of our Freephone or Premium Rate numbers to be
                  connected directly to an available psychic.
                </AccordionDetails>
              </Accordion>
              <Accordion
                square
                sx={{
                  backgroundColor: "#f8f7ff",
                  boxShadow: "none",
                  borderTop: "1px solid #7a8486",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={600}
                    fontSize="1.1rem"
                    color="#8174bb"
                    lineHeight="1.6"
                    variant="h3"
                    component="h3"
                  >
                    How much does a psychic reading cost?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Our readings start at £1.50 per minute. You can also purchase
                  Pre-Pay minutes for discounts and bonuses.
                </AccordionDetails>
              </Accordion>
              <Accordion
                square
                sx={{
                  backgroundColor: "#f8f7ff",
                  boxShadow: "none",
                  borderTop: "1px solid #7a8486",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={600}
                    fontSize="1.1rem"
                    color="#8174bb"
                    lineHeight="1.6"
                    variant="h3"
                    component="h3"
                  >
                    How do I choose the right psychic for me?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  You can browse each psychic&apos;s profile to see their
                  specialties and background. Some focus on love and
                  relationships, others on life path or spiritual guidance. All
                  our readers are hand-picked for their warmth, intuitive
                  insight, and experience — choose the one who resonates with
                  your needs.
                </AccordionDetails>
              </Accordion>
              <Accordion
                square
                sx={{
                  backgroundColor: "#f8f7ff",
                  boxShadow: "none",
                  borderTop: "1px solid #7a8486",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5-content"
                  id="panel5-header"
                >
                  <Typography
                    fontFamily="Montserrat Variable, sans-serif"
                    fontWeight={600}
                    fontSize="1.1rem"
                    color="#8174bb"
                    lineHeight="1.6"
                    variant="h3"
                    component="h3"
                  >
                    Are psychic readings confidential?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Yes. All readings are private and confidential. We also do not
                  store call recordings beyond what\'s required for customer
                  service and compliance.
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Grid>
        </Container>
      </Box>
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
