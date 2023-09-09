/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wankul-api.vercel.app',
      },
    ],
    domains: ['wankul-api.vercel.app'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
