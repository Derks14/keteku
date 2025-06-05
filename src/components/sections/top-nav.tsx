import MobileTopNav from "@/components/sections/mobile-top-nav";
// import { WiSunset } from "react-icons/wi";
import { RxMoon } from "react-icons/rx";
import { LuLaptopMinimal } from "react-icons/lu";

import { Theme, useTheme } from "@/components/context/theme-context.tsx";
import { GiUbisoftSun } from "react-icons/gi";




interface TopNavProps {
  title?: string;
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
      <div className="hidden justify-between items-center pb-8 sm:flex ">
        <div>
          {/*<span className="text-primary">do it with shadow</span>*/}
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>

        <div>
          <button className="font-light relative cursor-pointer w-8 min-h-6 text-primary hover:rounded-lg hover:bg-accent">
            <GiUbisoftSun key="light" onClick={() => toggleTheme(1)}
                      className={`text-4xl bg-primary/20 rounded-full delay-200 active:scale-95 active:shadow-lg active:opacity-80p-1.5 absolute top-0 left-0 transition-opacity ease-out duration-700 ${ theme == 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            />
            <RxMoon key="dark" onClick={() => toggleTheme(2)}
                    className={`text-4xl bg-primary/20 rounded-full delay-200 active:scale-95 active:shadow-lg active:opacity-80 p-1.5 absolute top-0 left-0 transition-opacity ease-out duration-700 ${ theme == 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            />
            <LuLaptopMinimal key="system" onClick={ () => toggleTheme(0) }
                             className={`text-4xl rounded-full delay-200 active:scale-95 active:shadow-lg active:opacity-80 bg-primary/20 p-1.5 absolute top-0 left-0 transition-opacity ease-in-out duration-700 ${ theme == 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            />

            {/*{ theme == 2 && <WiSunset onClick={() => toggleTheme(1)} className="text-3xl" /> }*/}
            {/*{ theme == 1 && <RxMoon onClick={() => toggleTheme(2)} className="text-2xl " /> }*/}
            {/*{ theme == 0 && <LuLaptopMinimal onClick={ () => toggleTheme(0) } className="text-2xl" />}*/}

          </button>
        </div>
      </div>

      <MobileTopNav />
    </>
  );
};
export default TopNav;
