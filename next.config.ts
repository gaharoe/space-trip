import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.55", "192.168.1.2"],
  /* config options here */
  reactCompiler: true,
  // productionBrowserSourceMaps: false
};

export default nextConfig;
