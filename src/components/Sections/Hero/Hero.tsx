"use client";

import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import type { Container as ParticaleContainer } from "@tsparticles/engine";
import styles from "./Hero.module.css";

import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";
import { PhoneCallout } from "../../PhoneCallout/PhoneCallout";
import { PrimaryCTAButton } from "../../PrimaryCTAButton/PrimaryCTAButton";
import {
  StyledContent,
  StyledHeroSection,
  StyledParticles,
} from "./Hero.styles";

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
    [theme.palette.primary.light],
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
              size={{ xs: 12, sm: 7 }}
              sx={{ paddingRight: { xs: 0, sm: theme.spacing(4), md: theme.spacing(6) } }}
            >
              <Typography
                fontWeight={700}
                variant="h1"
                component="h1"
                marginBottom={2}
                marginTop={2}
                sx={{
                  fontSize: { xs: "3rem", md: "4rem" },
                  background: `linear-gradient(135deg, #ffffff 40%, ${theme.palette.primary.light} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Psychic Phone Readings
              </Typography>
              <Typography
                fontWeight={500}
                variant="h2"
                component="h2"
                marginBottom={{ xs: 2, sm: 4 }}
                sx={{ fontSize: { xs: "1.3rem", sm: "1.6rem", md: "2rem" } }}
              >
                Speak with Gifted Clairvoyants by Phone Today
              </Typography>
              {/* Mobile only: illustration sits between H2 and CTA */}
              <Box
                sx={{
                  display: { xs: "flex", sm: "none" },
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/illustrations/person-on-phone.png"
                  alt="Illustration"
                  style={{ width: "80%", height: "auto" }}
                />
              </Box>
              <Typography
                fontWeight={500}
                fontSize="1rem"
                lineHeight="1.6"
                variant="body2"
                component="p"
                marginBottom={4}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Speak to a caring psychic and find clarity in love, life, or
                your next steps - relied on for over 23 years.
              </Typography>
              <Box sx={{ display: { xs: "block", sm: "inline-block" } }}>
                <PrimaryCTAButton
                  size="large"
                  fullWidth
                  onClick={handleFindYourPsychic}
                  label="Find Your Psychic"
                  mb={4}
                />
              </Box>
              <PhoneCallout />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 5 }}
              display={{ xs: "none", sm: "flex" }}
              height={"100%"}
              alignSelf={"center"}
              justifySelf={"flex-end"}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/illustrations/person-on-phone.png"
                alt="Illustration"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Grid>
                      </Grid>
        </Container>
      </StyledContent>
    </StyledHeroSection>
  );
};
