"use client";

import theme from "@/app/theme";
import { PrimaryCTAButton } from "@/components/PrimaryCTAButton/PrimaryCTAButton";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import pluralize from "@theothergothamdev/pluralize-ts";

interface CTASectionProps {
  heading: string;
}

export function CTA({ heading }: CTASectionProps) {
  const { getOnlineReaders } = useReaderFeedContext();
  const { handleFindYourPsychic } = useReaderSelectContext();
  const onlineReadersCount = getOnlineReaders().length;

  return (
    <Box
      sx={{
        background: (theme) => theme.palette.primary.light,
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
        <Grid container height="100%" py={6} width={"100%"}>
          <Stack
            direction="column"
            alignItems="center"
            spacing={4}
            width="100%"
            justifyItems={"center"}
          >
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={500}
              fontSize="2rem"
              color={theme.palette.text.primary}
              lineHeight="1.6"
              variant="h2"
              component="h2"
              marginBottom={4}
              textAlign="center"
            >
              {heading}
            </Typography>
            <PrimaryCTAButton
              size="large"
              onClick={handleFindYourPsychic}
              label="Find Your Psychic"
              mb={4}
            />
            {onlineReadersCount > 0 && (
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="1rem"
                color={theme.palette.text.primary}
                lineHeight="1.6"
                variant="body2"
                component="p"
                textAlign="center"
                marginTop={2}
              >
                ✨ {onlineReadersCount}{" "}
                {pluralize("psychics", onlineReadersCount)}{" "}
                {pluralize("are", onlineReadersCount)} available to take your
                call ✨
              </Typography>
            )}
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
}
