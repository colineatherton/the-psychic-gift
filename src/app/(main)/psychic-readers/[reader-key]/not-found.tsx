"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import type { Container as ParticleContainer } from "@tsparticles/engine";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";

export default function ReaderNotFound() {
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
    container?: ParticleContainer,
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
          value: theme.palette.primary.main,
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
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 3, max: 8 },
        },
      },
      detectRetina: true,
    }),
    [theme.palette.primary.light],
  );

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {init && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Particles
            id="reader-not-found-particles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </Box>
      )}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg">
          <Grid container minHeight="100vh" py={6} width={"100%"}>
            <Grid size={12} mt={20}>
              <Stack spacing={4} alignItems="center" textAlign="center">
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontWeight={700}
                  fontSize="3rem"
                  variant="h1"
                  component="h1"
                >
                  Reader Not Found
                </Typography>
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontSize="1.2rem"
                  lineHeight="1.8"
                  variant="body1"
                  component="p"
                  maxWidth="600px"
                >
                  We couldn&apos;t find the psychic reader you&apos;re looking
                  for. They may have moved or the link might be outdated.
                </Typography>
                <Stack direction="row" spacing={2} mt={4}>
                  <Link href="/psychic-readers">
                    <Button
                      size="large"
                      variant="contained"
                      sx={{
                        borderRadius: 2,
                        px: 4,
                        py: 1.5,
                        fontSize: "1rem",
                      }}
                    >
                      View All Readers
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button
                      size="large"
                      variant="contained"
                      sx={{
                        borderRadius: 2,
                        px: 4,
                        py: 1.5,
                        fontSize: "1rem",
                      }}
                    >
                      Go Home
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
