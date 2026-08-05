import type { Metadata } from "next";
import MarketingPageLayout from "@/components/marketing/MarketingPageLayout";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "SuperGP privacy policy — how we collect, use, and protect your personal data under UK GDPR.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <MarketingPageLayout title="Privacy Policy">
      <p className="mb-6 font-body text-sm text-muted-foreground">Last Updated: April 14, 2026</p>
      <PrivacyPolicyContent />
    </MarketingPageLayout>
  );
}
