"use client";

import { ReaderCard } from "@/components/ReaderCard/ReaderCard";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import { ReaderConfig } from "@/lib/types/readers";
import { Status } from "@/lib/types/readers";
import { Box, Container, Grid } from "@mui/material";

interface ReaderPageClientProps {
  readerKey: string;
  config: ReaderConfig;
}

export function ReaderPageClient({ readerKey: _, config }: ReaderPageClientProps) {
  const { handleChooseCallOptions } = useReaderSelectContext();
  const { getReaderByPin } = useReaderFeedContext();

  const allSkills = [
    ...config.specialties.abilities,
    ...config.specialties.tools,
    ...config.specialties.topics,
    ...config.specialties.themes,
  ];

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
