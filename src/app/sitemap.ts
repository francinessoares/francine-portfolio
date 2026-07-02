import type { MetadataRoute } from "next";

import { siteUrl } from "@/config/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/servicos", priority: 0.8 },
  { path: "/projetos", priority: 0.8 },
  { path: "/sobre", priority: 0.8 },
  { path: "/contato", priority: 0.8 },
  { path: "/stack", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
