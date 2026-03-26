"use client";

import { CallOptionCard } from "@/components/ReaderModal/CallOptionCard";
import { TrustBadge } from "@/components/TrustBadge/TrustBadge";
import { CALL_OPTIONS, NCO_NUMBER, NEW_CLIENT_OFFER_CODE, NEW_CLIENT_OFFER_LABEL, NEW_CLIENT_OFFER_PRICE } from "@/lib/constants/phoneNumbers";
import { Box, Container, Divider, Grid, Paper, Typography, useTheme } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

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
    title: `Call and quote "${NEW_CLIENT_OFFER_CODE}"`,
    desc: `Choose a call option below and quote "${NEW_CLIENT_OFFER_CODE}" when you connect.`,
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
          {NEW_CLIENT_OFFER_LABEL}
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "common.white",
            fontWeight: 800,
            fontSize: { xs: "4rem", md: "7rem" },
            lineHeight: 1,
            mb: 0.5,
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            mt: 1,
          }}
        >
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
              {NEW_CLIENT_OFFER_CODE}
            </Typography>
          </Box>
          <Box
            component="a"
            href={`tel:${NCO_NUMBER.replace(/\s/g, "")}`}
            sx={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              px: 3,
              py: 1.5,
              borderRadius: 3,
              bgcolor: "common.white",
              color: "primary.dark",
              textDecoration: "none",
              "&:hover": { opacity: 0.9 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PhoneIcon sx={{ fontSize: "1.2rem" }} />
              <Typography fontWeight={700} fontSize="1.1rem">{NCO_NUMBER}</Typography>
            </Box>
            <Typography sx={{ fontSize: "0.72rem", opacity: 0.7 }}>credit/debit card</Typography>
          </Box>
        </Box>
      </Box>

      {/* How to claim */}
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        mb={4}
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
              <Typography fontWeight={700} mb={1}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="secondary.main">
                {step.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* NCO call section */}
      <Typography
        variant="h5"
        fontWeight={700}
        textAlign="center"
        mb={1}
      >
        Call now to claim your offer
      </Typography>
      <Typography
        variant="body2"
        color="secondary.main"
        textAlign="center"
        mb={3}
      >
        This offer is available by calling{" "}
        <Box component="a" href={`tel:${NCO_NUMBER.replace(/\s/g, "")}`} sx={{ color: "inherit", fontWeight: 700 }}>{NCO_NUMBER}</Box>
        <br />(credit/debit card)<br /><br />Monday–Sunday 8am–10pm.
      </Typography>
      <Box
        component="a"
        href={`tel:${NCO_NUMBER.replace(/\s/g, "")}`}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1.5,
          maxWidth: 360,
          mx: "auto",
          mb: 2,
          p: 2.5,
          borderRadius: 3,
          bgcolor: "primary.dark",
          textDecoration: "none",
          color: "common.white",
          "&:hover": { opacity: 0.9 },
        }}
      >
        <PhoneIcon sx={{ fontSize: "1.6rem" }} />
        <Box>
          <Typography fontWeight={800} fontSize="1.6rem" lineHeight={1.1}>
            {NCO_NUMBER}
          </Typography>
          <Typography fontSize="0.75rem" sx={{ opacity: 0.85 }}>
            credit/debit card
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="caption"
        color="secondary.main"
        display="block"
        textAlign="center"
        mb={2}
        sx={{ maxWidth: 400, mx: "auto" }}
      >
        No additional call charge from UK landlines and mobiles.<br />Quote &ldquo;{NEW_CLIENT_OFFER_CODE}&rdquo; when connected to Reception.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          px: 3,
          py: 1.5,
          borderRadius: 3,
          border: `1px dashed ${theme.palette.primary.dark}`,
          bgcolor: (theme) => theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(116,93,221,0.07)",
          width: "fit-content",
          mx: "auto",
          mb: 4,
        }}
      >
        <Typography sx={{ fontSize: "0.8rem", color: "secondary.main" }}>Quote code</Typography>
        <Typography sx={{ fontWeight: 800, fontSize: "1.4rem", letterSpacing: 4, fontFamily: "monospace", color: "primary.dark" }}>
          {NEW_CLIENT_OFFER_CODE}
        </Typography>
      </Box>

      {/* Eligibility note */}
      <Paper
        elevation={0}
        sx={{
          maxWidth: 480,
          mx: "auto",
          mb: 6,
          p: 2.5,
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`,
          bgcolor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
        }}
      >
        <Typography variant="body2" fontWeight={700} mb={0.5}>
          Am I eligible?
        </Typography>
        <Typography variant="body2" color="secondary.main">
          This offer is for new clients only — those who have not had a credit card call with us in
          the last 3 months. It is not available via Pre-Pay or the 0906 line. If you&apos;re unsure,
          our Reception team will be happy to advise when you call.
        </Typography>
        <Typography variant="caption" color="secondary.main" display="block" mt={1.5}>
          All calls are recorded; the caller must be 18 or over and have the bill payer&apos;s
          permission. Readings under UK law are deemed to be for entertainment only.
          Helpline: 0808 156 0022.
        </Typography>
      </Paper>

      {/* Standard call options */}
      <Divider sx={{ mb: 6 }} />
      <Typography
        variant="h5"
        fontWeight={700}
        textAlign="center"
        mb={1}
      >
        All call options
      </Typography>
      <Box sx={{ maxWidth: 480, mx: "auto", mb: 6 }}>
        <Typography variant="caption" sx={{ display: "block", textAlign: "center", color: "secondary.main", mb: 1, letterSpacing: 1, textTransform: "uppercase" }}>
          🎁 New client offer
        </Typography>
        <CallOptionCard
          title="New Client Offer — 10 mins for £5"
          number={NCO_NUMBER}
          price={`Quote "${NEW_CLIENT_OFFER_CODE}" · credit/debit card · first-time callers only`}
        />
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" sx={{ display: "block", textAlign: "center", color: "secondary.main", mb: 1, letterSpacing: 1, textTransform: "uppercase" }}>
          Standard rates
        </Typography>
        {CALL_OPTIONS.map((opt) => (
          <CallOptionCard key={opt.number} {...opt} />
        ))}
      </Box>

      {/* Trust badges */}
      <Grid container spacing={4} alignItems="center" justifyContent="center" mb={4}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TrustBadge src="readings-given.png" alt="Over 150,000 readings given" />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TrustBadge src="est-2002.png" alt="Established 2002" />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
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
        {NEW_CLIENT_OFFER_LABEL} available to first-time callers who have not made a Credit/Debit Card call to The Psychic Gift in the last 3 months. Standard rates apply after the promotional 10 minutes.{" "}
        <a href="/terms-and-conditions#new-client-offer" style={{ color: "inherit" }}>
          Full T&amp;Cs apply.
        </a>
      </Typography>
    </Container>
  );
}
