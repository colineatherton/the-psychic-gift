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
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            width="100%"
            justifyContent="center"
            gap={{ xs: 4, md: 6 }}
          >
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <TrustBadge src="readings-given.png" alt="Millions of readings given" />
            </Box>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <TrustBadge src="est-2002.png" alt="Established 2002" />
            </Box>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <TrustBadge
                src="satisfaction-guarantee-2.png"
                alt="Satisfaction guarantee"
                href="/terms-and-conditions#satisfaction-guarantee"
              />
            </Box>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};
