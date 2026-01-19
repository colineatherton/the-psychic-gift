import { Card, CardContent, Box, Typography } from "@mui/material";

interface FeatureCardProps {
  src: string;
  title: string;
  body: string | React.ReactNode;
}

export function FeatureCard({ src, title, body }: FeatureCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: (theme) => theme.palette.common.white,
        borderRadius: 4,
        transition: "transform 0.25s ease",
        boxShadow: 4,
        "&:hover": {
          boxShadow: 15,
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, pt: 2 }}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          mt={2}
          mb={2}
          flexDirection={"column"}
          alignItems={"center"}
          px={2}
        >
          <img
            src={src}
            alt="Illustration"
            style={{
              width: "80px",
              height: "auto",
              display: "flex",
              margin: "0 auto",
              alignSelf: "center",
            }}
          />
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontWeight={600}
            fontSize="1.1rem"
            lineHeight="1.6"
            variant="h3"
            component="h3"
            textAlign="center"
            marginTop={4}
          >
            {title}
          </Typography>
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontWeight={500}
            fontSize="1rem"
            lineHeight="1.6"
            variant="body2"
            component="p"
            textAlign="center"
            marginTop={6}
            marginBottom={2}
          >
            {body}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
