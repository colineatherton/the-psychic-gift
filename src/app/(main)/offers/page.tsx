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
    <>
      <h1>offers</h1>
      <p>✅ Purpose: Price-sensitive entry point</p>
      <p>🎯 Goal: Convert users unsure if they want to pay full price</p>
      <p>📦 Content & Elements:</p>
      <p>• Hero: “Psychic Reading Offers”</p>
      <p>• Featured offer tile (e.g. 5 mins for £5)</p>
      <p>• Pricing comparison (credit card vs phone bill vs prepay)</p>
      <p>• Reader grid or reader preview</p>
      <p>• Trust builder section: “Why we offer this”</p>
      <p>• FAQs about payment, rates, promo codes</p>
    </>
  );
}
