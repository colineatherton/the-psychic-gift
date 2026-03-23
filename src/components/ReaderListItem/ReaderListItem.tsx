"use client";

import { Status } from "@/lib/types/readers";
import {
  Avatar,
  Badge,
  Chip,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";

type ReaderListItemProps = {
  name: string;
  pin: string;
  status: Status;
  skills: string[];
  description?: string;
  divider?: boolean;
  onChooseCallOptions: (key: string) => void;
};

export const statusLabels: Record<Status, string> = {
  online: "Ready to talk",
  busy: "In a reading",
  offline: "Away right now",
};

const StatusBadge = styled(Badge, {
  shouldForwardProp: (prop) => prop !== "statusColor",
})<{ statusColor: string }>(({ statusColor }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: statusColor,
    color: statusColor,
    boxShadow: `0 0 0 2px #fff`,
    width: 12,
    height: 12,
    borderRadius: "50%",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      content: '""',
    },
  },
}));

const StatusChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "statusColor",
})<{ statusColor: string }>(({ statusColor }) => ({
  backgroundColor: statusColor,
  color: "#fff",
  fontWeight: 600,
  fontSize: "0.7rem",
  height: 22,
  "& .MuiChip-label": {
    padding: "0 8px",
  },
}));

export const ReaderListItem: React.FC<ReaderListItemProps> = ({
  name,
  pin,
  status,
  skills,
  divider = false,
  onChooseCallOptions,
}) => {
  const theme = useTheme();
  const statusColor = theme.palette.status[status];
  const statusLabel = statusLabels[status];

  const effectiveSkills = skills.slice(0, 2);
  const remainingSkills = skills.slice(2, skills.length).join(", ");

  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <Typography variant="caption" color="secondary.main">{`PIN: ${pin}`}</Typography>
        }
        onClick={() => onChooseCallOptions(`${name.toLocaleLowerCase()}-${pin}`)}
        sx={{
          cursor: "pointer",
          borderRadius: 2,
          transition: "background-color 0.15s",
          "&:hover": {
            bgcolor: theme.palette.mode === "dark"
              ? "rgba(116, 93, 221, 0.2)"
              : "rgba(198, 187, 244, 0.35)",
          },
        }}
      >
        <ListItemAvatar>
          <Tooltip title={statusLabel} placement="top">
            <StatusBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              statusColor={statusColor}
            >
              <Avatar alt={name} src={`/readers/original/${pin}.png`} />
            </StatusBadge>
          </Tooltip>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Stack direction="row" alignItems="center" gap={1} mb={0.5}>
              <StatusChip label={statusLabel} size="small" statusColor={statusColor} />
              <Typography variant="body2" fontWeight={600}>{name}</Typography>
            </Stack>
          }
          secondary={
            <Stack direction="row" flexWrap="wrap" gap={1.5} paddingY={1}>
              {effectiveSkills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  sx={{
                    fontSize: "0.8rem",
                    padding: theme.spacing(2, 1),
                    textTransform: "capitalize",
                  }}
                />
              ))}
              {skills.length > effectiveSkills.length && (
                <Tooltip title={remainingSkills}>
                  <Chip
                    label={`+${skills.length - effectiveSkills.length} more`}
                    size="small"
                    sx={{
                      fontSize: "0.8rem",
                      padding: theme.spacing(2, 1),
                      textTransform: "capitalize",
                    }}
                  />
                </Tooltip>
              )}
            </Stack>
          }
        />
      </ListItem>
      {divider && <Divider variant="inset" component="li" />}
    </>
  );
};
