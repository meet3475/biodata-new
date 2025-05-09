/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Disable image optimization (since it's a static export)
    },
    eslint: {
        ignoreDuringBuilds: true, // Ignore ESLint errors during the build process
    },
    trailingSlash: true, // Add trailing slash to URLs (important for static export)
};
 
export default nextConfig;