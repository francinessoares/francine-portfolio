export const siteConfig = {
  name: "Francine Soares",
  role: "Front-End Engineer",
  githubProfile:
    process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/francinessoares",
  linkedInProfile:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/francine-soares-5ba112124/",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@francinesoares.dev",
  cvDownloadUrl:
    process.env.NEXT_PUBLIC_CV_URL ?? "/cv/francine-soares-cv.pdf",
  cvFileName: "Francine-Soares-CV.pdf",
} as const;

export const siteTitle = `${siteConfig.name} — ${siteConfig.role}`;
