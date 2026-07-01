import { PageBackground } from "@/components/primitives/page-background";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return (
    <main
      id="main-content"
      className={cn("relative min-h-[100dvh] bg-surface pt-[88px] sm:pt-[96px]", className)}
    >
      <PageBackground variant="stack" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-surface to-transparent" />
      <div className="page-safe-padding relative z-10 mx-auto w-full max-w-[1080px]">
        {children}
      </div>
    </main>
  );
}
