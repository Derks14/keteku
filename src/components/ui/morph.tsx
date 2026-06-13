import { useState } from "react";
import { getSystemTheme } from "@/components/context/theme-context.tsx";
import { useTheme } from "@/components/hooks/use-theme.ts";

const Morph = () => {
  const [checked, setChecked] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const nextTheme =
      theme === "dark"
        ? "light"
        : theme === "light"
          ? "dark"
          : getSystemTheme() === "dark"
            ? "light"
            : "dark";

    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <>
      <div className="flex h-[16rem] flex-col justify-center md:justify-between">
        <div className="hidden text-end md:block">{/*<p>Mood switch</p>*/}</div>
        <div className="morph-toggle-container relative aspect-[2/1] w-full">
          <input
            type="checkbox"
            id="toggle"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
              toggleTheme();
            }}
            className="peer/morph hidden"
          />
          <label htmlFor="toggle" className="morph-toggle absolute inset-0 block cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Morph;
