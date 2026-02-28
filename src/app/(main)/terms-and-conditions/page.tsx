import { Container, Grid } from "@mui/material";
import TermsContent from "./TermsContent";

export const metadata = {
  title: "Terms and Conditions | The Psychic Gift",
  description:
    "Read the terms and conditions for using The Psychic Gift psychic phone reading service. Information on pricing, payments, satisfaction guarantee and service guidelines.",
  openGraph: {
    title: "Terms and Conditions | The Psychic Gift",
    description:
      "Terms and conditions for The Psychic Gift psychic reading service.",
    url: "https://thepsychicgift.co.uk/terms-and-conditions",
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

export default function TermsAndConditions() {
  return (
    <Container maxWidth="lg">
      <Grid container minHeight="100vh" py={6} width="100%">
        <Grid size={12} mt={20}>
          <TermsContent />
        </Grid>
      </Grid>
    </Container>
  );
}
