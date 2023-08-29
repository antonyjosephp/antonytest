/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        instrumentationHook: true,
    },
    output: 'standalone',
};
module.exports = nextConfig;
