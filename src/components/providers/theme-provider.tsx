"use client";

import { ReactNode, useState } from "react";
import { ThemeContext } from "@/components/context/theme-context";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useState("system");

  return (
    <>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </>
  );
};
