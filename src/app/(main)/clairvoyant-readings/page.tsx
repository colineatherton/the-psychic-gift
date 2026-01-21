import { Container, Grid } from "@mui/material";
import ClairvoyantReadingsContent from "./ClairvoyantReadingsContent";

export const metadata = {
  title: "Clairvoyant Readings by Phone | Speak to a Clairvoyant | The Psychic Gift",
  description:
    "Connect with experienced clairvoyants for psychic readings by phone. Our clairvoyant readers use their psychic vision to offer guidance on love, relationships, and life decisions.",
  openGraph: {
    title: "Clairvoyant Readings | The Psychic Gift",
    description:
      "Speak to an experienced clairvoyant by phone. Receive psychic insight and guidance on love, career, and life from trusted readers.",
    url: "https://thepsychicgift.co.uk/clairvoyant-readings",
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

export default function ClairvoyantReadings() {
  return (
    <Container maxWidth="lg">
      <Grid container minHeight="100vh" py={6} width={"100%"}>
        <Grid size={12} mt={20}>
          <ClairvoyantReadingsContent />
        </Grid>
      </Grid>
    </Container>
  );
}
