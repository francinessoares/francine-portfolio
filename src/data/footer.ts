export type FooterNavId =
  | "home"
  | "services"
  | "projects"
  | "about"
  | "contact";

export type FooterServiceId =
  | "professionalSites"
  | "landingPages"
  | "businessSites"
  | "maintenance"
  | "automationAi";

export const footerNavItems: { id: FooterNavId; href: string }[] = [
  { id: "home", href: "/" },
  { id: "services", href: "/#servicos" },
  { id: "projects", href: "/projetos" },
  { id: "about", href: "/#sobre" },
  { id: "contact", href: "/contato" },
];

export const footerServiceItems: { id: FooterServiceId; href: string }[] = [
  { id: "professionalSites", href: "/servicos" },
  { id: "landingPages", href: "/servicos" },
  { id: "businessSites", href: "/servicos" },
  { id: "maintenance", href: "/servicos" },
  { id: "automationAi", href: "/servicos" },
];

export const footerTechStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
] as const;
