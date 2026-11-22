import { cn } from "@/lib/utils";

type ScreenFrameProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

/** Decorative product screenshot frame — matches the product-page mockup. */
export function ScreenFrame({ label, children, className }: ScreenFrameProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative min-w-0 overflow-hidden rounded-panel bg-[#fffcf8] py-11",
        "shadow-[0_0_0_1px_rgba(59,130,246,0.5),0_18px_44px_rgba(35,24,21,0.14)]",
        className,
      )}
    >
      <div aria-hidden>{children}</div>
    </div>
  );
}
