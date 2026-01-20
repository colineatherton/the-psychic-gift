"use client";

import { FeatureCard } from "@/components";
import { CTA } from "@/components/Sections";
import { Box, Grid, Typography, useTheme } from "@mui/material";

export default function HowPsychicReadingsWork() {
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
          variant="h2"
          component="h2"
          textAlign="center"
        >
          How
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
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="2rem"
          lineHeight="1"
          variant="h2"
          component="h2"
          textAlign="center"
          mt={3}
        >
          Works
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
          Getting a psychic phone reading is simple, private, and available
          whenever you need it - day or night, all year round.
        </Typography>
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
          Step 1: Find your psychic
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
          Browse our carefully chosen psychic readers, each offering their own
          abilities, experience, and reading style.
        </Typography>
      </Grid>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={6}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="See who's available & choose a reader"
            body="Explore our gifted psychics, see who's online, and choose the reader that feels right for you. Choose a reader by name or PIN if you already know who you'd like to speak to."
          />
        </Grid>
        <Grid size={6}>
          <FeatureCard
            src="/icons/hands-heart.png"
            title="Unsure who to choose? We'll help"
            body="If you're unsure, our team can connect you to the next available reader"
          />
        </Grid>
      </Grid>
      <CTA heading="" />
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
          Step 2: Choose how you&apos;d like to pay
        </Typography>
      </Grid>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={4}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="Pay by phone bill (UK only)"
            body={
              <>
                <ul>
                  <li>
                    £1.50 per minute, plus your phone provider&apos;s access
                    charge
                  </li>
                  <li>Calls are limited to 26 minutes per call</li>
                </ul>
              </>
            }
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/stars.png"
            title="Pay by debit or credit card"
            body={
              <>
                <ul>
                  <li>£32.95 for the first 20 minutes</li>
                  <li>£1.50 per minute after that</li>
                  <li>Calls can last up to 90 minutes</li>
                </ul>
              </>
            }
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/hands-heart.png"
            title="Pre-pay with bonus minutes"
            body={
              <>
                <ul>
                  <li>
                    Pay in advance and receive free bonus minutes on larger
                    bundles
                  </li>
                  <li>Ideal if you want full control over call length</li>
                  <li>
                    Any unused minutes remain on your account for future calls
                  </li>
                </ul>
              </>
            }
          />
        </Grid>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color={theme.palette.secondary.dark}
          lineHeight="2"
          variant="body2"
          component="p"
        >
          <em>All pricing is shown before you connect.</em>
        </Typography>
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
          Step 3: Start your reading
        </Typography>
      </Grid>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={6}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="Your call experience"
            body={
              "When you call, you'll be guided through a short automated process or assisted by our reception team."
            }
          />
        </Grid>
        <Grid size={6}>
          <FeatureCard
            src="/icons/stars.png"
            title="Connected & supported"
            body={
              <>
                <ul>
                  <li>
                    You&apos;ll then be connected directly to your chosen
                    psychic reader
                  </li>
                  <li>Readings begin straight away</li>
                  <li>Calls are private and recorded for your peace of mind</li>
                  <li>
                    If we&apos;re unable to connect you for any reason,
                    alternative arrangements will be made so you can still
                    receive your reading.
                  </li>
                </ul>
              </>
            }
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
          How to use pre-pay minutes
        </Typography>
      </Grid>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={4}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="Using pre-pay minutes"
            body="With pre-pay, you decide how long your call lasts."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/stars.png"
            title="During your call"
            body={
              <ul>
                <li>
                  You&apos;ll hear a warning shortly before your minutes run out
                </li>
                <li>You can end the call or top up and continue</li>
                <li>Any unused minutes remain safely on your account</li>
              </ul>
            }
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/hands-heart.png"
            title="Your pre-pay account"
            body="Your pre-pay account uses a secure PIN and account number for future
          calls. You can also choose whether to store your card details for
          convenience."
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
          Regulatory notice
        </Typography>
      </Grid>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={4}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="18+ only"
            body="Callers must be 18 or over and have the bill payer's permission"
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/stars.png"
            title="Entertainment purposes"
            body="Readings are provided for entertainment purposes only under UK law"
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/hands-heart.png"
            title="Need help?"
            body="Support helpline: 0808 156 0022 - Full details are available in our Terms & Conditions"
          />
        </Grid>
      </Grid>

      <CTA heading="Ready to explore our readers?" />
    </>
  );
}
