"use client";

import PhoneIcon from "@mui/icons-material/Phone";
import { Status } from "@/lib/types/readers";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { StyledChip } from "./ReaderListItem.styles";
import { PrimaryCTAButton } from "../PrimaryCTAButton/PrimaryCTAButton";

type ReaderListItemProps = {
  name: string;
  pin: string;
  status: Status;
  skills: string[];
  description?: string;
  divider?: boolean;
  onChooseCallOptions: (key: string) => void;
};

export const statusLabels: Record<ReaderListItemProps["status"], string> = {
  online: "Ready to talk",
  busy: "In a reading",
  offline: "Away right now",
};

export const ReaderListItem: React.FC<ReaderListItemProps> = ({
  name,
  pin,
  status,
  skills,
  description,
  divider = false,
  onChooseCallOptions,
}) => {
  const theme = useTheme();

  const effectiveSkills = skills.slice(0, 2);

  const remainingSkills = skills.slice(2, skills.length).join(", ");

  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          // <PrimaryCTAButton
          //   size="small"
          //   onClick={() =>
          //     onChooseCallOptions(`${name.toLocaleLowerCase()}-${pin}`)
          //   }
          //   mode="compact"
          //   icon={<PhoneIcon fontSize="large" />}
          //   label="Choose Call Options"
          // />
          `PIN: ${pin}`
        }
      >
        <ListItemAvatar>
          <Avatar alt={name} src={`/readers/original/${pin}.png`} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
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
              {/* <Box width="100%" mt={0.5}>
                <PrimaryCTAButton
                  size="small"
                  onClick={() =>
                    onChooseCallOptions(`${name.toLocaleLowerCase()}-${pin}`)
                  }
                  mode="compact"
                  icon={<PhoneIcon fontSize="large" />}
                  label="Choose Call Options"
                />
              </Box> */}
            </Stack>
          }
        />
      </ListItem>
      {divider && <Divider variant="inset" component="li" />}
    </>
  );
};
