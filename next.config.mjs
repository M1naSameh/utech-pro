/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    workerThreads: true
  },
  webpack: (config) => config,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
