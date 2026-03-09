import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://robotsupurgetamiribursa.com',
  integrations: [tailwind()],
  build: {
    assets: 'assets',
  },
});
