import Link from "next/link";
import MarketingPageLayout from "./MarketingPageLayout";

type PlaceholderPageProps = {
  title: string;
};

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <MarketingPageLayout title={title}>
      <p className="font-body text-muted-foreground">This page is coming soon.</p>
      <p className="mt-4 font-body text-sm text-muted-foreground">
        In the meantime,{" "}
        <Link href="/" className="text-primary underline underline-offset-2 hover:text-primary/90">
          return to the homepage
        </Link>{" "}
        or{" "}
        <Link href="/#pricing" className="text-primary underline underline-offset-2 hover:text-primary/90">
          start a free trial
        </Link>
        .
      </p>
    </MarketingPageLayout>
  );
}
