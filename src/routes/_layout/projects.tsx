import { createFileRoute } from '@tanstack/react-router'
import Wrapper from "@/components/ui/wrapper.tsx";
import Card from "@/components/ui/card.tsx";
import { DisplayCard } from "@/components/ui/display_card.tsx";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProjectService } from "@/services/api/project.service.ts";
import { Project } from "@/services/models/project.models.ts";

export const Route = createFileRoute('/_layout/projects')({
  component: RouteComponent,
})

export  interface fetchProjectParamsType {
  page: number;
  size: number;
  search?: string;
}

export type fetchProjectQueryKeyType = [string, fetchProjectParamsType]

function RouteComponent() {
  const pros = [
    {
      id: 324,
      span: 2,
      project: "Lab",
      title: "",
    },
    {
      id: 14,
      span: 2,
      project: "Lab",
      title: "",
    },
    {
      id: 321,
      span: 2,
      project: "Lab",
      title: "",
    },
    {
      id: 322,
      span: 2,
      project: "Lab",
      title: "",
    },
    {
      id: 394,
      span: 2,
      project: "Lab",
      title: "",
    },
    {
      id: 354,
      span: 2,
      project: "Lab",
      title: "",
    },
  ];

  const [params, setParams ] = useState<fetchProjectParamsType>({
    search: "",
    page: 0,
    size: 6,
  })


  const { isLoading, data } = useQuery({
    queryKey: ["projects", params],
    queryFn: ProjectService.fetchProjects,
  })

  const projects: Project[] = data?.data ?? [];

  return (
    <>
      <Wrapper page="Projects" row_cols_class="md:grid-cols-4 md:grid-rows-3">
        {isLoading ?
          <p>loading content</p>
          :
        <>
          {projects.map((project) => (
            <Card className="" key={project.id}>
              <DisplayCard>
                <div></div>
                <div></div>
              </DisplayCard>
            </Card>
          ))}
        </>}
      </Wrapper>
    </>
  );
}
