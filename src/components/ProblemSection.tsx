"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PAIN_POINTS, PROBLEM } from "@/data/landing";
import { cn } from "@/lib/utils";

const STAGGER_MS = 0.09;
const DURATION = 0.28;

function PainCard({
  headline,
  body,
  index,
  delay = 0,
  reduceMotion,
  className,
}: {
  headline: string;
  body: string;
  index: number;
  delay?: number;
  reduceMotion: boolean | null;
  className?: string;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 10 }
      }
      whileInView={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: DURATION,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "flex h-full flex-col border-brand-gray-200 p-6 lg:p-8",
        className,
      )}
    >
      <span
        className="mb-4 font-hero text-[clamp(3rem,6vw,4.5rem)] font-bold leading-none tabular-nums text-brand-electric"
        aria-hidden
      >
        {number}
      </span>
      <h3 className="m-0 mb-2.5 font-hero text-xl font-bold uppercase leading-[1.08] tracking-tight text-black">
        {headline}
      </h3>
      <p className="m-0 text-base leading-relaxed text-brand-gray-700">
        {body}
      </p>
    </motion.article>
  );
}

export default function ProblemSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="problem"
      className="scroll-mt-nav relative overflow-hidden bg-brand-bg px-6 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-[1160px]">
        <motion.div
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 10 }
          }
          whileInView={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: DURATION }}
          className="mb-10 max-w-[640px] text-left sm:mb-12"
        >
          <h2 className="mb-4 font-hero text-[clamp(1.625rem,3.5vw,2.125rem)] font-bold uppercase leading-[1.08] tracking-tight text-brand-text">
            Sound familiar?
          </h2>
          <p className="m-0 text-base leading-relaxed text-brand-text sm:text-[17px]">
            {PROBLEM.intro}
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:auto-rows-fr">
            {PAIN_POINTS.map((point, index) => (
              <PainCard
                key={point.id}
                headline={point.headline}
                body={point.body}
                index={index}
                delay={STAGGER_MS * index}
                reduceMotion={reduceMotion}
                className={cn(
                  "border-b last:border-b-0",
                  "sm:border-b-0 sm:[&:nth-child(-n+2)]:border-b sm:odd:border-r",
                  "border-brand-gray-200",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
