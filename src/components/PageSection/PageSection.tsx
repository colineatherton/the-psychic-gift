"use client";
import { Box } from "@mui/material";
import { ReactNode } from "react";

interface PageSectionProps {
  background: "primary.main" | "secondary.light" | "primary.gradient";
  stretchItems?: boolean;
  paddingBottom?: number;
  paddingTop?: number;
  children: ReactNode;
}

export default function PageSection({
  background,
  stretchItems,
  paddingBottom,
  paddingTop,
  children,
}: PageSectionProps) {
  return (
    <Box
      sx={{
        background: (theme) => {
          if (background === "primary.gradient") {
            return `linear-gradient(180deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.default} 40%)`;
          }
          if (background === "primary.main") {
            return theme.palette.primary.main;
          }

          return theme.palette.secondary.light;
        },
        padding: 2,
        ...(stretchItems
          ? {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignSelf: "stretch",
            }
          : {}),
        paddingBottom,
        paddingTop,
      }}
    >
      {children}
    </Box>
  );
}
