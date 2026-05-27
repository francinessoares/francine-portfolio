import { CategoryCard } from "@/components/tech-stack/category-card";
import { PageBackground } from "@/components/primitives/page-background";
import { stackCategories } from "@/data/tech-stack";
import { ExperienceSection } from "@/sections/tech-stack/experience-section";
import { FeaturedExpertise } from "@/sections/tech-stack/featured-expertise";
import { TechStackHero } from "@/sections/tech-stack/tech-stack-hero";

export function TechStackSection() {
  return (
    <section
      id="stack"
      className="relative scroll-mt-[72px] overflow-x-hidden"
      aria-labelledby="stack-heading"
    >
      <PageBackground variant="stack" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-surface to-transparent" />

      <div className="page-safe-padding relative z-10 mx-auto w-full max-w-[1080px]">
        <TechStackHero />
        <div className="pb-[80px] sm:pb-[96px]">
          <div className="flex flex-col gap-[20px] sm:gap-[24px]">
            {stackCategories.map((category, index) => (
              <CategoryCard
                key={category.id}
                categoryId={category.id}
                index={index}
              />
            ))}
          </div>
        </div>
        <FeaturedExpertise />
        <ExperienceSection />
      </div>
    </section>
  );
}
