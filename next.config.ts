import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.43.161', '192.168.100.9'],
  /* config options here */
  reactCompiler: true,
  // productionBrowserSourceMaps: false
};

export default nextConfig;
