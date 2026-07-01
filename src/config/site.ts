export const siteConfig = {
  name: "Francine Soares",
  role: "Software Boutique",
  logo: "/logo/francine-logo.png?v=2",
  githubProfile:
    process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/francinessoares",
  linkedInProfile:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/francine-soares-5ba112124/",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "francinesoares22@gmail.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "5548999456066",
} as const;

export const siteTitle = `${siteConfig.name} — ${siteConfig.role}`;
