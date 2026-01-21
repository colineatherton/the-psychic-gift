"use client";

import { PrimaryCTAButton } from "@/components/PrimaryCTAButton/PrimaryCTAButton";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function ReaderNotFound() {
  return (
    <Container maxWidth="lg">
      <Grid container minHeight="100vh" py={6} width={"100%"}>
        <Grid size={12} mt={20}>
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={700}
              fontSize="3rem"
              variant="h1"
              component="h1"
            >
              Reader Not Found
            </Typography>
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontSize="1.2rem"
              lineHeight="1.8"
              variant="body1"
              component="p"
              maxWidth="600px"
            >
              We couldn&apos;t find the psychic reader you&apos;re looking for.
              They may have moved or the link might be outdated.
            </Typography>
            <Stack direction="row" spacing={2} mt={4}>
              <Link href="/psychic-readers">
                <PrimaryCTAButton
                  size="large"
                  label="View All Readers"
                  onClick={() => {}}
                />
              </Link>
              <Link href="/">
                <PrimaryCTAButton
                  size="large"
                  label="Go Home"
                  onClick={() => {}}
                />
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
