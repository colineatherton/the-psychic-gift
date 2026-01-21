import { Container, Grid } from "@mui/material";
import HowPsychicReadingsWork from "./HowPsychicReadingsWork";

export const metadata = {
  title: "How Psychic Readings Work | The Psychic Gift",
  description:
    "Learn how to get a psychic phone reading with The Psychic Gift. Simple steps to connect with our trusted clairvoyants, mediums, and tarot readers 24/7.",
  openGraph: {
    title: "How Psychic Readings Work | The Psychic Gift",
    description:
      "A simple guide to getting your psychic phone reading. Choose your reader, call, and connect.",
    url: "https://thepsychicgift.co.uk/how-psychic-readings-work",
    siteName: "The Psychic Gift",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function HowItWorks() {
  return (
    <Container maxWidth="lg">
      <Grid container minHeight="100vh" py={6} width={"100%"}>
        <Grid size={12} mt={20}>
          <HowPsychicReadingsWork />
        </Grid>
      </Grid>
    </Container>
  );
}
