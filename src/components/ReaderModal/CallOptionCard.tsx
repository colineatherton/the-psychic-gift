import { Card, CardActionArea, Stack, Typography } from "@mui/material";

interface CallOptionCardProps {
  title: string;
  number: string;
  price: string;
}

export const CallOptionCard = ({ title, number, price }: CallOptionCardProps) => {
  return (
    <Card variant="outlined" sx={{ mb: 1.5 }}>
      <CardActionArea
        component="a"
        href={`tel:${number.replace(/\s/g, "")}`}
        sx={{ px: 2, py: 1.5 }}
      >
        <Stack spacing={0.5}>
          <Typography variant="caption" color="text.secondary" fontWeight={600} textTransform="uppercase" letterSpacing={0.5}>
            {title}
          </Typography>
          <Typography variant="h5" fontWeight={700} color="primary">
            {number}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </Stack>
      </CardActionArea>
    </Card>
  );
};
