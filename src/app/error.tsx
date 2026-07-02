"use client";

import Link from "next/link";
import { useEffect } from "react";

import { outlineButtonClass, primaryButtonClass } from "@/components/primitives/button-styles";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const copy = useTranslations().errors.server;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageShell>
      <div className="flex min-h-[50dvh] flex-col items-center justify-center py-[48px] text-center">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-accent-light uppercase">
          500
        </p>
        <h1 className="text-display-compact mt-[16px] max-w-[18ch]">
          {copy.title}
        </h1>
        <p className="text-body mt-[16px] max-w-[42ch] text-fg-body">
          {copy.description}
        </p>
        <div className="mt-[28px] flex flex-col gap-[12px] sm:flex-row">
          <Button
            type="button"
            size="lg"
            className={primaryButtonClass}
            onClick={reset}
          >
            {copy.retry}
          </Button>
          <Button
            nativeButton={false}
            size="lg"
            variant="outline"
            className={cn(outlineButtonClass, "sm:min-w-[180px]")}
            render={<Link href="/" />}
          >
            {copy.backHome}
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
