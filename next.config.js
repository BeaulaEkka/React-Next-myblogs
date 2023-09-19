/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "www.pexels.com",
      "images.unsplash.com",
      "www.unsplash.com",
    ],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "images.pexels.com",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
