import MobileTopNav from "@/components/sections/mobile-top-nav";
import { WiSunset } from "react-icons/wi";

interface TopNavProps {
  title: string;
}

const topNav = ({ title }: TopNavProps) => {
  return (
    <>
      {/*desktop*/}
      <div className="hidden justify-between pb-6 sm:flex ">
        <div>
          {/*<span className="text-primary">do it with shadow</span>*/}
          <h1 className="text-5xl tracking-tighter">{title}</h1>
        </div>
        <div>
          <button className="p-2 font-light text-3xl text-primary hover:rounded-lg hover:bg-accent">
            <WiSunset />
          </button>
        </div>
      </div>

      <MobileTopNav />
    </>
  );
};
export default topNav;
