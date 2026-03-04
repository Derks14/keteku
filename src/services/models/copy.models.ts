import { BaseDocument } from "@/services/models/general.models.ts";

export interface Copy extends BaseDocument{
  id: string;
  category: Category;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  status: CopyStatus;
}


export enum Category {
  MESSAGE,
  PROJECT,
  ARTICLE
}

export enum CopyStatus {
  PUBLISHED,
  DRAFT
}