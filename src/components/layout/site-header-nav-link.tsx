import Link from "next/link";

import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  className?: string;
};

export function NavLink({ href, label, active, onClick, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "focus-ring relative px-[16px] py-[10px] text-[13px] font-medium tracking-[-0.01em] transition-premium",
        active ? "text-accent-light" : "text-fg-muted hover:text-fg-secondary",
        className,
      )}
    >
      {label}
      {active ? (
        <span className="absolute inset-x-[16px] bottom-[6px] h-[2px] rounded-full bg-accent-light shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
      ) : null}
    </Link>
  );
}
