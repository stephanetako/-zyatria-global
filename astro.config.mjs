import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Mode SERVER pour Cloudflare Pages avec fonctionnalités dynamiques
  output: 'server',
  adapter: cloudflare(),
  base: '/',

  site: 'https://zyatriaglobal.com',

  devToolbar: {
    enabled: false,
  },

  server: {
    port: 3000,
    host: true,
  },

  integrations: [
    react(),
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});