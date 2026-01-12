"use client";

import { READER_CARDS } from "@/lib/constants/readers";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { Status } from "@/lib/types/readers";
import React, { ChangeEvent, useMemo, useState } from "react";
import { ReaderFilters } from "../ReaderFilters/ReaderFilters";
import { ReaderGrid } from "../ReaderGrid/ReaderGrid";
import { Grid, Typography, useTheme } from "@mui/material";
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

type ReaderFiltersControllerProps = {};

export const ReaderFiltersController: React.FC<
  ReaderFiltersControllerProps
> = ({}) => {
  const theme = useTheme();
  const { getReaderByPin } = useReaderFeedContext();
  const [sortBy, setSortBy] = useState<"alpha" | "status">("alpha");
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

    const skillMatch =
      selectedSkills.length === 0 ||
      selectedSkills
        .map((s) => s.label)
        .every((label) => reader.skills.includes(label));

    const toolMatch =
      selectedTools.length === 0 ||
      selectedTools
        .map((t) => t.label)
        .every((label) => reader.skills.includes(label));

    const abilityMatch =
      selectedAbilities.length === 0 ||
      selectedAbilities
        .map((a) => a.label)
        .every((label) => reader.skills.includes(label));

    const topicMatch =
      selectedTopics.length === 0 ||
      selectedTopics
        .map((t) => t.label)
        .every((label) => reader.skills.includes(label));

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

  return (
    <>
      <Grid size={{ xs: 12 }} mt={20}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
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
      <ReaderFilters
        filters={{
          sortBy,
          selectedStatuses,
          selectedSkills,
          selectedTools,
          selectedAbilities,
          selectedTopics,
        }}
        onStatusChange={handleStatusChange}
        onSkillChange={handleSkillChange}
        onToolChange={handleToolChange}
        onAbilityChange={handleAbilityChange}
        onTopicChange={handleTopicChange}
        onSort={handleSortChange}
      />
      <Grid size={{ xs: 12 }} mb={4} textAlign="center">
        <Typography>
          ✨ {sorted.length} {pluralize("psychics", sorted.length)}{" "}
          {sorted.length < 2 ? "matches" : "match"} your filters ✨
        </Typography>
      </Grid>
      <ReaderGrid readers={sorted} />
    </>
  );
};
