import type { Metadata } from "next";

import { FaqJsonLd } from "@/components/seo/json-ld";
import { HomeBenefitsSection } from "@/sections/home/benefits-section";
import { HomeBeyondSection } from "@/sections/home/beyond-section";
import { HomeContactSection } from "@/sections/home/contact-section";
import { HomeFaqSection } from "@/sections/home/faq-section";
import { HomePortfolioSection } from "@/sections/home/portfolio-section";
import { HomeProcessSection } from "@/sections/home/process-section";
import { HomeServicesSection } from "@/sections/home/services-section";
import { HomeAboutSection } from "@/sections/home/about-section";
import { defaultLocale, getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/seo";
import { Hero } from "@/sections/hero";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = createPageMetadata({
  title: "Francine Soares | Criação de sites em Florianópolis",
  description: dict.meta.description,
  keywords: dict.meta.keywords,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main id="main-content" className="relative bg-surface">
      <FaqJsonLd />
      <Hero />
      <HomeServicesSection />
      <HomeBenefitsSection />
      <HomeProcessSection />
      <HomePortfolioSection />
      <HomeAboutSection />
      <HomeBeyondSection />
      <HomeFaqSection />
      <HomeContactSection />
    </main>
  );
}
