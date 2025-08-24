import { Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";

interface Props {
  readerName: string;
  specialism: string;
  open: boolean;
  onClose: () => void;
}

export default function ReaderAvailableAlert({
  readerName,
  specialism,
  open,
  onClose,
}: Props) {
  const [autoHideDuration, setAutoHideDuration] = useState(6000);

  useEffect(() => {
    if (open) setAutoHideDuration(6000);
  }, [open]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={onClose} severity="info" sx={{ width: "100%" }}>
        {readerName} is now available — specialising in {specialism}. Call now!
      </Alert>
    </Snackbar>
  );
}
