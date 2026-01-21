"use client";

import { ReaderCard } from "@/components/ReaderCard/ReaderCard";
import { READER_CONFIG_MAP } from "@/lib/constants/readers";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import { Status } from "@/lib/types/readers";
import { Box, Container, Grid } from "@mui/material";
import { notFound } from "next/navigation";
import { use } from "react";

// todo: refactor page so it is not use client and restore metadata
// export const metadata = {
//   title: "Phoenix Rising | Awaken Your Vision",
//   description: "Track your creative ascent with clarity, focus, and fire.",
//   openGraph: {
//     title: "Phoenix Rising",
//     description: "An app to help you rise from the ashes.",
//     url: "https://phoenixrising.app",
//     siteName: "Phoenix Rising",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     type: "website",
//   },
// };

// key is i.e amara and if the key is not found, it will return a 404
// if overlap we will include -[specialty] and then -[pin]

export default function PsychicReader({
  params,
}: {
  params: Promise<{ "reader-key": string }>;
}) {
  const { "reader-key": key } = use(params);
  const config = READER_CONFIG_MAP[key];

  if (!config) {
    notFound(); // Returns a 404 page if the key is not found
  }

  const { handleChooseCallOptions } = useReaderSelectContext();
  const { getReaderByPin } = useReaderFeedContext();

  // Combine all specialties for the skills display
  const allSkills = [
    ...config.specialties.abilities,
    ...config.specialties.tools,
    ...config.specialties.topics,
    ...config.specialties.themes,
  ];

  // Get dynamic status from reader feed
  const readerFeedData = getReaderByPin(config.pin);
  const readerStatus = readerFeedData
    ? readerFeedData.status === 1
      ? Status.online
      : readerFeedData.status === 2
        ? Status.busy
        : Status.offline
    : Status.offline;

  return (
    <Container maxWidth="lg">
      <Grid container minHeight="100vh" py={6} width={"100%"}>
        <Grid size={12} mt={20}>
          <Box display="flex" justifyContent="center">
            <Box sx={{ maxWidth: 600, width: "100%" }}>
              <ReaderCard
                name={config.name}
                pin={config.pin.toString()}
                status={readerStatus}
                skills={allSkills}
                mode="featured"
                description={config.description}
                onChooseCallOptions={handleChooseCallOptions}
                hideViewProfile={true}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
