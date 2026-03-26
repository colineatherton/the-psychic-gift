"use client";

import PhoneIcon from "@mui/icons-material/Phone";
import { Card, CardActionArea, Snackbar, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useState } from "react";

interface CallOptionCardProps {
  title: string;
  number: string;
  mobileNumber?: string;
  price: string;
}

export const CallOptionCard = ({ title, number, mobileNumber, price }: CallOptionCardProps) => {
  const [snackOpen, setSnackOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const displayNumber = isMobile && mobileNumber ? mobileNumber : number;

  return (
    <>
      <Card
        sx={{
          mb: 1.5,
          borderRadius: 3,
          border: "none",
          bgcolor: (theme) => alpha(theme.palette.primary.dark, 0.8),
          transition: "background-color 0.2s",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        <CardActionArea
          component="a"
          href={`tel:${displayNumber.replace(/\s/g, "")}`}
          onClick={() => setSnackOpen(true)}
          sx={{
            px: 2, py: 1.5,
            "& .MuiCardActionArea-focusHighlight": { background: "common.white" },
          }}
        >
          <Stack spacing={0.5}>
            <Typography variant="caption" fontWeight={600} textTransform="uppercase" letterSpacing={0.5} sx={{ color: "rgba(255,255,255,0.75)" }}>
              {title}
            </Typography>
            <Stack direction="row" alignItems="center" gap={1}>
              <PhoneIcon sx={{ color: "common.white", fontSize: "1.4rem" }} />
              <Typography variant="h5" fontWeight={700} color="common.white">
                {displayNumber}
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
              {price}
            </Typography>
          </Stack>
        </CardActionArea>
      </Card>
      <Snackbar
        open={snackOpen}
        autoHideDuration={2500}
        onClose={() => setSnackOpen(false)}
        message="Opening your phone app…"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
};
