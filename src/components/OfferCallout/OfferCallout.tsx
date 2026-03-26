import { NCO_NUMBER, NEW_CLIENT_OFFER_CODE, NEW_CLIENT_OFFER_PRICE } from "@/lib/constants/phoneNumbers";
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
        fontSize="1.2rem"
        variant="h3"
        component="h3"
        mb={2}
      >
        🎁 Special Offer
      </Typography>
      <Typography
        fontSize="1rem"
      >
        <strong>{NEW_CLIENT_OFFER_PRICE}</strong> for first-time callers! Call <strong><a href={`tel:${NCO_NUMBER.replace(/\s/g, "")}`} style={{ color: "inherit" }}>{NCO_NUMBER}</a></strong> (credit/debit card) &amp; quote <strong>&quot;{NEW_CLIENT_OFFER_CODE}&quot;</strong>.
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
