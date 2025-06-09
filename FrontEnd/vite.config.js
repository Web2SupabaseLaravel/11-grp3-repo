import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { componentTagger } from 'lovable-tagger';

export default defineConfig({
  root: __dirname,
  publicDir: 'static',
  base: './',
  plugins: [react(), componentTagger()],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    port: 5173,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});