import { object, url, string, z } from "zod";
import { Category, CopyStatus } from "@/services/models/copy.models.ts";


export const project_validation_schema = object({
  title: string().min(1, { message: "project title is required"}),
  description: string().min(1, { message: "project description is required"}),
})


export const update_project_validation_schema = object({
  category: z.enum(Category),
  title: string().min(1, { message: "project title is required" }),
  description: string().min(1, { message: "project description is required" }),
  tags: z.array(string()),
  icon: string().min(1, { message: "project icon is required" }),
  status: z.enum(CopyStatus),
  hero: object({
    projectName: string().min(1, { message: "project name is required" }),
    valueStatement: string().min(1, { message: "value statement is required" }),
    techStack: z.array(string()),
    links: object({
      github: url({ message: "github must be a valid URL" }),
      liveDemo: url({ message: "live demo must be a valid URL" }),
    }),
  }),
  problemStatement: object({
    problem: string().min(1, { message: "problem is required" }),
    realWorldMotivation: string().min(1, { message: "real world motivation is required" }),
    constraints: z.array(string()),
    whyExistingSolutionsFailed: z.array(string()),
  }),
  systemArchitecture: object({
    diagramUrl: url({ message: "diagram URL must be a valid URL" }),
    dataFlow: z.array(string()),
    designRationale: string().min(1, { message: "design rationale is required" }),
  }),
  engineeringDecision: z.array(object({
    topic: string().min(1, { message: "topic is required" }),
    decision: string().min(1, { message: "decision is required" }),
    reason: string().min(1, { message: "reason is required" }),
  })),
  implementationHighlights: object({
    apiDesign: z.array(string()),
    databaseSchemaOverview: string().min(1, { message: "database schema overview is required" }),
    backgroundJobs: z.array(string()),
    errorHandling: string().min(1, { message: "error handling is required" }),
  }),
  outcomesAndLearnings: object({
    whatWorked: z.array(string()),
    whatBroke: z.array(string()),
    futureImprovements: z.array(string()),
  }),
  callToAction: object({
    primary: object({
      label: string().min(1, { message: "primary label is required" }),
      url: url({ message: "primary URL must be a valid URL" }),
    }),
    secondary: z.array(object({
      label: string().min(1, { message: "secondary label is required" }),
      url: url({ message: "secondary URL must be a valid URL" }),
    })),
  }),
})

export type ProjectValidationSchema = z.infer< typeof project_validation_schema>;

export type UpdateProjectValidationSchema = z.infer< typeof update_project_validation_schema>;

export interface AddProjectPayload {
  title: string;
  description: string;
}
