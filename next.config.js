/** @type {import('next').NextConfig} */
const nextConfig = {devIndicators: {
    autoPrerender: false,
  },
  // Change the port
  dev: {
    port: 3001, // Use a different port, e.g., 3001
  },}

module.exports = nextConfig
