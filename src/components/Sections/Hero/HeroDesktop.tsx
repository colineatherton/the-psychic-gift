"use client";

import { PhoneCallout } from "@/components/PhoneCallout/PhoneCallout";
import { PrimaryCTAButton } from "@/components/PrimaryCTAButton/PrimaryCTAButton";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";

export const HeroDesktop = () => {
  const { handleFindYourPsychic } = useReaderSelectContext();
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "calc(80vh - 32px)",
        display: "flex",
        alignItems: "center",
        paddingTop: { sm: "4rem", md: "8rem" },
      }}
    >
      <Grid container height="100%" width="100%">
        <Grid
          size={{ sm: 7 }}
          sx={{
            paddingRight: { sm: theme.spacing(4), md: theme.spacing(6) },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            fontWeight={700}
            variant="h1"
            component="h1"
            marginBottom={2}
            marginTop={2}
            sx={{
              fontSize: { sm: "3rem", md: "4rem" },
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
            marginBottom={4}
            sx={{ fontSize: { sm: "1.6rem", md: "2rem" } }}
          >
            Speak with Gifted Clairvoyants by Phone Today
          </Typography>
          <Typography
            fontWeight={500}
            fontSize="1rem"
            lineHeight="1.6"
            variant="body2"
            component="p"
            marginBottom={4}
          >
            Speak to a caring psychic and find clarity in love, life, or your
            next steps - relied on for over 23 years.
          </Typography>
          <Box sx={{ display: "inline-block" }}>
            <PrimaryCTAButton
              size="large"
              onClick={handleFindYourPsychic}
              label="Find Your Psychic"
              mb={4}
            />
          </Box>
          <PhoneCallout onDark />
        </Grid>
        <Grid
          size={{ sm: 5 }}
          display="flex"
          height="100%"
          alignSelf="center"
          justifySelf="flex-end"
        >
          <Image
            src="/illustrations/person-on-phone.png"
            alt="Illustration"
            width={1131}
            height={1417}
            priority
            sizes="(min-width: 900px) 37vw, 42vw"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
