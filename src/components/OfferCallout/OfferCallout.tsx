import { Button, Typography, useTheme } from "@mui/material";
import { OfferCalloutCard } from "../OfferCalloutCard/OfferCalloutCard";

export const OfferCallout = () => {
  const theme = useTheme(); // Access theme dynamically

  return (
    <OfferCalloutCard>
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
    </OfferCalloutCard>
  );
};
