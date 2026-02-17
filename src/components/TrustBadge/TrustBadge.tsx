"use client";

import { Box, useTheme } from "@mui/material";
import Link from "next/link";

type TrustBadgeProps = {
  src: string;
  alt?: string;
  href?: string;
};

export function TrustBadge({ src, alt = "Trust badge", href }: TrustBadgeProps) {
  const theme = useTheme();

  const badgeContent = (
    <Box
      sx={{
        maxWidth: "250px",
        margin: "0 auto",
        alignSelf: "center",
        transition: "transform 0.25s ease",
        cursor: href ? "pointer" : "default",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={alt}
        src={`/badges/${theme.palette.mode}/${src}`}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </Box>
  );

  if (href) {
    return <Link href={href}>{badgeContent}</Link>;
  }

  return badgeContent;
}
