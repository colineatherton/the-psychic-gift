"use client";

import { ReaderCard } from "@/components/ReaderCard/ReaderCard";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import { Status } from "@/lib/types/readers";
import { Box, Grid } from "@mui/material";
import React from "react";

export type Reader = {
  name: string;
  image: string;
  pin: string;
  status: Status;
  skills: string[];
  callOptions: {
    label: string;
    number: string;
  }[];
};

type ReaderGridProps = {
  readers: Reader[];
  mode?: "selected" | "default" | "compact" | "featured";
};

export const ReaderGrid: React.FC<ReaderGridProps> = ({
  readers,
  mode = "default",
}) => {
  const { handleChooseCallOptions } = useReaderSelectContext();

  return (
    <Box flexGrow={1}>
      <Box>
        <Grid container spacing={4}>
          {readers.map((reader) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={reader.pin}>
              <ReaderCard
                {...reader}
                onChooseCallOptions={handleChooseCallOptions}
                mode={mode}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
