import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools';


const Core =  () => {

  return (
    <div className="text-foreground bg-gradient-to-b from-transparent to-backgroundend bg-backgroundstart">
      <div className="h-screen max-h-screen min-w-screen overflow-hidden font-medium font-dosis ">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </div>
  )

}
export const Route = createRootRoute({
  component: Core
})
