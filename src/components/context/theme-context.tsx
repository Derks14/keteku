
import { createContext, ReactNode } from "react";

export type Theme = "dark" | "light" | "system"
export type ResolvedTheme = "dark" | "light"

export type ThemeProviderProps= {
  children: ReactNode,
  defaultTheme?: Theme
  storageKey?: string
  disableTransitionOnChange?: boolean
}

export type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)"
export const THEME_VALUES: Theme[] = ["dark", "light", "system"]

export const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)


export function isTheme(value: string | null): value is Theme {
  return (value === null) ? false : THEME_VALUES.includes(value as Theme)
}

export function getSystemTheme(): ResolvedTheme {
  return window.matchMedia(COLOR_SCHEME_QUERY).matches ? "dark" : "light";
}

export const disableTransitionsTemporarily = () => {
  const style = document.createElement("style")
  style.appendChild(
    document.createTextNode(
      "*,*::before,*::after{-webkit-transition:none!important;transition:none!important}"
    )
  )
  document.head.appendChild(style)
  return () => {
    window.getComputedStyle(document.body)
    requestAnimationFrame( ()=> {
      requestAnimationFrame(() => {
        style.remove()
      })
    })
  }
}

export function isEditableTarget(target: EventTarget | null) {
  if(!(target instanceof HTMLElement)) {
    return false
  }

  if (target.isContentEditable) {
    return true
  }

  const editableParent = target.closest(
    "input, textarea, select, [contenteditable='true']"
  )

  if (editableParent) { return true }

  return false
}
