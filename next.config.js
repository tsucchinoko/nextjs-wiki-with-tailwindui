/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "images.microcms-assets.io",
    ],
  },
};

module.exports = nextConfig;
