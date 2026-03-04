import { http_client } from "@/services/api-client.ts";
import { fetchProjectQueryKeyType } from "@/routes/_layout/projects.tsx";
import { Project } from "@/services/models/project.models.ts";
import { ApiResponse } from "@/services/models/general.models.ts";
import { AddProjectPayload } from "@/components/schemas/project.schema.ts";

export const ProjectService = {
  fetchProjects:  ({ queryKey }: { queryKey: fetchProjectQueryKeyType} ): Promise<ApiResponse<Project[]>> => {
    const params = queryKey[1];
    const formData = new FormData();

    Object.entries(params).forEach(([key, value]) => {
      formData.append(key, value);
    });
    return http_client.get(`projects`, { params: Object.fromEntries(formData)})
  },
  getProject: (projectId: string) => {
    return http_client.get(`projects/${projectId}`);
  },
  addProject: (payload: AddProjectPayload) => {
    return http_client.post(`projects`, payload);
  },
  deleteProject: (projectId: string): Promise<ApiResponse<unknown>> => {
    return http_client.delete()
  }
}