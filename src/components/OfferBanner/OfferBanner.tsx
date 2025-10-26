import { AppBar, Container, Toolbar } from "@mui/material";

export function OfferBanner({ message }: { message: string }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: (theme) => theme.palette.primary.dark,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters variant="dense" sx={{ minHeight: "0", py: 1 }}>
          {message}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
