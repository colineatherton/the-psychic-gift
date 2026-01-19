import { Container, Grid } from "@mui/material";
import AboutContent from "../about/AboutContent";
import HowPsychicReadingsWork from "./HowPsychicReadingsWork";

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
