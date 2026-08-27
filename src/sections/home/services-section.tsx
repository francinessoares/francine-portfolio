"use client";

import { ServiceCard } from "@/components/services/service-card";
import { Section } from "@/components/primitives/section";
import { SectionHeader } from "@/components/primitives/section-header";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { servicePackages } from "@/data/services";
import { useTranslations } from "@/i18n/context";

export function HomeServicesSection() {
  const t = useTranslations();
  const copy = t.home.services;

  return (
    <Section id="servicos" bordered={false}>
      <SectionHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        titleId="home-services-heading"
      />

      <div className="mt-[48px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
        {servicePackages.map((service, index) => (
          <ScrollReveal key={service.id} delay={index * 0.05} className="h-full">
            <ServiceCard
              serviceId={service.id}
              featured={service.featured}
            />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
