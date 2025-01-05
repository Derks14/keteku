"use client";

import { ImSun } from "react-icons/im";
import { useContext } from "react";
import { ThemeContext } from "@/components/context/theme-context";

const ToggleTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const toggleTheme = () => {
    let currentTheme = theme;
    switch (currentTheme) {
      case "light":
        currentTheme = "dark";
        console.log("dark");
        break;
      case "dark":
        currentTheme = "system";
        console.log("system");
        break;
      default:
        currentTheme = "light";
        console.log("light");
    }
    setTheme(currentTheme);
    // document.documentElement.classList.replace(theme, currentTheme);
  };

  return (
    <>
      <div>
        <button
          onClick={toggleTheme}
          className="p-2 text-3xl text-primary hover:rounded-lg hover:bg-accent"
        >
          <ImSun />
        </button>
      </div>
    </>
  );
};
export default ToggleTheme;
