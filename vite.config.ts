// src/vite.config.ts
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      // ADD THIS ENTIRE 'server' SECTION
      server: {
        host: true, // Allows Vite to accept connections from the network (and the tunnel)
        hmr: {
          // This ensures that Hot Module Replacement (auto-reloading) works through the tunnel
          protocol: 'wss',
          host: 'ironforgeautomation.com' // Your public tunnel domain
        }
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});