import type { Metadata } from "next";

import { ProjectsPageContent } from "@/sections/projects";
import { defaultLocale, getDictionary } from "@/i18n";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: `${dict.projects.meta.title} — Francine Soares`,
  description: dict.projects.meta.description,
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
