"use client";

import { TrustBadge } from "@/components/TrustBadge/TrustBadge";
import { Box, Container, Grid, Stack } from "@mui/material";

export const TrustBadges = () => {
  return (
    <Box
      sx={{
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
        <Grid container height="100%" py={10} width={"100%"}>
          <Stack
            direction="row"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
          >
            <TrustBadge src="readings-given.png" />
            <TrustBadge src="est-2002.png" />
            <TrustBadge src="satisfaction-guarantee-2.png" />
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};
