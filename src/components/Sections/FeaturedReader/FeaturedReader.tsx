"use client";

import { ReaderCard } from "@/components";
import { getStatus } from "@/components/ReaderGrid/ReaderGrid";
import { StyledParticles } from "@/components/Sections/Hero/Hero.styles";
import { GET_READER_CARD, READER_CONFIG_MAP } from "@/lib/constants/readers";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import {
  ISourceOptions,
  MoveDirection,
  OutMode,
  type Container as ParticaleContainer,
} from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";
import styles from "../Hero/Hero.module.css";
import { StyledFeaturedReaderSection } from "./FeaturedReader.styles";

const getFeaturedReaderKey = (): string => {
  // Get all reader keys from READER_CONFIG_MAP
  const readerKeys = Object.keys(READER_CONFIG_MAP);
  const readerCount = readerKeys.length;

  // Calculate the day of the year (1-365 or 366 for leap years)
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor(
    (now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24),
  );

  // Cycle through readers based on day of year
  const index = dayOfYear % readerCount;
  return readerKeys[index];
};

export const FeaturedReader = () => {
  const theme = useTheme();
  const key = getFeaturedReaderKey();
  const { description } = READER_CONFIG_MAP[key];
  const { getReaderByPin } = useReaderFeedContext();

  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // await loadImageShape(engine as unknown as ImageEngine);
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

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
          value: 0.7,
        },
        shape: {
          type: "star",
        },
        // shape: {
        //   type: "image",
        //   image: {
        //     src: "/particles/tarot-purple.png",
        //     // src: "/readers/original/3623.png",
        //     // width: 100, // Optional: Set image dimensions for better scaling
        //     // height: 100,
        //   },
        // },
        size: {
          value: { min: 2, max: 6 },
          // value: { min: 10, max: 20 }, // Increased size for better visibility of images
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <StyledFeaturedReaderSection>
      <Box
        sx={{
          // background: (theme) => theme.palette.primary.main,
          padding: 2,
        }}
      >
        {init && (
          <StyledParticles>
            <Particles
              id="tsparticles2"
              className={styles.particles}
              options={options}
            />
          </StyledParticles>
        )}
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid
            container
            height="100%"
            py={6}
            width="100%"
            alignContent="center"
            justifyContent="center"
            spacing={6}
          >
            <Grid size={{ xs: 12 }} p={4}>
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="2rem"
                variant="h2"
                component="h2"
                textAlign="center"
              >
                Today&apos;s Featured Reader
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }} sx={{ width: "100%", zIndex: 999 }}>
              {/* avoid the "online" status while loading */}
              <ReaderCard
                // {...READER_CARDS[0]}
                {...GET_READER_CARD(key)}
                status={getStatus(
                  getReaderByPin(Number(GET_READER_CARD(key).pin))?.status,
                )}
                onChooseCallOptions={() => undefined}
                mode="featured"
                description={description}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </StyledFeaturedReaderSection>
  );
};
