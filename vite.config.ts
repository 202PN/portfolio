import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Served from the root of the custom domain, petenguyen.dev
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
