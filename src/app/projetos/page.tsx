import type { Metadata } from "next";

import { ProjectsPageContent } from "@/sections/projects";
import { defaultLocale, getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/seo";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = createPageMetadata({
  title: dict.projects.meta.title,
  description: dict.projects.meta.description,
  path: "/projetos",
});

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
