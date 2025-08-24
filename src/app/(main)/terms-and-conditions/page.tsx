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

export default function TermsAndConditions() {
  return (
    <>
      <h1>terms and conditions</h1>
      <p>✅ Purpose: Set clear terms for using the service</p>
      <p>
        🎯 Goal: Cover liabilities, pricing, refunds, disclaimers (especially
        psychic-specific disclaimers)
      </p>
      <p>📦 Content Outline:</p>
      <p>
        • What the readings are and aren’t (for entertainment, not medical/legal
        advice)
      </p>
      <p>• Pricing structure</p>
      <p>• Refund policy (or “all calls final” if that’s the case)</p>
      <p>• Age requirement (usually 18+)</p>
      <p>• Payment types</p>
    </>
  );
}
