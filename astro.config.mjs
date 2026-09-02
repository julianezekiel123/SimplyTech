// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Absolute URLs for canonical tags and social share cards are built from this.
  site: 'https://simplytech.me',
  vite: {
    plugins: [tailwindcss()],
  },
});
