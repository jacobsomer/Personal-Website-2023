/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'frdnoxefcxhbqneflzqj.supabase.co',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

module.exports = nextConfig;
