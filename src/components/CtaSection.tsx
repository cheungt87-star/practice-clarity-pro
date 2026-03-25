import { useState } from "react";
import { motion } from "framer-motion";
import BookDemoDialog from "./BookDemoDialog";

const floatingOrbs = [
  { size: 320, x: [0, 60, -30], y: [0, -40, 20], duration: 12, color: "hsl(172 66% 50% / 0.12)", left: "10%", top: "20%" },
  { size: 260, x: [0, -50, 40], y: [0, 30, -50], duration: 15, color: "hsl(260 45% 65% / 0.10)", left: "70%", top: "10%" },
  { size: 200, x: [0, 40, -20], y: [0, -60, 30], duration: 18, color: "hsl(200 50% 55% / 0.10)", left: "50%", top: "60%" },
  { size: 160, x: [0, -30, 50], y: [0, 40, -30], duration: 10, color: "hsl(172 50% 45% / 0.08)", left: "25%", top: "70%" },
];

const sparkleDots = Array.from({ length: 14 }, (_, i) => ({
  left: `${8 + (i * 7) % 85}%`,
  top: `${12 + ((i * 13 + 5) % 76)}%`,
  delay: i * 0.4,
  duration: 2.5 + (i % 3) * 0.8,
  size: 3 + (i % 3),
}));

const words = ["What", "Are", "You"];
const gradientWords = ["Waiting", "For?"];

const CtaSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden py-28 sm:py-36 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(135deg, hsla(259, 42%, 86%, 1) 0%, hsla(193, 37%, 85%, 1) 24%, hsla(0, 0%, 96%, 1) 100%)",
      }}
    >
      {/* Animated shifting radial glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse 60% 50% at 30% 40%, hsl(172 66% 50% / 0.08) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 50% at 70% 60%, hsl(260 45% 65% / 0.08) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 50% at 50% 30%, hsl(200 50% 55% / 0.08) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 50% at 30% 40%, hsl(172 66% 50% / 0.08) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--glow) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--glow) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[80px] pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            backgroundColor: orb.color,
            left: orb.left,
            top: orb.top,
          }}
          animate={{ x: orb.x, y: orb.y }}
          transition={{ duration: orb.duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      ))}

      {/* Sparkle dots */}
      {sparkleDots.map((dot, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: dot.size,
            height: dot.size,
            left: dot.left,
            top: dot.top,
            backgroundColor: "hsl(172 66% 50% / 0.4)",
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: dot.duration, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Decorative rotating rings */}
      <motion.div
        className="absolute -top-16 -left-16 w-64 h-64 rounded-full border pointer-events-none opacity-[0.06]"
        style={{ borderColor: "hsl(172 66% 50%)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border pointer-events-none opacity-[0.05]"
        style={{ borderColor: "hsl(260 45% 65%)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/4 -right-10 w-40 h-40 rounded-full border-2 border-dashed pointer-events-none opacity-[0.04]"
        style={{ borderColor: "hsl(200 50% 55%)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-10 whitespace-nowrap" style={{ color: "hsl(222 47% 11%)" }}>
          {words.map((word, i) => (
            <motion.span
              key={word}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
          {gradientWords.map((word, i) => (
            <motion.span
              key={word}
              className="inline-block text-gradient mr-[0.25em]"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: (words.length + i) * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Pulsing glow ring behind button */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{ backgroundColor: "hsl(172 66% 50% / 0.25)" }}
            animate={{ scale: [1, 1.5, 1.8], opacity: [0.4, 0.1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{ backgroundColor: "hsl(172 66% 50% / 0.2)" }}
            animate={{ scale: [1, 1.3, 1.6], opacity: [0.3, 0.08, 0] }}
            transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "easeOut" }}
          />

          <button
            onClick={() => setDemoOpen(true)}
            className="relative inline-flex items-center px-10 py-5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-lg hover:brightness-110 hover:scale-[1.04] hover:shadow-xl transition-all shadow-lg"
            style={{ boxShadow: "0 8px 30px hsl(172 66% 50% / 0.3)" }}
          >
            Book a Demo Now
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
};

export default CtaSection;
