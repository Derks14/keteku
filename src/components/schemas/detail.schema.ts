import { object, string, z } from "zod";

export const detail_validation_schema = object({
  title: string().min(1, { message: "Title is required" }),
  subtitle: string(),
  content: string().min(1, { message: "Content is required" }),
  contentFormat: string().min(1, { message: "Content is required" }),
  type: string().min(1, { message: "Type is required" }),
  status: string().min(1, { message: "Status is required" }),
  relevance: string().min(1, { message: "Relevance is required" }),
});

export type DetailValidationSchema = z.infer<typeof detail_validation_schema>;
