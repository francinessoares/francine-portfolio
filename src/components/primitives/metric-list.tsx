import { cn } from "@/lib/utils";

type MetricItem = {
  label: string;
  value: string;
};

type MetricListProps = {
  items: MetricItem[];
  className?: string;
};

export function MetricList({ items, className }: MetricListProps) {
  return (
    <div className={className}>
      {items.map((row, index) => (
        <div
          key={row.label}
          className={cn(
            "flex items-start justify-between gap-[12px] py-[9px]",
            index !== items.length - 1 && "border-divider",
          )}
        >
          <span className="text-label-ghost shrink-0 pt-[1px]">
            {row.label}
          </span>
          <span className="text-metric-value max-w-[190px]">
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}
