import CallIcon from "@mui/icons-material/Call";
import { useAppBarContext } from "@/lib/context/AppBarContext";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { Box, Button, IconButton, Slide, Snackbar, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";

const DEV_MOCK_READER =
  process.env.NODE_ENV === "development"
    ? { id: 9999, displayName: "Test Reader" }
    : null;

export const ReaderAvailableAlert = () => {
  const { recentlyAvailable, getReaderByPin, lastUpdated } =
    useReaderFeedContext();
  const { handleChooseCallOptions, readerModalOpen } = useReaderSelectContext();
  const { appBarHeight, mobileMenuOpen } = useAppBarContext();
  const [open, setOpen] = useState(process.env.NODE_ENV === "development");

  // Mirror AppBar breakpoints to compute a reliable fallback height
  const showFullMenu = useMediaQuery("(min-width:765px)");
  const showHeaderNumbers = useMediaQuery("(min-width:1024px)");
  const showCompactNumbers = showFullMenu && !showHeaderNumbers;
  const fallbackHeight = showHeaderNumbers
    ? 170
    : showCompactNumbers
      ? 175
      : showFullMenu
        ? 115
        : 70;
  const topOffset = appBarHeight > 0 ? appBarHeight + 8 : fallbackHeight + 8;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reader = recentlyAvailable ?? (DEV_MOCK_READER as any);

  // Track dismissed reader IDs so we don't re-show while they remain online
  const dismissedRef = useRef<Set<number>>(new Set());

  // Show logic: only open if reader is not dismissed
  useEffect(() => {
    if (DEV_MOCK_READER) return; // dev mock stays open
    if (recentlyAvailable) {
      if (dismissedRef.current.has(recentlyAvailable.id)) {
        setOpen(false);
        return;
      }
      setOpen(false);
      requestAnimationFrame(() => setOpen(true));
    } else {
      setOpen(false);
    }
  }, [recentlyAvailable]);

  // On each poll, remove dismissed readers that have gone offline so they can alert again
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

  if (!reader || readerModalOpen) return null;

  return (
    <Snackbar
      key={reader.id || "none"}
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      action={
        <>
          <Button
            size="small"
            onClick={() =>
              handleChooseCallOptions(
                `${reader.displayName.toLocaleLowerCase()}-${reader.id}`,
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
        // Inline style wins over MUI's anchorOrigin CSS class — reliable cross-browser
        // Drop below mobile drawer (1200) when it's open, above AppBar (1201) otherwise
        root: { style: { top: `${topOffset}px`, zIndex: mobileMenuOpen ? 1199 : 1202 } },
        clickAwayListener: {
          onClickAway: (event) => {
            // @ts-expect-error prevent default MUI clickAway close if you want manual only
            event.defaultMuiPrevented = true;
          },
        },
      }}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: (theme) => theme.palette.primary.dark,
          minWidth: { sm: 420 },
          maxWidth: { sm: "none" },
        },
        "& .MuiSnackbarContent-root": {
          flexWrap: { sm: "nowrap" },
        },
      }}
      message={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, whiteSpace: { xs: "normal", sm: "nowrap" } }}>
          <CallIcon sx={{ flexShrink: 0 }} />
          {`${reader.displayName} is now available for a reading! Use PIN: ${reader.id}`}
        </Box>
      }
    />
  );
};
