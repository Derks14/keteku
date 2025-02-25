import { createFileRoute } from '@tanstack/react-router'


const About = () => {
  return (
    <div>
      about
    </div>
  )
}
export const Route = createFileRoute('/_layout/about')({
  component: About,
})

