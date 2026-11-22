import { cn } from "@/lib/utils";

type ChipVariant = "amber" | "green" | "ai" | "grey";

type ChipProps = {
  children: React.ReactNode;
  variant?: ChipVariant;
  className?: string;
  showSparkle?: boolean;
};

const variantClasses: Record<ChipVariant, string> = {
  amber: "bg-chip-amber text-chip-amber-foreground",
  green: "bg-chip-green text-chip-green-foreground",
  ai: "bg-chip-ai text-chip-ai-foreground",
  grey: "bg-chip-grey text-chip-grey-foreground",
};

function SparkleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9z" />
    </svg>
  );
}

export function Chip({ children, variant = "amber", className, showSparkle }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-bold",
        variantClasses[variant],
        className,
      )}
    >
      {showSparkle || variant === "ai" ? <SparkleIcon /> : null}
      {children}
    </span>
  );
}
