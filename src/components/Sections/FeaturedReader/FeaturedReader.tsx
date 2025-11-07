"use client";

import { PrimaryCTAButton } from "@/components/PrimaryCTAButton/PrimaryCTAButton";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  StyledReaderContainer,
  StyledReaderImg,
} from "./FeaturedReader.styles";
import { OfferCalloutCard } from "@/components/OfferCalloutCard/OfferCalloutCard";
import { Chips } from "@/components/Chips/Chips";
import { ReaderCard } from "@/components";
import { READER_CARDS, READER_CONFIG_MAP } from "@/lib/constants/readers";

const getFeaturedReaderKey = (): string => {
  // For now, return a static key. This can be enhanced to return a dynamic featured reader.
  return "3443";
};

export const FeaturedReader = () => {
  const theme = useTheme();
  const key = getFeaturedReaderKey();
  const { description } = READER_CONFIG_MAP[key];

  return (
    <Box
      sx={{
        // background: (theme) => theme.palette.primary.main,
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
        <Grid
          container
          height="100%"
          py={6}
          width="100%"
          alignContent="center"
          justifyContent="center"
          spacing={6}
        >
          <Grid size={{ xs: 12 }} pt={4} pb={8}>
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
          <Grid size={{ xs: 12, md: 4 }} sx={{ width: "100%" }}>
            <ReaderCard
              {...READER_CARDS[0]}
              onCallNow={() => undefined}
              mode="default"
              description={description}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                background: theme.palette.primary.main,
                border: `1px solid ${theme.palette.primary.dark}`,
                borderRadius: theme.spacing(1),
                padding: theme.spacing(2),
              }}
            >
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="2rem"
                lineHeight="1.6"
                variant="h2"
                component="h2"
                marginBottom={4}
                textAlign="center"
              >
                Robbie
              </Typography>
              <Typography
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="1rem"
                lineHeight="1.6"
                variant="body2"
                component="p"
                textAlign="center"
                marginTop={2}
              >
                Robbie is a very warm and eloquent medium and psychic; he
                believes in spiritual transformation and positive thinking. If
                your life is off balance then he is the right reader to make you
                feel healed and back on your correct pathway. Robbie believes in
                harnessing the law of attraction - everything is possible when
                you believe.
              </Typography>
              <Chips items={["Medium", "Psychic", "Clairvoyant"]} />
              <Stack
                direction="column"
                alignItems="center"
                display="flex"
                justifyContent="center"
                marginTop={4}
              >
                <PrimaryCTAButton
                  // mode="compact"
                  size="large"
                  onClick={() => undefined}
                  label="Find Your Psychic"
                />
                {/* <CTAButton variant="primary" mb={4} label={CTA_PRIMARY_LABEL} />
              <CTAButton
                variant="secondary"
                size="medium"
                mb={4}
                label="Learn more about Robbie"
              /> */}
              </Stack>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            alignContent={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <StyledReaderContainer>
              <StyledReaderImg src="/readers/original/3443.png" alt="Robbie" />
            </StyledReaderContainer>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                fontWeight: 600,
                mt: 2,
              }}
            >
              PIN 3443
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
