"use client";

import { Box, Grid, Typography, useTheme } from "@mui/material";

export default function PrivacyContent() {
  const theme = useTheme();

  const logoSrc =
    theme.palette.mode === "light"
      ? "/logo-gold-star-dark.png"
      : "/logo-gold-star.png";

  const sectionTitleSx = {
    fontFamily: "Montserrat Variable, sans-serif",
    fontWeight: 600,
    fontSize: "1.25rem",
    lineHeight: "1.4",
    variant: "h3" as const,
    component: "h2" as const,
    mt: 6,
    mb: 2,
  };

  const paragraphSx = {
    fontFamily: "Montserrat Variable, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: theme.palette.secondary.dark,
    lineHeight: "1.8",
    variant: "body2" as const,
    component: "p" as const,
    mb: 2,
  };

  return (
    <>
      <Grid size={12} justifyContent="center" alignItems="center" mb={10}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="2rem"
          lineHeight="1"
          variant="h1"
          component="h1"
          textAlign="center"
        >
          Privacy Policy
        </Typography>
        <Box
          component="img"
          src={logoSrc}
          alt="The Psychic Gift"
          sx={{
            height: 100,
            mt: 1,
            display: "block",
            margin: "0 auto",
          }}
        />
      </Grid>

      <Grid size={12} mb={4}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color={theme.palette.secondary.dark}
          lineHeight="2"
          variant="body2"
          component="p"
        >
          The Psychic Gift is committed to protecting your privacy. This policy
          explains how we collect, use, and safeguard your personal data when
          you use our psychic phone reading service.
        </Typography>
      </Grid>

      <Typography sx={sectionTitleSx}>1. Who We Are</Typography>
      <Typography sx={paragraphSx}>
        The Psychic Gift is a telephone-based psychic reading service operating
        in the United Kingdom. For the purposes of data protection law, we are
        the data controller responsible for your personal information.
      </Typography>
      <Typography sx={paragraphSx}>
        <strong>Contact Details:</strong>
        <br />
        Email:{" "}
        <a href="mailto:privacy@thepsychicgift.co.uk" style={{ color: "inherit" }}>
          privacy@thepsychicgift.co.uk
        </a>
        <br />
        Support Helpline: 0808 156 0022
        <br />
        Address: The Psychic Gift, Customer Services, PO Box 2802, London, W1A
        5RB
      </Typography>

      <Typography sx={sectionTitleSx}>2. Information We Collect</Typography>
      <Typography sx={paragraphSx}>
        We may collect and process the following personal data:
      </Typography>
      <Typography sx={paragraphSx}>
        <strong>When you call our service:</strong>
        <br />
        • Telephone number (automatically captured via caller ID)
        <br />
        • Call duration and time
        <br />
        • Reader you spoke with
        <br />• Call recordings (for quality and compliance purposes)
      </Typography>
      <Typography sx={paragraphSx}>
        <strong>When you pay by card or create a pre-pay account:</strong>
        <br />
        • Name
        <br />
        • Payment card details (processed securely, not stored in full)
        <br />
        • Email address (if provided)
        <br />• Account PIN and balance
      </Typography>
      <Typography sx={paragraphSx}>
        <strong>When you visit our website:</strong>
        <br />
        • IP address
        <br />
        • Browser type and device information
        <br />
        • Pages visited and time spent
        <br />• Cookie data (with your consent)
      </Typography>

      <Typography sx={sectionTitleSx}>3. How We Use Your Information</Typography>
      <Typography sx={paragraphSx}>
        We use your personal data for the following purposes:
      </Typography>
      <Typography sx={paragraphSx}>
        • <strong>To provide our service:</strong> Connecting you with psychic
        readers and processing payments
        <br />
        • <strong>To manage your account:</strong> Maintaining pre-pay balances
        and call history
        <br />
        • <strong>For quality assurance:</strong> Monitoring and improving our
        service through call recordings
        <br />
        • <strong>For regulatory compliance:</strong> Meeting our obligations
        under PSA and Ofcom regulations
        <br />
        • <strong>To respond to enquiries:</strong> Handling customer support
        requests and complaints
        <br />• <strong>For website analytics:</strong> Understanding how
        visitors use our website (with consent)
      </Typography>

      <Typography sx={sectionTitleSx}>4. Legal Basis for Processing</Typography>
      <Typography sx={paragraphSx}>
        We process your personal data on the following legal bases:
      </Typography>
      <Typography sx={paragraphSx}>
        • <strong>Contract:</strong> To fulfil our service agreement with you
        <br />
        • <strong>Legal obligation:</strong> To comply with regulatory
        requirements
        <br />
        • <strong>Legitimate interests:</strong> To improve our service and
        prevent fraud
        <br />• <strong>Consent:</strong> For cookies and marketing
        communications (where applicable)
      </Typography>

      <Typography sx={sectionTitleSx}>5. Data Retention</Typography>
      <Typography sx={paragraphSx}>
        We retain your personal data for as long as necessary to fulfil the
        purposes for which it was collected:
      </Typography>
      <Typography sx={paragraphSx}>
        • <strong>Call records:</strong> Retained for up to 12 months
        <br />
        • <strong>Call recordings:</strong> Retained for up to 6 months unless
        required for dispute resolution
        <br />
        • <strong>Payment records:</strong> Retained for 7 years for financial
        compliance
        <br />
        • <strong>Pre-pay accounts:</strong> Retained while active and for 12
        months after last activity
        <br />• <strong>Website analytics:</strong> Retained for up to 26 months
      </Typography>

      <Typography sx={sectionTitleSx}>6. Data Sharing</Typography>
      <Typography sx={paragraphSx}>
        We may share your personal data with:
      </Typography>
      <Typography sx={paragraphSx}>
        • <strong>Payment processors:</strong> To process card payments securely
        <br />
        • <strong>Telecommunications providers:</strong> To facilitate premium
        rate calls
        <br />
        • <strong>Regulatory bodies:</strong> Including PSA and Ofcom when
        required
        <br />• <strong>Professional advisers:</strong> Including lawyers and
        accountants where necessary
      </Typography>
      <Typography sx={paragraphSx}>
        We do not sell your personal data to third parties. We do not share your
        data for marketing purposes without your explicit consent.
      </Typography>

      <Typography sx={sectionTitleSx}>7. Cookies</Typography>
      <Typography sx={paragraphSx}>
        Our website uses cookies to enhance your browsing experience. We use:
      </Typography>
      <Typography sx={paragraphSx}>
        • <strong>Essential cookies:</strong> Required for the website to
        function properly
        <br />• <strong>Analytics cookies:</strong> To understand how visitors
        use our website (only with your consent)
      </Typography>
      <Typography sx={paragraphSx}>
        You can manage your cookie preferences through our cookie consent banner
        or your browser settings. Rejecting non-essential cookies will not
        affect your ability to use our service.
      </Typography>

      <Typography sx={sectionTitleSx}>8. Your Rights</Typography>
      <Typography sx={paragraphSx}>
        Under UK data protection law (UK GDPR), you have the following rights:
      </Typography>
      <Typography sx={paragraphSx}>
        • <strong>Right of access:</strong> Request a copy of your personal data
        <br />
        • <strong>Right to rectification:</strong> Request correction of
        inaccurate data
        <br />
        • <strong>Right to erasure:</strong> Request deletion of your data
        (subject to legal obligations)
        <br />
        • <strong>Right to restrict processing:</strong> Request limitation of
        how we use your data
        <br />
        • <strong>Right to data portability:</strong> Receive your data in a
        portable format
        <br />
        • <strong>Right to object:</strong> Object to processing based on
        legitimate interests
        <br />• <strong>Right to withdraw consent:</strong> Withdraw consent at
        any time where processing is based on consent
      </Typography>
      <Typography sx={paragraphSx}>
        To exercise any of these rights, please contact us at{" "}
        <a href="mailto:privacy@thepsychicgift.co.uk" style={{ color: "inherit" }}>
          privacy@thepsychicgift.co.uk
        </a>
        . We will respond to your request within one month.
      </Typography>

      <Typography sx={sectionTitleSx}>9. Data Security</Typography>
      <Typography sx={paragraphSx}>
        We implement appropriate technical and organisational measures to
        protect your personal data against unauthorised access, alteration,
        disclosure, or destruction. This includes encryption, access controls,
        and regular security assessments.
      </Typography>

      <Typography sx={sectionTitleSx}>10. International Transfers</Typography>
      <Typography sx={paragraphSx}>
        Your personal data is primarily processed within the United Kingdom. If
        we transfer data outside the UK, we ensure appropriate safeguards are in
        place in accordance with UK data protection law.
      </Typography>

      <Typography sx={sectionTitleSx}>11. Complaints</Typography>
      <Typography sx={paragraphSx}>
        If you are unhappy with how we have handled your personal data, you have
        the right to lodge a complaint with the Information Commissioner&apos;s
        Office (ICO):
      </Typography>
      <Typography sx={paragraphSx}>
        Website:{" "}
        <a
          href="https://ico.org.uk"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          ico.org.uk
        </a>
        <br />
        Helpline: 0303 123 1113
      </Typography>

      <Typography sx={sectionTitleSx}>12. Changes to This Policy</Typography>
      <Typography sx={paragraphSx}>
        We may update this privacy policy from time to time. Any changes will be
        posted on this page with an updated revision date. We encourage you to
        review this policy periodically.
      </Typography>

      <Grid size={12} mt={8} mb={4}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={400}
          fontSize="0.875rem"
          color={theme.palette.secondary.dark}
          lineHeight="1.6"
          variant="body2"
          component="p"
          textAlign="center"
        >
          Last updated: February 2026
        </Typography>
      </Grid>
    </>
  );
}
