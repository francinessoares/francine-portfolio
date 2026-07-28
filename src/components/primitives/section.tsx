import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  bordered?: boolean;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  bordered = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding scroll-mt-[96px] bg-surface",
        bordered && "border-t border-border-subtle",
        className,
      )}
    >
      <div
        className={cn(
          "layout-rail mx-auto w-full",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
