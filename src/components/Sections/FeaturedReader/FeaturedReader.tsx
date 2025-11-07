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
  return "robbie-3443";
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
          <Grid size={{ xs: 12, md: 8 }} sx={{ width: "100%" }}>
            <ReaderCard
              {...READER_CARDS[0]}
              onCallNow={() => undefined}
              mode="featured"
              description={description}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
