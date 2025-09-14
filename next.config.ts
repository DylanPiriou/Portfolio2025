import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Suppression du basePath qui peut causer des problèmes sur Netlify
  // basePath: process.env.NODE_ENV === 'production' ? '/portfolio2025' : '',
  images: {
    unoptimized: true,
  },
  // Ajout de trailingSlash pour une meilleure compatibilité avec l'hébergement statique
  trailingSlash: true,
};

export default nextConfig;
