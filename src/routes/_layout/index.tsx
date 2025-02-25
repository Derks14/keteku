import { createFileRoute } from "@tanstack/react-router";

const Home = () => {
  return (
    <div>
      Home
    </div>
  )
}

export const Route = createFileRoute('/_layout/')({
  component: Home
})