import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "fiverrnew.cybersoft.edu.vn",
      },
      {
        protocol: "https",
        hostname: "fiverrnew.cybersoft.edu.vn",
      },
    ],
  },
};

export default nextConfig;
