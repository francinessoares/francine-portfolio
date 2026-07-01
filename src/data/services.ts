export type ServiceId =
  | "landingPage"
  | "institutional"
  | "scheduling"
  | "aiIntegrations"
  | "customDevelopment";

export type ServicePackage = {
  id: ServiceId;
  featured?: boolean;
};

export const servicePackages: ServicePackage[] = [
  { id: "landingPage" },
  { id: "institutional", featured: true },
  { id: "scheduling" },
  { id: "aiIntegrations" },
  { id: "customDevelopment" },
];
