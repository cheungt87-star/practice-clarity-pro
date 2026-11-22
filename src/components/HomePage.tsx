"use client";

import { DemoDialogProvider } from "@/components/demo-dialog-context";
import Header from "@/components/Header";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import FinalCta from "@/components/FinalCta";
import FaqBanner from "@/components/FaqBanner";
import Footer from "@/components/Footer";

type HomePageProps = {
  hero: React.ReactNode;
};

export default function HomePage({ hero }: HomePageProps) {
  return (
    <DemoDialogProvider>
      <div className="min-h-screen bg-[#f3eee6]">
        <Header />
        <main>
          {hero}
          <ProblemSection />
          <SolutionSection />
          <BenefitsSection />
          <FinalCta />
          <FaqBanner />
        </main>
        <Footer />
      </div>
    </DemoDialogProvider>
  );
}
