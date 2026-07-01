import { Hero } from "@/sections/hero";
import { HomeAboutSection } from "@/sections/home/about-section";
import { HomeClientsSection } from "@/sections/home/clients-section";
import { HomeContactSection } from "@/sections/home/contact-section";
import { HomeFaqSection } from "@/sections/home/faq-section";
import { HomeProcessSection } from "@/sections/home/process-section";
import { HomeServicesSection } from "@/sections/home/services-section";
import { HomeSolutionsSection } from "@/sections/home/solutions-section";
import { HomeTechPreviewSection } from "@/sections/home/tech-preview-section";

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
