import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
