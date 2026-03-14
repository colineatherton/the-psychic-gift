import { OffersContent } from "./OffersContent";

export const metadata = {
  title: "Special Offers | The Psychic Gift",
  description:
    "Exclusive offers for new clients at The Psychic Gift. Get discounted psychic phone readings from our gifted clairvoyants, mediums, and tarot readers.",
  openGraph: {
    title: "Special Offers | The Psychic Gift",
    description:
      "Exclusive introductory offers for new clients. Try a psychic reading at a special rate.",
    url: "https://thepsychicgift.co.uk/offers",
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
  alternates: { canonical: "/offers" },
};

export default function Offers() {
  return <OffersContent />;
}
