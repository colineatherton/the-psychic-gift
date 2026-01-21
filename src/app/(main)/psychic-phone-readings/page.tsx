import { Container, Grid } from "@mui/material";
import PsychicPhoneReadingsContent from "./PsychicPhoneReadingsContent";

export const metadata = {
  title: "Psychic Phone Readings | Speak to a Psychic Now | The Psychic Gift",
  description:
    "Connect with experienced psychic readers by phone, 24/7. Our trusted clairvoyants, mediums, and tarot readers offer guidance on love, relationships, and life decisions. Call now.",
  openGraph: {
    title: "Psychic Phone Readings | The Psychic Gift",
    description:
      "Speak to a trusted psychic by phone, any time of day or night. Get guidance on love, career, and life from experienced clairvoyants and mediums.",
    url: "https://thepsychicgift.co.uk/psychic-phone-readings",
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

export default function PsychicPhoneReadings() {
  return (
    <Container maxWidth="lg">
      <Grid container minHeight="100vh" py={6} width={"100%"}>
        <Grid size={12} mt={20}>
          <PsychicPhoneReadingsContent />
        </Grid>
      </Grid>
    </Container>
  );
}
