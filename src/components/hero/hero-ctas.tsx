"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

import { HoverLift } from "@/components/primitives/hover-lift";
import {
  outlineButtonClass,
  primaryButtonClass,
} from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import { useHeroMotionContext } from "@/hooks/use-hero-motion";
import { useLocale, useTranslations } from "@/i18n/context";
import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function HeroCtas() {
  const t = useTranslations();
  const { locale } = useLocale();
  const { variants } = useHeroMotionContext();

  return (
    <motion.div
      variants={variants.item}
      className={cn(
        "mt-[36px] flex w-full max-w-[400px] flex-col gap-[12px]",
        "sm:max-w-none sm:flex-row sm:justify-center sm:gap-[12px]",
      )}
    >
      <HoverLift offset={1} className="w-full sm:w-auto" enableTap>
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
          {t.hero.requestQuote}
          <MessageCircle className="size-[15px]" strokeWidth={1.75} />
        </Button>
      </HoverLift>

      <HoverLift offset={1} className="w-full sm:w-auto" enableTap>
        <Button
          nativeButton={false}
          size="lg"
          variant="outline"
          className={cn(outlineButtonClass, "gap-[8px]")}
          render={<Link href="/#solucoes" />}
        >
          {t.hero.viewSolutions}
          <ArrowRight
            className="size-[15px] transition-transform duration-300 group-hover/button:translate-x-[2px]"
            strokeWidth={1.75}
          />
        </Button>
      </HoverLift>
    </motion.div>
  );
}
