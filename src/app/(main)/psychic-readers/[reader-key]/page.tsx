import { READER_CONFIG_MAP } from "@/lib/constants/readers";
import { notFound } from "next/navigation";

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

// key is i.e amara and if the key is not found, it will return a 404
// if overlap we will include -[specialty] and then -[pin]

export default async function PsychicReader({
  params,
}: {
  params: { "reader-key": string };
}) {
  const key = params["reader-key"];
  const config = READER_CONFIG_MAP[key];

  if (!config) {
    notFound(); // Returns a 404 page if the key is not found
  }

  return (
    <>
      <h1>psychic reader</h1>
      <p>
        ✅ Purpose: Build reader trust, increase call conversion, expand SEO
        footprint
      </p>
      <p>🎯 Goal: Help hesitant or returning users pick someone specific</p>
      <p>📦 Content & Features:</p>
      <p>• Reader name, image, and live status badge</p>
      <p>• Skill tags (clairvoyant, tarot, love readings, etc.)</p>
      <p>• Short personal bio</p>
      <p>• Tap-to-call buttons for all payment methods</p>
      <p>• PIN code display</p>
      <p>• Review/testimonial block (optional)</p>
      <p>• Link back to /our-psychics and other available readers</p>
      <hr></hr>

      <div style={{ maxWidth: 500, margin: "0 auto", padding: 24 }}>
        <h1>{config.name}</h1>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* <Image
            src={`/${config.imageUrl}`}
            alt={config.name}
            width={120}
            height={120}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          /> */}
          <div>
            <div>
              <strong>PIN:</strong> {config.pin}
            </div>
            <div>
              <strong>Specialties:</strong>{" "}
              {config.specialties.abilities.join(", ")}
            </div>
            <div>
              <strong>Topics:</strong> {config.specialties.topics.join(", ")}
            </div>
          </div>
        </div>
        <p style={{ marginTop: 16 }}>{config.description}</p>
        <button
          style={{
            marginTop: 24,
            padding: "12px 24px",
            background: "#e57373",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          {config.ctaText}
        </button>
      </div>
    </>
  );
}
