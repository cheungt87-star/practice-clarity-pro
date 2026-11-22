"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FOOTER_COPY } from "@/data/landing";
import { Wordmark } from "@/components/Wordmark";

const linkClass = "text-sm text-ink-muted transition-colors hover:text-coral-text";

const FooterLinks = ({ onNavigate }: { onNavigate?: () => void }) => (
  <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12">
    <div className="flex flex-col gap-3">
      <span className="mb-1 text-[13px] font-bold text-ink">Product</span>
      <a href="/#solution" className={linkClass} onClick={onNavigate}>
        Features
      </a>
      <Link href="/pricing" className={linkClass} onClick={onNavigate}>
        Pricing
      </Link>
    </div>
    <div className="flex flex-col gap-3">
      <span className="mb-1 text-[13px] font-bold text-ink">Company</span>
      <Link href="/about" className={linkClass} onClick={onNavigate}>
        About
      </Link>
      <Link href="/contact" className={linkClass} onClick={onNavigate}>
        Contact
      </Link>
    </div>
    <div className="flex flex-col gap-3">
      <span className="mb-1 text-[13px] font-bold text-ink">Resources</span>
      <Link href="/faq" className={linkClass} onClick={onNavigate}>
        FAQ
      </Link>
      <Link href="/privacy" className={linkClass} onClick={onNavigate}>
        Privacy Policy
      </Link>
    </div>
  </div>
);

const FooterBrand = ({ showLogo = true }: { showLogo?: boolean }) => (
  <div className="flex max-w-sm flex-col gap-5">
    {showLogo ? (
      <Link href="/" className="inline-flex items-center" aria-label="SuperGP — home">
        <Wordmark size="hero" />
      </Link>
    ) : null}
    <p className="text-sm text-ink-muted">{FOOTER_COPY.disclaimer}</p>
    <p className="text-sm text-ink-muted">
      © {new Date().getFullYear()} SuperGP. All rights reserved.
    </p>
  </div>
);

const Footer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <footer className="border-t border-hairline bg-cream px-6 py-8 md:px-8 md:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex items-center justify-between md:hidden">
          <Link href="/" className="inline-flex items-center" aria-label="SuperGP — home">
            <Wordmark size="hero" />
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-hairline p-2 text-ink"
            aria-expanded={mobileOpen}
            aria-controls="footer-mobile-menu"
            aria-label={mobileOpen ? "Close footer menu" : "Open footer menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div id="footer-mobile-menu" className="mt-6 flex flex-col gap-8 md:hidden">
            <FooterBrand showLogo={false} />
            <FooterLinks onNavigate={() => setMobileOpen(false)} />
          </div>
        ) : null}

        <div className="hidden flex-wrap justify-between gap-10 md:flex">
          <FooterBrand />
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
