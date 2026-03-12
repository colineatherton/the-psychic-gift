import { Card, CardActionArea, Stack, Typography } from "@mui/material";

interface CallOptionCardProps {
  title: string;
  number: string;
  price: string;
}

export const CallOptionCard = ({ title, number, price }: CallOptionCardProps) => {
  return (
    <Card variant="outlined" sx={{ mb: 1.5, "&:hover": { borderColor: "primary.dark" } }}>
      <CardActionArea
        component="a"
        href={`tel:${number.replace(/\s/g, "")}`}
        sx={{
          px: 2, py: 1.5,
          "& .MuiCardActionArea-focusHighlight": { background: "primary.main" },
        }}
      >
        <Stack spacing={0.5}>
          <Typography variant="caption" color="secondary.main" fontWeight={600} textTransform="uppercase" letterSpacing={0.5}>
            {title}
          </Typography>
          <Typography variant="h5" fontWeight={700} color="text.primary">
            {number}
          </Typography>
          <Typography variant="body2" color="secondary.main">
            {price}
          </Typography>
        </Stack>
      </CardActionArea>
    </Card>
  );
};
