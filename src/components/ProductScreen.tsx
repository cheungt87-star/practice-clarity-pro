"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductScreenProps = {
  image: string;
  alt: string;
  video?: string;
  className?: string;
  priority?: boolean;
};

export function ProductScreen({
  image,
  alt,
  video,
  className,
  priority,
}: ProductScreenProps) {
  return (
    <div
      className={cn(
        "relative h-[320px] w-full overflow-hidden rounded-panel ring-1 ring-ink/10 sm:h-[440px] lg:h-[560px]",
        "shadow-[0_18px_44px_rgba(35,24,21,0.14)]",
        className,
      )}
    >
      {video ? (
        <video
          src={video}
          poster={image}
          autoPlay
          muted
          loop
          playsInline
          aria-label={alt}
          className="h-full w-full object-contain"
        />
      ) : (
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 720px"
          priority={priority}
        />
      )}
    </div>
  );
}
