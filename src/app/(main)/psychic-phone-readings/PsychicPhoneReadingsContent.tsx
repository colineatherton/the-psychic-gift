"use client";

import { FeatureCard } from "@/components";
import { CTA } from "@/components/Sections";
import { Box, Grid, Typography, useTheme } from "@mui/material";

export default function PsychicPhoneReadingsContent() {
  const theme = useTheme();

  const logoSrc =
    theme.palette.mode === "light"
      ? "/logo-gold-star-dark.png"
      : "/logo-gold-star.png";

  return (
    <>
      <Grid size={12} justifyContent="center" alignItems="center" mb={10}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="2rem"
          lineHeight="1"
          variant="h1"
          component="h1"
          textAlign="center"
        >
          Psychic Phone Readings
        </Typography>
        <Box
          component="img"
          src={logoSrc}
          alt="The Psychic Gift"
          sx={{
            height: 100,
            mt: 1,
            display: "block",
            margin: "0 auto",
          }}
        />
      </Grid>
      <Grid size={12} mb={4}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color={theme.palette.secondary.dark}
          lineHeight="2"
          variant="body2"
          component="p"
          textAlign="center"
        >
          Connect with experienced psychic readers by phone, any time of day or
          night. Our trusted clairvoyants, mediums, and tarot readers are here
          to offer guidance on love, relationships, career, and life decisions.
        </Typography>
      </Grid>

      <CTA heading="Speak to a psychic now" />

      <Grid
        size={12}
        justifyContent="center"
        alignItems="center"
        mt={14}
        mb={6}
      >
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="2rem"
          lineHeight="1"
          variant="h2"
          component="h2"
          textAlign="center"
        >
          Why Choose a Phone Reading?
        </Typography>
      </Grid>
      <Grid size={12} mb={4}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color={theme.palette.secondary.dark}
          lineHeight="2"
          variant="body2"
          component="p"
          textAlign="center"
        >
          A psychic phone reading offers a direct, personal connection with your
          chosen reader — from the comfort and privacy of your own space.
        </Typography>
      </Grid>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={4}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="Private & Confidential"
            body="Speak openly without worry. All calls are private, and recordings are kept secure for your peace of mind."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/stars.png"
            title="Available 24/7"
            body="Our psychic readers are available around the clock, so you can call whenever you need guidance — day or night."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/hands-heart.png"
            title="Experienced Readers"
            body="Every reader on our line has been carefully selected for their psychic ability, empathy, and integrity."
          />
        </Grid>
      </Grid>

      <Grid
        size={12}
        justifyContent="center"
        alignItems="center"
        mt={14}
        mb={6}
      >
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="2rem"
          lineHeight="1"
          variant="h2"
          component="h2"
          textAlign="center"
        >
          What Can a Psychic Reading Help With?
        </Typography>
      </Grid>
      <Grid size={12} mb={4}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color={theme.palette.secondary.dark}
          lineHeight="2"
          variant="body2"
          component="p"
          textAlign="center"
        >
          People call our psychic phone line for many reasons. Whether
          you&apos;re seeking clarity on a specific situation or simply want
          spiritual insight, our readers are here to help.
        </Typography>
      </Grid>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={6}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="Love & Relationships"
            body="Gain insight into your romantic life, understand your partner's feelings, or find clarity on a difficult relationship decision."
          />
        </Grid>
        <Grid size={6}>
          <FeatureCard
            src="/icons/stars.png"
            title="Career & Life Direction"
            body="Explore your path forward, understand what's holding you back, and receive guidance on important life choices."
          />
        </Grid>
      </Grid>

      <Grid
        size={12}
        justifyContent="center"
        alignItems="center"
        mt={14}
        mb={6}
      >
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="2rem"
          lineHeight="1"
          variant="h2"
          component="h2"
          textAlign="center"
        >
          How It Works
        </Typography>
      </Grid>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={4}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="1. Browse Our Readers"
            body="View profiles of our available psychics and choose the reader that feels right for you."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/stars.png"
            title="2. Call the Line"
            body="Dial our phone number and select your reader by PIN, or let our team connect you to the next available psychic."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/hands-heart.png"
            title="3. Start Your Reading"
            body="You'll be connected directly to your chosen reader. Your reading begins immediately — no waiting, no fuss."
          />
        </Grid>
      </Grid>

      <CTA heading="Ready to connect with a psychic?" />
    </>
  );
}
