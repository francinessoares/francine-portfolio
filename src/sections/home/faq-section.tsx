"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Section } from "@/components/primitives/section";
import { SectionHeader } from "@/components/primitives/section-header";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { faqItems } from "@/data/faq";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function HomeFaqSection() {
  const t = useTranslations();
  const copy = t.home.faq;
  const [openId, setOpenId] = useState<string | null>(faqItems[0] ?? null);

  return (
    <Section id="faq">
      <SectionHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        titleId="home-faq-heading"
      />

      <div className="mt-[40px] flex flex-col gap-[12px]">
        {faqItems.map((id, index) => {
          const item = copy.items[id];
          const isOpen = openId === id;

          return (
            <ScrollReveal key={id} delay={index * 0.04}>
              <div
                className={cn(
                  "overflow-hidden rounded-[14px] border border-white/[0.08] bg-white/[0.02] backdrop-blur-[12px] transition-premium",
                  isOpen && "border-accent/20 shadow-[0_16px_48px_-24px_rgba(139,92,246,0.2)]",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : id)}
                  className="focus-ring flex w-full items-center justify-between gap-[16px] px-[24px] py-[20px] text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium tracking-[-0.02em] text-fg-primary sm:text-[16px]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-[18px] shrink-0 text-fg-muted transition-transform duration-300",
                      isOpen && "rotate-180 text-accent-light",
                    )}
                    strokeWidth={1.75}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-body border-t border-white/[0.06] px-[24px] pt-[16px] pb-[20px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
