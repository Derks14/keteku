import MobileTopNav from "@/components/sections/mobile-top-nav";
import ToggleTheme from "@/components/ui/toggle-theme.tsx";

interface TopNavProps {
  title?: string;
}

const TopNav = ({ title }: TopNavProps) => {



  return (
    <>
      {/*desktop*/}
      <div className="hidden items-center justify-between pb-8 sm:flex">
        <div>
          {/*<span className="text-primary">do it with shadow</span>*/}
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>

        <div>
          <div className="flex items-center gap-2">

            <ToggleTheme />

          </div>
        </div>
      </div>

      <MobileTopNav />
    </>
  );
};
export default TopNav;
