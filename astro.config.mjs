import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, logHandlers, memoryCache } from 'astro/config';

import icon from 'astro-icon';

const sitePrefix = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: sitePrefix,
  logger: logHandlers.json({ pretty: true }),
  devToolbar: {
    enabled: !isProduction,
    placement: 'bottom-left',
  },
  cache: {
    provider: memoryCache(),
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap(), icon()],
});
