import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/futuro_do_atendimento',
  assetPrefix: '/futuro_do_atendimento',
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
