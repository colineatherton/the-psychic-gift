import NumberWithText from "@/components/NumberWithText/NumberWithText";
import { Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function HowItWorksSection() {
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
        How it works
      </Typography>
      <Grid container direction={"row"} py={4} spacing={6}>
        <Grid size={4}>
          <NumberWithText
            number="1"
            title="Choose a psychic"
            body="View our gifted psychics, see who's available now and learn
            more about them, their techniques, and specialties on their
            profiles."
          />
        </Grid>
        <Grid size={4}>
          <NumberWithText
            number="2"
            title="Call using your preferred method"
            body="When you select a reader, you'll see our call options. Choose
            to pay on your phone bill, debit or credit card or receive bonus
            minutes with our pre-pay options."
          />
        </Grid>
        <Grid size={4}>
          <NumberWithText
            number="3"
            title="Get insights and guidance instantly"
            body="Start your reading and get the clarity you’re seeking. Every call is
            recorded for your peace of mind."
          />
        </Grid>
        <Grid size={12}>
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontWeight={500}
            fontSize="1rem"
            color="#274149"
            lineHeight="1.6"
            variant="body2"
            component="p"
            textAlign="center"
            marginTop={4}
          >
            <Link href="/about">Learn more about how a reading works.</Link>
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}
