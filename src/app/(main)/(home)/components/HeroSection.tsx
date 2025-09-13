import { Box, Container, Grid, Typography, Button } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #8174bb 15%, #a99fd1 100%)",
        paddingTop: "calc(80px - 32px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "calc(80vh - 32px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container height="100%">
          <Grid size={{ xs: 12, md: 7 }} pt="52px" pr="15%">
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={700}
              fontSize="3rem"
              color="#f8f7ff"
              lineHeight="1.2"
              variant="h1"
              component="h1"
              marginBottom={2}
              marginTop={6}
            >
              Psychic Phone Readings
            </Typography>
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={500}
              fontSize="2rem"
              color="#f8f7ff"
              lineHeight="1.6"
              variant="h2"
              component="h2"
              marginBottom={4}
            >
              Speak with Gifted Clairvoyants by Phone Today
            </Typography>
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={500}
              fontSize="1.2rem"
              color="#f8f7ff"
              lineHeight="1.6"
              variant="body2"
              component="p"
              marginBottom={6}
            >
              Speak to a caring psychic and find clarity in love, life, or your
              next steps - trusted for over 23 years.
            </Typography>
            <Button
              size="large"
              variant="contained"
              sx={{
                backgroundColor: "#745ddd",
                borderRadius: 8,
                mb: 4,
                py: 2,
                px: 4,
              }}
            >
              Start Your Reading Now
            </Button>
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={500}
              fontSize="1rem"
              color="#f8f7ff"
              lineHeight="1.6"
              variant="body2"
              component="p"
              marginBottom={4}
            >
              From £30 for 20 mins | Card & Phone Bill Options | All Calls
              Recorded
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            height={"100%"}
            display={"flex"}
            alignSelf={"center"}
          >
            <img
              src="/illustrations/4-stars-3.png"
              alt="Illustration"
              style={{
                width: "80%",
                height: "auto",
                display: "flex",
                margin: "0 auto",
                alignSelf: "center",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
