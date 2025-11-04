import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { PrimaryCTAButton } from "../PrimaryCTAButton/PrimaryCTAButton";

interface StepCardProps {
  step: number;
  title: string;
  body: string;
  backgroundColor: string;
  footer?: React.ReactNode;
}

export function StepCard({
  step,
  title,
  body,
  backgroundColor,
  footer,
}: StepCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        transition: "transform 0.25s ease",
        boxShadow: 4,
        "&:hover": {
          boxShadow: 15,
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent
        sx={{
          p: 2,
          pb: 2,
          "&:last-child": { paddingBottom: 2 },
          height: "100%",
        }}
      >
        <Grid container spacing={4} display={"flex"} height={"100%"}>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            size={{ xs: 12, md: 2 }}
            height={"100%"}
          >
            <Avatar
              sx={{
                width: 56,
                height: 56,
                backgroundColor,
                display: "flex", // Ensure flexbox for centering
                alignItems: "center", // Center vertically
                justifyContent: "center", // Center horizontally
                color: (theme) => theme.palette.primary.contrastText,
              }}
            >
              {step}
            </Avatar>
          </Grid>
          <Grid size={{ xs: 12, md: footer ? 6 : 10 }}>
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={600}
              fontSize="1.1rem"
              variant="h3"
              component="h3"
            >
              {title}
            </Typography>
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={500}
              fontSize="1rem"
              variant="body2"
              component="p"
            >
              {body}
            </Typography>
          </Grid>
          {footer && (
            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{
                display: "flex", // Ensure flexbox for centering
                alignItems: "center", // Center vertically
                justifyContent: "center", // Center horizontally
              }}
            >
              {footer}
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}
