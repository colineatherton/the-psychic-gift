"use client";

import { PrimaryCTAButton } from "@/components/PrimaryCTAButton/PrimaryCTAButton";
import { StepCard } from "@/components/StepCards/StepCard";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

export const HowItWorks = () => {
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
        <Grid container height="100%" py={6} width="100%">
          <Grid size={12} justifyContent="center" alignItems="center" mb={6}>
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={500}
              fontSize="2rem"
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
          <Stack
            direction="column"
            alignItems="center"
            spacing={4}
            width="100%"
            justifyItems="center"
          >
            <Grid container direction="column" py={4} spacing={2}>
              <Grid>
                <StepCard
                  step={1}
                  title="Find your psychic"
                  body="Browse through our selection of gifted psychic readers, each with their own unique abilities and specialties."
                  backgroundColor={theme.palette.primary.light}
                  footer={
                    <PrimaryCTAButton
                      // mode="compact"
                      size="large"
                      onClick={() => undefined}
                      label="Find Your Psychic"
                    />
                  }
                />
              </Grid>
              <Grid alignSelf="center">
                <SouthOutlinedIcon fontSize="large" />
              </Grid>
              <Grid>
                <StepCard
                  step={2}
                  title="Choose call options"
                  body="When you select a reader, you'll see our call options. Choose to pay on your phone bill, debit or credit card or receive bonus minutes with our pre-pay options."
                  backgroundColor={theme.palette.primary.main}
                />
              </Grid>
              <Grid alignSelf="center">
                <SouthOutlinedIcon fontSize="large" />
              </Grid>
              <Grid>
                <StepCard
                  step={3}
                  title="Get insights and guidance instantly"
                  body="Start your reading and get the clarity you’re seeking. Every call is recorded for your peace of mind."
                  backgroundColor={theme.palette.primary.dark}
                />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};
