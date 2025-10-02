/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // enables static export to 'out/'

  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,  // 🚀 disables optimization for static export
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
