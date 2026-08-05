"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FinalCta from "@/components/FinalCta";
import MarketingPageLayout from "@/components/marketing/MarketingPageLayout";
import { LandingButton } from "@/components/LandingButton";
import { useDemoDialog } from "@/components/demo-dialog-context";
import type { SeoPageContent } from "@/data/seo-types";

type SeoContentPageProps = {
  page: SeoPageContent;
  /** Contact page shows an extra email/demo header CTA block */
  showContactActions?: boolean;
};

function HeroActions({ showContactActions }: { showContactActions: boolean }) {
  const { openDemo } = useDemoDialog();

  if (showContactActions) {
    return (
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <LandingButton onClick={openDemo} variant="primary">
          Book a demo
        </LandingButton>
        <LandingButton href="mailto:info@supergpapp.co.uk" variant="secondary">
          Email the team
        </LandingButton>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      <LandingButton onClick={openDemo} variant="primary">
        Book a demo
      </LandingButton>
      <LandingButton href="/pricing" variant="secondary">
        View pricing
      </LandingButton>
    </div>
  );
}

export default function SeoContentPage({ page, showContactActions = false }: SeoContentPageProps) {
  return (
    <MarketingPageLayout bare>
      <article>
        <header className="border-b border-brand-gray-200 px-6 pb-12 pt-10 sm:px-8">
          <div className="mx-auto max-w-[760px] text-center">
            {page.eyebrow ? (
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-brand-blue">
                {page.eyebrow}
              </p>
            ) : null}
            <h1 className="font-hero text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold uppercase leading-[1.08] tracking-tight text-black">
              {page.h1}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-brand-gray-700">
              {page.intro}
            </p>
            <HeroActions showContactActions={showContactActions} />
          </div>
        </header>

        <section className="px-6 py-14 sm:px-8">
          <div className="mx-auto grid max-w-[960px] gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-hero text-2xl font-bold uppercase leading-[1.08] tracking-tight text-black">
                {page.problem.title}
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-brand-gray-700">{page.problem.body}</p>
            </div>
            <div>
              <h2 className="font-hero text-2xl font-bold uppercase leading-[1.08] tracking-tight text-black">
                {page.solution.title}
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-brand-gray-700">{page.solution.body}</p>
            </div>
          </div>
        </section>

        {page.bullets.length > 0 ? (
          <section className="bg-section-sand px-6 py-14 sm:px-8">
            <div className="mx-auto max-w-[760px]">
              <h2 className="mb-8 text-center font-hero text-2xl font-bold uppercase leading-[1.08] tracking-tight text-black">
                What you get
              </h2>
              <ul className="space-y-3">
                {page.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-[16px] leading-relaxed text-brand-gray-700"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {page.images.length > 0 ? (
          <section className="px-6 py-14 sm:px-8">
            <div className="mx-auto max-w-[960px]">
              <h2 className="mb-8 text-center font-hero text-2xl font-bold uppercase leading-[1.08] tracking-tight text-black">
                See it in the product
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {page.images.map((image) => (
                  <figure
                    key={image.src}
                    className="overflow-hidden rounded-2xl border border-brand-gray-200 bg-white"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={960}
                      height={640}
                      className="h-auto w-full object-cover"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {page.compareTable ? (
          <section className="px-6 py-14 sm:px-8">
            <div className="mx-auto max-w-[960px] overflow-x-auto">
              <h2 className="mb-8 text-center font-hero text-2xl font-bold uppercase leading-[1.08] tracking-tight text-black">
                Side-by-side comparison
              </h2>
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                  <tr className="border-b border-brand-gray-200">
                    <th className="py-3 pr-4 font-display font-semibold text-black">Capability</th>
                    <th className="py-3 pr-4 font-display font-semibold text-brand-gray-700">
                      {page.compareTable.themLabel}
                    </th>
                    <th className="py-3 font-display font-semibold text-brand-blue">
                      {page.compareTable.usLabel}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {page.compareTable.rows.map((row) => (
                    <tr key={row.feature} className="border-b border-brand-gray-200 align-top">
                      <td className="py-3 pr-4 font-medium text-black">{row.feature}</td>
                      <td className="py-3 pr-4 text-brand-gray-700">{row.them}</td>
                      <td className="py-3 text-brand-gray-700">{row.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        {page.team && page.team.length > 0 ? (
          <section className="bg-section-sand px-6 py-14 sm:px-8">
            <div className="mx-auto max-w-[960px]">
              <h2 className="mb-3 text-center font-hero text-2xl font-bold uppercase leading-[1.08] tracking-tight text-black">
                Built by people who get it
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-center text-[16px] text-brand-gray-700">
                Clinical leadership and product craft — the team behind SuperGP.
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                {page.team.map((member) => (
                  <div key={member.name}>
                    <h3 className="font-hero text-xl font-bold uppercase leading-[1.08] tracking-tight text-black">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand-blue">{member.role}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-brand-gray-700">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {page.faqs.length > 0 ? (
          <section className="px-6 py-14 sm:px-8">
            <div className="mx-auto max-w-[760px]">
              <h2 className="mb-8 text-center font-hero text-2xl font-bold uppercase leading-[1.08] tracking-tight text-black">
                Questions, answered
              </h2>
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                {page.faqs.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`item-${index}`}
                    className="border-brand-gray-200"
                  >
                    <AccordionTrigger className="py-[22px] text-left font-display text-[17px] font-normal text-black hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-[15px] leading-relaxed text-brand-gray-700">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        ) : null}

        {page.relatedLinks && page.relatedLinks.length > 0 ? (
          <section className="border-t border-brand-gray-200 px-6 py-12 sm:px-8">
            <div className="mx-auto max-w-[760px]">
              <h2 className="mb-4 font-hero text-lg font-bold uppercase leading-[1.08] tracking-tight text-black">Related</h2>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {page.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-brand-blue underline-offset-2 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <FinalCta />
      </article>
    </MarketingPageLayout>
  );
}
