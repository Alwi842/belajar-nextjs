/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // untuk ngizinin gambar dari luar
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

/**file next.config dibuat otomatis di rest project untuk ngatur konfigurasi tambahan di project nextjs
 *
 */
