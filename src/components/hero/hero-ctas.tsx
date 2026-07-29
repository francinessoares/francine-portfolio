"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import Link from "next/link";

import { HoverLift } from "@/components/primitives/hover-lift";
import {
  outlineButtonClass,
  primaryButtonClass,
} from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import { useHeroMotionContext } from "@/hooks/use-hero-motion";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function HeroCtas() {
  const t = useTranslations();
  const { variants } = useHeroMotionContext();

  return (
    <motion.div
      variants={variants.item}
      className={cn(
        "mt-[28px] flex w-full flex-col gap-[12px]",
        "lg:mt-[36px] lg:max-w-none lg:flex-row lg:justify-start",
      )}
    >
      <HoverLift offset={1} className="w-full sm:w-auto" enableTap>
        <Button
          nativeButton={false}
          size="lg"
          className={cn(primaryButtonClass, "gap-[8px]")}
          render={<Link href="/contato" />}
        >
          {t.hero.requestQuote}
          <Send className="size-[15px]" strokeWidth={1.75} />
        </Button>
      </HoverLift>

      <HoverLift offset={1} className="w-full sm:w-auto" enableTap>
        <Button
          nativeButton={false}
          size="lg"
          variant="outline"
          className={cn(outlineButtonClass, "gap-[8px]")}
          render={<Link href="/projetos" />}
        >
          {t.hero.viewProjects}
          <ArrowRight
            className="size-[15px] transition-transform duration-300 group-hover/button:translate-x-[2px]"
            strokeWidth={1.75}
          />
        </Button>
      </HoverLift>
    </motion.div>
  );
}
