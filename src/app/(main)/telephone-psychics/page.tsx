import { Container, Grid } from "@mui/material";
import TelephonePsychicsContent from "./TelephonePsychicsContent";

export const metadata = {
  title: "Telephone Psychics | Speak to a Psychic by Phone | The Psychic Gift",
  description:
    "Connect with experienced telephone psychics for personal guidance and spiritual insight. Our trusted readers are available by phone 24/7. Call now for your reading.",
  openGraph: {
    title: "Telephone Psychics | The Psychic Gift",
    description:
      "Speak directly to a telephone psychic for guidance on love, life, and relationships. Experienced readers available now.",
    url: "https://thepsychicgift.co.uk/telephone-psychics",
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

export default function TelephonePsychics() {
  return (
    <Container maxWidth="lg">
      <Grid container minHeight="100vh" py={6} width={"100%"}>
        <Grid size={12} mt={20}>
          <TelephonePsychicsContent />
        </Grid>
      </Grid>
    </Container>
  );
}
