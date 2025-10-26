import { Box, Button, Typography, useTheme } from "@mui/material";
// import { StyledBox } from "./OfferCallout.styles";
import { alpha, styled } from "@mui/material/styles";

export const OfferCallout = () => {
  const theme = useTheme(); // Access theme dynamically

  return (
    <Box
      sx={{
        backdropFilter: "blur(4px)", // Apply blur to the backdrop
        background: alpha(theme.palette.primary.dark, 0.2), // Remove background to allow particles to show through
        border: `2px solid ${theme.palette.primary.main}`, // Add a subtle border for visual effect
        borderRadius: theme.spacing(1), // Apply border radius
        padding: theme.spacing(2), // Add padding for spacing
        // Add any other styles as needed
      }}
    >
      <Typography
        fontFamily="Montserrat Variable, sans-serif"
        fontSize="1.2rem"
        variant="h3"
        component="h3"
        mb={2}
      >
        🎁 Special Offer
      </Typography>
      <Typography
        fontFamily="Montserrat Variable, sans-serif"
        fontSize="1rem"
        mb={1}
      >
        <strong>10 Minutes</strong> for just <strong>£5</strong> for every new
        client!
      </Typography>
      <Typography fontFamily="Montserrat Variable, sans-serif" fontSize="1rem">
        Call:{" "}
        <a href="tel:08009152333">
          <strong>0800 915 2333</strong>
        </a>{" "}
        &amp; Quote <strong>"DISCOVER".</strong>
      </Typography>
      <Button sx={{ mt: 2 }}>Learn more</Button>
    </Box>
  );
};
