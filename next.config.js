/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images:{
        domains:['res.cloudinary.com'],
        unoptimized: true,
    },
    output: 'export',
    distDir: 'dist',
};

module.exports = nextConfig;
