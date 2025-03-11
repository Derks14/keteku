import { FaGithub, FaLinkedin } from "react-icons/fa";
import { WiSunset } from "react-icons/wi";
import { RxMoon } from "react-icons/rx";
import { LuLaptopMinimal } from "react-icons/lu";
import { Theme, useTheme } from "@/components/context/theme-context.tsx";


const MobileNavigationMenu = () => {
  const [theme, setTheme] = useTheme();
  const toggleTheme = (value: Theme) => {
    setTheme(value)
    localStorage.theme = value
  }
  return (
    <>
      <section
        id="mobile-nav"
        className="fixed top-0 z-10 w-full -translate-y-full overflow-hidden transition-all duration-700 ease-in-out md:hidden"
      >
        <div className="h-screen bg-white/30 p-6 backdrop-blur-md dark:bg-black/70 ">
          <div className="flex h-[90%] flex-col  justify-between pt-16">
            <div></div>
            <div className="cursor-pointer">
              <div className="py-6 text-center">
                <a className="text-2xl">Projects</a>
              </div>
              <div className="py-6 text-center">
                <a>
                  <h2 className="text-2xl">About</h2>
                </a>
              </div>
              <div className="py-6 text-center">
                <a>
                  <h2 className="text-2xl">Contact</h2>
                </a>
              </div>
            </div>
            {/*lower part of the navigation menu*/}
            <div>
              <div className="flex items-center justify-between pb-8">
                <div className="flex gap-2 space-x-3">
                  <div className="rounded  p-2 text-3xl hover:rounded-lg hover:bg-accent hover:text-primary">
                    <a target="_blank" href="https://github.com/derks14">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded p-2 text-3xl hover:rounded-lg hover:bg-accent hover:text-primary">
                    <a target="_blank" href="https://www.linkedin.com/in/derrick-keteku-11a034174/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
                <div>
                  <button className="font-light text-primary hover:rounded-lg hover:bg-accent">

                    { theme == 2 && <WiSunset onClick={() => toggleTheme(1)} className="text-3xl" /> }
                    { theme == 1 && <RxMoon onClick={() => toggleTheme(2)} className="text-2xl" /> }
                    { theme == 0 && <LuLaptopMinimal onClick={ () => toggleTheme(0) } className="text-2xl" />}

                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileNavigationMenu;
