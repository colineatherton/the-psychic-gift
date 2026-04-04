import "@fontsource-variable/montserrat";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import type { Metadata } from "next";
import { organizationJsonLd } from "@/lib/jsonld";

export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thepsychicgift.com"),
  title: {
    template: "%s | The Psychic Gift",
    default: "The Psychic Gift | Psychic Readings by Phone",
  },
  description:
    "Connect with experienced psychic readers by phone, 24/7. Gifted clairvoyants, mediums and tarot readers offering guidance on love, relationships and life. Call now.",
  openGraph: {
    siteName: "The Psychic Gift",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
