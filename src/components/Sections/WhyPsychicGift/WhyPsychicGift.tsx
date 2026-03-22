"use client";

import { FeatureCard } from "@/components/FeatureCard/FeatureCard";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
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
                width: "auto",
                height: "auto",
                maxHeight: 100,
                maxWidth: "100%",
                mt: 1,
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid>
          <Grid container spacing={4} width={"100%"} mb={6}>
            <Grid size={{ xs: 12, md: 4 }}>
              <FeatureCard
                src="/icons/crystal-ball.png"
                title="Psychic Readings Since 2002"
                body="Over two decades of connecting seekers with experienced clairvoyants, mediums, and tarot readers who deliver insightful guidance."
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <FeatureCard
                src="/icons/stars.png"
                title="Hand-Picked, Gifted Psychics"
                body="Each reader is tested, verified, and chosen for their experience,
                empathy, and integrity."
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <FeatureCard
                src="/icons/hands-heart.png"
                title="Relied on by Thousands"
                body="We’ve supported countless callers through love, life, and difficult
            decisions. All calls are confidential and recorded for your peace of
            mind."
              />
            </Grid>
          </Grid>
          <Grid container spacing={4} width={"100%"} alignItems="center">
            <Grid
              size={{ xs: 12, md: 3 }}
              sx={{
                order: { xs: 2, md: 1 },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ maxWidth: { xs: 160, md: 320 }, width: "100%" }}>
                <CircleImage>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/psychic-reading-2.png"
                    alt="Psychic reading"
                  />
                </CircleImage>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 9 }} sx={{ order: { xs: 1, md: 2 } }}>
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
                supported thousands in finding clarity, comfort, and insight -
                through sincere readings from gifted clairvoyants and mediums.
              </Typography>
              <Link href="/about">
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ mt: 2, borderRadius: 2 }}
                >
                  Learn More About Us
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
