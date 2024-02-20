/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  // output: 'export',
  // distDir: 'build',
  // basePath: '/',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
