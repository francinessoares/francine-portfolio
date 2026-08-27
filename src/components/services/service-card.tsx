"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { GlassCard } from "@/components/primitives/glass-card";
import { HoverLift } from "@/components/primitives/hover-lift";
import { IconBox } from "@/components/primitives/icon-box";
import { servicePackages, type ServiceId } from "@/data/services";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  serviceId: ServiceId;
  featured?: boolean;
};

export function ServiceCard({ serviceId, featured }: ServiceCardProps) {
  const t = useTranslations();
  const pkg = t.services.packages[serviceId];
  const service = servicePackages.find((item) => item.id === serviceId);
  const Icon = service?.icon;
  const contactHref = `/contato?assunto=${encodeURIComponent(pkg.title)}`;

  return (
    <HoverLift as="article" offset={2}>
      <GlassCard
        variant="expertise"
        className={cn(
          "relative flex h-full flex-col p-[24px] sm:p-[28px]",
          featured && "border-accent/20",
        )}
      >
        {featured ? (
          <span className="text-label absolute top-[16px] right-[16px] rounded-[6px] bg-accent-muted px-[8px] py-[4px] text-accent">
            {t.services.featured}
          </span>
        ) : null}

        {Icon ? <IconBox icon={Icon} size="md" /> : null}

        <h3 className={cn("text-card-title-lg", Icon ? "mt-[16px]" : undefined, featured && "pr-[88px]")}>
          {pkg.title}
        </h3>
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

        <div className="mt-auto border-t border-white/[0.05] pt-[20px]">
          <p className="text-[14px] font-medium tracking-[-0.01em] text-fg-secondary">
            {pkg.price}
          </p>
          <Link
            href={contactHref}
            className="focus-ring mt-[12px] inline-flex items-center gap-[6px] text-[13px] font-medium text-accent-light transition-premium hover:text-fg-primary"
          >
            {t.services.cardCta}
            <ArrowRight className="size-[13px]" strokeWidth={1.75} />
          </Link>
        </div>
      </GlassCard>
    </HoverLift>
  );
}
