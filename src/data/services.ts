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
  minPriceBRL?: number;
};

export const servicePackages: ServicePackage[] = [
  { id: "professionalSite", featured: true, icon: Globe, minPriceBRL: 1500 },
  { id: "landingPage", icon: LayoutTemplate, minPriceBRL: 900 },
  { id: "businessSite", icon: Building2, minPriceBRL: 2500 },
  { id: "maintenance", icon: Wrench },
  { id: "automationAi", icon: Bot },
];
