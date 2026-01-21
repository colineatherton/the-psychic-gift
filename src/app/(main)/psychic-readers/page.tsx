import { ReaderFiltersController } from "@/components/ReaderFiltersController/ReaderFiltersController";
import { Container, Grid } from "@mui/material";

export const metadata = {
  title: "Our Psychic Readers | The Psychic Gift",
  description:
    "Browse our trusted psychic readers. Find clairvoyants, mediums, and tarot readers available now for phone readings. See who's online and choose your reader.",
  openGraph: {
    title: "Our Psychic Readers | The Psychic Gift",
    description:
      "Meet our gifted psychic readers. Browse profiles and find the right clairvoyant, medium, or tarot reader for you.",
    url: "https://thepsychicgift.co.uk/psychic-readers",
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

export default function PsychicReaders() {
  return (
    <Container maxWidth="lg">
      <Grid container height="100%" py={6} width={"100%"}>
        <ReaderFiltersController />
      </Grid>
    </Container>
  );
}
