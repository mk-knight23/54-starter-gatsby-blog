import { Buffer } from 'buffer'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import './index.css'

// Polyfill Buffer for gray-matter in browser
declare global {
  interface Window {
    Buffer: typeof Buffer
  }
}

if (typeof window !== 'undefined') {
  window.Buffer = Buffer
}

export const createApp = ViteSSG(
  App,
  { routes },
  () => {
    // Pinia & metadata
  }
)
