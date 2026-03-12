"use client";

import { ReaderCard, TrustBadge } from "@/components";
import { READER_CARDS } from "@/lib/constants/readers";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import { Status } from "@/lib/types/readers";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import pluralize from "@theothergothamdev/pluralize-ts";
import { forwardRef } from "react";
import { getStatus } from "../ReaderFilters/ReaderFilters";
import { ReaderList } from "../ReaderList/ReaderList";
import { CallOptionCard } from "./CallOptionCard";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CALL_OPTIONS = [
  {
    title: "Credit / Debit Card",
    number: "0800 915 2333",
    price: "£32.95 for 20 mins, then £1.50/min",
  },
  {
    title: "Pre-Pay Minutes",
    number: "0808 156 4920",
    price: "£1.50/min · 10% bonus on purchases over £60",
  },
  {
    title: "Pay by Phone Bill",
    number: "0906 176 1960",
    price: "£1.50/min + network access charge",
  },
];

const OFCOM_DISCLAIMER =
  "All calls are recorded; the caller must be 18 or over and have the bill payer's permission. Readings under UK law are deemed to be for entertainment only. Helpline: 0800 156 0022.";

export const ReaderModal: React.FC = () => {
  const { readerModalOpen, readerConfig, handleCloseReaderModal, handleChooseCallOptions } =
    useReaderSelectContext();
  const { getReaderByPin } = useReaderFeedContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const logoSrc =
    theme.palette.mode === "light"
      ? "/logo-gold-star-dark.png"
      : "/logo-gold-star.png";

  const readerStatus = getStatus(
    readerConfig ? getReaderByPin(Number(readerConfig.pin))?.status : undefined,
  );

  const availableReaders = READER_CARDS.filter((reader) => {
    if (readerConfig && reader.pin === readerConfig.pin.toString()) {
      return false;
    }
    const apiReader = getReaderByPin(Number(reader.pin));
    const status = apiReader ? getStatus(apiReader.status) : Status.offline;
    return status === Status.online;
  });

  const callOptionsSection = (
    <Box>
      {!isMobile && (
        <Box
          component="img"
          src={logoSrc}
          alt="The Psychic Gift"
          sx={{ height: 80, display: "block", margin: "0 auto", mb: 2 }}
        />
      )}
      {readerConfig && (
        <Typography align="center" sx={{ mb: 2 }}>
          {readerStatus === Status.online ? (
            <>
              Connect with <strong>{readerConfig.name}</strong> now — choose a call option and use PIN{" "}
              <strong>{readerConfig.pin}</strong>
            </>
          ) : (
            <>
              Connect with <strong>{readerConfig.name}</strong> — choose a call option and once they are ready to talk, use PIN{" "}
              <strong>{readerConfig.pin}</strong>
            </>
          )}
        </Typography>
      )}
      {CALL_OPTIONS.map((opt) => (
        <CallOptionCard key={opt.number} {...opt} />
      ))}
    </Box>
  );

  const otherReadersAccordion = availableReaders.length > 0 && (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography component="span">
          ✨ {availableReaders.length}{" "}
          {pluralize("other psychic", availableReaders.length)}{" "}
          {pluralize("is", availableReaders.length)} available to take your call ✨
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ maxHeight: 300, overflowY: "auto", p: 0 }}>
        <ReaderList
          readers={availableReaders}
          onChooseCallOptions={handleChooseCallOptions}
        />
      </AccordionDetails>
    </Accordion>
  );

  const trustBadges = (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        width="100%"
        justifyContent="space-between"
        mt={2}
      >
        <TrustBadge src="readings-given.png" />
        <TrustBadge src="est-2002.png" />
        <TrustBadge src="satisfaction-guarantee-2.png" />
      </Stack>
      <Typography variant="caption" color="secondary.main" display="block" sx={{ mt: 2 }}>
        {OFCOM_DISCLAIMER}
      </Typography>
    </Box>
  );

  return (
    <Dialog
      fullWidth={!isMobile}
      fullScreen={isMobile}
      maxWidth="lg"
      open={readerModalOpen}
      onClose={handleCloseReaderModal}
      scroll="paper"
      sx={
        !isMobile
          ? {
              "& .MuiDialog-paper": {
                height: "90vh",
                maxHeight: "90vh",
                borderRadius: 6,
              },
            }
          : undefined
      }
      slots={{ transition: Transition }}
    >
      {isMobile && (
        <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", py: 1.5, px: 2, bgcolor: "primary.dark" }}>
          <Typography variant="h6" color="common.white" fontWeight={600}>
            {readerConfig ? readerConfig.name : "Find Your Psychic"}
          </Typography>
          <IconButton onClick={handleCloseReaderModal} edge="end" aria-label="close" sx={{ color: "common.white" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      )}
      <DialogContent sx={{ p: isMobile ? 2 : 3 }}>
        {/* State 1: No reader selected — full-width reader list */}
        {!readerConfig && (
          <Box>
            <Box
              component="img"
              src={logoSrc}
              alt="The Psychic Gift"
              sx={{ height: isMobile ? 60 : 80, display: "block", margin: "0 auto", mb: 1 }}
            />
            <Typography variant="h5" align="center" fontWeight={600} sx={{ mb: 0.5 }}>
              Find Your Psychic
            </Typography>
            <Typography align="center" color="secondary.main" sx={{ mb: 2 }}>
              Choose a reader below to see call options
            </Typography>
            <ReaderList
              readers={availableReaders}
              onChooseCallOptions={handleChooseCallOptions}
            />
          </Box>
        )}

        {/* State 2: Reader selected */}
        {readerConfig && (
          <>
            {isMobile ? (
              /* Mobile: stacked layout */
              <Stack spacing={2}>
                <ReaderCard
                  name={readerConfig.name}
                  pin={readerConfig.pin.toString()}
                  status={readerStatus}
                  skills={readerConfig.specialties.topics}
                  onChooseCallOptions={() => undefined}
                  description={readerConfig.description}
                  mode="compact"
                />
                {callOptionsSection}
                {otherReadersAccordion}
                {trustBadges}
              </Stack>
            ) : (
              /* Desktop: two-column layout */
              <Box display="flex" gap={3} minHeight="100%">
                {/* Left 45%: selected reader */}
                <Box flex="0 0 45%" overflow="auto">
                  <ReaderCard
                    name={readerConfig.name}
                    pin={readerConfig.pin.toString()}
                    status={readerStatus}
                    skills={readerConfig.specialties.topics}
                    onChooseCallOptions={() => undefined}
                    description={readerConfig.description}
                    mode="selected"
                  />
                </Box>
                {/* Right 55%: call options + other readers + trust badges */}
                <Box flex="1 1 55%" overflow="auto">
                  {callOptionsSection}
                  {otherReadersAccordion}
                  {trustBadges}
                </Box>
              </Box>
            )}
          </>
        )}
      </DialogContent>
      {!isMobile && (
        <DialogActions>
          <Button onClick={handleCloseReaderModal}>Close</Button>
        </DialogActions>
      )}
    </Dialog>
  );
};
