"use client";

import { CTA_PRIMARY_LABEL } from "@/lib/constants/Messages";
import { Container, Grid, Typography, useTheme } from "@mui/material";
import type { Container as ParticaleContainer } from "@tsparticles/engine";
import styles from "./HeroSectionGradient.module.css";

import { loadFull } from "tsparticles";
import { CTAButton } from "../CTAButton/CTAButton";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import {
  StyledContent,
  StyledHeroSection,
  StyledParticles,
} from "./HeroSectionGradient.styles";

export default function Hero() {
  const [init, setInit] = useState(false);
  const theme = useTheme();

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //   await loadAll(engine);
      await loadFull(engine);
      //   await loadSlim(engine);
      //await loadBasic(engine);
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
      fullScreen: { enable: false }, // stays inside the hero
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
          // value: "#ffffff",
          value: theme.palette.primary.light,
        },
        // links: {
        //   color: "#ffffff",
        //   distance: 150,
        //   enable: true,
        //   opacity: 0.5,
        //   width: 1,
        // },
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
      {/* Content */}
      <StyledContent>
        <Container
          maxWidth="lg"
          sx={{
            minHeight: "calc(80vh - 32px)",
            display: "flex",
            alignItems: "center",
            paddingTop: "8rem", // new
          }}
        >
          <Grid container height="100%" width={"100%"}>
            <Grid
              size={{ xs: 12, md: 7 }}
              sx={{ paddingRight: theme.spacing(6) }}
            >
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={700}
                fontSize="3rem"
                color={theme.palette.text.primary}
                // lineHeight="1.2"
                variant="h1"
                component="h1"
                marginBottom={2}
                marginTop={8}
              >
                Psychic Phone Readings
              </Typography>
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="2rem"
                color={theme.palette.text.primary}
                // lineHeight="1.6"
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
                color={theme.palette.text.primary}
                lineHeight="1.6"
                variant="body2"
                component="p"
                marginBottom={6}
              >
                Speak to a caring psychic and find clarity in love, life, or
                your next steps - trusted for over 23 years.
              </Typography>
              <CTAButton variant="primary" mb={4} label={CTA_PRIMARY_LABEL} />
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="1rem"
                color={theme.palette.text.primary}
                lineHeight="1.6"
                variant="body2"
                component="p"
                marginBottom={4}
              >
                From £30 for 20 mins | Card & Phone Bill Options | All Calls
                Recorded
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, md: 5 }}
              height={"100%"}
              display={"flex"}
              alignSelf={"center"}
              justifySelf={"flex-end"}
            >
              <img
                src="/illustrations/4-stars-3.png"
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
}
