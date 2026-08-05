"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FOOTER_COPY } from "@/data/landing";

const linkClass = "text-sm text-brand-gray-500 transition-colors hover:text-brand-blue";

const FooterLinks = ({ onNavigate }: { onNavigate?: () => void }) => (
  <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12">
    <div className="flex flex-col gap-3">
      <span className="mb-1 text-[13px] font-bold text-black">Product</span>
      <a href="/#features" className={linkClass} onClick={onNavigate}>
        Features
      </a>
      <Link href="/pricing" className={linkClass} onClick={onNavigate}>
        Pricing
      </Link>
    </div>
    <div className="flex flex-col gap-3">
      <span className="mb-1 text-[13px] font-bold text-black">Company</span>
      <Link href="/about" className={linkClass} onClick={onNavigate}>
        About
      </Link>
      <Link href="/contact" className={linkClass} onClick={onNavigate}>
        Contact
      </Link>
    </div>
    <div className="flex flex-col gap-3">
      <span className="mb-1 text-[13px] font-bold text-black">Resources</span>
      <a href="/#faq" className={linkClass} onClick={onNavigate}>
        FAQ
      </a>
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
        <Image
          src="/landing/supergp-logo.png"
          alt="SuperGP"
          width={112}
          height={28}
          className="h-7 w-auto"
        />
      </Link>
    ) : null}
    <p className="text-sm leading-relaxed text-brand-gray-500">{FOOTER_COPY.blurb}</p>
    <p className="text-sm text-brand-gray-500">
      © {new Date().getFullYear()} SuperGP. All rights reserved.
    </p>
  </div>
);

const Footer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <footer className="border-t border-brand-gray-200 px-6 py-8 md:px-8 md:py-16 lg:px-8">
      <div className="mx-auto max-w-[1160px]">
        {/* Mobile: logo + hamburger only */}
        <div className="flex items-center justify-between md:hidden">
          <Link href="/" className="inline-flex items-center" aria-label="SuperGP — home">
            <Image
              src="/landing/supergp-logo.png"
              alt="SuperGP"
              width={112}
              height={28}
              className="h-7 w-auto"
            />
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-brand-gray-200 p-2 text-brand-gray-900"
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

        {/* Desktop: full footer */}
        <div className="hidden flex-wrap justify-between gap-10 md:flex">
          <FooterBrand />
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
