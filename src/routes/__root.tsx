import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Toaster } from "@/components/ui/sonner.tsx";
import { KetekuRouterContext } from "@/services/queryClient.ts";


const Core =  () => {

  return (
    <div className="text-foreground bg-gradient-to-b from-transparent to-backgroundend bg-backgroundstart">
      <div className="h-screen max-h-screen min-w-screen overflow-hidden text-base font-dosis ">
        <Toaster />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </div>
  )

}
export const Route = createRootRouteWithContext<KetekuRouterContext>()({
  component: Core
})
