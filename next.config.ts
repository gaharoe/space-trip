import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.43.16git1'],
  /* config options here */
  reactCompiler: true,
  // productionBrowserSourceMaps: false
};

export default nextConfig;
