"use client";

import { PhoneCallout } from "@/components/PhoneCallout/PhoneCallout";
import { PrimaryCTAButton } from "@/components/PrimaryCTAButton/PrimaryCTAButton";
import { MobileQuickAccess } from "@/components/MobileQuickAccess/MobileQuickAccess";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export const HeroMobile = () => {
  const { handleFindYourPsychic } = useReaderSelectContext();
  const theme = useTheme();
  const ctaRef = useRef<HTMLDivElement>(null);
  const [quickAccessVisible, setQuickAccessVisible] = useState(false);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setQuickAccessVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <MobileQuickAccess visible={quickAccessVisible} />
      <Container maxWidth="lg" sx={{ paddingTop: 2, paddingBottom: 4 }}>
        <Typography
          fontWeight={700}
          variant="h1"
          component="h1"
          marginBottom={2}
          marginTop={2}
          sx={{
            fontSize: "3rem",
            background: `linear-gradient(135deg, #ffffff 40%, ${theme.palette.primary.light} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Psychic Phone Readings
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/illustrations/person-on-phone.png"
            alt="Illustration"
            style={{ width: "80%", height: "auto" }}
          />
        </Box>

        {/* CTA — observed: quick access panel appears when this leaves viewport */}
        <Box ref={ctaRef} sx={{ mb: 3 }}>
          <PrimaryCTAButton
            size="large"
            fullWidth
            onClick={handleFindYourPsychic}
            label="Find Your Psychic"
            mb={0}
          />
        </Box>

        <Typography
          fontWeight={500}
          variant="h2"
          component="h2"
          sx={{ fontSize: "1.3rem", mb: 2 }}
        >
          Speak with Gifted Clairvoyants by Phone Today
        </Typography>

        <PhoneCallout />

        <Typography
          fontWeight={500}
          fontSize="0.95rem"
          lineHeight="1.6"
          variant="body2"
          component="p"
          sx={{ mt: 2, opacity: 0.85 }}
        >
          Speak to a caring psychic and find clarity in love, life, or your
          next steps - relied on for over 23 years.
        </Typography>
      </Container>
    </>
  );
};
