import { cn } from "@/lib/utils";

const variantStyles = {
  default: cn(
    "glass-panel relative overflow-hidden rounded-[12px]",
    "shadow-[0_0_0_1px_rgba(255,255,255,0.03)]",
  ),
  category: cn(
    "glass-panel relative overflow-hidden rounded-[14px]",
    "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_48px_-24px_rgba(0,0,0,0.5)]",
  ),
  expertise: cn(
    "glass-panel group transition-premium relative overflow-hidden rounded-[10px]",
    "hover:border-border-strong",
  ),
  experience: cn(
    "glass-panel relative mx-auto max-w-[720px] overflow-hidden rounded-[14px]",
    "shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_32px_64px_-32px_rgba(0,0,0,0.55)]",
  ),
  profile: cn(
    "glass-panel group transition-premium relative overflow-hidden rounded-[13px]",
    "shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_24px_48px_-20px_rgba(0,0,0,0.6),0_0_64px_-24px_rgba(139,92,246,0.1)]",
    "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_28px_56px_-18px_rgba(0,0,0,0.65),0_0_72px_-20px_rgba(139,92,246,0.14)]",
  ),
} as const;

const topLineStyles = {
  subtle: "via-white/[0.06]",
  default: "via-white/[0.12]",
  bright: "via-white/[0.14]",
  profile: "via-white/20",
} as const;

type GlassCardVariant = keyof typeof variantStyles;
type GlassCardTopLine = keyof typeof topLineStyles;

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: GlassCardVariant;
  topLine?: GlassCardTopLine | false;
};

export function GlassCard({
  children,
  className,
  variant = "default",
  topLine = "default",
}: GlassCardProps) {
  const resolvedTopLine =
    topLine === false
      ? null
      : topLine === "default" && variant === "profile"
        ? topLineStyles.profile
        : topLine === "default" && variant === "experience"
          ? topLineStyles.bright
          : topLine === "default"
            ? topLineStyles.default
            : topLineStyles[topLine];

  return (
    <div className={cn(variantStyles[variant], className)}>
      {resolvedTopLine ? (
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent to-transparent",
            resolvedTopLine,
          )}
        />
      ) : null}
      {children}
    </div>
  );
}
