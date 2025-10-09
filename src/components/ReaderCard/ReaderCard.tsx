"use client";

import CircleIcon from "@mui/icons-material/Circle";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Avatar,
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
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 6,
        border: `solid 1px ${theme.palette.primary.light}`,
        boxShadow: 4, // default elevation
        "&:hover": {
          boxShadow: 10, // higher elevation on hover
        },
      }}
    >
      <CardHeader
        avatar={
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <CircleIcon fontSize="small" sx={{ color: theme.status[status] }} />
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={500}
              fontSize="0.85rem"
              color={theme.palette.secondary.main}
              lineHeight="1"
              variant="body2"
              component="p"
            >
              {statusLabels[status]}
            </Typography>
          </Stack>
        }
      />
      <CardContent sx={{ flexGrow: 1, pt: 0 }}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          mt={2}
          mb={2}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Avatar
            alt={name}
            sizes={"80x80"}
            sx={{
              width: 80,
              height: 80,
              border: (theme) => `solid 2px ${theme.palette.primary.dark}`,
              mb: 2,
            }}
          >
            <Image
              src={`/readers/${pin}.png`}
              alt="Amara"
              width={80}
              height={80}
              placeholder="blur"
              blurDataURL="/readers/blur.png"
            />
          </Avatar>
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontWeight={500}
            fontSize="1.1rem"
            color={theme.palette.secondary.main}
            lineHeight="1"
            variant="body2"
            component="p"
            mb={2}
            textAlign={"center"}
          >
            {name}
          </Typography>
        </Box>
        <Stack direction="row" flexWrap="wrap" gap={0.5}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              size="small"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.primary,
                fontFamily: "Montserrat Variable, sans-serif",
                fontWeight: 500,
              }}
            />
          ))}
        </Stack>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color={theme.palette.secondary.main}
          lineHeight="1"
          variant="body2"
          component="p"
          mb={2}
          textAlign={"center"}
        >
          PIN: {pin}
        </Typography>
        <CTAButton
          fullWidth
          variant="primary"
          size="small"
          mb={2}
          label="Call Options"
          startIcon={<PhoneIcon />}
          onClick={() => onCallNow(name.toLocaleLowerCase())}
        />
        <CTAButton
          fullWidth
          variant="secondary"
          size="small"
          label="View profile"
          href={`/psychic-readers/${name.toLocaleLowerCase()}`}
        />
      </Box>
    </Card>
  );
};
