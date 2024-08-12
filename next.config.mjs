/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/api/products/new',
            headers: [
              {
                key: 'Content-Type',
                value: 'multipart/form-data',
              },
              {
                key: 'Accept',
                value: 'multipart/form-data',
              },
            ],
          },
          {
            source: '/api/product',
            headers: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
              {
                key: 'Accept',
                value: 'application/json',
              },
            ],
          },
        ]
      },
      async rewrites() {
        return [
          {
            source : '/api/auth/:path*',
            destination: `http://localhost:3000/api/auth/:path*`
          }
        ]
        
      },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
            pathname: "/u/**"
          },
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            pathname: "/a/**"
          },
        ]
    },
};


export default nextConfig