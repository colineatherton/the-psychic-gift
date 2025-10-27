"use client";

import { PageContainer } from "@/components/PageContainer/PageContainer";
import { TrustBadge } from "@/components/TrustBadge/TrustBadge";
import { Box, Grid, Stack } from "@mui/material";

export default function TrustBadgeSection() {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.secondary.light,
        padding: 2,
      }}
    >
      <PageContainer centered>
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
      </PageContainer>
    </Box>
  );
}
