"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDemoDialog } from "@/components/demo-dialog-context";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const pathname = usePathname();
  const { openDemo } = useDemoDialog();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";

  const productHref = isHome ? "#features" : "/#features";
  const pricingHref = isHome ? "#pricing" : "/pricing";
  const faqHref = isHome ? "#faq" : "/#faq";

  const navLinkClass =
    "text-sm font-semibold text-brand-gray-700 transition-colors hover:text-brand-blue";

  return (
    <nav
      className={cn(
        "sticky top-4 z-50 mx-auto w-full max-w-[1100px] px-4 sm:px-6",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4 rounded-full border border-brand-gray-200 bg-white/90 px-5 py-3 shadow-[0_8px_24px_rgba(13,18,48,0.08)] backdrop-blur-md sm:px-7">
        <Link href="/" className="flex shrink-0 items-center" aria-label="SuperGP — home">
          <Image
            src="/landing/supergp-logo.png"
            alt="SuperGP"
            width={140}
            height={40}
            className="h-8 w-auto sm:h-10"
            priority
          />
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-6 lg:gap-7">
          <div className="hidden items-center gap-6 md:flex lg:gap-7">
            <a href={productHref} className={navLinkClass}>
              Product
            </a>
            <Link href={pricingHref} className={navLinkClass}>
              Pricing
            </Link>
            <a href={faqHref} className={navLinkClass}>
              FAQ
            </a>
            <a
              href="https://app.supergpapp.com/auth"
              className={navLinkClass}
            >
              Login
            </a>
          </div>
          <button
            type="button"
            onClick={openDemo}
            className="inline-flex items-center rounded-full bg-brand-electric px-3.5 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Start Free Trial
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-brand-gray-200 p-2 text-brand-gray-900 md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-brand-gray-200 bg-white p-3 shadow-lg md:hidden">
          <a
            href={productHref}
            className="rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            Product
          </a>
          <Link
            href={pricingHref}
            className="rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </Link>
          <a
            href={faqHref}
            className="rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            FAQ
          </a>
          <a
            href="https://app.supergpapp.com/auth"
            className="rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            Login
          </a>
          <a
            href="https://app.supergpapp.com/auth?mode=invite"
            className="rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            Invitation code
          </a>
        </div>
      ) : null}
    </nav>
  );
};

export default Header;
