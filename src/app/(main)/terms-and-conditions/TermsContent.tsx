"use client";

import { Box, Grid, Typography, useTheme } from "@mui/material";
import { HELPLINE_NUMBER } from "@/lib/constants/phoneNumbers";

export default function TermsContent() {
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
          Terms & Conditions
        </Typography>
        <Box
          component="img"
          src={logoSrc}
          alt="The Psychic Gift"
          sx={{
            height: 100,
            maxWidth: "100%",
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
          Please read these terms and conditions carefully before using The
          Psychic Gift service. By using our service, you agree to be bound by
          these terms.
        </Typography>
      </Grid>

      <Typography sx={sectionTitleSx}>1. Service Description</Typography>
      <Typography sx={paragraphSx}>
        The Psychic Gift provides telephone-based psychic reading services
        connecting callers with independent psychic readers. Our readers offer
        clairvoyant, medium, tarot, and other forms of psychic readings via
        telephone.
      </Typography>
      <Typography sx={paragraphSx}>
        <strong>
          All readings are provided for entertainment purposes only.
        </strong>{" "}
        The information provided during readings should not be taken as fact and
        should not be used as a substitute for professional advice including
        medical, legal, financial, or psychological guidance.
      </Typography>

      <Typography sx={sectionTitleSx}>2. Age Requirement</Typography>
      <Typography sx={paragraphSx}>
        You must be 18 years of age or older to use The Psychic Gift service. By
        using our service, you confirm that you are at least 18 years old and
        have the bill payer&apos;s permission where applicable.
      </Typography>

      <Typography sx={sectionTitleSx}>3. Pricing</Typography>
      <Typography sx={paragraphSx}>
        <strong>Credit/Debit Card Payments (0800 915 2345):</strong>
        <br />
        £32.95 for the first 20 minutes, then £1.50 per minute thereafter. Calls
        can last up to 90 minutes.
      </Typography>
      <Typography sx={paragraphSx}>
        <strong>Pay by Phone Bill (0906 110 0960):</strong>
        <br />
        £1.50 per minute plus your phone company&apos;s access charge. Calls are
        limited to 26 minutes per call.
      </Typography>
      <Typography sx={paragraphSx}>
        <strong>Pre-Pay Minutes (0808 156 4920):</strong>
        <br />
        Purchase minutes in advance at £1.50 per minute. Bonus minutes are
        available on larger purchases (10% extra free on purchases over £60).
      </Typography>
      <Typography sx={paragraphSx}>
        All prices are clearly displayed before you connect. Your call charges
        will appear on your phone bill or card statement.
      </Typography>

      <Typography sx={sectionTitleSx}>4. Payment Terms</Typography>
      <Typography sx={paragraphSx}>
        Payment is taken at the point of service for credit/debit card and
        premium rate calls. Pre-pay minutes must be purchased in advance and are
        deducted in real-time during your call. Card payments are processed
        securely and we do not store full card details unless you opt to save
        them for future purchases.
      </Typography>

      <Typography
        sx={{ ...sectionTitleSx, scrollMarginTop: "120px" }}
        id="new-client-offer"
      >
        5. New Client Offer
      </Typography>
      <Typography sx={paragraphSx}>
        We offer 10 minutes for £5 to first-time callers as an introductory
        rate. To be eligible, you must not have made a Credit/Debit Card line
        call to The Psychic Gift in the last 3 months. The offer applies to
        Credit/Debit Card calls only and is available once per customer.
        Standard rates apply after the promotional 10 minutes. Quote{" "}
        <strong>SEEKER</strong> when connecting to claim the offer.
      </Typography>

      <Typography
        sx={{ ...sectionTitleSx, scrollMarginTop: "120px" }}
        id="satisfaction-guarantee"
      >
        6. Satisfaction Guarantee
      </Typography>
      <Typography sx={paragraphSx}>
        We want you to be satisfied with your reading experience. If you are
        unhappy with a reading for any reason, please contact our customer
        support team within 24 hours of your call. We will review your complaint
        and may offer a partial or full credit at our discretion. Credits are
        provided as pre-pay minutes for future use and are not redeemable for
        cash.
      </Typography>
      <Typography sx={paragraphSx}>
        The satisfaction guarantee does not apply to calls where the reader was
        clearly available and the reading took place as expected. We reserve the
        right to refuse repeat claims or claims made in bad faith.
      </Typography>

      <Typography sx={sectionTitleSx}>7. Call Recording</Typography>
      <Typography sx={paragraphSx}>
        All calls may be recorded for quality assurance, training, and
        regulatory compliance purposes. Recordings are stored securely and
        retained in accordance with our data retention policy. You may request
        access to recordings of your own calls by contacting customer support.
      </Typography>

      <Typography sx={sectionTitleSx}>8. Reader Independence</Typography>
      <Typography sx={paragraphSx}>
        The psychic readers available through The Psychic Gift are independent
        contractors, not employees. While we carefully select and monitor our
        readers, we cannot guarantee the accuracy or outcome of any reading. The
        views and opinions expressed by readers during calls are their own and
        do not represent The Psychic Gift.
      </Typography>

      <Typography sx={sectionTitleSx}>9. Disclaimer</Typography>
      <Typography sx={paragraphSx}>
        Readings are provided for entertainment purposes only. We make no
        guarantees, representations, or warranties regarding the accuracy,
        reliability, or completeness of any information provided during
        readings. You should not rely on readings to make important life
        decisions.
      </Typography>
      <Typography sx={paragraphSx}>
        The Psychic Gift shall not be liable for any loss, damage, or injury
        arising from your use of the service or reliance on information provided
        during readings. This includes but is not limited to financial loss,
        emotional distress, or any consequential damages.
      </Typography>

      <Typography sx={sectionTitleSx}>10. Complaints</Typography>
      <Typography sx={paragraphSx}>
        If you have a complaint about our service, please contact our customer
        support team at{" "}
        <a href="tel:08081560022" style={{ color: "inherit" }}>
          {HELPLINE_NUMBER}
        </a>{" "}
        or email{" "}
        <a href="mailto:support@thepsychicgift.co.uk" style={{ color: "inherit" }}>
          support@thepsychicgift.co.uk
        </a>
        . We aim to resolve all complaints within 7 working days.
      </Typography>
      <Typography sx={paragraphSx}>
        If you are not satisfied with our response, you may escalate your
        complaint to the Phone-paid Services Authority (PSA) at{" "}
        <a
          href="https://psauthority.org.uk"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          psauthority.org.uk
        </a>
        .
      </Typography>

      <Typography sx={sectionTitleSx}>11. Service Availability</Typography>
      <Typography sx={paragraphSx}>
        We aim to provide our service 24 hours a day, 7 days a week. However, we
        do not guarantee uninterrupted availability and may suspend service for
        maintenance, technical issues, or other operational reasons. Reader
        availability varies and we cannot guarantee a specific reader will be
        available at any given time.
      </Typography>

      <Typography sx={sectionTitleSx}>12. Governing Law</Typography>
      <Typography sx={paragraphSx}>
        These terms and conditions are governed by and construed in accordance
        with the laws of England and Wales. Any disputes arising from these
        terms shall be subject to the exclusive jurisdiction of the courts of
        England and Wales.
      </Typography>

      <Typography sx={sectionTitleSx}>13. Changes to Terms</Typography>
      <Typography sx={paragraphSx}>
        We reserve the right to update these terms and conditions at any time.
        Changes will be effective immediately upon posting to this page. Your
        continued use of the service after changes are posted constitutes
        acceptance of the updated terms.
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
          <br />
          The Psychic Gift is a trading name operated in accordance with PSA and
          Ofcom regulations.
        </Typography>
      </Grid>
    </>
  );
}
