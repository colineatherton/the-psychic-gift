"use client";

import { FeatureCard } from "@/components";
import { CTA } from "@/components/Sections";
import { HELPLINE_NUMBER } from "@/lib/constants/phoneNumbers";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";

const SparkleList = ({ items }: { items: string[] }) => (
  <Box sx={{ textAlign: "left", width: "100%" }}>
    <Stack spacing={1.5}>
      {items.map((item, i) => (
        <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
          <AutoAwesomeIcon
            sx={{ fontSize: "0.85rem", mt: "5px", color: "accent.primary", flexShrink: 0 }}
          />
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontWeight={500}
            fontSize="0.95rem"
            lineHeight={1.8}
            variant="body2"
            component="span"
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Stack>
  </Box>
);

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
            src="/icons/search.png"
            title="See who's available & choose a reader"
            body="Explore our gifted psychics, see who's online, and choose the reader that feels right for you. Choose a reader by name or PIN if you already know who you'd like to speak to."
          />
        </Grid>
        <Grid size={6}>
          <FeatureCard
            src="/icons/readers.png"
            title="Unsure who to choose? We'll assist"
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
            src="/icons/phone.png"
            title="Pay by phone bill (UK only)"
            body={
              <SparkleList items={[
                "£1.50 per minute, plus your phone provider's access charge",
                "Calls are limited to 26 minutes per call",
              ]} />
            }
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/card.png"
            title="Pay by debit or credit card"
            body={
              <SparkleList items={[
                "£32.95 for the first 20 minutes",
                "£1.50 per minute after that",
                "Calls can last up to 90 minutes",
              ]} />
            }
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/gift.png"
            title="Pre-pay with bonus minutes"
            body={
              <SparkleList items={[
                "Pay in advance and receive free bonus minutes on larger bundles",
                "Ideal if you want full control over call length",
                "Any unused minutes remain on your account for future calls",
              ]} />
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
            src="/icons/hands-heart.png"
            title="Connected & supported"
            body={
              <SparkleList items={[
                "You'll then be connected directly to your chosen psychic reader",
                "Readings begin straight away",
                "Calls are private and recorded for your peace of mind",
                "If we're unable to connect you for any reason, alternative arrangements will be made so you can still receive your reading.",
              ]} />
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
            src="/icons/clock.png"
            title="Using pre-pay minutes"
            body="With pre-pay, you decide how long your call lasts."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/speech.png"
            title="During your call"
            body={
              <SparkleList items={[
                "You'll hear a warning shortly before your minutes run out",
                "You can end the call or top up and continue",
                "Any unused minutes remain safely on your account",
              ]} />
            }
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/lock.png"
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
            src="/icons/stars.png"
            title="18+ only"
            body="Callers must be 18 or over and have the bill payer's permission"
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/compass.png"
            title="Entertainment purposes"
            body="Readings are provided for entertainment purposes only under UK law"
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/heart-hands-2.png"
            title="Need support?"
            body={`Support helpline: ${HELPLINE_NUMBER} - Full details are available in our Terms & Conditions`}
          />
        </Grid>
      </Grid>

      <CTA heading="Ready to explore our readers?" />
    </>
  );
}
