import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/solucoes/plics-sw/comprar-inscritos-instagram', destination: '/solucoes/plics-sw/impulsionar-instagram', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      { protocol: 'https', hostname: 'blog-do-eliezer.vercel.app' },
    ],
  },
};

export default nextConfig;
