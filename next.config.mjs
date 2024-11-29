/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async rewrites() {
    return [
        {
            source: '/api/:path*', // URL frontend
            destination: 'https://192.168.15.217:7079/api/:path*', // URL backend
        },
    ];
  },
};

export default nextConfig;
