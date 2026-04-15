/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    unoptimized: true,
  },
  swcMinify: false,
};

module.exports = nextConfig;
