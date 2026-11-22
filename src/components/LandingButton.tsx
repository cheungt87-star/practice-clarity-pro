"use client";

import { cn } from "@/lib/utils";

type LandingButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "on-coral" | "blue" | "white";
  size?: "md" | "lg" | "sm";
  className?: string;
  type?: "button" | "submit";
};

const sizeClasses = {
  sm: "h-8 px-4 text-[13px]",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

const variantClasses = {
  primary: "bg-ink text-cream hover:opacity-90 shadow-soft",
  secondary: "bg-cream text-ink ring-1 ring-inset ring-ink/20 hover:bg-secondary",
  "on-coral": "bg-transparent text-cream ring-1 ring-inset ring-cream/80 hover:bg-cream/10",
  /* Legacy aliases → primary/secondary language */
  blue: "bg-ink text-cream hover:opacity-90 shadow-soft",
  white: "bg-cream text-ink ring-1 ring-inset ring-ink/20 hover:bg-secondary",
};

export function LandingButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "lg",
  className,
  type = "button",
}: LandingButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-pill font-semibold transition-[color,background-color,transform,opacity] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream active:scale-[0.98]",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
