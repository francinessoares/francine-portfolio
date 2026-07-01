import { cn } from "@/lib/utils";

export const primaryButtonClass = cn(
  "transition-premium h-[44px] w-full rounded-[10px] border-0 px-[24px]",
  "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-[14px] font-medium tracking-[-0.01em] text-white",
  "shadow-[0_4px_20px_rgba(139,92,246,0.25)]",
  "hover:shadow-[0_6px_28px_rgba(139,92,246,0.35)] hover:brightness-110",
  "sm:min-w-[160px] sm:w-auto",
);

export const outlineButtonClass = cn(
  "transition-premium h-[44px] w-full rounded-[10px] border border-white/[0.1] px-[24px]",
  "bg-white/[0.03] text-[14px] font-medium tracking-[-0.01em] text-fg-tertiary",
  "hover:border-accent/30 hover:bg-accent-muted hover:text-fg-primary",
  "sm:min-w-[160px] sm:w-auto",
);

export const accentButtonClass = primaryButtonClass;
