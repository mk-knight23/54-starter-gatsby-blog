<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { Sun, Moon, Github, Instagram, Twitter } from 'lucide-vue-next'

const isDarkMode = ref(false)
const isScrolled = ref(false)

const initTheme = () => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDarkMode.value = saved === 'dark'
  } else {
    isDarkMode.value = !window.matchMedia('(prefers-color-scheme: light)').matches
  }
  applyTheme()
}

const applyTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  applyTheme()
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  initTheme()
  window.addEventListener('scroll', handleScroll)
})

useHead({
  title: 'Creative Visual Blog',
  meta: [
    { name: 'description', content: 'A visual-focused creative blog featuring photography, design, and inspiration.' },
    { property: 'og:title', content: 'Creative Visual Blog' },
    { property: 'og:type', content: 'website' },
    { property: 'og:description', content: 'A visual-focused creative blog featuring photography, design, and inspiration.' }
  ]
})
</script>

<template>
  <div class="creative-container font-body">
    <!-- Creative Navigation -->
    <nav class="creative-nav" :class="{ 'scrolled': isScrolled }">
      <div class="flex items-center gap-4">
        <router-link to="/" class="creative-logo">
          Creative<span class="text-creative-accent">.</span>
        </router-link>
      </div>

      <div class="hidden lg:flex items-center gap-8">
        <router-link to="/" class="creative-link">Home</router-link>
        <router-link to="/gallery" class="creative-link">Gallery</router-link>
        <router-link to="/about" class="creative-link">About</router-link>
      </div>

      <div class="flex items-center gap-3">
        <button
          @click="toggleTheme"
          class="creative-button !px-4 !py-2 !rounded-xl"
          :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <Sun v-if="isDarkMode" :size="18" />
          <Moon v-else :size="18" />
        </button>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="creative-button !px-4 !py-2 !rounded-xl"
          aria-label="GitHub"
        >
          <Github :size="18" />
        </a>
      </div>
    </nav>

    <!-- Content -->
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid md:grid-cols-4 gap-12">
          <!-- Brand -->
          <div class="md:col-span-2">
            <h3 class="creative-logo text-3xl mb-4">
              Creative<span class="text-creative-accent">.</span>
            </h3>
            <p class="creative-subtitle max-w-md">
              A visual-focused blog celebrating creativity through photography, design, and artistic expression.
            </p>
          </div>

          <!-- Explore -->
          <div>
            <h4 class="font-semibold text-lg mb-4">Explore</h4>
            <div class="flex flex-col gap-3">
              <router-link to="/" class="creative-link">Home</router-link>
              <router-link to="/gallery" class="creative-link">Gallery</router-link>
              <router-link to="/about" class="creative-link">About</router-link>
            </div>
          </div>

          <!-- Connect -->
          <div>
            <h4 class="font-semibold text-lg mb-4">Connect</h4>
            <div class="flex gap-4">
              <a href="#" class="creative-link" aria-label="Instagram">
                <Instagram :size="20" />
              </a>
              <a href="#" class="creative-link" aria-label="Twitter">
                <Twitter :size="20" />
              </a>
              <a href="#" class="creative-link" aria-label="GitHub">
                <Github :size="20" />
              </a>
            </div>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            © 2026 Creative Visual Blog. All rights reserved.
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Made with Vue 3 & Vite-SSG
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
