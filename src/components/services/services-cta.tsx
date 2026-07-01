"use client";

import { MessageCircle } from "lucide-react";

import { GlassCard } from "@/components/primitives/glass-card";
import { HoverLift } from "@/components/primitives/hover-lift";
import {
  accentButtonClass,
} from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "@/i18n/context";
import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type ServicesCtaProps = {
  className?: string;
};

export function ServicesCta({ className }: ServicesCtaProps) {
  const t = useTranslations();
  const { locale } = useLocale();
  const copy = t.services.cta;

  return (
    <section className={cn("pb-[80px] sm:pb-[100px]", className)}>
      <GlassCard variant="experience" topLine="bright">
        <div className="absolute -top-[80px] left-1/2 h-[200px] w-[360px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(155,168,196,0.08)_0%,transparent_70%)] blur-[60px]" />

        <div className="relative px-[24px] py-[36px] text-center sm:px-[48px] sm:py-[48px]">
          <h2 className="text-display-compact text-balance">{copy.title}</h2>
          <p className="text-body-section mx-auto mt-[16px] max-w-[480px]">
            {copy.subtitle}
          </p>

          <div className="mt-[28px] flex justify-center">
            <HoverLift offset={1} enableTap>
              <Button
                nativeButton={false}
                size="lg"
                className={cn(accentButtonClass, "gap-[8px]")}
                render={
                  <a
                    href={getWhatsAppQuoteUrl(locale)}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <MessageCircle className="size-[16px]" strokeWidth={1.75} />
                {copy.button}
              </Button>
            </HoverLift>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
