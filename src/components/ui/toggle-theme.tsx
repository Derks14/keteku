
import { useTheme } from "@/components/hooks/use-theme.ts";
import { getSystemTheme } from "@/components/context/theme-context.tsx";
import { LaptopMinimal, Moon, Sun } from "lucide-react";


const ToggleTheme = () => {

  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light"
      : theme === "light" ? "dark"
        : getSystemTheme() === "dark" ? "light" : "dark"

    localStorage.setItem("theme", nextTheme)
    setTheme(nextTheme)
  };

  return (
    <>
      <div>

        <button onClick={toggleTheme} className="hover:bg-muted px-3 py-1.5 rounded-lg cursor-pointer">
          {
          theme === "system" ? (<span>
            <LaptopMinimal size={32} strokeWidth={1} />
          </span>) : (
            <div>
              {theme === "dark" ? (
                <span>
                <Sun  color="#ffeb14" strokeWidth={1} size={32} />
              </span>
              ) : (
                <span>
                  <Moon strokeWidth={1} color="#39AAAA" size={32} />
                </span>
              )}
            </div>
          )
        }
        </button>
      </div>

    </>
  );
};
export default ToggleTheme;
