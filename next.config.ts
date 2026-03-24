import type { NextConfig } from "next";
import { READER_SLUG_REDIRECTS } from "./src/lib/constants/readerRedirects";

const nextConfig: NextConfig = {
  async redirects() {
    return READER_SLUG_REDIRECTS.map(({ key, slug }) => ({
      source: `/psychic-readers/${key}`,
      destination: `/psychic-readers/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
