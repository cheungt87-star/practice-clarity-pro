import { motion } from "framer-motion";
import { Users, ShieldAlert, CalendarClock, MessageSquare, Database } from "lucide-react";

const painPoints = [
  {
    icon: Users,
    header: "Workforce Instability",
    body: "Spreadsheet rotas create single points of failure and reactive locum spending.",
    impact: "£50k+ annual locum overspend",
  },
  {
    icon: ShieldAlert,
    header: "Clinical Governance Gaps",
    body: "Siloed compliance data leaves you exposed during CQC inspections.",
    impact: "Critical audit risk",
  },
  {
    icon: CalendarClock,
    header: "Unrealized Capacity",
    body: "No unified view of availability means missed patient access targets.",
    impact: "15–20% appointment slots wasted",
  },
  {
    icon: MessageSquare,
    header: "Administrative Friction",
    body: "Coordination scattered across WhatsApp and email drains management time.",
    impact: "20%+ of bandwidth lost",
  },
  {
    icon: Database,
    header: "Information Silos",
    body: "Disconnected HR, rota, and compliance data causes duplication and errors.",
    impact: "Hours of repeated data entry weekly",
  },
];

const PainPoints = () => {
  return (
    <section className="bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Stop Managing Your Rota.
            <br />
            <span className="text-gradient">Start Leading Your Surgery.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Sound familiar? These are the challenges holding your practice back.
          </p>
        </motion.div>

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.slice(0, 3).map((point, index) => (
            <PainCard key={index} point={point} index={index} />
          ))}
        </div>

        {/* Bottom row — centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-[calc(66.666%+0.625rem)] mx-auto lg:max-w-none lg:w-2/3 lg:mx-auto">
          {painPoints.slice(3).map((point, index) => (
            <PainCard key={index + 3} point={point} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
