"use client";

import { ReactNode, useState } from "react";
import { Theme, ThemeContext } from "@/components/context/theme-context.tsx";


interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeState = useState<Theme>(0);
  return (
    <>
      <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
    </>
  );
};
