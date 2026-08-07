import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { siteConfig } from "@/config/site";
import { defaultLocale, getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/seo";
import { Hero } from "@/sections/hero";

const HomeServicesSection = dynamic(
  () =>
    import("@/sections/home/services-section").then(
      (m) => m.HomeServicesSection,
    ),
);
const HomeSolutionsSection = dynamic(
  () =>
    import("@/sections/home/solutions-section").then(
      (m) => m.HomeSolutionsSection,
    ),
);
const HomeProcessSection = dynamic(
  () =>
    import("@/sections/home/process-section").then(
      (m) => m.HomeProcessSection,
    ),
);
const HomeTechPreviewSection = dynamic(
  () =>
    import("@/sections/home/tech-preview-section").then(
      (m) => m.HomeTechPreviewSection,
    ),
);
const HomeAboutSection = dynamic(
  () =>
    import("@/sections/home/about-section").then((m) => m.HomeAboutSection),
);
const HomeFaqSection = dynamic(
  () => import("@/sections/home/faq-section").then((m) => m.HomeFaqSection),
);
const HomeContactSection = dynamic(
  () =>
    import("@/sections/home/contact-section").then(
      (m) => m.HomeContactSection,
    ),
);

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.role,
  description: dict.meta.description,
  path: "/",
});

export default function Home() {
  return (
    <main id="main-content" className="relative bg-surface">
      <Hero />
      <HomeServicesSection />
      <HomeSolutionsSection />
      <HomeProcessSection />
      <HomeTechPreviewSection />
      <HomeAboutSection />
      <HomeFaqSection />
      <HomeContactSection />
    </main>
  );
}
