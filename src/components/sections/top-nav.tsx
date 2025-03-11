import MobileTopNav from "@/components/sections/mobile-top-nav";
import { WiSunset } from "react-icons/wi";
import { RxMoon } from "react-icons/rx";
import { LuLaptopMinimal } from "react-icons/lu";

import { Theme, useTheme } from "@/components/context/theme-context.tsx";




interface TopNavProps {
  title: string;
}

const TopNav = ({ title }: TopNavProps) => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = (value: Theme) => {
    setTheme(value)
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
          <button className="font-light text-primary hover:rounded-lg hover:bg-accent">

            { theme == 2 && <WiSunset onClick={() => toggleTheme(1)} className="text-3xl" /> }
            { theme == 1 && <RxMoon onClick={() => toggleTheme(2)} className="text-2xl" /> }
            { theme == 0 && <LuLaptopMinimal onClick={ () => toggleTheme(0) } className="text-2xl" />}

          </button>
        </div>
      </div>

      <MobileTopNav />
    </>
  );
};
export default TopNav;
