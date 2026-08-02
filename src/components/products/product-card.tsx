"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Send } from "lucide-react";

import { DeviceMockup } from "@/components/primitives/device-mockup";
import { HoverLift } from "@/components/primitives/hover-lift";
import { primaryButtonClass } from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import type { DigitalProduct } from "@/data/digital-products";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: DigitalProduct;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const t = useTranslations();
  const copy = t.home.solutions;
  const item = copy.items[product.id];
  const contactHref = `/contato?assunto=${encodeURIComponent(item.title)}`;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[16px] border border-white/[0.08] bg-white/[0.02]",
        "shadow-[0_24px_64px_-24px_rgba(0,0,0,0.5)] backdrop-blur-[12px] transition-premium",
        "hover:border-accent/20 hover:shadow-[0_32px_80px_-24px_rgba(161,56,245,0.15)]",
        className,
      )}
    >
      <div className="relative border-b border-white/[0.06] bg-surface px-[16px] pt-[20px] pb-[14px] sm:px-[20px] sm:pt-[24px]">
        {product.image ? (
          <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] border border-white/[0.08] shadow-[0_20px_48px_-24px_rgba(0,0,0,0.55)]">
            <Image
              src={product.image}
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        ) : (
          <DeviceMockup
            variant={product.mockup}
            device={product.device}
            className="relative mx-auto max-w-[420px]"
            size="large"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col px-[20px] py-[22px] sm:px-[24px] sm:py-[24px]">
        <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-fg-primary sm:text-[22px]">
          {item.title}
        </h3>
        <p className="mt-[10px] text-[14px] leading-[1.6] text-fg-secondary">
          {item.description}
        </p>

        <ul className="mt-[18px] grid gap-[8px]">
          {item.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-[8px] text-[13px] leading-[20px] text-fg-body"
            >
              <Check
                className="mt-[2px] size-[13px] shrink-0 text-accent-light"
                strokeWidth={2.25}
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-[22px]">
          <HoverLift offset={1} enableTap className="w-full">
            <Button
              nativeButton={false}
              size="lg"
              className={cn(primaryButtonClass, "w-full gap-[8px] sm:w-full")}
              render={<Link href={contactHref} />}
            >
              <Send className="size-[15px]" strokeWidth={1.75} />
              {copy.requestQuote}
            </Button>
          </HoverLift>
        </div>
      </div>
    </article>
  );
}
