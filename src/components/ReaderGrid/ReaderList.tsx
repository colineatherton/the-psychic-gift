"use client";

import { ReaderCard } from "@/components/ReaderCard/ReaderCard";
import { READER_CONFIG_MAP } from "@/lib/constants/readers";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useMemo, useState } from "react";
import { ReaderModal } from "../ReaderModal/ReaderModal";
import { ReaderConfig } from "@/lib/types/readers";

export type Reader = {
  name: string;
  image: string;
  pin: string;
  status: "online" | "busy" | "offline";
  skills: string[];
  callOptions: {
    label: string;
    number: string;
  }[];
};

type ReaderGridProps = {
  readers: Reader[];
  allSkills: string[];
  allTools: string[];
  allAbilities: string[];
  allTopics: string[];
  withFilters?: boolean;
  onlineOnly?: boolean;
  sortBy?: "alpha" | "status";
};

export const ReaderGrid: React.FC<ReaderGridProps> = ({
  readers,
  allSkills,
  allTools,
  allAbilities,
  allTopics,
  withFilters = true,
  onlineOnly = false,
  sortBy: initialSortBy = "alpha",
}) => {
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>(initialSortBy);
  const [readerConfig, setReaderConfig] = useState<ReaderConfig | null>(null);
  const [readerModalOpen, setReaderModalOpen] = useState(false);
  const { getReaderByPin } = useReaderFeedContext();

  const handleCloseReaderModal = () => {
    setReaderModalOpen(false);
  };

  const handleStatusChange = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: string | null
  ) => {
    setStatusFilter(newFilter);
  };

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleSortChange = (
    event:
      | ChangeEvent<Omit<HTMLInputElement, "value"> & { value: string }>
      | (Event & { target: { value: string; name: string } })
  ) => {
    // MUI Select passes event as SyntheticEvent with target.value
    const value =
      "target" in event &&
      typeof (event.target as HTMLInputElement).value === "string"
        ? (event.target as HTMLInputElement).value
        : sortBy;
    setSortBy(value);
  };

  const getStatus = (
    status: number | undefined
  ): "offline" | "online" | "busy" => {
    switch (status) {
      case 0:
        return "offline";
      case 1:
        return "online";
      case 2:
        return "busy";
      default:
        return "online";
    }
  };

  const readersWithStatus = useMemo(() => {
    return readers.map((reader) => {
      const apiReader = getReaderByPin(Number(reader.pin));
      return {
        ...reader,
        status: apiReader ? getStatus(apiReader.status) : "offline",
      };
    });
  }, [readers, getReaderByPin]);

  // 🎯 Filter logic
  const filtered = readersWithStatus.filter((reader) => {
    const statusMatch = !statusFilter || reader.status === statusFilter;
    const skillMatch =
      selectedSkills.length === 0 ||
      selectedSkills.every((s) => reader.skills.includes(s));
    if (onlineOnly) {
      return (
        statusMatch &&
        skillMatch &&
        (reader.status === "online" || reader.status === "busy")
      );
    }
    return statusMatch && skillMatch;
  });

  const statusOrder = { online: 0, busy: 1, offline: 2 };

  // ↕️ Sort logic
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "alpha") return a.name.localeCompare(b.name);
    if (sortBy === "status")
      return statusOrder[a.status] - statusOrder[b.status];
    return 0;
  });

  // 📊 Counts
  const getCount = (status: string) =>
    readersWithStatus.filter((r) => r.status === status).length;

  const handleOnCallNow = (key: string) => {
    const config = READER_CONFIG_MAP[key];
    if (!config) return; // todo
    setReaderConfig(config);
    setReaderModalOpen(true);
  };

  return (
    <>
      <Box>
        {/* 🔘 Status Filter */}
        {withFilters && (
          <>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Status
            </Typography>
            <ToggleButtonGroup
              value={statusFilter}
              exclusive
              onChange={handleStatusChange}
              aria-label="status filter"
              sx={{ mb: 2 }}
            >
              <ToggleButton value="">All ({readers.length})</ToggleButton>
              <ToggleButton value="online">
                Online ({getCount("online")})
              </ToggleButton>
              <ToggleButton value="busy">
                Busy ({getCount("busy")})
              </ToggleButton>
              <ToggleButton value="offline">
                Offline ({getCount("offline")})
              </ToggleButton>
            </ToggleButtonGroup>

            {/* 🧠 Skill Filter */}
            <Typography variant="h6" sx={{ mt: 2 }}>
              Skills
            </Typography>
            <FormGroup row sx={{ flexWrap: "wrap", gap: 1 }}>
              {allSkills.map((skill) => (
                <FormControlLabel
                  key={skill}
                  control={
                    <Checkbox
                      checked={selectedSkills.includes(skill)}
                      onChange={() => handleSkillToggle(skill)}
                    />
                  }
                  label={skill}
                />
              ))}
            </FormGroup>

            {/* 🧠 Tool Filter */}
            <Typography variant="h6" sx={{ mt: 2 }}>
              Tools
            </Typography>
            <FormGroup row sx={{ flexWrap: "wrap", gap: 1 }}>
              {allTools.map((skill) => (
                <FormControlLabel
                  key={skill}
                  control={
                    <Checkbox
                      checked={selectedSkills.includes(skill)}
                      onChange={() => handleSkillToggle(skill)}
                    />
                  }
                  label={skill}
                />
              ))}
            </FormGroup>

            {/* 🧠 Skill Filter */}
            <Typography variant="h6" sx={{ mt: 2 }}>
              Abilities
            </Typography>
            <FormGroup row sx={{ flexWrap: "wrap", gap: 1 }}>
              {allAbilities.map((skill) => (
                <FormControlLabel
                  key={skill}
                  control={
                    <Checkbox
                      checked={selectedSkills.includes(skill)}
                      onChange={() => handleSkillToggle(skill)}
                    />
                  }
                  label={skill}
                />
              ))}
            </FormGroup>

            {/* 🧠 Skill Filter */}
            <Typography variant="h6" sx={{ mt: 2 }}>
              Topics
            </Typography>
            <FormGroup row sx={{ flexWrap: "wrap", gap: 1 }}>
              {allTopics.map((skill) => (
                <FormControlLabel
                  key={skill}
                  control={
                    <Checkbox
                      checked={selectedSkills.includes(skill)}
                      onChange={() => handleSkillToggle(skill)}
                    />
                  }
                  label={skill}
                />
              ))}
            </FormGroup>

            {/* 🔄 Sort */}
            <Typography variant="h6" sx={{ mt: 3 }}>
              Sort by
            </Typography>
            <Select value={sortBy} onChange={handleSortChange} size="small">
              <MenuItem value="alpha">Alphabetical</MenuItem>
              <MenuItem value="status">Status</MenuItem>
            </Select>
          </>
        )}

        {/* 🧱 Reader Cards */}
        <Box>
          <Grid container spacing={4}>
            {sorted.map((reader) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={reader.pin}>
                <ReaderCard {...reader} onCallNow={handleOnCallNow} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <ReaderModal
        open={readerModalOpen}
        onClose={handleCloseReaderModal}
        reader={readerConfig}
      />
    </>
  );
};
