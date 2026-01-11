import { ReaderFilters } from "@/components/ReaderFilters/ReaderFilters";
import { ReaderFiltersController } from "@/components/ReaderFiltersController/ReaderFiltersController";
import { ReaderGrid } from "@/components/ReaderGrid/ReaderGrid";
import {
  ALL_ABILITIES,
  ALL_SKILLS,
  ALL_TOOLS,
  ALL_TOPICS,
  READER_CARDS,
} from "@/lib/constants/readers";
import { Container, Grid } from "@mui/material";

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
