import type { LucideIcon } from "lucide-react";
import { Bot, Building2, Globe, LayoutTemplate, Wrench } from "lucide-react";

export type ServiceId =
  | "professionalSite"
  | "landingPage"
  | "businessSite"
  | "maintenance"
  | "automationAi";

export type ServicePackage = {
  id: ServiceId;
  featured?: boolean;
  icon: LucideIcon;
};

export const servicePackages: ServicePackage[] = [
  { id: "professionalSite", featured: true, icon: Globe },
  { id: "landingPage", icon: LayoutTemplate },
  { id: "businessSite", icon: Building2 },
  { id: "maintenance", icon: Wrench },
  { id: "automationAi", icon: Bot },
];
