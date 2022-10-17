/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "bioxtend.com",
      "mirazarate.com.ar",
      "avatars.githubusercontent.com",
      "icons.iconarchive.com",
      "cdn.iconscout.com",
      "static-00.iconduck.com",
      "camo.githubusercontent.com",
      "ui-lib.com",
      "www.mementotech.in",
      "res.cloudinary.com",
      "www.jorgeagoiz.es",
      "www.svgrepo.com",
      "raw.githubusercontent.com",
      "cdn-icons-png.flaticon.com",
      "upload.wikimedia.org",
      "es.seaicons.com",
    ],
  },
};

module.exports = nextConfig;
