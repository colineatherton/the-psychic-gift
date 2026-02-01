import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

export function OfferBanner({ message }: { message: string }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: (theme) => theme.palette.accent.primary,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.3)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          variant="dense"
          sx={{
            minHeight: "0",
            py: 1.5,
            justifyContent: "center",
          }}
        >
          <Box
            component="a"
            href="tel:08009152333"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <PhoneIcon sx={{ fontSize: "1.2rem" }} />
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={600}
              sx={{
                fontSize: { xs: "0.85rem", sm: "1rem" },
              }}
            >
              {message}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
