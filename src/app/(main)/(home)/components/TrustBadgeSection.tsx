import { TrustBadge } from "@/components/TrustBadge/TrustBadge";
import { Stack } from "@mui/material";

export default function TrustBadgeSection() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      width="100%"
      justifyContent="space-between"
    >
      <TrustBadge src="readings-given.png" />
      <TrustBadge src="est-2002.png" />
      <TrustBadge src="satisfaction-guarantee-2.png" />
    </Stack>
  );
}
