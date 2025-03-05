import { createContext, SetStateAction, Dispatch, useContext, useState, ReactNode } from "react";

// types
export type ThemeContextType = [number, Dispatch<SetStateAction<number>>];
export type ThemeProviderPropsType = { children: ReactNode }

// Context
export const ThemeContext = createContext<ThemeContextType>(null!);

export const useThemeContext = () => useContext(ThemeContext);




// Reducer logic here
// State logic here



// Provider

export const ThemeContextProvider = ({children}: ThemeProviderPropsType) => {
  // document.documentElement.classList.toggle(
  //   "dark",
  //   localStorage.theme === 2 ||
  //   (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
  // );
  const themeState = useState(0);




  return (
    <>
      <ThemeContext.Provider value={themeState}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}



