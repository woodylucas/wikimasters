import type { NextConfig } from "next";
import { dirname } from "node:path";
// tells turbopack where the absolute path of where we are at the moment
const nextConfig: NextConfig = {
  turbopack: {
    root: dirname(__filename),
  },
};

export default nextConfig;
