const path = require("path");
const env = process.env.NODE_ENV;
const envPath = env === "production" ? "" : ".staging";
const res = require("dotenv").config({
  path: `./.env${envPath}`,
});

console.log("path---------->", res.parsed.NODE_ENV);

module.exports = {
  env: {
    ENV: res.parsed.NODE_ENV,
    URL: res.parsed.URL,
    NEXT_PUBLIC_PORT: res.parsed.NEXT_PUBLIC_PORT,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  distDir: "build",
  images: {
    domains: ['staging-backend.kodexolabs.com','backend.kodexolabs.com'],
    minimumCacheTTL: 120,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
};