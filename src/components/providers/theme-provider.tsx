import {
  COLOR_SCHEME_QUERY,
  disableTransitionsTemporarily,
  getSystemTheme, isEditableTarget,
  isTheme,
  Theme, ThemeProviderContext,
  ThemeProviderProps
} from "@/components/context/theme-context.tsx";
import { useCallback, useEffect, useMemo, useState } from "react";

const whatsDefault = (storageKey: string, defaultTheme: Theme): Theme => {
  const storedTheme = localStorage.getItem(storageKey)
  return isTheme(storedTheme) ? storedTheme : defaultTheme
}

export function ThemeProvider({
                                children,
                                defaultTheme = "system",
                                storageKey = "theme",
                                disableTransitionOnChange = true,
                                ...props
}: ThemeProviderProps ) {
  const [theme, setThemeState] = useState<Theme>(whatsDefault(storageKey, defaultTheme))

  const setTheme = useCallback(
    (nextTheme: Theme) => {
      localStorage.setItem(storageKey, nextTheme)
      setThemeState(nextTheme)
    },
    [storageKey]
  )

  const applyTheme = useCallback(
    (nextTheme: Theme) => {
      const root = document.documentElement
      const resolvedTheme = nextTheme === "system" ? getSystemTheme(): nextTheme

      const restoreTransitions = disableTransitionOnChange ? disableTransitionsTemporarily() : null

      root.classList.remove("light", "dark")
      root.classList.add(resolvedTheme);

      if (restoreTransitions) restoreTransitions();
    },[disableTransitionOnChange]
  )

  useEffect( () => {
    applyTheme(theme)

    if (theme != "system") return undefined

    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY)
    const handleChange = () => applyTheme("system")

    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)

  }, [theme, applyTheme])

  useEffect( () => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) return

      if (event.metaKey || event.ctrlKey || event.altKey) return

      if (isEditableTarget(event.target)) return;

      if (event.key.toLocaleLowerCase() !== "s") return;

      setThemeState( (currentTheme) => {
        const nextTheme = currentTheme === "dark" ? "light"
          : currentTheme === "light" ? "dark"
            : getSystemTheme() === "dark" ? "light" : "dark"

        localStorage.setItem(storageKey, nextTheme)

        return nextTheme
      } )
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [storageKey])

  useEffect( () => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea !== localStorage) return

      if (event.key !== storageKey) return;

      if (isTheme(event.newValue)) {
        setThemeState(event.newValue)
        return;
      }

      setThemeState(defaultTheme);
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [defaultTheme, storageKey])

  const value = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme, setTheme]
  )

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      { children }
    </ThemeProviderContext.Provider>
  )
}

