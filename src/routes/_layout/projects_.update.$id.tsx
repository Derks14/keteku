import { createFileRoute } from '@tanstack/react-router'
import { ProjectService } from "@/services/api/project.service.ts";

export const Route = createFileRoute('/_layout/projects_/update/$id')({
  loader: async ({ params, context }) => {
    await context.queryClient.ensureQueryData({
      queryKey: ['projects', params.id],
      queryFn: () => ProjectService.getProject(params.id)
    })
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/projects_/update/$id"!
    <div>{ Route.useLoaderData() }</div>
  </div>
}
