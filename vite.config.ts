import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Progressive Web App support
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Creative Visual Blog',
        short_name: 'Creative Blog',
        description: 'A visual-focused creative blog built with Vue 3 and Vite',
        theme_color: '#2D3436',
        background_color: '#FDF6E3',
        display: 'standalone',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router'],
          'markdown-vendor': ['markdown-it', 'gray-matter']
        }
      }
    }
  }
})
