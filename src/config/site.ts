export const siteConfig = {
  name: "Francine Soares",
  role: "Software Studio",
  logo: "/logo/francine-logo.png",
  portrait: "/francine-portrait-01.png",
  githubProfile:
    process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/francinessoares",
  linkedInProfile:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/francine-soares-5ba112124/",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "francinesoares22@gmail.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "5548999456066",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteTitle = `${siteConfig.name} — ${siteConfig.role}`;
