"use client";

import { toggleMobileNav } from "@/services/utils";

const MobileTopNav = () => {
  return (
    <>
      {/*  mobile*/}
      <div className="flex items-center justify-between pb-6 sm:hidden">
        <button className="z-20">keteku</button>
        <button
          onClick={toggleMobileNav}
          id="hamburger"
          className="z-20 flex cursor-pointer flex-col items-end justify-center gap-1"
        >
          <span className="hamburger-top block h-0.5 w-8 rounded bg-primary transition-all duration-700"></span>
          <span className="hamburger-middle block h-0.5 w-6 rounded bg-primary transition-all duration-700"></span>
          <span className="hamburger-bottom block h-0.5 w-8 rounded bg-primary transition-all duration-700"></span>
        </button>
      </div>
    </>
  );
};

export default MobileTopNav;
