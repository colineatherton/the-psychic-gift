// OfferBanner.tsx
import { AppBar, Container, Toolbar } from "@mui/material";

export default function OfferBanner({ message }: { message?: string }) {
  return (
    // <Box bgcolor="primary.main" color="white" px={2} py={1} textAlign="center">
    //   <Typography variant="subtitle1" fontWeight="bold">
    //     {message}
    //   </Typography>
    // </Box>
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "#745ddd",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters variant="dense" sx={{ minHeight: "0", py: 1 }}>
          ☀️ Summer madness continues! £10 off every credit card reading! Call
          0800 915 2347 & quote &quot;summer madness 25&quot;
        </Toolbar>
      </Container>
    </AppBar>
  );
}
