import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools';


const Core =  () => {

  return (
    <div className="h-screen max-h-screen overflow-hidden font-medium font-dosis">
        <Outlet />
        <TanStackRouterDevtools />
    </div>
  )

}
export const Route = createRootRoute({
  component: Core
})
