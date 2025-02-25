import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools';


const Core =  () => {

  return (
    <>
      <div className="p-2 flex gap-2">
        <h2>Root</h2>
      </div>
      <div>
        <hr />
      </div>
      <div>
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  )

}
export const Route = createRootRoute({
  component: Core
})
