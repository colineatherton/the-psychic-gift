import { Box, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const CalloutCard = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme(); // Access theme dynamically

  return (
    <Box
      sx={{
        backdropFilter: "blur(4px)", // Apply blur to the backdrop
        background: alpha(theme.palette.primary.dark, 0.2), // Remove background to allow particles to show through
        // background: alpha(theme.palette.primary.dark, 0.9), // Remove background to allow particles to show through
        border: `2px solid ${theme.palette.primary.main}`, // Add a subtle border for visual effect
        borderRadius: theme.spacing(1), // Apply border radius
        padding: theme.spacing(2), // Add padding for spacing
        // Add any other styles as needed
      }}
    >
      {children}
    </Box>
  );
};
