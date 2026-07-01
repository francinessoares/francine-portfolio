"use client";

import { Check } from "lucide-react";

import { GlassCard } from "@/components/primitives/glass-card";
import { HoverLift } from "@/components/primitives/hover-lift";
import type { ServiceId } from "@/data/services";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  serviceId: ServiceId;
  featured?: boolean;
};

export function ServiceCard({ serviceId, featured }: ServiceCardProps) {
  const t = useTranslations();
  const pkg = t.services.packages[serviceId];

  return (
    <HoverLift as="article" offset={2}>
      <GlassCard
        variant="expertise"
        className={cn(
          "relative h-full p-[24px] sm:p-[28px]",
          featured && "border-accent/20",
        )}
      >
        {featured ? (
          <span className="text-label absolute top-[16px] right-[16px] rounded-[6px] bg-accent-muted px-[8px] py-[4px] text-accent">
            {t.services.featured}
          </span>
        ) : null}

        <h3 className="text-card-title-lg pr-[80px]">{pkg.title}</h3>
        <p className="text-card-desc mt-[10px]">{pkg.description}</p>

        <ul className="mt-[20px] flex flex-col gap-[10px]">
          {pkg.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-[10px] text-[13px] leading-[20px] text-fg-body"
            >
              <Check
                className="mt-[2px] size-[14px] shrink-0 text-accent"
                strokeWidth={2}
              />
              {feature}
            </li>
          ))}
        </ul>

        <p className="mt-[24px] border-t border-white/[0.05] pt-[20px] text-[14px] font-medium tracking-[-0.01em] text-fg-secondary">
          {pkg.price}
        </p>
      </GlassCard>
    </HoverLift>
  );
}
