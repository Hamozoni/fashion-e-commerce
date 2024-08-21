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
          {
            protocol: "https",
            hostname: "firebasestorage.googleapis.com",
            pathname: "/v0/b/e-commrerce.appspot.com/o/**"
          },
        ]
    },
};

// https://firebasestorage.googleapis.com/
export default nextConfig