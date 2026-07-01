"use client";

import { MessageCircle } from "lucide-react";

import { GlassCard } from "@/components/primitives/glass-card";
import { HoverLift } from "@/components/primitives/hover-lift";
import { Section } from "@/components/primitives/section";
import {
  primaryButtonClass,
} from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { useLocale, useTranslations } from "@/i18n/context";
import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function HomeContactSection() {
  const t = useTranslations();
  const { locale } = useLocale();
  const copy = t.home.contact;

  return (
    <Section id="contato" className="pb-[120px]">
      <ScrollReveal>
        <GlassCard variant="experience" topLine="bright">
          <div className="relative px-[28px] py-[48px] text-center sm:px-[56px] sm:py-[64px]">
            <h2 className="text-display-section text-balance">{copy.title}</h2>
            <p className="text-subtitle mx-auto mt-[16px] max-w-[480px]">
              {copy.subtitle}
            </p>

            <div className="mt-[32px] flex justify-center">
              <HoverLift offset={1} enableTap>
                <Button
                  nativeButton={false}
                  size="lg"
                  className={cn(primaryButtonClass, "gap-[8px]")}
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
      </ScrollReveal>
    </Section>
  );
}
