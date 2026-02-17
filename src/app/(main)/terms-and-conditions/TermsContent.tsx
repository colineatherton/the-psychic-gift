"use client";

import { Box, Grid, Typography, useTheme } from "@mui/material";

export default function TermsContent() {
  const theme = useTheme();

  const headingStyles = {
    fontFamily: "Montserrat Variable, sans-serif",
    fontWeight: 500,
    fontSize: "1.5rem",
    lineHeight: "1.2",
    mb: 2,
    mt: 6,
  };

  const paragraphStyles = {
    fontFamily: "Montserrat Variable, sans-serif",
    fontWeight: 500,
    fontSize: "1rem",
    color: theme.palette.secondary.dark,
    lineHeight: "2",
    mb: 2,
  };

  return (
    <>
      <Grid size={12} justifyContent="center" alignItems="center" mb={6}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="2rem"
          lineHeight="1"
          variant="h1"
          component="h1"
          textAlign="center"
        >
          Terms and Conditions
        </Typography>
      </Grid>

      <Grid size={12} mb={4}>
        <Typography sx={paragraphStyles}>
          Welcome to The Psychic Gift. By using our services, you agree to be
          bound by these terms and conditions. Please read them carefully before
          making a call.
        </Typography>
      </Grid>

      {/* Nature of Service */}
      <Box component="section">
        <Typography variant="h2" component="h2" sx={headingStyles}>
          Nature of Service
        </Typography>
        <Typography sx={paragraphStyles}>
          The Psychic Gift provides psychic and spiritual reading services for
          entertainment purposes only. Our readings are not intended to replace
          professional advice including medical, legal, financial, or
          psychological consultation.
        </Typography>
        <Typography sx={paragraphStyles}>
          Our readers are independent contractors who offer their services
          through our platform. While we carefully select our readers, The
          Psychic Gift does not guarantee the accuracy of any reading or the
          outcomes of any decisions made based on information received during a
          reading.
        </Typography>
      </Box>

      {/* Age Requirement */}
      <Box component="section">
        <Typography variant="h2" component="h2" sx={headingStyles}>
          Age Requirement
        </Typography>
        <Typography sx={paragraphStyles}>
          You must be 18 years of age or older to use our services. By calling
          our lines, you confirm that you are at least 18 years old and, if
          using a premium rate number, that you are the bill payer or have the
          bill payer&apos;s permission.
        </Typography>
      </Box>

      {/* Pricing */}
      <Box component="section">
        <Typography variant="h2" component="h2" sx={headingStyles}>
          Pricing
        </Typography>
        <Typography sx={paragraphStyles}>
          <strong>Premium Rate Calls (0906):</strong> Calls cost £1.50 per
          minute plus your phone company&apos;s access charge. Calls are
          charged to your phone bill.
        </Typography>
        <Typography sx={paragraphStyles}>
          <strong>Credit Card Calls (0800):</strong> £32.95 for the first 20
          minutes. Additional minutes are charged at £1.50 per minute.
        </Typography>
        <Typography sx={paragraphStyles}>
          <strong>Pre-Pay Account:</strong> 20 minutes for £30, offering the
          best value. Top up online or by phone.
        </Typography>
      </Box>

      {/* Satisfaction Guarantee */}
      <Box component="section" id="satisfaction-guarantee">
        <Typography variant="h2" component="h2" sx={headingStyles}>
          Satisfaction Guarantee
        </Typography>
        <Typography sx={paragraphStyles}>
          Your satisfaction is important to us. If you are not satisfied with
          your credit card reading and terminate your call within the first 5
          minutes, please contact our Customer Care team on{" "}
          <strong>0800 156 0022</strong>. We will endeavour to place you with an
          alternative reader for the full 20 minutes at no additional charge.
        </Typography>
        <Typography sx={paragraphStyles}>
          If you terminate your call after 5 minutes, we will only be able to
          offer you a reading for the time remaining of your pre-paid 20
          minutes with an alternative reader.
        </Typography>
        <Typography sx={paragraphStyles}>
          Please note that we reserve the right to withdraw this guarantee in
          cases of persistent complaints or misuse of the service.
        </Typography>
      </Box>

      {/* Call Recording */}
      <Box component="section">
        <Typography variant="h2" component="h2" sx={headingStyles}>
          Call Recording
        </Typography>
        <Typography sx={paragraphStyles}>
          All calls are recorded for quality assurance and training purposes. By
          using our service, you consent to this recording. Recordings are
          stored securely and handled in accordance with our Privacy Policy.
        </Typography>
      </Box>

      {/* User Conduct */}
      <Box component="section">
        <Typography variant="h2" component="h2" sx={headingStyles}>
          User Conduct
        </Typography>
        <Typography sx={paragraphStyles}>
          We reserve the right to terminate any call or suspend access to our
          services if a caller behaves inappropriately, uses abusive language,
          or attempts to misuse the service in any way.
        </Typography>
      </Box>

      {/* Liability */}
      <Box component="section">
        <Typography variant="h2" component="h2" sx={headingStyles}>
          Limitation of Liability
        </Typography>
        <Typography sx={paragraphStyles}>
          Under UK law, psychic readings are deemed to be for entertainment
          only. The Psychic Gift, its employees, and its readers shall not be
          held liable for any decisions made or actions taken based on
          information received during a reading.
        </Typography>
        <Typography sx={paragraphStyles}>
          We do not guarantee the accuracy of any information provided during
          readings, and users acknowledge that readings are subjective
          interpretations.
        </Typography>
      </Box>

      {/* Contact */}
      <Box component="section">
        <Typography variant="h2" component="h2" sx={headingStyles}>
          Contact Us
        </Typography>
        <Typography sx={paragraphStyles}>
          If you have any questions about these terms or need assistance, please
          contact our Customer Care helpline on <strong>0800 156 0022</strong>.
        </Typography>
      </Box>

      {/* Legal Footer */}
      <Box component="section" sx={{ mt: 8, pt: 4, borderTop: 1, borderColor: "divider" }}>
        <Typography
          sx={{
            ...paragraphStyles,
            fontSize: "0.875rem",
            color: theme.palette.text.secondary,
          }}
        >
          All calls are recorded. The caller must be 18 or over and have the
          bill payer&apos;s permission. Readings under UK law are deemed to be
          for entertainment only. Helpline: 0800 156 0022.
        </Typography>
      </Box>
    </>
  );
}
