import { Box } from "@mui/material";
import { ReactNode } from "react";

interface PageSectionProps {
  background: string;
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
        background,
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
