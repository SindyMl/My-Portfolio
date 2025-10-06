import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base URL for GitHub Pages deployment
  base: '/My-Portfolio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Ensure proper asset handling
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Ensure consistent file naming
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
});
