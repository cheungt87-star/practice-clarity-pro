"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDemoDialog } from "@/components/demo-dialog-context";
import { Wordmark } from "@/components/Wordmark";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type HeaderProps = {
  className?: string;
};

const FEATURE_LINKS = [
  { label: "Policy GPT", href: "/products/policy-gpt" },
  { label: "Rota Assistant", href: "/products/rota-assistant" },
] as const;

const Header = ({ className }: HeaderProps) => {
  const pathname = usePathname();
  const { openDemo } = useDemoDialog();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";

  const homeHref = "/";
  const benefitsHref = isHome ? "#benefits" : "/#benefits";
  const pricingHref = isHome ? "#pricing" : "/#pricing";

  const navLinkClass =
    "text-[17px] font-semibold text-ink transition-colors hover:text-coral-text";

  const dropdownItemClass =
    "min-h-11 cursor-pointer rounded-lg px-3 py-2.5 text-[15px] font-semibold text-ink focus:bg-cream focus:text-coral-text";

  return (
    <header
      className={cn("sticky top-0 z-50 bg-cream/92 backdrop-blur-md", className)}
    >
      <div className="mx-auto flex min-h-[88px] w-[calc(100%-48px)] max-w-[1360px] items-center justify-between gap-4 max-lg:min-h-[68px] max-lg:w-[calc(100%-24px)]">
        <Link href="/" className="flex shrink-0 items-center" aria-label="SuperGP — home">
          <Wordmark className="h-9 w-auto lg:h-11" />
        </Link>

        <nav className="ml-14 hidden items-center gap-10 md:flex" aria-label="Primary">
          <Link href={homeHref} className={navLinkClass}>
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                navLinkClass,
                "inline-flex min-h-11 items-center gap-1 rounded-pill px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
              )}
            >
              Features
              <ChevronDown className="h-4 w-4" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="min-w-[220px] rounded-panel border-hairline bg-cream p-1.5 text-ink shadow-soft"
            >
              {FEATURE_LINKS.map((item) => (
                <DropdownMenuItem key={item.href} asChild className={dropdownItemClass}>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <a href={benefitsHref} className={navLinkClass}>
            Benefits
          </a>
          <a href={pricingHref} className={navLinkClass}>
            Pricing
          </a>
          <Link href="/faq" className={navLinkClass}>
            FAQ
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-6">
          <a
            href="https://app.supergpapp.com/auth"
            className="hidden text-[17px] font-semibold text-ink underline hover:text-coral-text sm:inline"
          >
            Log in
          </a>
          <button
            type="button"
            onClick={openDemo}
            className="inline-flex items-center rounded-pill bg-ink px-5 py-2.5 text-[15px] font-semibold text-cream transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Start free trial
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink text-ink md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="mx-auto flex w-[calc(100%-24px)] max-w-[1360px] flex-col gap-1 border-t border-hairline bg-cream py-3 md:hidden">
          <Link
            href={homeHref}
            className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <div className="px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-muted">
            Features
          </div>
          {FEATURE_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 pl-6 text-sm font-semibold text-ink"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={benefitsHref}
            className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink"
            onClick={() => setMobileOpen(false)}
          >
            Benefits
          </a>
          <a
            href={pricingHref}
            className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </a>
          <Link
            href="/faq"
            className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink"
            onClick={() => setMobileOpen(false)}
          >
            FAQ
          </Link>
          <a
            href="https://app.supergpapp.com/auth"
            className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink"
            onClick={() => setMobileOpen(false)}
          >
            Log in
          </a>
          <a
            href="https://app.supergpapp.com/auth?mode=invite"
            className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink"
            onClick={() => setMobileOpen(false)}
          >
            Invitation code
          </a>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
