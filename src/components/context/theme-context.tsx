import { createContext, SetStateAction, Dispatch, useState, ReactNode, useEffect } from "react";

// types
export type Theme = 0 | 1 | 2
export type ThemeContextType = [ Theme, Dispatch<SetStateAction<Theme>>]
export type ThemeProviderPropsType = { children: ReactNode }


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);



export const ThemeContextProvider = ({children}: ThemeProviderPropsType) => {

  const themeState = useState<Theme>(
    () => ( localStorage.theme as Theme) || 0,
  );
  const [theme] = themeState;

  useEffect(()=> {
    const theme_class = window.document.documentElement.classList;
    theme_class.remove('light', 'dark')

    if (theme === 0) {
      const system_theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
      theme_class.add(system_theme)
    } else {
      theme_class.add( theme === 1 ? 'light' : 'dark')
    }

  }, [theme] )




  return (
    <>
      <ThemeContext.Provider value={themeState}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}



