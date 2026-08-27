import type { LucideIcon } from "lucide-react";
import {
  Gauge,
  Layout,
  MessageCircle,
  Search,
  Smartphone,
  Sparkles,
} from "lucide-react";

export type BenefitId =
  | "design"
  | "responsive"
  | "custom"
  | "readyToSell"
  | "seo"
  | "performance";

export type Benefit = {
  id: BenefitId;
  icon: LucideIcon;
};

export const benefits: Benefit[] = [
  { id: "design", icon: Layout },
  { id: "responsive", icon: Smartphone },
  { id: "custom", icon: Sparkles },
  { id: "readyToSell", icon: MessageCircle },
  { id: "seo", icon: Search },
  { id: "performance", icon: Gauge },
];
