import { Container, Grid } from "@mui/material";
import TelephonePsychicsContent from "./TelephonePsychicsContent";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata = {
  title: "Telephone Psychics | Speak to a Psychic by Phone | The Psychic Gift",
  description:
    "Connect with experienced telephone psychics for personal guidance and spiritual insight. Our gifted readers are available by phone 24/7. Call now for your reading.",
  openGraph: {
    title: "Telephone Psychics | The Psychic Gift",
    description:
      "Speak directly to a telephone psychic for guidance on love, life, and relationships. Experienced readers available now.",
    url: "https://thepsychicgift.co.uk/telephone-psychics",
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
};

export default function TelephonePsychics() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Telephone Psychics", path: "/telephone-psychics" }])) }}
      />
      <Container maxWidth="lg">
        <Grid container minHeight="100vh" py={6} width={"100%"}>
          <Grid size={12} mt={20}>
            <TelephonePsychicsContent />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
