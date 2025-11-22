"use client";

import { ReaderGrid } from "@/components/ReaderGrid/ReaderGrid";
import {
  ALL_ABILITIES,
  ALL_SKILLS,
  ALL_TOOLS,
  ALL_TOPICS,
  READER_CARDS,
} from "@/lib/constants/readers";
import { Box, Container, Grid } from "@mui/material";

export const Readers = () => {
  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container height="100%" py={6} width={"100%"}>
          <ReaderGrid
            readers={READER_CARDS}
            allSkills={ALL_SKILLS()}
            allAbilities={ALL_ABILITIES()}
            allTools={ALL_TOOLS()}
            allTopics={ALL_TOPICS()}
            withFilters={false}
            onlineOnly={true}
            sortBy="status"
            mode="compact"
          />
        </Grid>
      </Container>
    </Box>
  );
};
