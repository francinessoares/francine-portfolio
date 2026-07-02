export type MockupVariant =
  | "dashboard"
  | "analytics"
  | "portal"
  | "operations"
  | "mobile";

export type ProcessStepId =
  | "discovery"
  | "proposal"
  | "design"
  | "development"
  | "delivery";

export const processSteps: ProcessStepId[] = [
  "discovery",
  "proposal",
  "design",
  "development",
  "delivery",
];
