export type TechId =
  | "react"
  | "nextjs"
  | "typescript"
  | "angular"
  | "tailwindcss"
  | "scss"
  | "nodejs"
  | "nestjs"
  | "firebase"
  | "postgresql"
  | "reactNative"
  | "figma"
  | "git"
  | "docker"
  | "github"
  | "vercel";

export type StackCategoryId =
  | "frontend"
  | "backend"
  | "mobile"
  | "uiUx"
  | "devops";

export type StackCategory = {
  id: StackCategoryId;
  techIds: TechId[];
};

export const stackCategories = [
  {
    id: "frontend",
    techIds: ["react", "nextjs", "typescript", "angular", "tailwindcss", "scss"],
  },
  {
    id: "backend",
    techIds: ["nodejs", "nestjs", "firebase", "postgresql"],
  },
  {
    id: "mobile",
    techIds: ["reactNative"],
  },
  {
    id: "uiUx",
    techIds: ["figma"],
  },
  {
    id: "devops",
    techIds: ["git", "docker", "github", "vercel"],
  },
] as const satisfies readonly StackCategory[];

export const categoryById = Object.fromEntries(
  stackCategories.map((category) => [category.id, category]),
) as Record<StackCategoryId, (typeof stackCategories)[number]>;

export type ExpertiseId =
  | "architecture"
  | "designSystems"
  | "performance"
  | "responsive"
  | "productThinking";

export const expertiseIds: ExpertiseId[] = [
  "architecture",
  "designSystems",
  "performance",
  "responsive",
  "productThinking",
];

export type ExperienceId =
  | "years"
  | "architecture"
  | "uiEngineering"
  | "performance";

export const experienceIds: ExperienceId[] = [
  "years",
  "architecture",
  "uiEngineering",
  "performance",
];

export const techBrandColors: Record<TechId, string> = {
  react: "#61DAFB",
  nextjs: "#FFFFFF",
  typescript: "#3178C6",
  angular: "#DD0031",
  tailwindcss: "#38BDF8",
  scss: "#CC6699",
  nodejs: "#339933",
  nestjs: "#E0234E",
  firebase: "#FFCA28",
  postgresql: "#4169E1",
  reactNative: "#61DAFB",
  figma: "#A259FF",
  git: "#F05032",
  docker: "#2496ED",
  github: "#FFFFFF",
  vercel: "#FFFFFF",
};
