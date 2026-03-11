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
  getProject: (projectId: string): Promise<ApiResponse<Project>> => {
    return http_client.get(`projects/${projectId}`);
  },
  updateProject: ({ projectId, project }: {projectId: string, project: Partial<Project>}): Promise<ApiResponse<Project>> => {
    return http_client.put(`projects/${projectId}`, project)
  },
  addProject: (payload: AddProjectPayload): Promise<ApiResponse<Project>> => {
    return http_client.post(`projects`, payload);
  },
  deleteProject: (projectId: string): Promise<ApiResponse<unknown>> => {
    return http_client.delete(`projects/${projectId}`)
  }
}