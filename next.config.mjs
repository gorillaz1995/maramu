/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Skip type checking during builds for better performance
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
