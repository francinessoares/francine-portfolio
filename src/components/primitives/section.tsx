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
        "section-padding scroll-mt-[96px]",
        bordered && "border-t border-border-subtle",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[1080px]",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
