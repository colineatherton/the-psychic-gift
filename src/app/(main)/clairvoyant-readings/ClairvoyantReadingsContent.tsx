"use client";

import { FeatureCard } from "@/components";
import { CTA } from "@/components/Sections";
import { Box, Grid, Typography, useTheme } from "@mui/material";

export default function ClairvoyantReadingsContent() {
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
          Clairvoyant Readings
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
          Receive insight from experienced clairvoyants who use their psychic
          vision to see beyond the surface. Our clairvoyant readers are
          available by phone to help you find clarity and direction.
        </Typography>
      </Grid>

      <CTA heading="Speak to a clairvoyant now" />

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
          What is Clairvoyance?
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
          Clairvoyance means &quot;clear seeing.&quot; Clairvoyant readers
          receive psychic impressions as mental images, symbols, or visions that
          reveal information about people, situations, and possible futures.
        </Typography>
      </Grid>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={4}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="Psychic Vision"
            body="Clairvoyants see beyond physical reality, receiving visual impressions that offer insight into your life and circumstances."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/stars.png"
            title="Symbolic Insight"
            body="Visions often come as symbols or images that the reader interprets to provide meaningful guidance for your situation."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/hands-heart.png"
            title="Future Possibilities"
            body="Clairvoyant readings can illuminate paths ahead, helping you understand potential outcomes and make informed choices."
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
          What Can a Clairvoyant Reading Reveal?
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
          Our clairvoyant readers can offer guidance across many areas of life.
          Whether you&apos;re facing a decision, seeking understanding, or
          looking for direction, a clairvoyant reading can help.
        </Typography>
      </Grid>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={6}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="Love & Relationships"
            body="Gain clarity on romantic connections, understand a partner's true feelings, or see what lies ahead for your relationship."
          />
        </Grid>
        <Grid size={6}>
          <FeatureCard
            src="/icons/stars.png"
            title="Career & Life Purpose"
            body="Receive insight into your professional path, upcoming opportunities, or the direction your life is taking."
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
          Our Clairvoyant Readers
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
          Each clairvoyant on our line has been carefully selected for their
          ability, experience, and compassionate approach. Browse our readers to
          find someone whose style and gifts resonate with you.
        </Typography>
      </Grid>

      <CTA heading="Find your clairvoyant reader" />
    </>
  );
}
