"use client";

import { FeatureCard } from "@/components";
import { CTA } from "@/components/Sections";
import { Box, Grid, Typography, useTheme } from "@mui/material";

export default function CallAPsychicNowContent() {
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
          Call a Psychic Now
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
          Ready to speak to a psychic? Our readers are available right now.
          Connect immediately for guidance, clarity, and insight when you need
          it most.
        </Typography>
      </Grid>

      <CTA heading="Psychics available now" />

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
          Speak to a Psychic Immediately
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
          No appointments, no waiting. Our psychic readers are standing by to
          take your call. Within moments, you could be speaking to someone who
          can help.
        </Typography>
      </Grid>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={4}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="Readers Online Now"
            body="See which psychics are currently available and ready to connect with you straight away."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/stars.png"
            title="No Appointment Needed"
            body="Call any time — day or night, weekday or weekend. Our lines are open 24 hours a day, 7 days a week."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/hands-heart.png"
            title="Instant Connection"
            body="Choose your reader and be connected within moments. Your reading can begin as soon as you're ready."
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
          How to Call
        </Typography>
      </Grid>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={4}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="1. Choose Your Reader"
            body="Browse our available psychics and select the reader you'd like to speak with — or let us connect you to the next available."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/stars.png"
            title="2. Dial the Number"
            body="Call our psychic line and follow the simple prompts. Enter your reader's PIN if you know who you want."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/hands-heart.png"
            title="3. Start Your Reading"
            body="You'll be connected directly to your psychic. Your reading begins immediately — no waiting around."
          />
        </Grid>
      </Grid>

      <CTA heading="Call now and connect instantly" />
    </>
  );
}
