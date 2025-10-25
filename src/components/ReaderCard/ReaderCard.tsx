"use client";

import CircleIcon from "@mui/icons-material/Circle";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { CTAButton } from "../CTAButton/CTAButton";
import { StyledCard } from "./ReaderCard.styles";
import FaceIcon from "@mui/icons-material/Face";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

type ReaderCardProps = {
  name: string;
  image: string;
  pin: string;
  status: "online" | "busy" | "offline";
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

  const effectiveImgSize = mode === "compact" ? 85 : 100;

  return (
    <StyledCard>
      <CardHeader
        sx={{
          backgroundColor: theme.palette.primary.main,
          width: "100%",
          paddingBottom: theme.spacing(mode === "compact" ? 1 : 4),
        }}
        avatar={
          <Stack
            direction="column"
            flexGrow={1}
            alignItems="center"
            spacing={0.5}
            width="100%"
          >
            {/* <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              width={"100%"}
            >
              <CircleIcon
                fontSize="small"
                sx={{ color: theme.palette.status[status] }}
              />
              <Typography
                width={"100%"}
                fontFamily="Montserrat Variable, sans-serif"
                fontWeight={500}
                fontSize="1rem"
                // color={theme.palette.secondary.light}
                // color={theme.palette.status[status]}
                lineHeight="1"
                variant="body2"
                component="p"
              >
                {statusLabels[status]}
              </Typography>
            </Stack> */}
            <Chip
              label={statusLabels[status]}
              variant="filled"
              sx={{ backgroundColor: theme.palette.status[status] }}
            />
          </Stack>
        }
      />
      <CardContent sx={{ flexGrow: 1, pt: 0, px: 0 }}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          // mt={2}
          mb={2}
          flexDirection={"column"}
          alignItems={"center"}
          sx={{
            background: `linear-gradient(180deg, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 50%)`,
            // display: "relative",
            // top: -theme.spacing(6),
          }}
        >
          <Avatar
            alt={name}
            sizes={`<${effectiveImgSize}x${effectiveImgSize}>`}
            sx={{
              width: effectiveImgSize,
              height: effectiveImgSize,
              border: (theme) => `solid 2px ${theme.palette.primary.main}`,
              // mb: 2,
            }}
          >
            <Image
              src={`/readers/${pin}.png`}
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
          // mt={2}
          // mb={2}
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
                  // backgroundColor: theme.palette.primary.main,
                  // backgroundColor: theme.palette.primary.dark,
                  // color: theme.palette.secondary.dark,
                  // color: theme.palette.secondary.light,
                  // fontFamily: "Montserrat Variable, sans-serif",
                  // fontWeight: 500,
                  // fontWeight: 600,
                  fontSize: mode === "compact" ? "0.8rem" : "1rem",
                  padding: theme.spacing(2, 1),
                  textTransform: "capitalize",
                }}
              />
            ))}
            {mode === "compact" && skills.length > effectiveSkills.length && (
              <Chip
                label={`+${skills.length - effectiveSkills.length} more`}
                size="small"
                sx={{
                  // backgroundColor: theme.palette.primary.main,
                  // backgroundColor: theme.palette.primary.dark,
                  // color: theme.palette.secondary.dark,
                  // color: theme.palette.secondary.light,
                  // fontFamily: "Montserrat Variable, sans-serif",
                  // fontWeight: 500,
                  // fontWeight: 600,
                  fontSize: mode === "compact" ? "0.8rem" : "1rem",
                  padding: theme.spacing(2, 1),
                  textTransform: "capitalize",
                }}
              />
            )}
          </Stack>
        </Box>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Stack gap={2}>
          <Button
            size="large"
            startIcon={<PhoneIcon fontSize="large" />}
            variant="contained"
            fullWidth={true}
            onClick={() => onCallNow(name.toLocaleLowerCase())}
            sx={{
              borderRadius: 8,
              ...(mode === "compact"
                ? {}
                : {
                    pt: 2,
                    pb: 2,
                    px: 2,
                  }),
              backgroundColor: theme.palette.primary.dark,
              border: `1px solid ${theme.palette.background.default}`,
              color: theme.palette.primary.light,
              fontSize: mode === "compact" ? "0.8rem" : "1rem",
            }}
          >
            {/* Call Options */}
            {/* View Call Options */}
            {/* Call {name} */}
            Choose Call Options
          </Button>

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
