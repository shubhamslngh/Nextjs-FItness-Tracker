/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3-alpha-sig.figma.com'],
    unoptimized: true,
  },
  reactStrictMode: true,
  output: 'export'
};

export default nextConfig;
