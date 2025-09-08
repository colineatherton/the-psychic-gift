import Link from "next/link";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

export default function LinkCard({
  iconPath,
  title,
  description,
  href,
}: {
  iconPath: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: 4, // default elevation
        "&:hover": {
          boxShadow: 10, // higher elevation on hover
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
            src={`/icons/${iconPath}.png`}
            alt="Illustration"
            style={{
              width: "auto",
              height: "80px",
              display: "flex",
              margin: "0 auto",
              alignSelf: "center",
            }}
          />
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontWeight={600}
            fontSize="1.1rem"
            color="#8174bb"
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
            color="#274149"
            lineHeight="1.6"
            variant="body2"
            component="p"
            textAlign="center"
            marginTop={6}
            marginBottom={2}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
      <Box sx={{ px: 4, pt: 0, pb: 6 }}>
        <Link href={href} passHref>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderColor: "#745ddd",
              borderRadius: 4,
              color: "#745ddd",
              "&:hover": {
                borderColor: "#8174bb",
                backgroundColor: "#8174bb",
                color: "#f8f7ff",
              },
            }}
          >
            Learn more
          </Button>
        </Link>
      </Box>
    </Card>
  );
}
