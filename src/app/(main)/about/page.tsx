import { Container, Grid } from "@mui/material";
import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Us | The Psychic Gift",
  description:
    "Learn about The Psychic Gift and our carefully chosen team of clairvoyants, mediums, and tarot readers. Trusted psychic readings by phone since 2002.",
  openGraph: {
    title: "About Us | The Psychic Gift",
    description:
      "Discover our story and meet the gifted psychic readers behind The Psychic Gift.",
    url: "https://thepsychicgift.co.uk/about",
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

export default function About() {
  return (
    <Container maxWidth="lg">
      <Grid container minHeight="100vh" py={6} width={"100%"}>
        <Grid size={12} mt={20}>
          <AboutContent />
        </Grid>
      </Grid>
    </Container>
  );
}
