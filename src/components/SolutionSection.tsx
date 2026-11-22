"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PRODUCT_FEATURES, SOLUTION } from "@/data/landing";
import { Chip } from "@/components/Chip";
import { ProductScreen } from "@/components/ProductScreen";

const DURATION = 0.3;

function FeatureTick({ children }: { children: React.ReactNode }) {
  return (
    <li className="mt-3.5 flex gap-3 text-[17px] font-medium leading-snug text-ink">
      <span
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border-2 border-coral text-coral"
        aria-hidden
      >
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function SolutionSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="solution" className="scroll-mt-nav border-t border-hairline bg-cream px-6 pb-6 pt-20 sm:px-8 sm:pt-24">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: DURATION }}
          className="flex max-w-[920px] flex-col gap-5 text-left"
        >
          <Chip variant="amber" className="self-start px-4 py-2 text-sm font-semibold">
            {SOLUTION.eyebrow}
          </Chip>
          <h2 className="text-balance font-heading text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-none tracking-[-0.04em] text-ink">
            {SOLUTION.headline}
          </h2>
          <p className="-mt-2 text-balance font-heading text-[clamp(1.375rem,2.4vw,2rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-coral">
            {SOLUTION.subheadline}
          </p>
        </motion.div>

        <div className="mt-16">
          {PRODUCT_FEATURES.map((feature, index) => {
            const mediaLeft = index % 2 === 1;

            return (
              <div key={feature.id} className="border-t border-hairline py-16 sm:py-20">
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-12">
                  <motion.div
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: DURATION }}
                    className={`w-full lg:w-[38%] lg:shrink-0 ${mediaLeft ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <span className="inline-block rounded-full border border-ink px-3.5 py-1.5 text-[13px] font-semibold text-ink">
                      {feature.tag}
                    </span>
                    <h3 className="mt-5 font-heading text-[clamp(1.75rem,2.8vw,2.5rem)] font-bold leading-none tracking-[-0.04em] text-ink">
                      {feature.headline}
                    </h3>
                    <p className="mt-4 text-xl font-semibold text-ink">{feature.subheadline}</p>
                    <ul className="mt-2 list-none p-0">
                      {feature.ticks.map((tick) => (
                        <FeatureTick key={tick}>{tick}</FeatureTick>
                      ))}
                    </ul>
                    {feature.learnMoreHref ? (
                      <a
                        href={feature.learnMoreHref}
                        className="mt-6 inline-flex min-h-11 items-center rounded-pill border-[1.5px] border-ink bg-transparent px-[26px] py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                      >
                        {feature.learnMoreLabel ?? "Learn more"}
                      </a>
                    ) : null}
                  </motion.div>

                  <motion.div
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    className={`w-full lg:w-[62%] lg:shrink-0 ${mediaLeft ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <ProductScreen
                      image={feature.image}
                      alt={feature.imageAlt}
                      video={feature.video}
                      priority={index === 0}
                    />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
