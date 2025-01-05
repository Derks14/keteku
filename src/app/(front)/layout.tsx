import Footer from "@/components/sections/footer";
import Nav from "@/components/sections/nav";
import Main from "@/components/sections/main";
import { ReactNode } from "react";
import MobileNavigationMenu from "@/components/sections/mobile-navigation-menu";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex h-full w-full flex-auto overflow-hidden pb-20 md:pb-2">
        <Nav />
        <MobileNavigationMenu />
        <Main>{children}</Main>
      </div>
    </>
  );
}
