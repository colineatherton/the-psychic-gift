"use client";

import { createContext, useContext, useState } from "react";

interface AppBarContextValue {
  appBarHeight: number;
  setAppBarHeight: (h: number) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const AppBarContext = createContext<AppBarContextValue>({
  appBarHeight: 0,
  setAppBarHeight: () => {},
  mobileMenuOpen: false,
  setMobileMenuOpen: () => {},
});

export const AppBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [appBarHeight, setAppBarHeight] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <AppBarContext.Provider value={{ appBarHeight, setAppBarHeight, mobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </AppBarContext.Provider>
  );
};

export const useAppBarContext = () => useContext(AppBarContext);
