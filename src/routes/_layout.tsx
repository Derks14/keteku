import { createFileRoute, Outlet } from "@tanstack/react-router";
import Nav from "@/components/sections/nav";
import Main from "@/components/sections/main";
import MobileNavigationMenu from "@/components/sections/mobile-navigation-menu";
import { ThemeContextProvider } from "@/components/context/theme-context.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/services/queryClient.ts";

const Layout = () => {


  return (
    <div className="flex h-full w-full flex-auto overflow-hidden pb-20 md:pb-2">
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
        <Nav />
        <MobileNavigationMenu />
        <Main>
          <Outlet />
        </Main>
      </ThemeContextProvider>
      </QueryClientProvider>
    </div>
  )
}

export const Route = createFileRoute('/_layout')({
  component: Layout
})