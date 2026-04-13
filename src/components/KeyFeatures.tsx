import { motion, AnimatePresence } from "framer-motion";
import { Calendar, LayoutDashboard, CheckSquare, Building2, Users, FileText, Check, Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

const features = [
  {
    id: "rota",
    icon: Calendar,
    title: "Smart Rota Management",
    shortTitle: "Rotas",
    images: ["/features/rota-1.png", "/features/rota-2.png", "/features/rota-3.png"],
    lines: [
      "Plan rota across sites and weeks, assign staff with simple drag-and-drop",
      "Filter quickly by site and role. Add cross-site and temp staff fast",
      "Use AM, PM, full-day, or custom shifts. Copy days or full weeks in seconds",
      "Catch errors before publishing. Staff notified once new rota complete.",
    ],
  },
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "Live Practice Dashboard",
    shortTitle: "Dashboard",
    images: [
      "/features/dashboard-1.png",
      "/features/dashboard-2.png",
      "/features/dashboard-3.png",
      "/features/dashboard-4.png",
      "/features/dashboard-5.png",
    ],
    lines: [
      "Full clarity on your shifts, assigned room, and on-call managers.",
      "Plan ahead. See all completed rotas and print if needed.",
      "Stay updated with upcoming and due tasks.",
      "Visibility of daily patient capacity by site and session.",
    ],
  },
  {
    id: "tasks",
    icon: CheckSquare,
    title: "Tasks & Compliance, Handled",
    shortTitle: "Tasks",
    images: [
      "/features/tasks-2.png",
      "/features/tasks-1.png",
      "/features/tasks-3.png",
    ],
    lines: [
      "Create recurring tasks in seconds. Assign by person, job family, or all staff.",
      "Roll tasks out across one or many sites. Auto-email assignees when tasks are created.",
      "Filter and sort tasks fast to stay in control. Edit or retire tasks anytime.",
      "Track status, due dates, and completions in one audit trail.",
    ],
  },
  {
    id: "multisite",
    icon: Building2,
    title: "Multi-Site, No Complexity",
    shortTitle: "Multi-Site",
    images: ["/features/multisite-1.png", "/features/multisite-2.png"],
    lines: [
      "Manage all your sites in one place.",
      "Add new sites seamlessly as you grow.",
      "Easily amend opening hours and operating days.",
      "Add and assign clinical and non-clinical facilities and rooms.",
    ],
  },
  {
    id: "team",
    icon: Users,
    title: "Team & Access Control",
    shortTitle: "Team",
    images: [
      "/features/team-1.png",
      "/features/team-2.png",
      "/features/team-3.png",
    ],
    lines: [
      "Manage all your staff in one place. Add, edit and remove users with ease.",
      "Centrally manage user profiles, roles, and permissions in one place.",
      "Global directory to easily contact all your staff members.",
      "Organise staff by site, job families and job titles.",
    ],
  },
  {
    id: "policy",
    icon: FileText,
    title: "Policy GPT",
    shortTitle: "Policy GPT",
    images: ["/features/policy-gpt-mockup.png"],
    lines: [
      "AI trained on all your practices' SOPs and policy documents.",
      "Talk to the AI in natural language to quickly retrieve the latest SOP or policy.",
      "Security: data is ring-fenced and never shared with external LLM providers.",
      "The AI is trained and grounded only on your data — no hallucinations.",
    ],
    comingSoon: true,
  },
];

const featureListContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const featureListItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const KeyFeatures = () => {
  const [activeTab, setActiveTab] = useState(features[0].id);
  const [expanded, setExpanded] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const activeFeature = features.find((f) => f.id === activeTab)!;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCarouselIndex(0);
  };

  const images = activeFeature.images;
  const hasMultiple = images.length > 1;
  const listSpacingClass = activeFeature.lines.length > 4 ? "space-y-2" : "space-y-3";

  // Auto-advance carousel every 2 seconds
  useEffect(() => {
    if (!hasMultiple || expanded) return;
    const timer = setInterval(() => {
      setCarouselIndex((i) => (i + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [hasMultiple, expanded, images.length, activeTab]);

  return (
    <section
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(135deg, hsla(259, 42%, 86%, 1) 0%, hsla(193, 37%, 85%, 1) 24%, hsla(0, 0%, 96%, 1) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--glow) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--glow) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface text-xs text-muted-foreground font-medium">
            <span className="w-2 h-2 rounded-full bg-primary glow-dot" />
            THE PRODUCT
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-center text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto mb-12"
          style={{ color: "hsl(222 47% 11%)" }}
        >
          Everything you need to run your clincs, {" "}
          <span className="text-gradient">effortlessly in a single app</span>
        </motion.h2>

        {/* Tabbed Feature Showcase */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          {/* Tab bar */}
          <TabsList className="w-full h-auto bg-white/50 backdrop-blur-sm border border-white/60 rounded-xl p-1.5 flex flex-nowrap overflow-x-auto scrollbar-hide gap-1 mb-8 justify-start sm:justify-center">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg whitespace-nowrap text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md shrink-0"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{feature.shortTitle}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tab content */}
          <div className="relative min-h-[400px] sm:min-h-[350px]">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start">
              {/* Copy: above screenshot on mobile; left column on lg */}
              <div className="space-y-5 lg:max-w-[32rem]">
                <div className="flex items-center gap-3">
                  <h3
                    className="font-display text-2xl sm:text-3xl font-bold"
                    style={{ color: "hsl(222 47% 11%)" }}
                  >
                    {activeFeature.title}
                  </h3>
                  {activeFeature.comingSoon && (
                    <Badge
                      variant="secondary"
                      className="text-[10px] bg-primary/10 text-primary border-primary/20"
                    >
                      Coming Soon
                    </Badge>
                  )}
                </div>

                <motion.ul
                  key={activeTab}
                  className={listSpacingClass}
                  initial="hidden"
                  animate="visible"
                  variants={featureListContainerVariants}
                >
                  {activeFeature.lines.map((line, j) => (
                    <motion.li
                      key={j}
                      variants={featureListItemVariants}
                      className="flex items-start gap-3 font-body text-base leading-relaxed"
                      style={{ color: "hsl(215 20% 40%)" }}
                    >
                      <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "hsl(172 66% 45%)" }} />
                      {line}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Screenshot: below copy on mobile; sticky right column on lg */}
              <div className="relative group rounded-2xl shadow-xl overflow-hidden lg:sticky lg:top-24 lg:self-start lg:w-full">
                {/* Preload all images for this feature */}
                {images.map((src, i) => (
                  <link key={src} rel="preload" as="image" href={src} />
                ))}

                {/* Fixed aspect-ratio container for crossfade */}
                <div className="relative aspect-video cursor-pointer" onClick={() => { setLightboxIndex(carouselIndex); setExpanded(true); }}>
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={`${activeTab}-${carouselIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={images[carouselIndex]}
                      alt={`${activeFeature.title} - ${carouselIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>

                {/* Carousel arrows */}
                {hasMultiple && (
                  <>
                    <button
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-foreground/50 text-background opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm hover:bg-foreground/70"
                      onClick={() => setCarouselIndex((i) => (i - 1 + images.length) % images.length)}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-foreground/50 text-background opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm hover:bg-foreground/70"
                      onClick={() => setCarouselIndex((i) => (i + 1) % images.length)}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Dots */}
                {hasMultiple && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCarouselIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === carouselIndex ? "bg-white scale-125" : "bg-white/50"}`}
                      />
                    ))}
                  </div>
                )}

                {/* Expand CTA */}
                <button
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground/60 text-background text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                  onClick={() => { setLightboxIndex(carouselIndex); setExpanded(true); }}
                >
                  <Expand className="w-3.5 h-3.5" />
                  Expand
                </button>
              </div>
            </div>
          </div>
        </Tabs>
      </div>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6 cursor-pointer"
            onClick={() => setExpanded(false)}
          >
            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={images[lightboxIndex]}
              alt={activeFeature.title}
              className="max-w-[95vw] max-h-[90vh] rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Lightbox nav arrows */}
            {hasMultiple && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i - 1 + images.length) % images.length); }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i + 1) % images.length); }}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setExpanded(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default KeyFeatures;
