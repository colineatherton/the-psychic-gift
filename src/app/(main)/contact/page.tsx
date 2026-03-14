import { Container, Grid } from "@mui/material";
import ContactContent from "./ContactContent";
import { ReCaptchaProvider } from "@/components/ReCaptchaProvider/ReCaptchaProvider";

export const metadata = {
  title: "Contact Us | The Psychic Gift",
  description:
    "Get in touch with The Psychic Gift. Contact our support team for assistance with your psychic reading, billing questions, or general enquiries.",
  openGraph: {
    title: "Contact Us | The Psychic Gift",
    description:
      "Contact The Psychic Gift support team. We're here to assist with any questions.",
    url: "https://thepsychicgift.co.uk/contact",
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
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <ReCaptchaProvider>
      <Container maxWidth="lg">
        <Grid container minHeight="100vh" py={6} width="100%">
          <Grid size={12} mt={20}>
            <ContactContent />
          </Grid>
        </Grid>
      </Container>
    </ReCaptchaProvider>
  );
}
