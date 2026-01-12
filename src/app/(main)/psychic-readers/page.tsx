import { ReaderFiltersController } from "@/components/ReaderFiltersController/ReaderFiltersController";
import { Container, Grid, Typography } from "@mui/material";

export const metadata = {
  title: "Phoenix Rising | Awaken Your Vision",
  description: "Track your creative ascent with clarity, focus, and fire.",
  openGraph: {
    title: "Phoenix Rising",
    description: "An app to help you rise from the ashes.",
    url: "https://phoenixrising.app",
    siteName: "Phoenix Rising",
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
