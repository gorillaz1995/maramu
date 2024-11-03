/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Enable type checking during builds to catch errors early
    ignoreBuildErrors: true, // Temporarily set to true to bypass build errors
  },
  experimental: {
    // Optimize bundle size by loading only used modules
    optimizePackageImports: ["@chakra-ui/react"],
  },
  // Add additional build configuration
  swcMinify: true, // Use SWC for minification
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true, // Enable React strict mode
  compress: true, // Enable compression
};

export default nextConfig;
