// OfferBanner.tsx
import { Box, Typography } from "@mui/material";

export default function OfferBanner({ message }: { message: string }) {
  return (
    <Box bgcolor="primary.main" color="white" px={2} py={1} textAlign="center">
      <Typography variant="subtitle1" fontWeight="bold">
        {message}
      </Typography>
    </Box>
  );
}
