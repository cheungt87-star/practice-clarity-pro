import type { MetadataRoute } from "next";
import { INDEXED_ROUTES } from "@/lib/seo/routes";
import { SITE_URL } from "@/lib/seo/constants";

function priorityFor(path: string): number {
  if (path === "/") return 1;
  if (path.startsWith("/features/") || path.startsWith("/compare/") || path.startsWith("/for/")) {
    return 0.8;
  }
  if (path === "/about" || path === "/pricing") return 0.7;
  return 0.5;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXED_ROUTES.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: priorityFor(path),
  }));
}
