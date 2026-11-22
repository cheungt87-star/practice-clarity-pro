"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PROBLEM, PROBLEM_SPOTS, type ProblemSpot } from "@/data/landing";
import { Chip } from "@/components/Chip";
import { cn } from "@/lib/utils";

const DURATION = 0.3;

const TINT_BG: Record<ProblemSpot["tint"], string> = {
  butter: "bg-tint-butter",
  pink: "bg-tint-pink",
  lilac: "bg-tint-lilac",
  peach: "bg-tint-peach",
};

export default function ProblemSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="problem"
      className="scroll-mt-nav bg-cream py-[clamp(3.5rem,8vw,6rem)]"
    >
      <div className="mx-auto flex w-[calc(100%-48px)] max-w-[1360px] flex-col gap-14 max-lg:w-[calc(100%-24px)]">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: DURATION }}
          className="flex flex-col gap-5"
        >
          <Chip variant="amber" className="self-start px-4 py-2 text-sm font-semibold">
            {PROBLEM.eyebrow}
          </Chip>
          <h2 className="text-balance font-heading text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-none tracking-[-0.04em] text-ink">
            {PROBLEM.headline}
          </h2>
          <p className="-mt-2 text-balance font-heading text-[clamp(1.375rem,2.4vw,2rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-coral">
            {PROBLEM.headlineAccent}
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-6">
          {PROBLEM_SPOTS.map((spot, index) => (
            <motion.article
              key={spot.id}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: DURATION, delay: index * 0.06 }}
              className={cn(
                "flex min-w-0 flex-1 basis-[min(100%,340px)] flex-col gap-5 rounded-hero p-9",
                TINT_BG[spot.tint],
              )}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex self-start rounded-full bg-ink px-3 py-1.5 font-heading text-sm font-extrabold text-cream">
                  {spot.number}
                </span>
                <span className="font-heading text-sm font-extrabold tracking-[-0.01em] text-ink/70">
                  {spot.step}
                </span>
              </div>

              <p className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink">
                &ldquo;{spot.moment}&rdquo;
              </p>

              <div className="h-px bg-ink/15" aria-hidden />

              <h3 className="font-heading text-[1.625rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
                {spot.title}
              </h3>
              <p className="text-[17px] leading-normal text-[#3d322d]">{spot.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
