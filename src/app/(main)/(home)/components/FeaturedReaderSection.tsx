"use client";

import { CTAButton } from "@/components/CTAButton/CTAButton";
import { CTA_PRIMARY_LABEL } from "@/lib/constants/messages";
import { Grid, Stack, Typography } from "@mui/material";

export default function FeaturedReaderSection() {
  return (
    <>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="/featured/featured-robbie.png"
          alt="Illustration"
          style={{
            width: "50%",
            height: "auto",
            display: "flex",
            margin: "0 auto",
            alignSelf: "center",
          }}
        />
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        alignContent={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
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
          This week&apos;s star reader: Robbie
        </Typography>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color="primary"
          lineHeight="1.6"
          variant="body2"
          component="p"
          textAlign="center"
          marginTop={2}
        >
          Robbie is a very warm and eloquent medium and psychic; he believes in
          spiritual transformation and positive thinking. If your life is off
          balance then he is the right reader to make you feel healed and back
          on your correct pathway. Robbie believes in harnessing the law of
          attraction - everything is possible when you believe.
        </Typography>
        <Stack
          direction="column"
          alignItems="center"
          display="flex"
          justifyContent="center"
          marginTop={4}
        >
          <CTAButton variant="primary" mb={4} label={CTA_PRIMARY_LABEL} />
          <CTAButton
            variant="secondary"
            size="medium"
            mb={4}
            label="Learn more about Robbie"
          />
        </Stack>
      </Grid>
    </>
  );
}
