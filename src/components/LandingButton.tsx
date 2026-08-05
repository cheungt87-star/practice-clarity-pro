"use client";

import { cn } from "@/lib/utils";

type LandingButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "blue" | "white";
  size?: "md" | "lg" | "sm";
  className?: string;
  type?: "button" | "submit";
};

const sizeClasses = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3.5 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantClasses = {
  primary: "border border-black bg-black text-white hover:opacity-90",
  secondary: "border border-black bg-white text-black hover:bg-brand-gray-100",
  blue: "border border-brand-blue bg-brand-blue text-white hover:opacity-90",
  white: "border border-white bg-white text-black hover:bg-brand-gray-100",
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
    "inline-flex items-center justify-center rounded-full font-semibold transition-opacity",
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
