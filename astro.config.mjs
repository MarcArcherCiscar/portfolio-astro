import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://marcarcherciscar.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  prefetch: { defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      // Emit <lastmod> with the build timestamp. Skip <priority>/<changefreq> —
      // Google has confirmed they ignore both.
      lastmod: new Date(),
      changefreq: undefined,
      priority: undefined,
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-US' },
      },
    }),
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
      assetsInlineLimit: 4096,
    },
  },
});
