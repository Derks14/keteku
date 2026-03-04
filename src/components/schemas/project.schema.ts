import { object, string, z } from "zod";


export const project_validation_schema = object({
  title: string().min(1, { message: "project title is required"}),
  description: string().min(1, { message: "project description is required"}),
})

export type ProjectValidationSchema = z.infer< typeof project_validation_schema>;


export interface AddProjectPayload {
  title: string;
  description: string;
}