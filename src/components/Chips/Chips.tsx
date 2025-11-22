import theme from "@/app/theme";
import { Stack, Chip, Tooltip } from "@mui/material";

interface ChipsProps {
  items: string[];
  mode?: "compact" | "full";
}

export const Chips = ({ items, mode }: ChipsProps) => {
  const effectiveItems = items.slice(0, mode === "compact" ? 2 : items.length);

  const remainingItems = items.slice(2, items.length).join(", ");

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={1.5}
      paddingY={mode === "compact" ? 1 : 4}
    >
      {effectiveItems.map((skill) => (
        <Chip
          key={skill}
          label={skill}
          size="small"
          sx={{
            fontSize: mode === "compact" ? "0.8rem" : "1rem",
            padding: theme.spacing(2, 1),
            textTransform: "capitalize",
          }}
        />
      ))}
      {mode === "compact" && items.length > effectiveItems.length && (
        <Tooltip title={remainingItems}>
          <Chip
            label={`+${items.length - effectiveItems.length} more`}
            size="small"
            sx={{
              fontSize: mode === "compact" ? "0.8rem" : "1rem",
              padding: theme.spacing(2, 1),
              textTransform: "capitalize",
            }}
          />
        </Tooltip>
      )}
    </Stack>
  );
};
