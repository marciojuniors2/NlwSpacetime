/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'localhost', '192.168.10.3'],
  },
  distDir: 'public',
}

module.exports = nextConfig
