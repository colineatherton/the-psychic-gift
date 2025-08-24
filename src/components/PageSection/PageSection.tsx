import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function PageSection({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <Box component="section" my={4} px={2}>
      {title && (
        <Typography variant="h5" gutterBottom fontWeight="bold">
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
}
