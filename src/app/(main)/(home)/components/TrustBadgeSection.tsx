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
      <TrustBadge src="/badges/readings-given.png" />
      <TrustBadge src="/badges/est-2002.png" />
      <TrustBadge src="/badges/satisfaction-guarantee-2.png" />
    </Stack>
  );
}
