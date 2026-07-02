import { PageShell } from "@/components/layout/page-shell";
import { defaultLocale, getDictionary } from "@/i18n";

const copy = getDictionary(defaultLocale).errors.loading;

export default function Loading() {
  return (
    <PageShell>
      <div
        className="flex min-h-[40dvh] flex-col items-center justify-center gap-[20px] py-[48px]"
        aria-busy="true"
        aria-live="polite"
      >
        <div className="size-[40px] animate-spin rounded-full border-[3px] border-white/[0.08] border-t-accent-light" />
        <p className="text-[14px] font-medium tracking-[-0.01em] text-fg-muted">
          {copy}
        </p>
      </div>
    </PageShell>
  );
}
