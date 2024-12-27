"use client";
import { toggleMobileNav } from "@/services/utils";

interface TopNavProps {
  title: string;
}

const topNav = ({ title }: TopNavProps) => {
  return (
    <>
      {/*desktop*/}
      <div className="hidden justify-between pb-6 sm:flex ">
        <div>
          <span className="text-destructive-foreground">do it with shadow</span>
          <h1 className="text-6xl ">{title}</h1>
        </div>
        <div>toggle day and night</div>
      </div>

      {/*  mobile*/}
      <div className="flex items-center justify-between pb-6 sm:hidden">
        <div>keteku</div>
        <button
          onClick={toggleMobileNav}
          id="hamburger"
          className="flex cursor-pointer flex-col items-end justify-center gap-1"
        >
          <span className="hamburger-top block h-0.5 w-7 rounded bg-foreground transition-all duration-700"></span>
          <span className="hamburger-middle block h-0.5 w-5 rounded bg-foreground transition-all duration-700"></span>
          <span className="hamburger-bottom block h-0.5 w-7 rounded bg-foreground transition-all duration-700"></span>
        </button>
      </div>
    </>
  );
};
export default topNav;
