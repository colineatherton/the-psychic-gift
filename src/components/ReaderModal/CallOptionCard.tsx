import PhoneIcon from "@mui/icons-material/Phone";
import { Card, CardActionArea, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

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
        borderRadius: 3,
        border: "none",
        bgcolor: (theme) => alpha(theme.palette.primary.dark, 0.55),
        transition: "background-color 0.2s",
        "&:hover": {
          bgcolor: "primary.dark",
        },
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
          <Stack direction="row" alignItems="center" gap={1}>
            <PhoneIcon sx={{ color: "common.white", fontSize: "1.4rem" }} />
            <Typography variant="h5" fontWeight={700} color="common.white">
              {number}
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
            {price}
          </Typography>
        </Stack>
      </CardActionArea>
    </Card>
  );
};
