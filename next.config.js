/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.pexels.com', 
      'via.placeholder.com', 
      'source.unsplash.com' // Add this domain
    ],
  },
};

module.exports = nextConfig;