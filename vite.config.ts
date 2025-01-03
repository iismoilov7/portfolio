import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  preview: {
    port: 3000
  },
  server: {
    host: '0.0.0.0', // Allow access from any IP address
    port: 3000, // Your desired port
    hmr: {
      host: 'ismoil.site', // Replace with your domain
      protocol: 'wss', // Use 'ws' for HTTP or 'wss' for HTTPS
    },
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/img/*',
          dest: 'assets/img'
        },
        {
          src: 'src/assets/files/*',
          dest: 'assets/files'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' 
      }
    }
  }
})
