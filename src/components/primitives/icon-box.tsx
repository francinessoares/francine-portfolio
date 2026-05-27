import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type IconBoxProps = {
  icon: LucideIcon;
  size?: "sm" | "md";
  className?: string;
  iconClassName?: string;
};

const boxSizes = {
  sm: "size-[36px] rounded-[8px]",
  md: "size-[40px] rounded-[10px]",
} as const;

const iconSizes = {
  sm: "size-[16px]",
  md: "size-[18px]",
} as const;

export function IconBox({
  icon: Icon,
  size = "md",
  className,
  iconClassName,
}: IconBoxProps) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center",
        "border border-border-default bg-surface-glass text-fg-interactive",
        "transition-premium group-hover:border-border-strong group-hover:text-fg-interactive-hover",
        boxSizes[size],
        className,
      )}
    >
      <Icon className={cn(iconSizes[size], iconClassName)} strokeWidth={1.5} />
    </span>
  );
}
