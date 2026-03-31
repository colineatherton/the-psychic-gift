import { Container, Grid } from "@mui/material";
import PrivacyContent from "./PrivacyContent";

export const metadata = {
  title: "Privacy Policy | The Psychic Gift",
  description:
    "Read The Psychic Gift privacy policy. Learn how we collect, use, and protect your personal data when you use our psychic phone reading service.",
  openGraph: {
    title: "Privacy Policy | The Psychic Gift",
    description:
      "Privacy policy for The Psychic Gift. How we handle your data.",
    url: "https://www.thepsychicgift.com/privacy-policy",
    siteName: "The Psychic Gift",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <Container maxWidth="lg">
      <Grid container minHeight="100vh" py={6} width="100%">
        <Grid size={12} mt={20}>
          <PrivacyContent />
        </Grid>
      </Grid>
    </Container>
  );
}
