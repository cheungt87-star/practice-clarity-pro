"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HERO } from "@/data/landing";
import { useDemoDialog } from "@/components/demo-dialog-context";
import { LandingButton } from "@/components/LandingButton";

export default function Hero() {
  const { openDemo } = useDemoDialog();
  const reduceMotion = useReducedMotion();

  return (
    <header id="top" className="scroll-mt-nav border-b border-brand-gray-200 bg-section-hero px-6 pb-16 pt-12 text-center sm:px-8 sm:pb-20 sm:pt-16">
      <div className="mx-auto max-w-[760px]">
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-hero text-[clamp(2.25rem,6vw,3.75rem)] font-bold uppercase leading-[1.08] tracking-tight text-black"
        >
          {HERO.headline}
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-5 text-lg leading-relaxed text-brand-gray-700 sm:text-[19px]"
        >
          {HERO.subheadline}
        </motion.p>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mt-8 flex flex-nowrap items-center justify-center gap-2.5 sm:gap-3.5"
        >
          <LandingButton
            onClick={openDemo}
            size="md"
            className="whitespace-nowrap px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base"
          >
            {HERO.primaryCta}
          </LandingButton>
          <LandingButton
            href="#pricing"
            variant="secondary"
            size="md"
            className="whitespace-nowrap border-[#5B4FFF] px-5 py-2.5 text-sm text-[#5B4FFF] hover:bg-[#5B4FFF]/10 sm:px-6 sm:py-3 sm:text-base"
          >
            {HERO.secondaryCta}
          </LandingButton>
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="media-frame media-frame--hero mx-auto mt-12 max-w-[1160px] sm:mt-14"
        style={
          {
            "--frame-gradient":
              "radial-gradient(circle at 30% 20%, #2b5cf5 0%, #6a3ff2 45%, #f0399e 100%)",
          } as CSSProperties
        }
      >
        <div className="overflow-hidden rounded-2xl bg-navy shadow-[0_30px_60px_rgba(13,18,48,0.35)]">
          <div className="relative aspect-video w-full">
            {reduceMotion ? (
              <Image
                src={HERO.screenshot}
                alt={HERO.screenshotAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1160px) 100vw, 1160px"
                priority
              />
            ) : (
              <video
                className="block h-full w-full object-cover object-top"
                src={HERO.video}
                poster={HERO.screenshot}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="SuperGP product demo slideshow"
              />
            )}
          </div>
        </div>
      </motion.div>
    </header>
  );
}
