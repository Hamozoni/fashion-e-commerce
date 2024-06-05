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
    image: {
        domains: ['https://github.com','https://google.com'],
    },
};


export default nextConfig