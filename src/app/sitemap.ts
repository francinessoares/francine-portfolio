import type { MetadataRoute } from "next";

import { siteUrl } from "@/config/site";

const routes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/servicos", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/projetos", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/sobre", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/contato", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/stack", changeFrequency: "monthly" as const, priority: 0.5 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
}
