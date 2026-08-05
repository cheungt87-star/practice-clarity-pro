import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import Providers from "./providers";
import { createRootMetadata } from "@/lib/seo/metadata";
import { homepageSchemas, jsonLdScript } from "@/lib/seo/schema";
import { LANDING_FAQS } from "@/data/landing";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-hero",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = createRootMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemas = homepageSchemas(
    LANDING_FAQS.map((item) => ({ question: item.question, answer: item.answer })),
  );

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(schemas) }} />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${barlowCondensed.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
