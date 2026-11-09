import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/customers",
        destination: "/",
        permanent: false,
      },
      {
        source: "/case-studies",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
