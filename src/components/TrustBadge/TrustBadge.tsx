import { Box } from "@mui/material";

export default function TrustBadge({ src }: { src: string }) {
  return (
    <Box
      sx={{
        maxWidth: "250px",
        margin: "0 auto",
        alignSelf: "center",
        transition: "transform 0.25s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <img
        src={src}
        alt="Illustration"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </Box>
  );
}
