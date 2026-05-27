import { cn } from "@/lib/utils";

const dotStyles = {
  emerald: "bg-emerald-400/70 shadow-[0_0_8px_rgba(52,211,153,0.35)]",
  violet: "bg-violet-400/70 shadow-[0_0_8px_rgba(167,139,250,0.35)]",
} as const;

type EyebrowDot = keyof typeof dotStyles;

type EyebrowProps = {
  children: React.ReactNode;
  dot?: EyebrowDot;
  className?: string;
};

export function Eyebrow({ children, dot, className }: EyebrowProps) {
  if (!dot) {
    return (
      <span className={cn("text-label text-fg-faint", className)}>
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "glass-pill text-label inline-flex items-center gap-[8px] px-[12px] py-[6px] text-fg-muted",
        className,
      )}
    >
      <span className={cn("size-[5px] rounded-full", dotStyles[dot])} />
      {children}
    </span>
  );
}
