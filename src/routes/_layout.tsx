import { createFileRoute, Outlet } from "@tanstack/react-router";

const Layout = () => {
  return (
    <div>
      <a>im nested layout</a>
      <Outlet />
    </div>
  )
}

export const Route = createFileRoute('/_layout')({
  component: Layout
})