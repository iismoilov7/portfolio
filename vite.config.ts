import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/img/*',
          dest: 'assets/img'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
    },
  }
})
