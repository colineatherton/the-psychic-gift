import CallIcon from "@mui/icons-material/Call";
import { READER_CARDS } from "@/lib/constants/readers";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { Box, Button, IconButton, Slide, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Reader } from "../ReaderGrid/ReaderGrid";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  // readerName: string;
  // specialism: string;
  // open: boolean;
  // onClose: () => void;
}

export const ReaderAvailableAlert = (
  {
    // readerName,
    // specialism,
    // open,
    // onClose,
  }: Props,
) => {
  const { recentlyAvailable } = useReaderFeedContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (recentlyAvailable) {
      setOpen(false);
      requestAnimationFrame(() => setOpen(true));
    }
  }, [recentlyAvailable]);

  return (
    <Snackbar
      key={recentlyAvailable?.id || "none"}
      open={open}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      action={
        <>
          <Button size="small">Choose call options</Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => setOpen(false)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
      slots={{ transition: Slide }}
      slotProps={{
        clickAwayListener: {
          onClickAway: (event) => {
            // @ts-ignore: Material-UI custom property for preventing default clickAway behavior
            event.defaultMuiPrevented = true;
          },
        },
      }}
      sx={{
        bottom: { xs: 50 },
        "& .MuiPaper-root": {
          backgroundColor: (theme) => theme.palette.primary.dark,
        },
      }}
      message={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CallIcon />
          {`${recentlyAvailable?.displayName} is now available for a reading! Use PIN: ${recentlyAvailable?.id}`}
        </Box>
      }
    />
  );
};
