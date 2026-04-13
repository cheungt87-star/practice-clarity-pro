import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import DashboardMockup from "./DashboardMockup";
import BookDemoDialog from "./BookDemoDialog";

const Hero = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{
        background: "linear-gradient(135deg, hsla(259, 42%, 86%, 1) 0%, hsla(193, 37%, 85%, 1) 24%, hsla(0, 0%, 96%, 1) 100%)",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--glow) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--glow) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 px-6 py-20 lg:py-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface text-xs text-muted-foreground font-medium">
            <span className="w-2 h-2 rounded-full bg-primary glow-dot" />
            For Clinics, Practices and PCN's
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-center text-glow leading-[1.05] tracking-tight max-w-4xl mx-auto text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ color: "hsl(222 47% 11%)" }}
        >
          Run your practice,{" "}
          <span className="text-gradient">
            without the chaos
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center max-w-2xl mx-auto mt-5 text-base sm:text-lg leading-relaxed font-body"
          style={{ color: "hsl(215 20% 45%)" }}
        >
          Ditch the spreadsheets and outdated programs for a modern day OS. Designed by GP's. Engineered by experts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="flex flex-col items-center mt-4"
        >
          <p className="font-display font-bold text-center text-xl sm:text-2xl" style={{ color: "hsl(222 47% 11%)" }}>
            Less admin. More patient care
          </p>
          <motion.svg
            viewBox="0 0 260 16"
            initial={{ opacity: 0.7, scaleX: 0.99 }}
            animate={{ opacity: [0.72, 1, 0.78], scaleX: [0.99, 1.01, 0.99], y: [0, -0.35, 0] }}
            transition={{ duration: 3.2, delay: 0.4, ease: "easeInOut", repeat: Infinity }}
            className="mt-2 h-5 w-60 sm:w-72 -rotate-1"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="patient-care-underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(172 70% 42%)" />
                <stop offset="50%" stopColor="hsl(180 50% 55%)" />
                <stop offset="100%" stopColor="hsl(260 45% 65%)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M4 11 C 64 8, 134 13, 256 8"
              fill="none"
              stroke="url(#patient-care-underline-gradient)"
              strokeWidth="5.6"
              strokeLinecap="round"
              initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], pathOffset: [0, 0, 0, 1], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3.1, delay: 0.42, times: [0, 0.36, 0.78, 1], ease: "easeInOut", repeat: Infinity }}
            />
            <motion.path
              d="M8 12.8 C 72 10.6, 142 14.4, 252 10"
              fill="none"
              stroke="url(#patient-care-underline-gradient)"
              strokeWidth="3.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 0.9, 0], pathOffset: [0, 0, 0.1, 1], opacity: [0, 0.75, 0.55, 0] }}
              transition={{ duration: 3.1, delay: 0.72, times: [0, 0.35, 0.76, 1], ease: "easeInOut", repeat: Infinity }}
            />
          </motion.svg>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <motion.button
            onClick={() => setDemoOpen(true)}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 18px 48px hsl(var(--glow) / 0.45)",
            }}
            whileTap={{ scale: 0.98, y: 0 }}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    y: [0, -3, 0],
                    boxShadow: [
                      "0 10px 30px hsl(var(--glow) / 0.24)",
                      "0 18px 46px hsl(var(--glow) / 0.42)",
                      "0 10px 30px hsl(var(--glow) / 0.24)",
                    ],
                    filter: ["brightness(1)", "brightness(1.08)", "brightness(1)"],
                  }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0.2 }
                : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
            }
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-10 py-5 font-display font-semibold text-lg text-primary-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{
              background:
                "linear-gradient(135deg, hsl(172 66% 44%) 0%, hsl(180 50% 52%) 52%, hsl(260 45% 62%) 100%)",
            }}
          >
            <span className="cta-shimmer" aria-hidden="true" />
            <span className="relative z-10 flex items-center">
              Book a demo now
              <motion.span
                className="ml-2"
                animate={prefersReducedMotion ? undefined : { x: [0, 6, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Dashboard / video */}
        <div className="mt-20 lg:mt-24">
          <DashboardMockup />
        </div>
      </div>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
};

export default Hero;
