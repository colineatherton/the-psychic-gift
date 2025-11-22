"use client";

import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import type { Container as ParticaleContainer } from "@tsparticles/engine";
import styles from "./Hero.module.css";

import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";
import { OfferCallout } from "../../OfferCallout/OfferCallout";
import { PrimaryCTAButton } from "../../PrimaryCTAButton/PrimaryCTAButton";
import {
  StyledContent,
  StyledHeroSection,
  StyledParticles,
} from "./Hero.styles";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";

export const Hero = () => {
  const { handleFindYourPsychic } = useReaderSelectContext();
  const [init, setInit] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (
    container?: ParticaleContainer,
  ): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 40,
            duration: 1,
          },
        },
      },
      particles: {
        color: {
          value: theme.palette.primary.light,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 2,
          straight: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 40,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 6 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <StyledHeroSection theme={theme}>
      {init && (
        <StyledParticles>
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            className={styles.particles}
            options={options}
          />
        </StyledParticles>
      )}
      <StyledContent>
        <Container
          maxWidth="lg"
          sx={{
            minHeight: "calc(80vh - 32px)",
            display: "flex",
            alignItems: "center",
            paddingTop: { xs: 0, sm: "4rem", md: "8rem" },
          }}
        >
          <Grid container height="100%" width={"100%"}>
            <Grid
              size={{ xs: 12 }}
              display={{ xs: "flex", md: "none" }}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: "75%", sm: "50%" },
                }}
              >
                <img
                  src="/illustrations/person-on-phone.png"
                  alt="Illustration"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 7 }}
              sx={{ paddingRight: theme.spacing(6) }}
            >
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={700}
                fontSize="3rem"
                variant="h1"
                component="h1"
                marginBottom={2}
                marginTop={2}
              >
                Psychic Phone Readings
              </Typography>
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="2rem"
                variant="h2"
                component="h2"
                marginBottom={8}
              >
                Speak with Gifted Clairvoyants by Phone Today
              </Typography>
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="1rem"
                lineHeight="1.6"
                variant="body2"
                component="p"
                marginBottom={6}
              >
                Speak to a caring psychic and find clarity in love, life, or
                your next steps - trusted for over 23 years.
              </Typography>
              <PrimaryCTAButton
                size="large"
                onClick={handleFindYourPsychic}
                label="Find Your Psychic"
                mb={4}
              />
              <OfferCallout />
            </Grid>
            <Grid
              size={{ xs: 12, md: 5 }}
              display={{ xs: "none", md: "flex" }}
              height={"100%"}
              alignSelf={"center"}
              justifySelf={"flex-end"}
            >
              <img
                src="/illustrations/person-on-phone.png"
                alt="Illustration"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="0.9rem"
                color={theme.palette.text.primary}
                lineHeight="1.6"
                variant="body2"
                component="p"
                marginTop={6}
              >
                £10 for 10 mins, £1.50 / min thereafter | Card & Phone Bill
                Options | All Calls Recorded
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </StyledContent>
    </StyledHeroSection>
  );
};
