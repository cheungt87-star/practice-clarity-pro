"use client";

import { DemoDialogProvider } from "@/components/demo-dialog-context";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <DemoDialogProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <div className="gradient-strip" aria-hidden />
          <ProblemSection />
          <div className="gradient-strip" aria-hidden />
          <FeaturesSection />
          <PricingSection />
          <FaqSection />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </DemoDialogProvider>
  );
}
