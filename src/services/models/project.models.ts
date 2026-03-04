import { Copy } from "@/services/models/copy.models.ts";

export interface Project extends Copy {
  hero: Hero;
  problemStatement: ProblemStatement;
  systemArchitecture: SystemArchitecture;
  engineeringDecision: EngineeringDecision[]
  implementationHighlights: ImplementationHighlights;
  outcomesAndLearnings: OutcomesAndLearnings;
  callToAction: Action;



}

export interface Hero {
  projectName: string;
  valueStatement: string;
  techStack: string[];
  links: Links
}

export interface Links {
  github: string;
  liveDemo: string;
}

export interface ProblemStatement {
  problem: string;
  realWorldMotivation: string;
  constraints: string[]
  whyExistingSolutionsFailed: string[]
}

export interface SystemArchitecture {
  diagramUrl: string;
  dataFlow: string[];
  designRationale: string
}

export interface EngineeringDecision {
  topic: string;
  decision: string;
  reason: string;
}

export interface ImplementationHighlights {
  apiDesign: string[]
  databaseSchemaOverview: string
  backgroundJobs: string[]
  errorHandling: string

}

export interface OutcomesAndLearnings {
  whatWorked: string[]
  whatBroke: string[]
  futureImprovements: string[]
}

export interface Action {
  primary: CallToAction;
  secondary: CallToAction[]
}

export interface CallToAction {
  label: string;
  url: string
}



