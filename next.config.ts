import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/folio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
