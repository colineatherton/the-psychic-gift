"use client";

import {
  ALL_ABILITIES,
  ALL_SKILLS,
  ALL_STATUSES,
  ALL_TOOLS,
  ALL_TOPICS,
} from "@/lib/constants/readers";
import { Status } from "@/lib/types/readers";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useMemo } from "react";
import { MultiSelect } from "../MultiSelect/MultiSelect";

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

type ReaderGridProps = {
  // sortBy?: "alpha" | "status";
  onStatusChange: (
    statuses: {
      key?: string;
      label: string;
    }[],
  ) => void;
  onSkillChange: (
    skills: {
      label: string;
    }[],
  ) => void;
  onToolChange: (
    tools: {
      label: string;
    }[],
  ) => void;
  onAbilityChange: (
    abilities: {
      label: string;
    }[],
  ) => void;
  onTopicChange: (
    topics: {
      label: string;
    }[],
  ) => void;
  onSort: (
    event:
      | React.ChangeEvent<
          Omit<HTMLInputElement, "value"> & {
            value: string;
          }
        >
      | (Event & {
          target: {
            value: string;
            name: string;
          };
        }),
  ) => void;
  filters: {
    sortBy: "alpha" | "status";
    selectedStatuses: { label: string; key?: string }[];
    selectedSkills: { label: string }[];
    selectedTools: { label: string }[];
    selectedAbilities: { label: string }[];
    selectedTopics: { label: string }[];
  };
};

export const ReaderFilters: React.FC<ReaderGridProps> = ({
  filters,
  onStatusChange,
  onSkillChange,
  onToolChange,
  onAbilityChange,
  onTopicChange,
  onSort,
}) => {
  const statusOptions = useMemo(() => ALL_STATUSES(), []);
  const skillsOptions = useMemo(() => ALL_SKILLS(), []);
  const toolsOptions = useMemo(() => ALL_TOOLS(), []);
  const abilitiesOptions = useMemo(() => ALL_ABILITIES(), []);
  const topicsOptions = useMemo(() => ALL_TOPICS(), []);

  return (
    <Box flexGrow={1}>
      <Box mt={6} mb={6}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <MultiSelect
              value={filters.selectedStatuses}
              options={statusOptions}
              onChange={(selected) => onStatusChange(selected)}
              label="Status"
              placeholder="Select status"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <MultiSelect
              value={filters.selectedSkills}
              options={skillsOptions}
              onChange={(selected) => onSkillChange(selected)}
              label="Skills"
              placeholder="Select skills"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <MultiSelect
              value={filters.selectedTools}
              options={toolsOptions}
              onChange={(selected) => onToolChange(selected)}
              label="Tools"
              placeholder="Select tools"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <MultiSelect
              value={filters.selectedAbilities}
              options={abilitiesOptions}
              onChange={(selected) => onAbilityChange(selected)}
              label="Abilities"
              placeholder="Select abilities"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <MultiSelect
              value={filters.selectedTopics}
              options={topicsOptions}
              onChange={(selected) => onTopicChange(selected)}
              label="Topics"
              placeholder="Select topics"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <FormControl
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "text.primary" },
                "& .MuiInputLabel-root.Mui-focused": { color: "text.primary" },
              }}
            >
              <InputLabel id="sort-by-label">Sort by</InputLabel>
              <Select
                labelId="sort-by-label"
                value={filters.sortBy}
                onChange={onSort}
                label="Sort by"
              >
                <MenuItem value="alpha">Alphabetical</MenuItem>
                <MenuItem value="status">Status</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
