import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Toaster } from "@/components/ui/sonner.tsx";
import { KetekuRouterContext } from "@/services/queryClient.ts";
import { Button } from "@/components/ui/button.tsx";


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

const NotFound = () => {
  return (
    <div>
      <h1>Heyyy, looks like you're lost mate</h1>
      <Button variant="link">lets go back home</Button>
    </div>
  )
}
export const Route = createRootRouteWithContext<KetekuRouterContext>()({
  notFoundComponent: NotFound,
  component: Core
})
