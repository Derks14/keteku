import MobileTopNav from "@/components/sections/mobile-top-nav";
import { WiSunset } from "react-icons/wi";
import { RxMoon } from "react-icons/rx";




interface TopNavProps {
  title: string;
}

const topNav = ({ title }: TopNavProps) => {
  return (
    <>
      {/*desktop*/}
      <div className="hidden justify-between pb-4 sm:flex ">
        <div>
          {/*<span className="text-primary">do it with shadow</span>*/}
          <h1 className="text-3xl">{title}</h1>
        </div>
        <div>
          <button className="p-2 font-light text-4xl text-primary hover:rounded-lg hover:bg-accent">
            <WiSunset />
          </button>
          <button className="p-2 font-light text-3xl text-primary hover:rounded-lg hover:bg-accent">
            <RxMoon />
          </button>
        </div>
      </div>

      <MobileTopNav />
    </>
  );
};
export default topNav;
