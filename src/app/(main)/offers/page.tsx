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

export default function Offers() {
  return (
    <Container maxWidth="lg">
      <Grid container minHeight="100vh" py={6} width={"100%"}>
        <Grid size={12} mt={20}>
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontWeight={700}
            fontSize="2.5rem"
            variant="h1"
            component="h1"
            marginBottom={4}
          >
            Special Offers
          </Typography>
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontWeight={500}
            fontSize="1.2rem"
            variant="h2"
            component="h2"
            marginBottom={6}
          >
            Exclusive Deals for New Clients
          </Typography>
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontSize="1rem"
            lineHeight="1.8"
            variant="body1"
            component="p"
            marginBottom={4}
          >
            Welcome to The Psychic Gift! We&apos;re delighted to offer you exclusive
            introductory rates to experience our gifted psychic readers.
          </Typography>
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontSize="1.2rem"
            fontWeight={600}
            variant="h3"
            component="h3"
            marginTop={6}
            marginBottom={3}
          >
            🎁 New Client Offer
          </Typography>
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontSize="1rem"
            lineHeight="1.8"
            variant="body1"
            component="p"
            marginBottom={2}
          >
            <strong>10 Minutes for just £5</strong> - available to all new clients!
          </Typography>
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontSize="1rem"
            lineHeight="1.8"
            variant="body1"
            component="p"
            marginBottom={2}
          >
            To claim this exclusive offer, simply call{" "}
            <a href="tel:08009152333">
              <strong>0800 915 2333</strong>
            </a>{" "}
            and quote <strong>&quot;DISCOVER&quot;</strong> when you connect with your
            chosen psychic reader.
          </Typography>
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontSize="0.9rem"
            lineHeight="1.8"
            variant="body2"
            component="p"
            marginTop={6}
            color="text.secondary"
          >
            Terms and conditions apply. Offer valid for new clients only. Standard rates
            apply after the promotional period.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
