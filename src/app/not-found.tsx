import Link from "next/link";
import type { Metadata } from "next";

import { outlineButtonClass } from "@/components/primitives/button-styles";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { defaultLocale, getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/seo";

const copy = getDictionary(defaultLocale).errors.notFound;

export const metadata: Metadata = createPageMetadata({
  title: copy.title,
  description: copy.description,
  path: "/404",
  index: false,
});

export default function NotFound() {
  return (
    <PageShell>
      <div className="flex min-h-[50dvh] flex-col items-center justify-center py-[48px] text-center">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-accent-light uppercase">
          404
        </p>
        <h1 className="text-display-compact mt-[16px] max-w-[16ch]">
          {copy.title}
        </h1>
        <p className="text-body mt-[16px] max-w-[42ch] text-fg-body">
          {copy.description}
        </p>
        <div className="mt-[28px]">
          <Button
            nativeButton={false}
            size="lg"
            variant="outline"
            className={outlineButtonClass}
            render={<Link href="/" />}
          >
            {copy.backHome}
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
