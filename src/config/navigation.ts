export type NavItemId =
  | "home"
  | "services"
  | "solutions"
  | "projects"
  | "about"
  | "contact";

export type NavItem = {
  id: NavItemId;
  href: string;
};

export const navItems: NavItem[] = [
  { id: "home", href: "/" },
  { id: "services", href: "/#servicos" },
  { id: "solutions", href: "/#solucoes" },
  { id: "projects", href: "/projetos" },
  { id: "about", href: "/#sobre" },
  { id: "contact", href: "/#contato" },
];
