"use client";

import { ProductCard } from "@/components/products/product-card";
import { Section } from "@/components/primitives/section";
import { SectionHeader } from "@/components/primitives/section-header";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { digitalProducts } from "@/data/digital-products";
import { useTranslations } from "@/i18n/context";

export function HomeSolutionsSection() {
  const t = useTranslations();
  const copy = t.home.solutions;

  return (
    <Section
      id="solucoes"
      containerClassName="max-w-[960px]"
      className="bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(139,92,246,0.06),transparent_60%)]"
    >
      <SectionHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        titleId="home-solutions-heading"
        titleGradient
      />

      <div className="mt-[56px] flex flex-col gap-[40px] sm:gap-[48px]">
        {digitalProducts.map((product, index) => (
          <ScrollReveal key={product.id} delay={index * 0.04}>
            <ProductCard product={product} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
