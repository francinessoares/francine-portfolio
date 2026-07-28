export type FeaturedProjectId = "evuflow";

export type FeaturedProject = {
  id: FeaturedProjectId;
  href: string;
  stack: string[];
  image?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "evuflow",
    href: "https://www.evuflow.com.br",
    stack: ["Next.js", "TypeScript", "NestJS", "Supabase"],
    image: "/products/evuflow.png",
  },
];
