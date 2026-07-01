import { cn } from "@/lib/utils";
import type { MockupVariant } from "@/data/projects";

type DeviceMockupProps = {
  variant: MockupVariant;
  device?: "laptop" | "phone";
  size?: "default" | "large";
  className?: string;
};

const screenGradients: Record<MockupVariant, string> = {
  dashboard:
    "bg-[linear-gradient(145deg,#12141a_0%,#1a1d28_40%,#14161e_100%)]",
  analytics:
    "bg-[linear-gradient(145deg,#101218_0%,#1c1f2e_50%,#12141a_100%)]",
  portal:
    "bg-[linear-gradient(145deg,#0e1014_0%,#181b24_60%,#101218_100%)]",
  operations:
    "bg-[linear-gradient(145deg,#111318_0%,#1a1e28_45%,#13161c_100%)]",
  mobile:
    "bg-[linear-gradient(160deg,#12141a_0%,#1e2130_55%,#14161e_100%)]",
};

function MockupScreen({ variant }: { variant: MockupVariant }) {
  const isMobile = variant === "mobile";

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden",
        screenGradients[variant],
      )}
    >
      <div className="absolute inset-x-0 top-0 h-[28%] border-b border-white/[0.06] bg-white/[0.02] px-[12px] py-[8px]">
        <div className="flex items-center gap-[6px]">
          <span className="size-[6px] rounded-full bg-white/20" />
          <span className="size-[6px] rounded-full bg-white/12" />
          <span className="size-[6px] rounded-full bg-white/8" />
        </div>
        {!isMobile ? (
          <div className="mt-[10px] h-[6px] w-[40%] rounded-full bg-white/[0.08]" />
        ) : null}
      </div>

      <div className={cn("p-[12px]", isMobile ? "pt-[48px]" : "pt-[56px]")}>
        <div className="grid gap-[8px]">
          {!isMobile ? (
            <div className="grid grid-cols-3 gap-[8px]">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-[44px] rounded-[6px] border border-white/[0.05] bg-white/[0.03]"
                />
              ))}
            </div>
          ) : null}

          <div
            className={cn(
              "rounded-[8px] border border-white/[0.05] bg-white/[0.025]",
              isMobile ? "h-[120px]" : "h-[100px]",
            )}
          >
            <div className="h-full w-[55%] bg-[linear-gradient(90deg,rgba(139,92,246,0.18)_0%,transparent_100%)]" />
          </div>

          <div className="flex flex-col gap-[6px]">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[8px] rounded-full bg-white/[0.06]"
                style={{ width: `${88 - item * 12}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,0.25)_100%)]" />
    </div>
  );
}

export function DeviceMockup({
  variant,
  device = "laptop",
  size = "default",
  className,
}: DeviceMockupProps) {
  const isPhone = device === "phone";
  const isLarge = size === "large";

  if (isPhone) {
    return (
      <div
        className={cn(
          "relative mx-auto w-full",
          isLarge ? "max-w-[240px]" : "max-w-[200px]",
          className,
        )}
      >
        <div className="rounded-[24px] border border-white/[0.08] bg-[#0a0a0c] p-[8px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)]">
          <div className="relative aspect-[9/19] overflow-hidden rounded-[18px] border border-white/[0.05]">
            <MockupScreen variant={variant} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#0a0a0c] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.55)]",
          isLarge && "rounded-[14px] shadow-[0_40px_80px_-20px_rgba(139,92,246,0.12)]",
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden border-b border-white/[0.05]",
            isLarge ? "aspect-[16/9]" : "aspect-[16/10]",
          )}
        >
          <MockupScreen variant={variant} />
        </div>
      </div>
      <div className="mx-auto h-[10px] w-[42%] rounded-b-[6px] border border-t-0 border-white/[0.06] bg-[#0a0a0c]" />
      <div className="mx-auto mt-[2px] h-[3px] w-[18%] rounded-full bg-white/[0.08]" />
    </div>
  );
}
