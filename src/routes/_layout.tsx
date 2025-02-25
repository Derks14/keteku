import { createFileRoute, Outlet } from "@tanstack/react-router";
import Nav from "@/components/sections/nav";
import Main from "@/components/sections/main";
import MobileNavigationMenu from "@/components/sections/mobile-navigation-menu";

const Layout = () => {
  return (
    <div className="flex h-full w-full flex-auto overflow-hidden pb-20 md:pb-2">
      <Nav />
      <MobileNavigationMenu />
      <Main>
        <Outlet />
      </Main>
    </div>
  )
}

export const Route = createFileRoute('/_layout')({
  component: Layout
})