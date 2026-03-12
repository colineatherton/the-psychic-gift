"use client";

import { CallOptionCard } from "@/components/ReaderModal/CallOptionCard";
import { TrustBadge } from "@/components/TrustBadge/TrustBadge";
import { Box, Container, Grid, Paper, Typography, useTheme } from "@mui/material";

const CALL_OPTIONS = [
  {
    title: "Credit / Debit Card",
    number: "0800 915 2333",
    price: "£32.95 for 20 mins, then £1.50/min",
  },
  {
    title: "Pre-Pay Minutes",
    number: "0808 156 4920",
    price: "£1.50/min · 10% bonus on purchases over £60",
  },
  {
    title: "Pay by Phone Bill",
    number: "0906 176 1960",
    price: "£1.50/min + network access charge",
  },
];

const STEPS = [
  {
    icon: "/icons/search.png",
    number: "1",
    title: "Choose your reader",
    desc: "Browse our gifted psychics and find the one that resonates with you.",
  },
  {
    icon: "/icons/phone.png",
    number: "2",
    title: 'Call and quote "DISCOVER"',
    desc: 'Choose a call option below and quote "DISCOVER" when you connect.',
  },
  {
    icon: "/icons/crystal-ball.png",
    number: "3",
    title: "Enjoy your reading",
    desc: "10 minutes of insightful guidance at our exclusive new-client rate.",
  },
];

export function OffersContent() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 16, md: 20 }, pb: 8 }}>
      {/* Hero offer card */}
      <Box
        sx={{
          background: `linear-gradient(135deg, #18122B 0%, ${theme.palette.primary.dark} 100%)`,
          borderRadius: 4,
          p: { xs: 4, md: 6 },
          textAlign: "center",
          mb: 6,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="/icons/stars.png"
          alt=""
          aria-hidden="true"
          sx={{
            position: "absolute",
            top: -20,
            right: -20,
            width: 180,
            opacity: 0.08,
            pointerEvents: "none",
          }}
        />
        <Box
          component="img"
          src="/icons/gift.png"
          alt=""
          sx={{
            height: 64,
            mb: 2,
            filter: "brightness(0) invert(1)",
            opacity: 0.9,
          }}
        />
        <Typography
          sx={{
            color: "rgba(255, 215, 0, 0.9)",
            letterSpacing: 2,
            display: "block",
            mb: 1,
            fontWeight: 600,
            fontSize: "0.8rem",
            textTransform: "uppercase",
          }}
        >
          Exclusive New Client Offer
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "common.white",
            fontWeight: 800,
            fontSize: { xs: "4rem", md: "7rem" },
            lineHeight: 1,
            mb: 0.5,
            fontFamily: "Montserrat Variable, sans-serif",
          }}
        >
          £5
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, mb: 2 }}
        >
          for 10 minutes
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.85)", mb: 3, maxWidth: 480, mx: "auto" }}>
          Your first step into the world of psychic insight — try a reading at
          this exclusive introductory rate, available to all new clients.
        </Typography>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 2,
            px: 3,
            py: 1.5,
            borderRadius: 3,
            bgcolor: "rgba(255,255,255,0.1)",
            border: "1px dashed rgba(255,255,255,0.35)",
          }}
        >
          <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>
            Quote code
          </Typography>
          <Typography
            sx={{
              color: "common.white",
              fontWeight: 800,
              fontSize: "1.4rem",
              letterSpacing: 4,
              fontFamily: "monospace",
            }}
          >
            DISCOVER
          </Typography>
        </Box>
      </Box>

      {/* How to claim */}
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        mb={4}
        fontFamily="Montserrat Variable, sans-serif"
      >
        How to claim
      </Typography>
      <Grid container spacing={3} mb={8}>
        {STEPS.map((step) => (
          <Grid key={step.number} size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                textAlign: "center",
                height: "100%",
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box
                component="img"
                src={step.icon}
                alt=""
                aria-hidden="true"
                sx={{
                  height: 52,
                  mb: 2,
                  filter: isDark ? "invert(1) brightness(0.8)" : "none",
                  opacity: 0.85,
                }}
              />
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "primary.dark",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <Typography sx={{ color: "common.white", fontWeight: 700, fontSize: "0.9rem" }}>
                  {step.number}
                </Typography>
              </Box>
              <Typography fontWeight={700} mb={1} fontFamily="Montserrat Variable, sans-serif">
                {step.title}
              </Typography>
              <Typography variant="body2" color="secondary.main">
                {step.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Call options */}
      <Typography
        variant="h5"
        fontWeight={700}
        textAlign="center"
        mb={3}
        fontFamily="Montserrat Variable, sans-serif"
      >
        Call now to claim your offer
      </Typography>
      <Box sx={{ maxWidth: 480, mx: "auto", mb: 6 }}>
        {CALL_OPTIONS.map((opt) => (
          <CallOptionCard key={opt.number} {...opt} />
        ))}
        <Typography
          variant="caption"
          color="secondary.main"
          display="block"
          mt={2}
          textAlign="center"
        >
          All calls are recorded; the caller must be 18 or over and have the
          bill payer&apos;s permission. Readings under UK law are deemed to be
          for entertainment only. Helpline: 0800 156 0022.
        </Typography>
      </Box>

      {/* Trust badges */}
      <Grid container spacing={2} alignItems="center" justifyContent="center" mb={4}>
        <Grid size={{ xs: 4 }}>
          <TrustBadge src="readings-given.png" alt="Over 150,000 readings given" />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <TrustBadge src="est-2002.png" alt="Established 2002" />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <TrustBadge
            src="satisfaction-guarantee-2.png"
            alt="Satisfaction guarantee"
            href="/terms-and-conditions#satisfaction-guarantee"
          />
        </Grid>
      </Grid>

      <Typography
        variant="caption"
        color="secondary.main"
        textAlign="center"
        display="block"
      >
        Terms and conditions apply. Offer valid for new clients only. Standard
        rates apply after the promotional period.
      </Typography>
    </Container>
  );
}
