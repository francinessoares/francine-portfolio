import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { defaultLocale, getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/seo";
import { Hero } from "@/sections/hero";
import { HomeAboutSection } from "@/sections/home/about-section";
import { HomeClientsSection } from "@/sections/home/clients-section";
import { HomeContactSection } from "@/sections/home/contact-section";
import { HomeFaqSection } from "@/sections/home/faq-section";
import { HomeProcessSection } from "@/sections/home/process-section";
import { HomeServicesSection } from "@/sections/home/services-section";
import { HomeSolutionsSection } from "@/sections/home/solutions-section";
import { HomeTechPreviewSection } from "@/sections/home/tech-preview-section";

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
      <HomeClientsSection />
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
