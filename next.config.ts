import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Existing components are formatted as long lines. Prettier is still available
  // via `npm run lint`; production builds should not rewrite that source.
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Keep visited pages ready so the next open does not wait on the server again.
  experimental: {
    staleTimes: {
      dynamic: 60,
      static: 300,
    },
  },
};

export default nextConfig;
