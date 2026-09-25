import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://scottcjx.com',
  output: 'static',
  build: { format: 'directory' }
});
