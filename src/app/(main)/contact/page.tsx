import { Container, Grid } from "@mui/material";
import ContactContent from "./ContactContent";
import { ReCaptchaProvider } from "@/components/ReCaptchaProvider/ReCaptchaProvider";
import { breadcrumbJsonLd } from "@/lib/jsonld";

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
        url: "/opengraph-image",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])) }}
      />
      <ReCaptchaProvider>
        <Container maxWidth="lg">
          <Grid container minHeight="100vh" py={6} width="100%">
            <Grid size={12} mt={20}>
              <ContactContent />
            </Grid>
          </Grid>
        </Container>
      </ReCaptchaProvider>
    </>
  );
}
