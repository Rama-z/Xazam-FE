/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        domains: ["res.cloudinary.com"],
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dwo9znbl6/**",
      },
    ],
  },
};
