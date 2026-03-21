"use client";

import { READER_CARDS } from "@/lib/constants/readers";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { Status } from "@/lib/types/readers";
import React, { ChangeEvent, useMemo, useState } from "react";
import { ReaderFilters } from "../ReaderFilters/ReaderFilters";
import { ReaderGrid } from "../ReaderGrid/ReaderGrid";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import pluralize from "@theothergothamdev/pluralize-ts";

export const getStatus = (status: number | undefined): Status => {
  switch (status) {
    case 0:
      return Status.offline;
    case 1:
      return Status.online;
    case 2:
      return Status.busy;
    default:
      return Status.online;
  }
};

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

export const ReaderFiltersController = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { getReaderByPin } = useReaderFeedContext();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortBy, setSortBy] = useState<"alpha" | "status">("status");
  const [selectedStatuses, setSelectedStatuses] = useState<
    {
      label: string;
      key?: string;
    }[]
  >([]);
  const [selectedSkills, setSelectedSkills] = useState<
    {
      label: string;
    }[]
  >([]);
  const [selectedTools, setSelectedTools] = useState<
    {
      label: string;
    }[]
  >([]);
  const [selectedAbilities, setSelectedAbilities] = useState<
    {
      label: string;
    }[]
  >([]);
  const [selectedTopics, setSelectedTopics] = useState<
    {
      label: string;
    }[]
  >([]);

  const activeFilterCount =
    selectedStatuses.length +
    selectedSkills.length +
    selectedTools.length +
    selectedAbilities.length +
    selectedTopics.length;

  const clearAllFilters = () => {
    setSelectedStatuses([]);
    setSelectedSkills([]);
    setSelectedTools([]);
    setSelectedAbilities([]);
    setSelectedTopics([]);
  };

  const handleStatusChange = (
    statuses: {
      key?: string;
      label: string;
    }[],
  ) => {
    setSelectedStatuses(statuses);
  };

  const handleSkillChange = (
    skills: {
      label: string;
    }[],
  ) => {
    setSelectedSkills(skills);
  };

  const handleToolChange = (
    tools: {
      label: string;
    }[],
  ) => {
    setSelectedTools(tools);
  };

  const handleAbilityChange = (
    abilities: {
      label: string;
    }[],
  ) => {
    setSelectedAbilities(abilities);
  };

  const handleTopicChange = (
    topics: {
      label: string;
    }[],
  ) => {
    setSelectedTopics(topics);
  };

  const handleSortChange = (
    event:
      | ChangeEvent<Omit<HTMLInputElement, "value"> & { value: string }>
      | (Event & { target: { value: string; name: string } }),
  ) => {
    // MUI Select passes event as SyntheticEvent with target.value
    const value =
      "target" in event &&
      typeof (event.target as HTMLInputElement).value === "string"
        ? (event.target as HTMLInputElement).value
        : sortBy;
    setSortBy(value as "alpha" | "status");
  };

  const readersWithStatus = useMemo(() => {
    return READER_CARDS.map((reader) => {
      const apiReader = getReaderByPin(Number(reader.pin));
      return {
        ...reader,
        status: apiReader ? getStatus(apiReader.status) : Status.offline,
      };
    });
  }, [getReaderByPin]);

  const filtered = readersWithStatus.filter((reader) => {
    // const statusMatch =
    //   statusFilter === "all" || reader.status === statusFilter;
    const statusMatch =
      selectedStatuses.length === 0 ||
      selectedStatuses.map((s) => s.key).includes(reader.status.toString());

    const readerSkillsLower = reader.skills.map((s) => s.toLowerCase());

    const skillMatch =
      selectedSkills.length === 0 ||
      selectedSkills
        .map((s) => s.label.toLowerCase())
        .every((label) => readerSkillsLower.includes(label));

    const toolMatch =
      selectedTools.length === 0 ||
      selectedTools
        .map((t) => t.label.toLowerCase())
        .every((label) => readerSkillsLower.includes(label));

    const abilityMatch =
      selectedAbilities.length === 0 ||
      selectedAbilities
        .map((a) => a.label.toLowerCase())
        .every((label) => readerSkillsLower.includes(label));

    const topicMatch =
      selectedTopics.length === 0 ||
      selectedTopics
        .map((t) => t.label.toLowerCase())
        .every((label) => readerSkillsLower.includes(label));

    return statusMatch && skillMatch && toolMatch && abilityMatch && topicMatch;
  });

  const statusOrder: Record<Status, number> = {
    [Status.online]: 0,
    [Status.busy]: 1,
    [Status.offline]: 2,
  };

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "alpha") return a.name.localeCompare(b.name);
    if (sortBy === "status")
      return statusOrder[a.status] - statusOrder[b.status];
    return 0;
  });

  const filterProps = {
    filters: {
      sortBy,
      selectedStatuses,
      selectedSkills,
      selectedTools,
      selectedAbilities,
      selectedTopics,
    },
    onStatusChange: handleStatusChange,
    onSkillChange: handleSkillChange,
    onToolChange: handleToolChange,
    onAbilityChange: handleAbilityChange,
    onTopicChange: handleTopicChange,
    onSort: handleSortChange,
  };

  return (
    <>
      <Grid size={{ xs: 12 }} mt={20}>
        <Typography
          fontWeight={500}
          fontSize="2rem"
          variant="h2"
          component="h2"
          textAlign="center"
          color={theme.palette.text.primary}
        >
          Explore our gifted psychic readers
        </Typography>
      </Grid>

      {/* Desktop: inline filters */}
      {!isMobile && <ReaderFilters {...filterProps} />}

      {/* Mobile: filter trigger button */}
      {isMobile && (
        <Box sx={{ mt: 4, mb: 2, width: "100%" }}>
          <Button
            fullWidth
            startIcon={<TuneIcon />}
            variant="outlined"
            onClick={() => setDrawerOpen(true)}
            sx={{ borderRadius: 8, textTransform: "none" }}
          >
            Filter & Sort
            {activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}
          </Button>
          <Typography variant="body2" color="secondary.main" textAlign="center" mt={1}>
            ✨ {sorted.length} {pluralize("psychics", sorted.length)}{" "}
            {sorted.length < 2 ? "matches" : "match"}
          </Typography>
        </Box>
      )}

      {/* Mobile: bottom drawer */}
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: "16px 16px 0 0",
            px: 2,
            pb: 3,
            maxHeight: "85vh",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
            flexShrink: 0,
          }}
        >
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontWeight={600}
            fontSize="1.1rem"
          >
            Filter & Sort
            {activeFilterCount > 0 && (
              <Typography
                component="span"
                fontSize="0.85rem"
                color="text.secondary"
                ml={1}
              >
                ({activeFilterCount} active)
              </Typography>
            )}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {activeFilterCount > 0 && (
              <Button
                size="small"
                onClick={clearAllFilters}
                sx={{ textTransform: "none" }}
              >
                Clear all
              </Button>
            )}
            <IconButton onClick={() => setDrawerOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <Divider sx={{ flexShrink: 0 }} />
        <Box sx={{ overflowY: "auto", flexGrow: 1 }}>
          <ReaderFilters {...filterProps} />
        </Box>
        <Button
          variant="contained"
          fullWidth
          onClick={() => setDrawerOpen(false)}
          sx={{
            borderRadius: 8,
            mt: 2,
            pt: 1.5,
            pb: 1.5,
            flexShrink: 0,
            backgroundColor: theme.palette.accent.primary,
            color: theme.palette.accent.primaryHighlight,
          }}
        >
          Show {sorted.length} {pluralize("psychics", sorted.length)}
        </Button>
      </Drawer>

      {/* Desktop: result count */}
      {!isMobile && (
        <Grid size={{ xs: 12 }} mb={4} textAlign="center">
          <Typography>
            ✨ {sorted.length} {pluralize("psychics", sorted.length)}{" "}
            {sorted.length < 2 ? "matches" : "match"} your filters ✨
          </Typography>
        </Grid>
      )}

      <ReaderGrid readers={sorted} />
    </>
  );
};
