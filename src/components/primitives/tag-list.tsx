import { cn } from "@/lib/utils";

type TagListProps = {
  tags: string[];
  className?: string;
};

export function TagList({ tags, className }: TagListProps) {
  return (
    <div className={cn("flex flex-wrap gap-[6px]", className)}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="glass-pill text-caption px-[8px] py-[3px]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
