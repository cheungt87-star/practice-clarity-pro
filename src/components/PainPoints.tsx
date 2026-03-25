import { motion } from "framer-motion";
import { Users, ShieldAlert, CalendarClock, MessageSquare, Database } from "lucide-react";

const painPoints = [
  {
    icon: Users,
    header: "Workforce Instability",
    body: "Rotas managed via manual spreadsheets lead to \"single point of failure\" risks and reactive, high-cost locum spending.",
  },
  {
    icon: ShieldAlert,
    header: "Clinical Governance Gaps",
    body: "Compliance and mandatory training data are siloed, creating significant exposure during CQC inspections.",
  },
  {
    icon: CalendarClock,
    header: "Unrealized Appointment Capacity",
    body: "Without a unified view of staff availability, the practice cannot accurately forecast or maximize patient access targets.",
  },
  {
    icon: MessageSquare,
    header: "Administrative Friction",
    body: "Coordination of clinical and non-clinical teams across disparate WhatsApp threads and email chains drains 20%+ of management bandwidth.",
  },
  {
    icon: Database,
    header: "Information Silos",
    body: "Critical team data (HR, rotas, compliance) is disconnected, leading to duplication of effort and data entry errors.",
  },
];

const PainPoints = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-20 leading-tight"
        >
          Stop Managing Your Rota.
          <br />
          Start Leading Your Surgery.
        </motion.h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical center line */}
          <div
            className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5"
            style={{ backgroundColor: "hsl(172 66% 50% / 0.3)" }}
          />

          <div className="space-y-12 md:space-y-16">
            {painPoints.map((point, index) => {
              const isRight = index % 2 === 1;
              const Icon = point.icon;

              return (
                <div key={index} className="relative flex items-start md:items-center">
                  {/* Dot on the line */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full border-[3px] border-white"
                    style={{ backgroundColor: "hsl(172 66% 50%)" }}
                  />

                  {/* Content block */}
                  <motion.div
                    initial={{ opacity: 0, x: isRight ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isRight ? "md:ml-auto md:pl-0" : "md:mr-auto md:pr-0"
                    }`}
                  >
                    <div
                      className={`flex items-start gap-4 ${
                        isRight ? "md:flex-row" : "md:flex-row-reverse md:text-right"
                      }`}
                    >
                      <div
                        className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: "hsl(172 66% 50% / 0.12)" }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "hsl(172 66% 50%)" }} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-semibold text-gray-900 mb-1.5">
                          {point.header}
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                          {point.body}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
