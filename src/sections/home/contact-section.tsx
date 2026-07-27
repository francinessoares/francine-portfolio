"use client";

import { ContactForm } from "@/components/contact/contact-form";
import { GlassCard } from "@/components/primitives/glass-card";
import { Section } from "@/components/primitives/section";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { useTranslations } from "@/i18n/context";

export function HomeContactSection() {
  const t = useTranslations();
  const copy = t.home.contact;

  return (
    <Section id="contato" className="pb-[120px]">
      <ScrollReveal>
        <GlassCard variant="experience" topLine="bright">
          <div className="relative px-[28px] py-[48px] sm:px-[56px] sm:py-[64px]">
            <div className="mx-auto max-w-[560px] text-center">
              <h2 className="text-display-section text-balance">{copy.title}</h2>
              <p className="text-subtitle mx-auto mt-[16px] max-w-[480px]">
                {copy.subtitle}
              </p>
            </div>

            <div className="mx-auto mt-[36px] max-w-[560px]">
              <ContactForm />
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>
    </Section>
  );
}
