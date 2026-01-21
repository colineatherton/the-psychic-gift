export const metadata = {
  title: "Terms and Conditions | The Psychic Gift",
  description:
    "Read the terms and conditions for using The Psychic Gift psychic phone reading service. Information on pricing, payments, and service guidelines.",
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
