import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from "./App.tsx";

// import the generated route tree
import { routeTree} from "./routeTree.gen.ts";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { queryClient } from "@/services/queryClient.ts";
import { ThemeProvider } from "@/components/providers/theme-provider.tsx";


// create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient
  }
})

// register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Keep transitions alive during theme toggle so UI animations (e.g., Morph) still run */}
    <ThemeProvider disableTransitionOnChange={false}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
