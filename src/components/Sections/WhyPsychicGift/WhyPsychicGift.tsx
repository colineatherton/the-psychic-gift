"use client";

import { FeatureCard } from "@/components/FeatureCard/FeatureCard";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { CircleImage } from "./WhyPsychicGift.styles";

export function WhyPsychicGift() {
  const theme = useTheme();

  const logoSrc =
    theme.palette.mode === "light"
      ? "/logo-gold-star-dark.png"
      : "/logo-gold-star.png";

  return (
    <Box
      sx={{
        background: (theme) => theme.palette.primary.main,
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
        <Grid container height="100%" py={10} width={"100%"} spacing={4}>
          <Grid size={12} justifyContent="center" alignItems="center" mb={6}>
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={500}
              fontSize="2rem"
              lineHeight="1"
              variant="h2"
              component="h2"
              textAlign="center"
            >
              Why Choose
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
          <Grid container spacing={4} width={"100%"} mb={6}>
            <Grid size={4}>
              <FeatureCard
                src="/icons/crystal-ball.png"
                title="Founded on a Family Legacy"
                body="Started by John and inspired by his grandmother’s own psychic gifts,
                our story is personal — not corporate."
              />
            </Grid>
            <Grid size={4}>
              <FeatureCard
                src="/icons/stars.png"
                title="Hand-Picked, Gifted Psychics"
                body="Each reader is tested, verified, and chosen for their experience,
                empathy, and integrity."
              />
            </Grid>
            <Grid size={4}>
              <FeatureCard
                src="/icons/hands-heart.png"
                title="Trusted by Thousands"
                body="We’ve supported countless callers through love, life, and difficult
            decisions. All calls are confidential and recorded for your peace of
            mind."
              />
            </Grid>
          </Grid>
          <Grid container spacing={4} width={"100%"} alignItems="center">
            <Grid size={3}>
              <CircleImage>
                <img
                  src="/images/psychic-reading-2.png"
                  alt="Psychic reading"
                />
              </CircleImage>
            </Grid>
            <Grid size={9}>
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="1rem"
                color={theme.palette.secondary.dark}
                lineHeight="1.6"
                variant="body2"
                component="p"
              >
                We’ve been guiding callers since 2002 with a carefully selected
                team of clairvoyants, mediums, and tarot readers — all chosen
                for their empathy, integrity, and insight. The Psychic Gift has
                helped thousands find clarity, comfort, and insight - through
                genuine readings from gifted clairvoyants and mediums.{" "}
                <Link href="/about">Learn more about our story.</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
