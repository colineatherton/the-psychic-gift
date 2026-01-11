import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useTheme } from "@mui/material";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface MultiSelectProps {
  options: { label: string }[];
  label?: string;
  placeholder?: string;
  multiple?: boolean;
  // optional external control (leave un-used if not needed)
  value?: { label: string; key?: string }[];
  onChange?: (value: { label: string; key?: string }[]) => void;
}

export const MultiSelect = ({
  options,
  label,
  multiple = true,
  placeholder,
  value: externalValue,
  onChange: externalOnChange,
}: MultiSelectProps) => {
  const theme = useTheme();
  // Internal state only used if not controlled externally.
  const [internalValue, setInternalValue] = useState<{ label: string }[]>([]);
  const value = externalValue ?? internalValue;

  return (
    <Autocomplete
      multiple
      id={`multi-select-${label ?? "options"}`}
      options={options}
      value={value}
      onChange={(_, newValue) => {
        externalOnChange
          ? externalOnChange(newValue)
          : setInternalValue(newValue);
      }}
      disableCloseOnSelect
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
              sx={{
                color: theme.palette.text.primary,
                "&.Mui-checked": { color: theme.palette.primary.main },
              }}
            />
            {option.label}
          </li>
        );
      }}
      //   style={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          // Show placeholder only when no selections
          placeholder={value.length === 0 ? placeholder : ""}
          label={label}
          sx={{
            "& .MuiInputLabel-root": { color: theme.palette.text.primary },
            // optional focus state if you want consistency:
            "& .MuiInputLabel-root.Mui-focused": {
              color: theme.palette.text.primary,
            },
          }}
        />
      )}
    />
  );
};
