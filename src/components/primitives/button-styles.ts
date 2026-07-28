import { cn } from "@/lib/utils";

export const primaryButtonClass = cn(
  "transition-premium h-[44px] w-full rounded-[10px] border-0 px-[24px]",
  "bg-gradient-to-br from-[#C084FC] to-[#7E22CE] text-[14px] font-medium tracking-[-0.01em] text-white",
  "shadow-[0_4px_20px_rgba(168,85,247,0.28)]",
  "hover:shadow-[0_6px_28px_rgba(168,85,247,0.38)] hover:brightness-110",
  "sm:min-w-[160px] sm:w-auto",
);

export const outlineButtonClass = cn(
  "transition-premium h-[44px] w-full rounded-[10px] border border-white/[0.1] px-[24px]",
  "bg-white/[0.03] text-[14px] font-medium tracking-[-0.01em] text-fg-tertiary",
  "hover:border-accent/30 hover:bg-accent-muted hover:text-fg-primary",
  "sm:min-w-[160px] sm:w-auto",
);

export const accentButtonClass = primaryButtonClass;
