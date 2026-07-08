/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Builds write to their own dir so `npm run build` never corrupts the
  // .next state of a running dev server (the cause of "bare" pages).
  distDir: process.env.NEXT_BUILD_DIR || ".next",
};

export default nextConfig;
