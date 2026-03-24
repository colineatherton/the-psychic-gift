"use client";

import { CALL_OPTIONS, NEW_CLIENT_OFFER_CODE, NEW_CLIENT_OFFER_LABEL, NEW_CLIENT_OFFER_PRICE } from "@/lib/constants/phoneNumbers";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

interface PhoneCalloutProps {
  compact?: boolean;
}

export const PhoneCallout = ({ compact = false }: PhoneCalloutProps) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isRow = useMediaQuery(theme.breakpoints.up("md"));
  const ccOption = CALL_OPTIONS[0];

  if (compact) {
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
          href={`tel:${(isMobile && ccOption.mobileNumber ? ccOption.mobileNumber : ccOption.number).replace(/\s/g, "")}`}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            textDecoration: "none",
            color: "inherit",
            mb: 1,
            "&:hover .phone-number": { color: "accent.primary" },
          }}
        >
          <PhoneIcon
            sx={{
              fontSize: { xs: "1.8rem", md: "2rem" },
              color: theme.palette.accent.primary,
            }}
          />
          <Typography
            className="phone-number"
            fontWeight={700}
            sx={{
              fontSize: { xs: "1.6rem", md: "2rem" },
              color: theme.palette.text.primary,
              transition: "color 0.15s",
            }}
          >
            {isMobile && ccOption.mobileNumber ? ccOption.mobileNumber : ccOption.number}
          </Typography>
        </Box>
        <Typography
          fontWeight={500}
          sx={{
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            color: theme.palette.text.primary,
            opacity: 0.8,
          }}
        >
          {ccOption.price}
        </Typography>
        <Typography
          fontWeight={600}
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            color: theme.palette.accent.primaryText,
            mt: 1,
          }}
        >
          {NEW_CLIENT_OFFER_LABEL}: <strong>{NEW_CLIENT_OFFER_PRICE}</strong> – quote &quot;{NEW_CLIENT_OFFER_CODE}&quot;
        </Typography>
      </Box>
    );
  }

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
      <Stack
        direction={{ xs: "column", md: "row" }}
        divider={
          <Divider
            orientation={isRow ? "vertical" : "horizontal"}
            flexItem
            sx={{ borderColor: alpha(theme.palette.text.primary, 0.15) }}
          />
        }
        spacing={2}
        mb={1.5}
      >
        {CALL_OPTIONS.map((opt) => {
          const displayNumber = isMobile && opt.mobileNumber ? opt.mobileNumber : opt.number;
          return (
          <Box
            key={opt.number}
            component="a"
            href={`tel:${displayNumber.replace(/\s/g, "")}`}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              flex: 1,
              minWidth: 0,
              "&:hover .phone-number": { color: "accent.primary" },
            }}
          >
            <PhoneIcon
              sx={{
                fontSize: "1.2rem",
                color: theme.palette.accent.primary,
                flexShrink: 0,
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  color: theme.palette.text.primary,
                  opacity: 0.6,
                  lineHeight: 1.2,
                }}
              >
                {opt.title}
              </Typography>
              <Typography
                className="phone-number"
                fontWeight={700}
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  color: theme.palette.text.primary,
                  lineHeight: 1.2,
                  transition: "color 0.15s",
                  whiteSpace: "nowrap",
                }}
              >
                {displayNumber}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: theme.palette.text.primary,
                  opacity: 0.6,
                  lineHeight: 1.3,
                }}
              >
                {opt.price}
              </Typography>
            </Box>
          </Box>
          );
        })}
      </Stack>
      <Typography
        fontWeight={600}
        sx={{
          fontSize: { xs: "0.9rem", md: "1rem" },
          color: theme.palette.text.primary,
          borderTop: `1px solid ${alpha(theme.palette.text.primary, 0.15)}`,
          pt: 1.5,
          textAlign: "center",
        }}
      >
        {NEW_CLIENT_OFFER_LABEL}: <strong>{NEW_CLIENT_OFFER_PRICE}</strong> – quote &quot;{NEW_CLIENT_OFFER_CODE}&quot; (Credit/Debit Card line only)
      </Typography>
    </Box>
  );
};
