import React, { createContext, useContext, useState } from "react";
import { READER_CONFIG_MAP } from "../constants/readers";
import { ReaderConfig } from "../types/readers";

type ReaderSelectContextType = {
  readerModalOpen: boolean;
  readerConfig: ReaderConfig | null;
  handleChooseCallOptions: (key: string) => void;
  handleCloseReaderModal: () => void;
  handleFindYourPsychic: () => void;
};

export const ReaderSelectContext = createContext<
  ReaderSelectContextType | undefined
>(undefined);

export const ReaderSelectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [readerModalOpen, setReaderModalOpen] = useState(false);
  const [readerConfig, setReaderConfig] = useState<ReaderConfig | null>(null);

  const handleCloseReaderModal = () => {
    setReaderModalOpen(false);
  };

  const handleChooseCallOptions = (key: string) => {
    const config = READER_CONFIG_MAP[key];
    if (!config) return; // todo
    setReaderConfig(config);
    setReaderModalOpen(true);
  };

  const handleFindYourPsychic = () => {
    setReaderConfig(null);
    setReaderModalOpen(true);
  };

  return (
    <ReaderSelectContext.Provider
      value={{
        readerModalOpen,
        readerConfig,
        handleChooseCallOptions,
        handleCloseReaderModal,
        handleFindYourPsychic,
      }}
    >
      {children}
    </ReaderSelectContext.Provider>
  );
};

export const useReaderSelectContext = () => {
  const ctx = useContext(ReaderSelectContext);
  if (!ctx)
    throw new Error(
      "useReaderSelectContext must be used within a ReaderSelectProvider",
    );
  return ctx;
};
