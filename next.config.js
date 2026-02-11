const withAnalyzer = require("@next/bundle-analyzer")({
  enabled:
    process.env.ANALYZE === "true" && process.env.NODE_ENV !== "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-mila-canduelas',
  assetPrefix: '/portfolio-mila-canduelas/',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.weserv.nl",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = withAnalyzer(nextConfig);
