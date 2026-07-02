"use client";

import Image from "next/image";
import { Check, MessageCircle } from "lucide-react";

import { DeviceMockup } from "@/components/primitives/device-mockup";
import { HoverLift } from "@/components/primitives/hover-lift";
import { primaryButtonClass } from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import type { DigitalProduct } from "@/data/digital-products";
import { useLocale, useTranslations } from "@/i18n/context";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: DigitalProduct;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const t = useTranslations();
  const { locale } = useLocale();
  const copy = t.home.solutions;
  const item = copy.items[product.id];

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[16px] border border-white/[0.08] bg-white/[0.02] shadow-[0_24px_64px_-24px_rgba(0,0,0,0.5)] backdrop-blur-[12px] transition-premium hover:border-accent/20 hover:shadow-[0_32px_80px_-24px_rgba(139,92,246,0.15)]",
        className,
      )}
    >
      <div className="relative bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(139,92,246,0.12),transparent_70%)] px-[24px] pt-[32px] pb-[16px] sm:px-[40px] sm:pt-[40px]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(139,92,246,0.04)_0%,transparent_50%)]" />
        {product.image ? (
          <div className="relative mx-auto max-w-[960px] overflow-hidden rounded-[12px] border border-white/[0.08] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.55)]">
            <Image
              src={product.image}
              alt={item.title}
              width={1536}
              height={1024}
              sizes="(max-width: 768px) 100vw, 960px"
              className="h-auto w-full object-cover"
            />
          </div>
        ) : (
          <DeviceMockup
            variant={product.mockup}
            device={product.device}
            className="relative mx-auto max-w-[640px]"
            size="large"
          />
        )}
      </div>

      <div className="border-t border-white/[0.06] px-[24px] py-[28px] sm:px-[32px] sm:py-[32px]">
        <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-fg-primary sm:text-[24px]">
          {item.title}
        </h3>
        <p className="text-body mt-[12px] max-w-[56ch]">{item.description}</p>

        <ul className="mt-[24px] grid gap-[10px] sm:grid-cols-2">
          {item.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-[10px] text-[14px] leading-[22px] text-fg-body"
            >
              <Check
                className="mt-[3px] size-[14px] shrink-0 text-accent-light"
                strokeWidth={2.25}
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-[28px]">
          <HoverLift offset={1} enableTap>
            <Button
              nativeButton={false}
              size="lg"
              className={cn(primaryButtonClass, "gap-[8px]")}
              render={
                <a
                  href={getWhatsAppProductUrl(locale, item.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle className="size-[15px]" strokeWidth={1.75} />
              {copy.requestQuote}
            </Button>
          </HoverLift>
        </div>
      </div>
    </article>
  );
}
