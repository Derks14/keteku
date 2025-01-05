import { createContext, SetStateAction, Dispatch } from "react";

export type ThemeContextType = [string, Dispatch<SetStateAction<string>>];

export const ThemeContext = createContext<ThemeContextType>(null!);
