import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src',
  plugins: [react()],
  build: {
    outDir: '../src',
    emptyOutDir: true,
    cssMinify: false,
  },
});
