export type FooterNavId =
  | "home"
  | "services"
  | "solutions"
  | "projects"
  | "about"
  | "contact";

export type FooterServiceId =
  | "landingPages"
  | "institutionalSites"
  | "webSystems"
  | "applications"
  | "aiIntegrations"
  | "processAutomation";

export const footerNavItems: { id: FooterNavId; href: string }[] = [
  { id: "home", href: "/" },
  { id: "services", href: "/#servicos" },
  { id: "solutions", href: "/#solucoes" },
  { id: "projects", href: "/projetos" },
  { id: "about", href: "/#sobre" },
  { id: "contact", href: "/#contato" },
];

export const footerServiceItems: { id: FooterServiceId; href: string }[] = [
  { id: "landingPages", href: "/servicos" },
  { id: "institutionalSites", href: "/servicos" },
  { id: "webSystems", href: "/#solucoes" },
  { id: "applications", href: "/#solucoes" },
  { id: "aiIntegrations", href: "/#solucoes" },
  { id: "processAutomation", href: "/#solucoes" },
];

export const footerTechStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
] as const;
