"use client";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  Link as MuiLink,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const SUBJECT_OPTIONS = [
  { value: "comments", label: "Comments" },
  { value: "complaints", label: "Complaints" },
  { value: "billing", label: "Billing Enquiry" },
  { value: "readings", label: "About Readings" },
  { value: "work", label: "Work for The Psychic Gift" },
  { value: "other", label: "Other" },
];

export default function ContactContent() {
  const theme = useTheme();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const logoSrc =
    theme.palette.mode === "light"
      ? "/logo-gold-star-dark.png"
      : "/logo-gold-star.png";

  const fieldSx = {
    mb: 2,
    "& .MuiOutlinedInput-root": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255,255,255,0.4)",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255,255,255,0.7)",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.common.white,
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.common.white,
    },
    "& .MuiInputBase-input:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 100px ${theme.palette.primary.light} inset`,
      WebkitTextFillColor: theme.palette.text.primary,
      caretColor: theme.palette.text.primary,
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitStatus(null);
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get reCAPTCHA token if available
      let recaptchaToken = null;
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("contact_form");
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitStatus({ type: "error", message: data.error });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "There was a problem sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [executeRecaptcha, formData]);

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
          Contact Us
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
          textAlign="center"
        >
          We&apos;re here to assist with any questions about our service,
          billing enquiries, or general feedback. Please get in touch using the
          form or details below.
        </Typography>
      </Grid>

      <Grid container spacing={4} width="100%" mb={6}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              height: "100%",
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
            }}
          >
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={600}
              fontSize="1.25rem"
              variant="h3"
              component="h2"
              mb={3}
            >
              Customer Support
            </Typography>
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontSize="1rem"
              lineHeight="1.8"
              variant="body1"
              component="p"
              mb={2}
            >
              <strong>Support Helpline:</strong>
              <br />
              <MuiLink
                href="tel:08081560022"
                sx={{ color: "inherit", textDecoration: "underline" }}
              >
                0808 156 0022
              </MuiLink>
              <br />
              <Typography
                component="span"
                fontSize="0.875rem"
                color={theme.palette.secondary.dark}
              >
                Free to call from UK landlines and mobiles
              </Typography>
            </Typography>
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontSize="1rem"
              lineHeight="1.8"
              variant="body1"
              component="p"
              mb={2}
            >
              <strong>Email:</strong>
              <br />
              <MuiLink
                href="mailto:support@thepsychicgift.co.uk"
                sx={{ color: "inherit", textDecoration: "underline" }}
              >
                support@thepsychicgift.co.uk
              </MuiLink>
            </Typography>
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontSize="1rem"
              lineHeight="1.8"
              variant="body1"
              component="p"
            >
              <strong>Support Hours:</strong>
              <br />
              Monday – Sunday: 9am – 9pm
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              height: "100%",
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
            }}
          >
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={600}
              fontSize="1.25rem"
              variant="h3"
              component="h2"
              mb={3}
            >
              Speak to a Psychic
            </Typography>
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontSize="1rem"
              lineHeight="1.8"
              variant="body1"
              component="p"
              mb={2}
            >
              <strong>Credit/Debit Card:</strong>
              <br />
              <MuiLink
                href="tel:08009152333"
                sx={{ color: "inherit", textDecoration: "underline" }}
              >
                0800 915 2333
              </MuiLink>
              <br />
              <Typography
                component="span"
                fontSize="0.875rem"
                color={theme.palette.secondary.dark}
              >
                £32.95 for 20 mins, £1.50/min thereafter
              </Typography>
            </Typography>
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontSize="1rem"
              lineHeight="1.8"
              variant="body1"
              component="p"
            >
              <strong>Pay by Phone Bill:</strong>
              <br />
              <MuiLink
                href="tel:09061761960"
                sx={{ color: "inherit", textDecoration: "underline" }}
              >
                0906 176 1960
              </MuiLink>
              <br />
              <Typography
                component="span"
                fontSize="0.875rem"
                color={theme.palette.secondary.dark}
              >
                £1.50/min plus your phone company&apos;s access charge
              </Typography>
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid
        size={12}
        justifyContent="center"
        alignItems="center"
        mt={10}
        mb={4}
      >
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1.5rem"
          lineHeight="1"
          variant="h2"
          component="h2"
          textAlign="center"
        >
          Send Us a Message
        </Typography>
      </Grid>

      <Grid size={12} mb={6}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          {submitStatus && (
            <Alert
              severity={submitStatus.type}
              sx={{ mb: 3 }}
              onClose={() => setSubmitStatus(null)}
            >
              {submitStatus.message}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={fieldSx}
            />
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={fieldSx}
            />
            <TextField
              fullWidth
              label="Phone Number (optional)"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              sx={fieldSx}
            />
            <FormControl fullWidth sx={fieldSx}>
              <InputLabel id="subject-label">Nature of Enquiry *</InputLabel>
              <Select
                labelId="subject-label"
                name="subject"
                value={formData.subject}
                onChange={(e) => handleChange({ target: { name: "subject", value: e.target.value } })}
                label="Nature of Enquiry *"
                required
              >
                {SUBJECT_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
              sx={{ ...fieldSx, mb: 3 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              disabled={isSubmitting}
              sx={{
                width: "100%",
                py: 1.5,
                borderRadius: 2,
              }}
            >
              {isSubmitting ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Send Enquiry"
              )}
            </Button>
          </form>
        </Paper>
      </Grid>

      <Grid
        size={12}
        justifyContent="center"
        alignItems="center"
        mt={10}
        mb={6}
      >
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1.5rem"
          lineHeight="1"
          variant="h2"
          component="h2"
          textAlign="center"
        >
          Quick Links
        </Typography>
      </Grid>

      <Grid container spacing={2} width="100%" mb={6} justifyContent="center">
        <Grid size={{ xs: 6, sm: 3 }}>
          <Link href="/how-psychic-readings-work" passHref>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                textAlign: "center",
                backgroundColor: theme.palette.primary.main,
                borderRadius: 2,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              <Typography fontFamily="Montserrat Variable, sans-serif">
                How It Works
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <Link href="/terms-and-conditions" passHref>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                textAlign: "center",
                backgroundColor: theme.palette.primary.main,
                borderRadius: 2,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              <Typography fontFamily="Montserrat Variable, sans-serif">
                Terms & Conditions
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <Link href="/privacy-policy" passHref>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                textAlign: "center",
                backgroundColor: theme.palette.primary.main,
                borderRadius: 2,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              <Typography fontFamily="Montserrat Variable, sans-serif">
                Privacy Policy
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <Link href="/psychic-readers" passHref>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                textAlign: "center",
                backgroundColor: theme.palette.primary.main,
                borderRadius: 2,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              <Typography fontFamily="Montserrat Variable, sans-serif">
                Our Readers
              </Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>

      <Grid size={12} mt={10} mb={4}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="0.875rem"
          color={theme.palette.secondary.dark}
          lineHeight="1.8"
          variant="body2"
          component="p"
          textAlign="center"
        >
          For billing disputes or complaints, please contact our support team
          who will respond within 48 hours. You can also write to us at: The
          Psychic Gift, Customer Services, PO Box 2802, London, W1A 5RB.
        </Typography>
      </Grid>
    </>
  );
}
