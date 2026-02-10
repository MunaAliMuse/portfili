import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Production (GitHub Pages): base = magaca repo-ka. Dev: base = '/'
  base: process.env.NODE_ENV === 'production' ? '/portfilia/' : '/',
  css: { postcss: false },
  server: { port: 5173 },
});
