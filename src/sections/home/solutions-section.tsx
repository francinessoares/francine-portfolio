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
    <Section id="solucoes">
      <SectionHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        titleId="home-solutions-heading"
      />

      <div className="mt-[48px] grid grid-cols-1 gap-[20px] sm:mt-[56px] sm:gap-[24px] lg:grid-cols-2">
        {digitalProducts.map((product, index) => (
          <ScrollReveal key={product.id} delay={index * 0.04} className="h-full">
            <ProductCard product={product} className="h-full" />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
