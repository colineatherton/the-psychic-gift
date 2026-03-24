import { READER_CONFIG_MAP, getReaderKeyBySlug } from "@/lib/constants/readers";
import { notFound } from "next/navigation";
import { ReaderPageClient } from "./ReaderPageClient";

const BASE_URL = "https://thepsychicgift.co.uk";

export function generateStaticParams() {
  return Object.values(READER_CONFIG_MAP).map((reader) => ({ slug: reader.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const key = getReaderKeyBySlug(slug);
  const config = key ? READER_CONFIG_MAP[key] : undefined;
  if (!config) return {};

  const primaryAbility = config.specialties.abilities[0] ?? "psychic";
  const shortDesc = config.description.length > 140
    ? config.description.slice(0, 137) + "…"
    : config.description;

  return {
    title: `${config.name} (PIN ${config.pin}) | Psychic Reader`,
    description: `Speak to ${config.name}, an experienced ${primaryAbility} reader. ${shortDesc}`,
    openGraph: {
      title: `${config.name} | Psychic Reader | The Psychic Gift`,
      description: config.description,
      url: `${BASE_URL}/psychic-readers/${slug}`,
      siteName: "The Psychic Gift",
      type: "profile",
    },
  };
}

export default async function PsychicReader({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const key = getReaderKeyBySlug(slug);
  const config = key ? READER_CONFIG_MAP[key] : undefined;

  if (!config) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Our Psychics", item: `${BASE_URL}/psychic-readers` },
      { "@type": "ListItem", position: 3, name: config.name, item: `${BASE_URL}/psychic-readers/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ReaderPageClient readerKey={key!} config={config} />
    </>
  );
}
