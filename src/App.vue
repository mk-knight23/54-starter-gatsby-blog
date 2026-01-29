<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { Sun, Moon, Github } from 'lucide-vue-next'

const isDarkMode = ref(true)

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

onMounted(initTheme)

useHead({
  title: 'BRUTAL. | Raw Web Aesthetic',
  meta: [{ name: 'description', content: 'A brutalist web design blog built with Vue 3 and Vite SSG.' }]
})
</script>

<template>
  <div class="brutal-container font-sans">
    <!-- Brutalist Nav -->
    <nav class="brutal-nav">
       <div class="flex items-center gap-4">
          <div class="w-10 h-10 border-4 flex items-center justify-center font-black text-xl bg-brutal-accent text-white border-black dark:border-white">
            B
          </div>
          <router-link to="/" class="brutal-logo">BRUTAL<span class="text-brutal-accent">.</span></router-link>
       </div>

       <div class="hidden lg:flex items-center gap-8">
          <router-link to="/" class="brutal-link">INDEX</router-link>
          <a href="#" class="brutal-link">ARCHIVE</a>
          <a href="#" class="brutal-link">ABOUT</a>
       </div>

       <div class="flex items-center gap-4">
          <button @click="toggleTheme" class="brutal-button !px-4 !py-2" :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
             <Sun v-if="isDarkMode" :size="16" />
             <Moon v-else :size="16" />
          </button>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="brutal-button !px-4 !py-2" aria-label="GitHub">
             <Github :size="16" />
          </a>
       </div>
    </nav>

    <!-- Marquee Banner -->
    <div class="brutal-marquee">
       <div class="brutal-marquee-content inline-block font-mono text-sm font-bold uppercase tracking-widest">
          RAW AESTHETIC /// NO BORDER RADIUS /// HIGH CONTRAST /// MONOSPACE TYPOGRAPHY /// BOLD UI /// PURE HTML /// RAW AESTHETIC /// NO BORDER RADIUS /// HIGH CONTRAST /// MONOSPACE TYPOGRAPHY /// BOLD UI /// PURE HTML /// RAW AESTHETIC /// NO BORDER RADIUS /// HIGH CONTRAST /// MONOSPACE TYPOGRAPHY /// BOLD UI /// PURE HTML ///
       </div>
    </div>

    <!-- Content -->
    <main class="flex-1">
       <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
             <component :is="Component" />
          </transition>
       </router-view>
    </main>

    <!-- Footer -->
    <footer class="brutal-card !border-t-4 !rounded-none mt-12">
       <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div class="space-y-6">
             <h3 class="brutal-title text-2xl">BRUTAL<span class="text-brutal-accent">.</span>COLLECTIVE</h3>
             <p class="font-mono text-sm max-w-md leading-relaxed opacity-70">
                RAW. HONEST. UNFILTERED. A publication dedicated to the unpolished aesthetic of the early web.
             </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-12">
             <div class="space-y-4">
                <p class="brutal-heading">Content</p>
                <div class="flex flex-col gap-2">
                   <a href="#" class="brutal-link text-sm">Articles</a>
                   <a href="#" class="brutal-link text-sm">Essays</a>
                   <a href="#" class="brutal-link text-sm">Manifestos</a>
                </div>
             </div>

             <div class="space-y-4">
                <p class="brutal-heading">Social</p>
                <div class="flex flex-col gap-2">
                   <a href="#" class="brutal-link text-sm flex items-center gap-2">
                      Github <ExternalLink :size="12" />
                   </a>
                   <a href="#" class="brutal-link text-sm flex items-center gap-2">
                      Twitter <ExternalLink :size="12" />
                   </a>
                </div>
             </div>
          </div>
       </div>

       <div class="max-w-7xl mx-auto mt-12 pt-6 border-t-2 border-current flex justify-between items-center">
          <p class="font-mono text-xs font-bold uppercase tracking-widest">© 2026 BRUTAL. MEDIA</p>
          <p class="font-mono text-xs font-bold uppercase tracking-widest">NO COOKIES. NO TRACKING.</p>
       </div>
    </footer>
  </div>
</template>
