export type NavItemId = "home" | "services" | "solutions" | "about" | "contact";

export type NavItem = {
  id: NavItemId;
  href: string;
};

export const navItems: NavItem[] = [
  { id: "home", href: "/" },
  { id: "services", href: "/#servicos" },
  { id: "solutions", href: "/#solucoes" },
  { id: "about", href: "/#sobre" },
  { id: "contact", href: "/#contato" },
];
