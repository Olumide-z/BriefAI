/** @type {import('next').NextConfig} */
const env = {
  API_KEY: process.env.API_KEY,
};

const nextConfig = {
  env,
  reactStrictMode: true,
}

module.exports = nextConfig
