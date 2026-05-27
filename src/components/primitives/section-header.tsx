import { Eyebrow } from "@/components/primitives/eyebrow";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  size?: "hero" | "section" | "compact";
  titleId?: string;
  titleGradient?: boolean;
  eyebrowDot?: "emerald" | "violet";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  size = "section",
  titleId,
  titleGradient = false,
  eyebrowDot,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isHero = size === "hero";
  const isCompact = size === "compact";

  return (
    <div className={cn(isCenter && "mx-auto max-w-[560px] text-center")}>
      {eyebrow ? (
        <Eyebrow dot={eyebrowDot}>
          {eyebrow}
        </Eyebrow>
      ) : null}

      <h2
        id={titleId}
        className={cn(
          isHero && "text-display-section-hero",
          isCompact && "text-display-compact",
          !isHero && !isCompact && "text-display-section",
        )}
      >
        {titleGradient ? (
          <span className="text-gradient-display">{title}</span>
        ) : (
          title
        )}
      </h2>

      {subtitle ? (
        <p
          className={cn(
            isHero
              ? cn(
                  "text-body-hero mx-auto mt-[24px] max-w-[560px]",
                  "sm:mt-[28px]",
                )
              : "text-body-section",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
