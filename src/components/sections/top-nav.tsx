import MobileTopNav from "@/components/sections/mobile-top-nav";
import { ImSun } from "react-icons/im";

interface TopNavProps {
  title: string;
}

const topNav = ({ title }: TopNavProps) => {
  return (
    <>
      {/*desktop*/}
      <div className="hidden justify-between pb-6 sm:flex ">
        <div>
          <span className="text-primary">do it with shadow</span>
          <h1 className="text-6xl ">{title}</h1>
        </div>
        <div>
          <button className="p-2 text-3xl text-primary hover:rounded-lg hover:bg-accent">
            <ImSun />
          </button>
        </div>
      </div>

      <MobileTopNav />
    </>
  );
};
export default topNav;
