import MobileTopNav from "@/components/sections/mobile-top-nav";
import { WiSunset } from "react-icons/wi";
import { RxMoon } from "react-icons/rx";
import { LuLaptopMinimal } from "react-icons/lu";

import { useThemeContext } from "@/components/context/theme-context.tsx";




interface TopNavProps {
  title: string;
}

const TopNav = ({ title }: TopNavProps) => {
  const [theme, setTheme] = useThemeContext();

  const toggleTheme = () => {
    const value = (theme + 1 ) % 3
    setTheme(value )
    localStorage.theme = value
  }
  return (
    <>
      {/*desktop*/}
      <div className="hidden justify-between pb-4 sm:flex ">
        <div>
          {/*<span className="text-primary">do it with shadow</span>*/}
          <h1 className="text-3xl">{title}</h1>
        </div>
        <div>
          <button onClick={toggleTheme} className=" font-light text-primary hover:rounded-lg hover:bg-accent">

            { theme == 0 && <WiSunset className="text-3xl" /> }
            { theme == 1 && <RxMoon className="text-2xl" /> }
            { theme == 2 && <LuLaptopMinimal className="text-2xl" />}
          </button>
        </div>
      </div>

      <MobileTopNav />
    </>
  );
};
export default TopNav;
