export type ProjectId =
  | "environmental"
  | "retail"
  | "logistics"
  | "government"
  | "legal";

export type MockupVariant =
  | "dashboard"
  | "analytics"
  | "portal"
  | "operations"
  | "mobile";

export type ProjectShowcase = {
  id: ProjectId;
  mockup: MockupVariant;
  device: "laptop" | "phone";
};

export const projectShowcases: ProjectShowcase[] = [
  { id: "environmental", mockup: "analytics", device: "laptop" },
  { id: "retail", mockup: "operations", device: "laptop" },
  { id: "logistics", mockup: "dashboard", device: "laptop" },
  { id: "government", mockup: "portal", device: "laptop" },
  { id: "legal", mockup: "mobile", device: "phone" },
];

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
