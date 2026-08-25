import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// GitHub Pages serves from /somaiyasat/ subdirectory on singhvm-boop.github.io
const ghPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: ghPages ? '/somaiyasat/' : '/',
  plugins: [react()],
  server: {
    port: 5180,
    proxy: {
      '/api': {
        target: 'http://localhost:5175',
        changeOrigin: true,
      },
    },
  },
});
