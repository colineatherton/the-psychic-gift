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

export default function About() {
  return (
    <>
      <h1>about</h1>
      <p>✅ Purpose: Brand story + emotional trust</p>
      <p>🎯 Goal: Humanise the business, differentiate from cold competitors</p>
      <p>📦 Content & Elements:</p>
      <p>• “Why we started CertainSight”</p>
      <p>• John’s story (origin, legacy)</p>
      <p>• Family angle: you, your wife, John as founders</p>
      <p>• Brand mission</p>
      <p>• Image or AI-portrait of founders (soft touch)</p>
      <p>• Timeline or “Our journey so far”</p>
    </>
  );
}
