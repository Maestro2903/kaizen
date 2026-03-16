import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly set Turbopack root to this app directory
    root: path.join(__dirname),
  },
};

export default nextConfig;
