"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DemoDialogProvider } from "@/components/demo-dialog-context";

type MarketingPageLayoutProps = {
  title?: string;
  children: React.ReactNode;
  /** When true, skip default title block (page provides its own) */
  bare?: boolean;
};

export default function MarketingPageLayout({
  title,
  children,
  bare = false,
}: MarketingPageLayoutProps) {
  return (
    <DemoDialogProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main className={bare ? undefined : "mx-auto max-w-3xl px-4 py-12 sm:px-6"}>
          {!bare && title ? (
            <h1 className="font-hero text-3xl font-bold uppercase leading-[1.08] tracking-tight text-black">{title}</h1>
          ) : null}
          <div className={bare ? undefined : "mt-8"}>{children}</div>
        </main>
        <Footer />
      </div>
    </DemoDialogProvider>
  );
}
