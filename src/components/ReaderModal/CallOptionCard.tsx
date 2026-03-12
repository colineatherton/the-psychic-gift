import { Card, CardActionArea, Stack, Typography } from "@mui/material";

interface CallOptionCardProps {
  title: string;
  number: string;
  price: string;
}

export const CallOptionCard = ({ title, number, price }: CallOptionCardProps) => {
  return (
    <Card
      sx={{
        mb: 1.5,
        bgcolor: "primary.dark",
        border: "none",
        "&:hover": { filter: "brightness(1.12)" },
      }}
    >
      <CardActionArea
        component="a"
        href={`tel:${number.replace(/\s/g, "")}`}
        sx={{
          px: 2, py: 1.5,
          "& .MuiCardActionArea-focusHighlight": { background: "common.white" },
        }}
      >
        <Stack spacing={0.5}>
          <Typography variant="caption" fontWeight={600} textTransform="uppercase" letterSpacing={0.5} sx={{ color: "rgba(255,255,255,0.75)" }}>
            {title}
          </Typography>
          <Typography variant="h5" fontWeight={700} color="common.white">
            {number}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
            {price}
          </Typography>
        </Stack>
      </CardActionArea>
    </Card>
  );
};
