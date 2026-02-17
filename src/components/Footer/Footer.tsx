"use client";

import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
  { label: "Terms & Conditions", path: "/terms-and-conditions" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Contact", path: "/contact" },
];

export function Footer() {
  const theme = useTheme();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
        py: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid
            size={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 2, sm: 4 },
              flexWrap: "wrap",
            }}
          >
            {footerLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link key={link.path} href={link.path} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat Variable, sans-serif",
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      color: isActive
                        ? theme.palette.primary.main
                        : theme.palette.text.secondary,
                      fontWeight: isActive ? 600 : 400,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                      transition: "color 0.2s ease",
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              );
            })}
          </Grid>
          <Grid size={12}>
            <Typography
              sx={{
                fontFamily: "Montserrat Variable, sans-serif",
                fontSize: "0.75rem",
                color: theme.palette.text.disabled,
                textAlign: "center",
                mt: 2,
              }}
            >
              © {currentYear} The Psychic Gift. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
