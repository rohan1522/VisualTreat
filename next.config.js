/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.pexels.com', 
      'images.unsplash.com',
      'via.placeholder.com', 
      'source.unsplash.com' // Add this domain
    ],
  },
};

module.exports = nextConfig;