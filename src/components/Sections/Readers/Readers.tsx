"use client";

import { getStatus } from "@/components/ReaderFilters/ReaderFilters";
import { Reader, ReaderGrid } from "@/components/ReaderGrid/ReaderGrid";
import { READER_CARDS } from "@/lib/constants/readers";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { Status } from "@/lib/types/readers";
import { Box, Button, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useMemo, useState } from "react";

const MOBILE_READER_LIMIT = 3;

export const Readers = () => {
  const { getReaderByPin } = useReaderFeedContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showAll, setShowAll] = useState(false);

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

  const displayedReaders =
    isMobile && !showAll ? sorted.slice(0, MOBILE_READER_LIMIT) : sorted;
  const hasMore = isMobile && sorted.length > MOBILE_READER_LIMIT;

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container height="100%" py={6} width={"100%"}>
          <ReaderGrid readers={displayedReaders} mode="compact" />
        </Grid>
        {hasMore && (
          <Box sx={{ display: "flex", justifyContent: "center", pb: 4 }}>
            <Button
              variant="outlined"
              onClick={() => setShowAll((prev) => !prev)}
              sx={{ borderRadius: 8, px: 4 }}
            >
              {showAll ? "Show Less" : `Show More (${sorted.length - MOBILE_READER_LIMIT} more)`}
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};
