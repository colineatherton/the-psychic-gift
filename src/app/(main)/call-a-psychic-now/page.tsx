import { Container, Grid } from "@mui/material";
import CallAPsychicNowContent from "./CallAPsychicNowContent";

export const metadata = {
  title: "Call a Psychic Now | Speak to a Psychic Immediately | The Psychic Gift",
  description:
    "Call a psychic now and connect instantly. Our experienced readers are available 24/7 for immediate guidance on love, relationships, and life. No appointment needed.",
  openGraph: {
    title: "Call a Psychic Now | The Psychic Gift",
    description:
      "Speak to a psychic immediately. Our trusted readers are online now and ready to help with love, career, and life guidance.",
    url: "https://thepsychicgift.co.uk/call-a-psychic-now",
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

export default function CallNow() {
  return (
    <Container maxWidth="lg">
      <Grid container minHeight="100vh" py={6} width={"100%"}>
        <Grid size={12} mt={20}>
          <CallAPsychicNowContent />
        </Grid>
      </Grid>
    </Container>
  );
}
