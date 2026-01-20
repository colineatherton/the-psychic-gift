"use client";

import { PrimaryCTAButton, ReaderCard, TrustBadge } from "@/components";
import { READER_CARDS } from "@/lib/constants/readers";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import { Status } from "@/lib/types/readers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Slide,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import pluralize from "@theothergothamdev/pluralize-ts";
import { forwardRef } from "react";
import { getStatus } from "../ReaderFilters/ReaderFilters";
import { ReaderList } from "../ReaderList/ReaderList";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ReaderModal: React.FC = () => {
  const { readerModalOpen, readerConfig, handleCloseReaderModal } =
    useReaderSelectContext();
  const { getReaderByPin } = useReaderFeedContext();
  const theme = useTheme();

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

    if (status === Status.online) {
      return {
        ...reader,
        status,
      };
    }

    return false;
  });

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"lg"}
      open={readerModalOpen}
      onClose={handleCloseReaderModal}
      scroll="paper"
      sx={{
        "& .MuiDialog-paper": {
          height: "90vh",
          maxHeight: "90vh",
          borderRadius: 6,
        },
        height: "100%",
      }}
      slots={{ transition: Transition }}
    >
      {/* <DialogTitle>
        {readerConfig ? "Choose Call Options" : "Find Your Psychic"}
      </DialogTitle> */}
      <DialogContent>
        <Grid
          container
          flexGrow={1}
          sx={{
            alignItems: "stretch",
            minHeight: "100%",
          }}
          spacing={2}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            {readerConfig ? (
              <ReaderCard
                name={readerConfig.name}
                pin={readerConfig.pin.toString()}
                status={readerStatus}
                skills={readerConfig.specialties.topics}
                onChooseCallOptions={() => undefined}
                description={readerConfig.description}
                mode="selected"
              />
            ) : (
              <ReaderList readers={availableReaders} />
            )}
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              component="img"
              src={logoSrc}
              alt="The Psychic Gift"
              sx={{
                height: 100,
                display: "block",
                margin: "0 auto",
                mb: 4,
              }}
            />
            {readerConfig &&
              (readerStatus === Status.online ? (
                <Typography>
                  Connect with <strong>{readerConfig.name}</strong> now - choose
                  a call option and use PIN <strong>{readerConfig.pin}</strong>
                </Typography>
              ) : (
                <Typography>
                  Connect with <strong>{readerConfig.name}</strong> - choose a
                  call option and once they are ready to talk, use PIN{" "}
                  <strong>{readerConfig.pin}</strong>
                </Typography>
              ))}

            <DialogContentText sx={{ mt: 4 }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Stack>
                    <Typography>
                      Freephone for credit or debit card payments - call:
                    </Typography>
                    <Box sx={{ alignSelf: "flex-start" }}>
                      <PrimaryCTAButton
                        size="large"
                        mode="compact"
                        onClick={() => {}}
                        label="UK Freephone: 0800 915 2345"
                        mb={4}
                      />
                    </Box>
                    <Typography>
                      £32.95 for the first 20 minutes, £1.50/min thereafter
                    </Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
                <AccordionActions>credit card icons</AccordionActions>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Stack>
                    <Typography>
                      For payments on your phone bill - call:
                    </Typography>
                    <Box sx={{ alignSelf: "flex-start" }}>
                      <PrimaryCTAButton
                        size="large"
                        mode="compact"
                        onClick={() => {}}
                        label="UK: 0906 110 0960"
                        mb={4}
                      />
                    </Box>
                    <Typography>
                      £1.50/min plus your phone company&apos;s access charge
                    </Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
                <AccordionActions>credit card icons</AccordionActions>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Stack>
                    <Typography>
                      To Prepay with Bonus Minutes - call:
                    </Typography>
                    <Box sx={{ alignSelf: "flex-start" }}>
                      <PrimaryCTAButton
                        size="large"
                        mode="compact"
                        onClick={() => {}}
                        label="UK Freephone: 0808 156 4920"
                        mb={4}
                      />
                      <PrimaryCTAButton
                        size="large"
                        mode="compact"
                        onClick={() => {}}
                        label="UK Local: 0113 732 0631"
                        mb={4}
                      />
                    </Box>
                    <Typography>
                      £1.50/min, 10% extra free for purchases over £60
                    </Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
                <AccordionActions>credit card icons</AccordionActions>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  {/* other minus the selected, if selected - dont show this at all if there are none or if the selected reader is online */}
                  {/* if no reader was selected, make this the right panel - ie dont show it here */}
                  <Typography component="span">
                    ✨ {availableReaders.length}{" "}
                    {pluralize("other psychics", availableReaders.length)}{" "}
                    {pluralize("are", availableReaders.length)} available to
                    take your call ✨
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ReaderList readers={availableReaders} />
                </AccordionDetails>
              </Accordion>
            </DialogContentText>
            <Stack
              direction="row"
              alignItems="center"
              width="100%"
              justifyContent="space-between"
              mt={4}
            >
              <TrustBadge src="readings-given.png" />
              <TrustBadge src="est-2002.png" />
              <TrustBadge src="satisfaction-guarantee-2.png" />
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseReaderModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
