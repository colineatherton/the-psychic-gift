"use client";

import { PhoneCallout } from "@/components/PhoneCallout/PhoneCallout";
import { PrimaryCTAButton } from "@/components/PrimaryCTAButton/PrimaryCTAButton";
import { MobileQuickAccess } from "@/components/MobileQuickAccess/MobileQuickAccess";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";

export const HeroMobile = () => {
  const { handleFindYourPsychic } = useReaderSelectContext();
  const theme = useTheme();

  return (
    <>
      <MobileQuickAccess />
      <Container maxWidth="lg" sx={{ pb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 1 }}>
          <Image
            src="/illustrations/person-on-phone.png"
            alt="Illustration"
            width={1131}
            height={1417}
            priority
            sizes="80vw"
            style={{ width: "80%", height: "auto" }}
          />
        </Box>

        <Typography
          fontWeight={700}
          variant="h1"
          component="h1"
          marginBottom={2}
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

        <Box sx={{ mb: 3 }}>
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

        <PhoneCallout onDark />

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
