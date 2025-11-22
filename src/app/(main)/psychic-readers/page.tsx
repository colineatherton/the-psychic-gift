import { ReaderGrid } from "@/components/ReaderGrid/ReaderGrid";
import {
  ALL_ABILITIES,
  ALL_SKILLS,
  ALL_TOOLS,
  ALL_TOPICS,
  READER_CARDS,
} from "@/lib/constants/readers";

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

export default function PsychicReaders() {
  return (
    <>
      <h1>psychic readers</h1>
      <p>✅ Purpose: Discovery page for readers</p>
      <p>🎯 Goal: Build trust and drive engagement with reader profiles</p>
      <p>📦 Content & Elements:</p>
      <p>• Grid or card layout of all readers</p>
      <p>• Status badge (online/busy/offline)</p>
      <p>• “View Profile” or expand call options</p>
      <p>• Filters (by skill, availability, language — future)</p>
      <p>• Option to highlight featured readers</p>
      <hr></hr>
      <ReaderGrid
        readers={READER_CARDS}
        allSkills={ALL_SKILLS()}
        allAbilities={ALL_ABILITIES()}
        allTools={ALL_TOOLS()}
        allTopics={ALL_TOPICS()}
      />
    </>
  );
}
