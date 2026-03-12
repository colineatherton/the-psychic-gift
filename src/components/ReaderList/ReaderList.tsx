import { List } from "@mui/material";
import { Reader } from "../ReaderGrid/ReaderGrid";
import { ReaderListItem } from "../ReaderListItem/ReaderListItem";

interface ReaderListProps {
  readers: Reader[];
  onChooseCallOptions?: (key: string) => void;
}

export const ReaderList = ({ readers, onChooseCallOptions }: ReaderListProps) => {
  return (
    <List sx={{ width: "100%" }}>
      {readers.map((reader, i, arr) => (
        <ReaderListItem
          key={reader.pin}
          {...reader}
          onChooseCallOptions={onChooseCallOptions ?? (() => undefined)}
          divider={i < arr.length - 1}
        />
      ))}
    </List>
  );
};
