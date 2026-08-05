"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FEATURES_SECTION, LANDING_FEATURES, type LandingFeature } from "@/data/landing";
import { cn } from "@/lib/utils";

const navButtonClass =
  "absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-[10px] bg-[rgba(13,18,48,0.4)] text-white backdrop-blur-sm transition-opacity hover:bg-[rgba(13,18,48,0.55)]";

const lightboxNavButtonClass =
  "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25";

type LightboxState = {
  slides: string[];
  index: number;
  alt: string;
};

function FeatureMedia({
  feature,
  onExpand,
}: {
  feature: LandingFeature;
  onExpand: (slides: string[], index: number, alt: string) => void;
}) {
  const slides = feature.images?.length ? feature.images : [feature.image];
  const [index, setIndex] = useState(0);
  const multi = slides.length > 1;

  const goPrev = () => setIndex((current) => (current - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((current) => (current + 1) % slides.length);

  return (
    <div className="media-frame" style={{ "--frame-gradient": feature.gradient } as CSSProperties}>
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-white shadow-[0_20px_40px_rgba(13,18,48,0.3)]">
        {slides.map((slide, i) => (
          <Image
            key={slide}
            src={slide}
            alt={feature.imageAlt}
            fill
            className={cn(
              "object-contain object-center transition-opacity duration-300",
              i === index ? "opacity-100" : "opacity-0",
            )}
            sizes="(max-width: 768px) 100vw, 520px"
            priority={i === 0 && feature.id === "rota"}
          />
        ))}
        {multi ? (
          <>
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={goPrev}
              className={cn(navButtonClass, "left-3")}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={goNext}
              className={cn(navButtonClass, "right-3")}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        ) : null}
        <button
          type="button"
          aria-label={`Expand ${feature.imageAlt}`}
          onClick={() => onExpand(slides, index, feature.imageAlt)}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-[10px] bg-[rgba(13,18,48,0.65)] text-white backdrop-blur-sm transition-opacity hover:opacity-90"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const reduceMotion = useReducedMotion();
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const multi = (lightbox?.slides.length ?? 0) > 1;
  const activeSrc = lightbox ? (lightbox.slides[lightbox.index] ?? lightbox.slides[0]) : null;

  const closeLightbox = () => setLightbox(null);

  const goPrev = () => {
    setLightbox((current) => {
      if (!current || current.slides.length < 2) return current;
      return {
        ...current,
        index: (current.index - 1 + current.slides.length) % current.slides.length,
      };
    });
  };

  const goNext = () => {
    setLightbox((current) => {
      if (!current || current.slides.length < 2) return current;
      return {
        ...current,
        index: (current.index + 1) % current.slides.length,
      };
    });
  };

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  return (
    <section id="features" className="scroll-mt-nav border-b border-brand-gray-200 px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-14 max-w-[680px] sm:mb-16">
          <div className="mb-2.5 text-xs font-bold uppercase tracking-[0.08em] text-brand-blue">
            {FEATURES_SECTION.eyebrow}
          </div>
          <h2 className="mb-3 font-hero text-[clamp(1.625rem,3.5vw,2.125rem)] font-bold uppercase leading-[1.08] tracking-tight text-black">
            {FEATURES_SECTION.headline}
          </h2>
          <p className="m-0 text-[17px] leading-relaxed text-brand-gray-700">
            {FEATURES_SECTION.subheadline}
          </p>
        </div>

        <div className="flex flex-col gap-16 sm:gap-[72px]">
          {LANDING_FEATURES.map((feature, index) => {
            const reversed = index % 2 === 1;
            return (
              <motion.div
                key={feature.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45 }}
                className={cn(
                  "flex flex-col items-center gap-4 lg:flex-row lg:gap-4",
                  reversed && "lg:flex-row-reverse",
                )}
              >
                <div className="w-full flex-1 basis-[360px]">
                  <h3 className="mb-3 font-hero text-2xl font-bold uppercase leading-[1.08] tracking-tight text-black">{feature.headline}</h3>
                  <p className="mb-6 text-base leading-relaxed text-brand-gray-700">{feature.body}</p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
                    {feature.ticks.map((tick) => (
                      <div key={tick} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue text-[11px] font-bold text-white">
                          ✓
                        </span>
                        <span className="text-sm text-brand-gray-700">{tick}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full flex-1 basis-[360px]">
                  <FeatureMedia
                    feature={feature}
                    onExpand={(slides, slideIndex, alt) =>
                      setLightbox({ slides, index: slideIndex, alt })
                    }
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {lightbox && activeSrc ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-[rgba(13,18,48,0.85)] p-8"
          onClick={closeLightbox}
        >
          <div
            className="relative h-[min(90vh,800px)] w-[min(90vw,1200px)]"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.slides.map((slide, i) => (
              <Image
                key={slide}
                src={slide}
                alt={lightbox.alt}
                fill
                className={cn(
                  "rounded-xl object-contain shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-opacity duration-300",
                  i === lightbox.index ? "opacity-100" : "opacity-0",
                )}
                sizes="90vw"
                priority={i === lightbox.index}
              />
            ))}
            {multi ? (
              <>
                <button
                  type="button"
                  aria-label="Previous screenshot"
                  onClick={goPrev}
                  className={cn(lightboxNavButtonClass, "left-3 sm:-left-14")}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next screenshot"
                  onClick={goNext}
                  className={cn(lightboxNavButtonClass, "right-3 sm:-right-14")}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-sm">
                  {lightbox.index + 1} / {lightbox.slides.length}
                </div>
              </>
            ) : null}
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={closeLightbox}
            className="absolute right-8 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
