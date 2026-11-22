import Image from "next/image";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
};

const sizeClasses = {
  sm: "h-7 w-auto",
  md: "h-8 w-auto sm:h-9",
  lg: "h-9 w-auto sm:h-10",
  hero: "h-12 w-auto sm:h-14",
} as const;

export function Wordmark({ className, size = "md" }: WordmarkProps) {
  return (
    <Image
      src="/landing/supergp-logo.png"
      alt="SuperGP"
      width={748}
      height={281}
      priority
      className={cn(sizeClasses[size], className)}
    />
  );
}
