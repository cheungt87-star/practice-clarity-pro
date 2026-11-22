"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BENEFIT_ITEMS, BENEFITS } from "@/data/landing";

const DURATION = 0.3;

export default function BenefitsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="benefits" className="scroll-mt-nav border-t border-hairline bg-cream px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: DURATION }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">
            {BENEFITS.eyebrow}
          </p>
          <h2 className="text-balance font-heading text-[clamp(2rem,4vw,3.25rem)] font-bold leading-none tracking-[-0.04em] text-ink">
            {BENEFITS.headline}
          </h2>
          <p className="mt-5 text-xl font-semibold text-ink">{BENEFITS.subheadline}</p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {BENEFIT_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: DURATION, delay: index * 0.05 }}
              className="border-t-2 border-ink pt-5"
            >
              <p className="mb-3 text-[13px] text-[#8a7d75] line-through">{item.struck}</p>
              <h3 className="font-heading text-[1.875rem] font-bold leading-none tracking-[-0.04em] text-ink">
                {item.headline}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#4a3d38]">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
