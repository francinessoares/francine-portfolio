"use client";

import { ServiceCard } from "@/components/services/service-card";
import { ServicesCta } from "@/components/services/services-cta";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/primitives/section-header";
import { servicePackages } from "@/data/services";
import { useTranslations } from "@/i18n/context";

export function ServicesPageContent() {
  const t = useTranslations();
  const copy = t.services.hero;

  return (
    <PageShell>
      <div className="pb-[48px] pt-[32px] sm:pt-[48px]">
        <header className="mx-auto max-w-[640px] pb-[48px] text-center sm:pb-[64px]">
          <SectionHeader
            as="h1"
            eyebrow={copy.eyebrow}
            title={copy.title}
            subtitle={copy.subtitle}
            align="center"
            titleId="services-heading"
          />
        </header>

        <div className="grid gap-[20px] pb-[48px] sm:grid-cols-2 sm:gap-[24px] lg:grid-cols-3">
          {servicePackages.map((pkg) => (
            <ServiceCard
              key={pkg.id}
              serviceId={pkg.id}
              featured={pkg.featured}
            />
          ))}
        </div>

        <ServicesCta />
      </div>
    </PageShell>
  );
}
