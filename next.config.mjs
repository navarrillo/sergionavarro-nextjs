/** @type {import('next').NextConfig} */
import generateRssFeed from "./src/lib/generateTss.mjs";

const nextConfig = {
  // ... other config options

  webpack: (config, { isServer }) => {
    if (isServer) {
      generateRssFeed();
    }
    return config;
  },
};

export default nextConfig;
