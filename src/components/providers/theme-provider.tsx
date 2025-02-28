"use client";

import { ReactNode, useState } from "react";
import { ThemeContext } from "../context/theme-context";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const checkPreviousState = () => {
    return localStorage!.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light";
  };

  const themeState = useState("");
  //
  if (themeState[0] == "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <>
      <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
    </>
  );
};
