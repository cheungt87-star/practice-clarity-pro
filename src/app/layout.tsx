import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Nunito } from "next/font/google";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import Providers from "./providers";
import { createRootMetadata } from "@/lib/seo/metadata";
import { homepageSchemas, jsonLdScript } from "@/lib/seo/schema";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-wordmark",
  display: "swap",
});

export const metadata: Metadata = createRootMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemas = homepageSchemas();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png?v=4" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=4" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(schemas) }} />
      </head>
      <body className={`${bricolage.variable} ${inter.variable} ${nunito.variable} antialiased`}>
        <Providers>{children}</Providers>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
