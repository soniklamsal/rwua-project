import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rwua.com.np',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  // Fix workspace root warning
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
