import Link from "next/link";

export default function FaqBanner() {
  return (
    <section
      aria-label="Frequently asked questions"
      className="border-y border-hairline bg-section-sand px-6 py-4 sm:px-8 sm:py-5"
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-between">
        <p className="font-heading text-lg font-bold tracking-[-0.03em] text-ink sm:text-xl">
          Got questions?
        </p>
        <Link
          href="/faq"
          className="inline-flex min-h-10 items-center rounded-pill bg-ink px-5 text-[15px] font-semibold text-cream transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          See FAQ
        </Link>
      </div>
    </section>
  );
}
