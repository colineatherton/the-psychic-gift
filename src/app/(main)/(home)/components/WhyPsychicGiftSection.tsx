"use client";

import Link from "next/link";
import { Grid, Stack, Typography } from "@mui/material";
import IconWithText from "@/components/IconWithText/IconWithText";
import theme from "@/app/theme";

export default function WhyPsychicGiftSection() {
  return (
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
        color="primary"
        lineHeight="1.6"
        variant="h2"
        component="h2"
        marginBottom={4}
        textAlign="center"
      >
        Why Choose The Psychic Gift?
      </Typography>
      <Typography
        fontFamily="Montserrat Variable, sans-serif"
        fontWeight={500}
        fontSize="1rem"
        color={theme.palette.secondary.dark}
        lineHeight="1.6"
        variant="body2"
        component="p"
        textAlign="center"
        width={"80%"}
      >
        We’ve been guiding callers since 2002 — but our story goes back further.
        John, our founder, was inspired by his grandmother, a gifted medium who
        helped people long before it was mainstream. Today, we continue that
        legacy with a carefully selected team of clairvoyants, mediums, and
        tarot readers — all chosen for their empathy, integrity, and insight.
      </Typography>
      <Grid container direction={"row"} py={4} spacing={6}>
        <Grid size={4}>
          <IconWithText
            src="/icons/crystal-ball.png"
            title="Founded on a Family Legacy"
            body="Started by John and inspired by his grandmother’s own psychic gifts,
            our story is personal — not corporate."
          />
        </Grid>
        <Grid size={4}>
          <IconWithText
            src="/icons/stars.png"
            title="Hand-Picked, Gifted Psychics"
            body="Each reader is tested, verified, and chosen for their experience,
            empathy, and integrity."
          />
        </Grid>
        <Grid size={4}>
          <IconWithText
            src="/icons/hands-heart.png"
            title="Trusted by Thousands"
            body="We’ve supported countless callers through love, life, and difficult
            decisions. All calls are confidential and recorded for your peace of
            mind."
          />
        </Grid>
        <Grid size={12}>
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontWeight={500}
            fontSize="1rem"
            color={theme.palette.secondary.dark}
            lineHeight="1.6"
            variant="body2"
            component="p"
            textAlign="center"
            marginTop={4}
          >
            The Psychic Gift has helped thousands find clarity, comfort, and
            insight - through genuine readings from gifted clairvoyants and
            mediums. <Link href="/about">Learn more about our story.</Link>
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}
