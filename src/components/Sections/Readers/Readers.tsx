"use client";

import { getStatus } from "@/components/ReaderFilters/ReaderFilters";
import { Reader, ReaderGrid } from "@/components/ReaderGrid/ReaderGrid";
import { READER_CARDS } from "@/lib/constants/readers";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { Status } from "@/lib/types/readers";
import { Box, Container, Grid } from "@mui/material";
import { useMemo } from "react";

export const Readers = () => {
  const { getReaderByPin } = useReaderFeedContext();

  const statusOrder: Record<Status, number> = {
    [Status.online]: 0,
    [Status.busy]: 1,
    [Status.offline]: 2,
  };

  const readersWithStatus: Reader[] = useMemo(() => {
    return READER_CARDS.map((reader) => {
      const apiReader = getReaderByPin(Number(reader.pin));
      return {
        ...reader,
        status: apiReader ? getStatus(apiReader.status) : Status.offline,
      };
    });
  }, [getReaderByPin]);

  // 🎯 Filter logic
  const filtered = readersWithStatus.filter((reader) => {
    return reader.status === "online" || reader.status === "busy";
  });

  const sorted = [...filtered].sort(
    (a, b) => statusOrder[a.status] - statusOrder[b.status],
  );

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container height="100%" py={6} width={"100%"}>
          <ReaderGrid readers={sorted} mode="compact" />
        </Grid>
      </Container>
    </Box>
  );
};
