export type MockupVariant =
  | "dashboard"
  | "analytics"
  | "portal"
  | "operations"
  | "mobile";

export type ProcessStepId = "idea" | "plan" | "build" | "launch";

export const processSteps: ProcessStepId[] = [
  "idea",
  "plan",
  "build",
  "launch",
];
