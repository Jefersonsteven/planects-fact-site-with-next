/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,  
  },
  images: {
    domains: ["images.ecestaticos.com"],
  }
}

module.exports = nextConfig
