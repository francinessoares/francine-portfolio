import { cn } from "@/lib/utils";

const dotStyles = {
  accent: "bg-accent shadow-[0_0_8px_rgba(139,92,246,0.45)]",
} as const;

type EyebrowDot = keyof typeof dotStyles;

type EyebrowProps = {
  children: React.ReactNode;
  dot?: EyebrowDot | "emerald" | "violet";
  className?: string;
};

export function Eyebrow({ children, dot, className }: EyebrowProps) {
  const resolvedDot = dot === "emerald" || dot === "violet" ? "accent" : dot;

  if (!resolvedDot) {
    return (
      <span className={cn("text-eyebrow", className)}>
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "text-eyebrow inline-flex items-center gap-[8px]",
        className,
      )}
    >
      <span className={cn("size-[5px] rounded-full", dotStyles.accent)} />
      {children}
    </span>
  );
}
