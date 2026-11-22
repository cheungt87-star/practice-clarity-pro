"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !video) return;

    // iOS Chrome/Safari often ignore the JSX `muted` flag for autoplay policy.
    // Set the DOM property + legacy playsinline attrs, then call play() when visible.
    el.muted = true;
    el.defaultMuted = true;
    el.playsInline = true;
    el.setAttribute("muted", "");
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "true");

    const tryPlay = () => {
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Low Power Mode / data-saver can still block; poster stays visible.
        });
      }
    };

    tryPlay();
    el.addEventListener("loadeddata", tryPlay);
    el.addEventListener("canplay", tryPlay);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) tryPlay();
        else el.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(el);

    const onVis = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      io.disconnect();
      el.removeEventListener("loadeddata", tryPlay);
      el.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [video]);

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
          ref={videoRef}
          src={video}
          poster={image}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          aria-label={alt}
          className="h-full w-full object-contain"
          onClick={(event) => {
            const el = event.currentTarget;
            el.muted = true;
            void el.play();
          }}
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
