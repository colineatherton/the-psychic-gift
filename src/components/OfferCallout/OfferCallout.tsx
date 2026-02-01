import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { CalloutCard } from "../CalloutCard/CalloutCard";

export const OfferCallout = () => {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push("/offers");
  };

  return (
    <CalloutCard>
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
      >
        <strong>10 Minutes</strong> for just <strong>£5</strong> for every new
        client! Quote <strong>&quot;DISCOVER&quot;</strong> when you call.
      </Typography>
      <Button
        sx={{
          mt: 2,
          backgroundColor: (theme) => theme.palette.accent.primary,
          color: (theme) => theme.palette.accent.primaryText,
          fontWeight: 600,
          "&:hover": {
            backgroundColor: (theme) => theme.palette.primary.dark,
          },
        }}
        onClick={handleLearnMore}
      >
        Learn more
      </Button>
    </CalloutCard>
  );
};
