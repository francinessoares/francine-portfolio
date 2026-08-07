import { cn } from "@/lib/utils";

type PageBackgroundProps = {
  variant: "hero" | "stack";
  className?: string;
};

export function PageBackground({ variant, className }: PageBackgroundProps) {
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-surface" />

      {isHero ? (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_78%_42%,rgba(168,85,247,0.16),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_-5%,rgba(168,85,247,0.08),transparent_55%)]" />
          <div className="absolute top-[22%] right-[-4%] h-[420px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.14)_0%,transparent_70%)] opacity-45 blur-[64px]" />
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-t from-surface to-transparent" />
        </>
      ) : null}
    </div>
  );
}
