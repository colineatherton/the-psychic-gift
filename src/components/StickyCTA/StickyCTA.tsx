import { Box, Button } from "@mui/material";

export default function StickyCTA({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      width="100%"
      bgcolor="background.paper"
      boxShadow={3}
      zIndex={1300}
      p={2}
      textAlign="center"
    >
      <Button variant="contained" color="primary" onClick={onClick}>
        {label}
      </Button>
    </Box>
  );
}
