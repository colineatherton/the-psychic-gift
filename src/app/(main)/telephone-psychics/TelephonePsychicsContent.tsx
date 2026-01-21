"use client";

import { FeatureCard } from "@/components";
import { CTA } from "@/components/Sections";
import { Box, Grid, Typography, useTheme } from "@mui/material";

export default function TelephonePsychicsContent() {
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
          Telephone Psychics
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
          Speak directly to a telephone psychic for personal guidance and
          spiritual insight. Our experienced readers are available by phone
          whenever you need them.
        </Typography>
      </Grid>

      <CTA heading="Connect with a telephone psychic" />

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
          Why Speak to a Telephone Psychic?
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
          A telephone reading creates a direct, voice-to-voice connection with
          your psychic. Many callers find that hearing their reader&apos;s voice
          makes the experience more personal and meaningful.
        </Typography>
      </Grid>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={4}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="Immediate Connection"
            body="No need to travel or wait for an appointment. Pick up the phone and speak to a psychic within moments."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/stars.png"
            title="Voice-to-Voice Readings"
            body="Telephone readings allow for natural conversation, making it easier to ask questions and explore your concerns in depth."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/hands-heart.png"
            title="Comfort & Privacy"
            body="Call from wherever you feel most comfortable — your home, your car, or anywhere that offers you privacy."
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
          Our Telephone Psychic Readers
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
          Each of our telephone psychics brings their own unique abilities and
          experience. Whether you&apos;re drawn to clairvoyance, tarot, or
          mediumship, you&apos;ll find a reader who resonates with you.
        </Typography>
      </Grid>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={6}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="Clairvoyants & Intuitives"
            body="Readers who use their psychic vision to see situations, people, and possibilities that may be hidden from view."
          />
        </Grid>
        <Grid size={6}>
          <FeatureCard
            src="/icons/stars.png"
            title="Mediums & Tarot Readers"
            body="Connect with loved ones who have passed, or receive guidance through the symbolic wisdom of tarot cards."
          />
        </Grid>
      </Grid>

      <CTA heading="Find your telephone psychic" />
    </>
  );
}
