"use client";

import { Box, useTheme } from "@mui/material";
import type { Container as ParticleContainer } from "@tsparticles/engine";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";
import styles from "./Hero.module.css";
import { HeroDesktop } from "./HeroDesktop";
import { HeroMobile } from "./HeroMobile";
import { StyledContent, StyledHeroSection, StyledParticles } from "./Hero.styles";

export const Hero = () => {
  const [init, setInit] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: ParticleContainer): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { push: { quantity: 4 }, repulse: { distance: 40, duration: 1 } },
      },
      particles: {
        color: { value: theme.palette.primary.light },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: false,
          speed: 2,
          straight: true,
        },
        number: { density: { enable: true }, value: 40 },
        opacity: { value: 0.7 },
        shape: { type: "circle" },
        size: { value: { min: 2, max: 6 } },
      },
      detectRetina: true,
    }),
    [theme.palette.primary.light],
  );

  return (
    <StyledHeroSection theme={theme}>
      {/* Particles: desktop only — skip on mobile for performance */}
      {init && (
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <StyledParticles>
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              className={styles.particles}
              options={options}
            />
          </StyledParticles>
        </Box>
      )}
      <StyledContent>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <HeroMobile />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <HeroDesktop />
        </Box>
      </StyledContent>
    </StyledHeroSection>
  );
};
