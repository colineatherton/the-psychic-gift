import CallIcon from "@mui/icons-material/Call";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { Box, Button, IconButton, Slide, Snackbar } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";

export const ReaderAvailableAlert = () => {
  const { recentlyAvailable, getReaderByPin, lastUpdated } =
    useReaderFeedContext();
  const { handleChooseCallOptions } = useReaderSelectContext();
  const [open, setOpen] = useState(false);

  // Track dismissed reader IDs so we don't re-show while they remain online
  const dismissedRef = useRef<Set<number>>(new Set());

  // Show logic: only open if reader is not dismissed
  useEffect(() => {
    if (recentlyAvailable) {
      if (dismissedRef.current.has(recentlyAvailable.id)) {
        // Ensure closed if it was previously open
        setOpen(false);
        return;
      }
      // Animate re-open
      setOpen(false);
      requestAnimationFrame(() => setOpen(true));
    } else {
      setOpen(false);
    }
  }, [recentlyAvailable]);

  // On each poll (using lastUpdated as a tick), check if any dismissed readers left online.
  // If a dismissed reader is now busy/offline (status !== 1), remove them so future
  // online transitions can alert again.
  useEffect(() => {
    if (!lastUpdated) return;
    dismissedRef.current.forEach((id) => {
      const r = getReaderByPin(id);
      if (!r || r.status !== 1) {
        dismissedRef.current.delete(id);
      }
    });
  }, [lastUpdated, getReaderByPin]);

  const handleClose = () => {
    if (recentlyAvailable) {
      dismissedRef.current.add(recentlyAvailable.id);
    }
    setOpen(false);
  };

  if (!recentlyAvailable) return null;

  return (
    <Snackbar
      key={recentlyAvailable.id || "none"}
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      action={
        <>
          <Button
            size="small"
            onClick={() =>
              handleChooseCallOptions(
                `${recentlyAvailable.displayName.toLocaleLowerCase()}-${recentlyAvailable.id}`,
              )
            }
          >
            Choose call options
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
      slots={{ transition: Slide }}
      slotProps={{
        clickAwayListener: {
          onClickAway: (event) => {
            // @ts-expect-error prevent default MUI clickAway close if you want manual only
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
        recentlyAvailable ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CallIcon />
            {`${recentlyAvailable.displayName} is now available for a reading! Use PIN: ${recentlyAvailable.id}`}
          </Box>
        ) : null
      }
    />
  );
};
