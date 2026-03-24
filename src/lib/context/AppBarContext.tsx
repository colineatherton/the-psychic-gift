"use client";

import { createContext, useContext, useState } from "react";

interface AppBarContextValue {
  appBarHeight: number;
  setAppBarHeight: (h: number) => void;
}

const AppBarContext = createContext<AppBarContextValue>({
  appBarHeight: 0,
  setAppBarHeight: () => {},
});

export const AppBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [appBarHeight, setAppBarHeight] = useState(0);
  return (
    <AppBarContext.Provider value={{ appBarHeight, setAppBarHeight }}>
      {children}
    </AppBarContext.Provider>
  );
};

export const useAppBarContext = () => useContext(AppBarContext);
