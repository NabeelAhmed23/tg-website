/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_UAT: "http://localhost:8000/api/",
    NEXT_PUBLIC_PROD: "http://13.52.123.47/api/",
    GOOGLE_CLIENT_ID:
      "110084946323-octp7rcqtaof21aou285mfi0ih5rku1e.apps.googleusercontent.com",
    GOOGLE_SECRET_ID: "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",
    FACEBOOK_CLIENT_ID: "458740382356896",
    FACEBOOK_SECRET_ID: "c9652d6b91bb8fdf1ca5e730684fd4d1",
  },
};

module.exports = nextConfig;
