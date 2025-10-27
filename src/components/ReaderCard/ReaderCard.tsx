"use client";

import { Status } from "@/lib/types/readers";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Avatar,
  Box,
  Button,
  CardContent,
  Chip,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { StyledCard, StyledCardHeader, StyledChip } from "./ReaderCard.styles";
import { PrimaryCTAButton } from "..";

type ReaderCardProps = {
  name: string;
  image: string;
  pin: string;
  status: Status;
  skills: string[];
  callOptions: {
    label: string;
    number: string;
  }[];
  onCallNow: (key: string) => void;
  mode?: "default" | "compact";
};

const statusLabels: Record<ReaderCardProps["status"], string> = {
  online: "Ready to talk",
  busy: "In a reading",
  offline: "Away right now",
};

export const ReaderCard: React.FC<ReaderCardProps> = ({
  name,
  pin,
  status,
  skills,
  onCallNow,
  mode = "default",
}) => {
  const theme = useTheme();

  const effectiveSkills = skills.slice(
    0,
    mode === "compact" ? 2 : skills.length,
  );

  const remainingSkills = skills.slice(2, skills.length).join(", ");

  const effectiveImgSize = mode === "compact" ? 85 : 100;

  return (
    <StyledCard>
      <StyledCardHeader
        mode={mode}
        avatar={
          <Stack
            direction="column"
            flexGrow={1}
            alignItems="center"
            spacing={0.5}
            width="100%"
          >
            <StyledChip
              label={statusLabels[status]}
              variant="filled"
              $status={status}
            />
          </Stack>
        }
      />
      <CardContent sx={{ flexGrow: 1, pt: 0, px: 0 }}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          mb={2}
          flexDirection={"column"}
          alignItems={"center"}
          sx={{
            background: `linear-gradient(180deg, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 50%)`,
          }}
        >
          <Avatar
            alt={name}
            sizes={`<${effectiveImgSize}x${effectiveImgSize}>`}
            sx={{
              width: effectiveImgSize,
              height: effectiveImgSize,
              border: (theme) => `solid 2px ${theme.palette.primary.main}`,
            }}
          >
            <Image
              src={`/readers/original/${pin}.png`}
              alt="Amara"
              width={effectiveImgSize}
              height={effectiveImgSize}
              placeholder="blur"
              blurDataURL="/readers/blur.png"
            />
          </Avatar>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          py={mode === "compact" ? 1 : 4}
          px={4}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography
            display="block"
            justifyContent="center"
            alignItems="center"
            fontFamily="Montserrat Variable, sans-serif"
            fontWeight={500}
            fontSize={mode === "compact" ? "1.2rem" : "1.6rem"}
            color={theme.palette.secondary.dark}
            lineHeight="1"
            variant="body2"
            component="p"
            mb={2}
            textAlign={"center"}
          >
            {name}
          </Typography>
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontWeight={500}
            fontSize={mode === "compact" ? "1rem" : "1.2rem"}
            color={theme.palette.secondary.dark}
            lineHeight="1"
            variant="body2"
            component="p"
            mb={2}
            textAlign={"center"}
          >
            PIN: {pin}
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={1.5}
            paddingY={mode === "compact" ? 1 : 4}
          >
            {effectiveSkills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                size="small"
                sx={{
                  fontSize: mode === "compact" ? "0.8rem" : "1rem",
                  padding: theme.spacing(2, 1),
                  textTransform: "capitalize",
                }}
              />
            ))}
            {mode === "compact" && skills.length > effectiveSkills.length && (
              <Tooltip title={remainingSkills}>
                <Chip
                  label={`+${skills.length - effectiveSkills.length} more`}
                  size="small"
                  sx={{
                    fontSize: mode === "compact" ? "0.8rem" : "1rem",
                    padding: theme.spacing(2, 1),
                    textTransform: "capitalize",
                  }}
                />
              </Tooltip>
            )}
          </Stack>
        </Box>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Stack gap={2}>
          <PrimaryCTAButton
            size="large"
            fullWidth={true}
            onClick={() => onCallNow(name.toLocaleLowerCase())}
            mode={mode}
            icon={<PhoneIcon fontSize="large" />}
            label="Choose Call Options"
          />

          <Button
            size="large"
            variant="outlined"
            fullWidth={true}
            href={`/psychic-readers/${name.toLocaleLowerCase()}`}
            sx={{
              borderRadius: 8,
              ...(mode === "compact"
                ? {}
                : {
                    pt: 2,
                    pb: 2,
                    px: 2,
                  }),
              border: `1px solid ${theme.palette.primary.dark}`,
              color: theme.palette.primary.dark,
              fontSize: mode === "compact" ? "0.8rem" : "1rem",
            }}
          >
            View profile
          </Button>
        </Stack>
      </Box>
    </StyledCard>
  );
};
