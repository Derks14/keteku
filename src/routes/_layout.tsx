import { createFileRoute, Outlet } from "@tanstack/react-router";
import Nav from "@/components/sections/nav";
import Main from "@/components/sections/main";
import MobileNavigationMenu from "@/components/sections/mobile-navigation-menu";
import { ThemeContextProvider } from "@/components/context/theme-context.tsx";

const Layout = () => {
  return (
    <div className="flex h-full w-full flex-auto overflow-hidden pb-20 md:pb-2">
      <ThemeContextProvider>
        <Nav />
        <MobileNavigationMenu />
        <Main>
          <Outlet />
        </Main>
      </ThemeContextProvider>
    </div>
  )
}

export const Route = createFileRoute('/_layout')({
  component: Layout
})