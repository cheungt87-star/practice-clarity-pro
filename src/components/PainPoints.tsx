import { motion } from "framer-motion";
import { X, Check, ArrowRight, ArrowDown } from "lucide-react";

const transformations = [
  {
    pain: {
      title: "Your rota falls apart every week",
      description: "Spreadsheets break constantly and leave you scrambling to fill last-minute gaps.",
    },
    outcome: "Always know who's working, where, and when",
  },
  {
    pain: {
      title: "You're not audit-ready",
      description: "Compliance is scattered across systems, so inspections become a last-minute scramble.",
    },
    outcome: "Stay audit-ready with everything in one place",
  },
  {
    pain: {
      title: "You're leaving appointments on the table",
      description: "Without clear visibility, capacity goes unused and patients go unseen.",
    },
    outcome: "Maximise utilisation with a real-time clinic view",
  },
  {
    pain: {
      title: "Your team is drowning in admin",
      description: "Endless WhatsApps, emails, and updates slow everything down.",
    },
    outcome: "Cut admin time dramatically with one central system",
  },
  {
    pain: {
      title: "Everything lives in different places",
      description: "Staff, rota, and compliance data are split across tools—causing errors and duplication.",
    },
    outcome: "One source of truth for your entire clinic",
  },
];

const TransformationRow = ({ item, index }: { item: typeof transformations[number]; index: number }) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
      {/* Pain Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        whileHover={{ x: -2 }}
        className="flex-1 rounded-2xl border border-destructive/20 bg-destructive/5 p-5 sm:p-6 cursor-default transition-colors hover:border-destructive/40"
      >
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-destructive/10 shrink-0 mt-0.5">
            <X className="w-4 h-4 text-destructive" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">{item.pain.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mt-1">{item.pain.description}</p>
          </div>
        </div>
      </motion.div>

      {/* Arrow Connector */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: index * 0.08 + 0.15 }}
        whileHover={{ x: 4 }}
        className="flex items-center justify-center md:px-5 py-2 md:py-0"
      >
        <ArrowRight className="hidden md:block w-6 h-6 text-primary" />
        <ArrowDown className="md:hidden w-6 h-6 text-primary" />
      </motion.div>

      {/* Outcome Side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.08 + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        whileHover={{ scale: 1.02 }}
        className="flex-1 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6 cursor-default transition-shadow hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.2)]"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 shrink-0">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground">{item.outcome}</h3>
        </div>
      </motion.div>
    </div>
  );
};

const PainPoints = () => {
  return (
    <section className="bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Still running your clinic{" "}
            <span className="text-gradient">like this?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Here's what it's costing you—and how it should work instead.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {transformations.map((item, index) => (
            <TransformationRow key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
