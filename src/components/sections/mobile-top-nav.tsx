import { toggleMobileNav } from "@/components/services/utils.ts";
import { useNavigate } from "@tanstack/react-router";

const MobileTopNav = () => {

  const navigate = useNavigate();

  const navigateToHome = async () => {
    const sidebar = document.getElementById("mobile-nav") as HTMLElement
    if (!sidebar.classList.contains('-translate-y-full')) {
      toggleMobileNav()
    }

    await navigate({ to: '/' })

  }
  return (
    <>
      {/*  mobile*/}
      <div className="flex items-center justify-between pb-6 sm:hidden">
        <button onClick={navigateToHome} className="z-20">keteku</button>
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
