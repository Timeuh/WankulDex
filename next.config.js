/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wankul-api.vercel.app',
      },
    ],
  },
};

module.exports = nextConfig;
