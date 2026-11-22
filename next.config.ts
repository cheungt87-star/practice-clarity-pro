import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Stray ~/package-lock.json made Next treat $HOME as the workspace root,
  // which broke CSS asset paths in dev (layout.css 404 → unstyled page).
  outputFileTracingRoot: projectRoot,
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "supergpapp.co.uk" }],
        destination: "https://www.supergpapp.co.uk/:path*",
        permanent: true,
      },
      {
        source: "/PolicyGPT",
        destination: "/products/policy-gpt",
        permanent: false,
      },
      {
        source: "/policygpt",
        destination: "/products/policy-gpt",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
