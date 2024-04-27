/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/api/products/new',
            headers: [
              {
                key: 'Content-Type',
                value: 'image/*',
              },
              {
                key: 'Accept',
                value: 'image/*',
              },
            ],
          },
        ]
      },
};

export default nextConfig;
