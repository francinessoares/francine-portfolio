import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { defaultLocale, getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/seo";
import { Hero } from "@/sections/hero";

const HomeServicesSection = dynamic(
  () =>
    import("@/sections/home/services-section").then(
      (m) => m.HomeServicesSection,
    ),
);
const HomeBenefitsSection = dynamic(
  () =>
    import("@/sections/home/benefits-section").then(
      (m) => m.HomeBenefitsSection,
    ),
);
const HomeProcessSection = dynamic(
  () =>
    import("@/sections/home/process-section").then(
      (m) => m.HomeProcessSection,
    ),
);
const HomePortfolioSection = dynamic(
  () =>
    import("@/sections/home/portfolio-section").then(
      (m) => m.HomePortfolioSection,
    ),
);
const HomeAboutSection = dynamic(
  () =>
    import("@/sections/home/about-section").then((m) => m.HomeAboutSection),
);
const HomeBeyondSection = dynamic(
  () =>
    import("@/sections/home/beyond-section").then((m) => m.HomeBeyondSection),
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
  title: dict.meta.title,
  description: dict.meta.description,
  keywords: dict.meta.keywords,
  path: "/",
});

export default function Home() {
  return (
    <main id="main-content" className="relative bg-surface">
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
