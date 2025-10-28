"use client";

import { PageContainer } from "@/components/PageContainer/PageContainer";
import { ReaderGrid } from "@/components/ReaderGrid/ReaderGrid";
import {
  ALL_ABILITIES,
  ALL_SKILLS,
  ALL_TOOLS,
  ALL_TOPICS,
  READER_CARDS,
} from "@/lib/constants/readers";
import { Box, Grid } from "@mui/material";

export default function ReadersSection() {
  return (
    <Box
      sx={{
        // gradient makes no sense since both colors are the same
        // background: (theme) =>
        //   `linear-gradient(180deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.default} 40%)`,
        padding: 2,
      }}
    >
      <PageContainer>
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
      </PageContainer>
    </Box>
  );
}
