import { Eyebrow } from "@/components/primitives/eyebrow";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  titleId?: string;
  titleGradient?: boolean;
  showDot?: boolean;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  titleId,
  titleGradient = false,
  showDot = true,
  as: TitleTag = "h2",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        isCenter && "mx-auto max-w-[600px] text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow dot={showDot ? "accent" : undefined}>{eyebrow}</Eyebrow>
      ) : null}

      <TitleTag
        id={titleId}
        className={cn("text-display-section mt-[16px]", !isCenter && "text-left")}
      >
        {titleGradient ? (
          <span className="text-gradient-display">{title}</span>
        ) : (
          title
        )}
      </TitleTag>

      {subtitle ? (
        <p
          className={cn(
            "text-subtitle mt-[16px]",
            isCenter && "mx-auto max-w-[560px]",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
