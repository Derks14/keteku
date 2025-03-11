import { createContext, SetStateAction, Dispatch, useContext, useState, ReactNode, useEffect } from "react";

// types
export type Theme = 0 | 1 | 2
type ThemeContextType = [ Theme, Dispatch<SetStateAction<Theme>>]
export type ThemeProviderPropsType = { children: ReactNode }

// Context
const initialState: ThemeContextType = [0, () => null]

const ThemeContext = createContext<ThemeContextType>(initialState);

export const useTheme = () => useContext<ThemeContextType>(ThemeContext);




// Reducer logic here
// State logic here



// Provider

export const ThemeContextProvider = ({children}: ThemeProviderPropsType) => {


  const themeState = useState<Theme>(
    () => ( localStorage.theme as Theme) || 0,
  );
  const [theme] = themeState;

  useEffect(()=> {
    console.log("I just run my effect");

    const theme_class = window.document.documentElement.classList;
    theme_class.remove('light', 'dark')

    if (theme === 0) {
      const system_theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
      theme_class.add(system_theme)
      console.log('its set to system theme');
    } else {
      console.log('whats value ', theme);
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



