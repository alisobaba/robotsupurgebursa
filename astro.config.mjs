import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://robotsupurgetamiribursa.com',
  integrations: [tailwind(), sitemap({
    filter: (page) => {
      const path = new URL(page).pathname;
      return path !== '/admin' && path !== '/admin/' && path !== '/404' && path !== '/404/' && !path.startsWith('/admin/');
    },
  })],
  build: {
    assets: 'assets',
  },
});
