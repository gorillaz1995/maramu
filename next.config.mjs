/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Skip type checking during builds for better performance
    ignoreBuildErrors: false,
  },
  experimental: {
    // Optimize bundle size by loading only used modules
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
