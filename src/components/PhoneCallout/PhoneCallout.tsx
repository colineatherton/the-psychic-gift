import { NEW_CLIENT_OFFER_CODE, NEW_CLIENT_OFFER_LABEL, NEW_CLIENT_OFFER_PRICE } from "@/lib/constants/phoneNumbers";
import { Box, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import PhoneIcon from "@mui/icons-material/Phone";

export const PhoneCallout = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backdropFilter: "blur(4px)",
        background: alpha(theme.palette.primary.dark, 0.3),
        border: `2px solid ${theme.palette.accent.primary}`,
        borderRadius: theme.spacing(1),
        padding: { xs: theme.spacing(2), md: theme.spacing(2.5) },
        marginBottom: theme.spacing(2),
      }}
    >
      <Box
        component="a"
        href="tel:08009152345"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          textDecoration: "none",
          color: "inherit",
          marginBottom: 1,
        }}
      >
        <PhoneIcon
          sx={{
            fontSize: { xs: "1.8rem", md: "2rem" },
            color: theme.palette.accent.primary,
          }}
        />
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={700}
          sx={{
            fontSize: { xs: "1.6rem", md: "2rem" },
            color: theme.palette.text.secondary,
          }}
        >
          0800 915 2345
        </Typography>
      </Box>
      <Typography
        fontFamily="Montserrat Variable, sans-serif"
        fontWeight={500}
        sx={{
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          color: theme.palette.text.secondary,
          opacity: 0.9,
        }}
      >
        £32.95 for 20 mins · £1.50/min thereafter · Card &amp; Phone Bill Options
      </Typography>
      <Typography
        fontFamily="Montserrat Variable, sans-serif"
        fontWeight={600}
        sx={{
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          color: theme.palette.accent.primaryText,
          marginTop: 1.5,
        }}
      >
        {NEW_CLIENT_OFFER_LABEL}: <strong>{NEW_CLIENT_OFFER_PRICE}</strong> – quote &quot;{NEW_CLIENT_OFFER_CODE}&quot;
      </Typography>
    </Box>
  );
};
