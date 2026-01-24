<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

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
  title: 'Architectural | Modern SSG Blog',
  meta: [{ name: 'description', content: 'A high-performance architectural blog built with Vue 3 and Vite SSG.' }]
})
</script>

<template>
  <div class="min-h-screen flex flex-col transition-colors duration-500 font-sans">
    <!-- Architectural Nav -->
    <nav class="h-24 border-b border-arch-border dark:border-white/5 px-10 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-arch-dark/80 backdrop-blur-md z-50">
       <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
             <div class="w-8 h-8 bg-arch-primary dark:bg-white flex items-center justify-center text-white dark:text-black font-black rotate-45">A</div>
             <span class="font-display font-black text-2xl tracking-tighter uppercase dark:text-white">Architectural<span class="text-arch-accent italic">.</span></span>
          </div>
       </div>

       <div class="hidden lg:flex items-center space-x-12">
          <router-link to="/" class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-arch-accent transition-colors">Foundation</router-link>
          <a href="#" class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-arch-accent transition-colors">Structures</a>
          <a href="#" class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-arch-accent transition-colors">Archives</a>
       </div>

       <div class="flex items-center space-x-6">
          <button @click="toggleTheme" class="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-slate-400 hover:text-arch-accent transition-all" :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
             <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
             <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          </button>
          <button class="bg-arch-primary dark:bg-white text-white dark:text-black px-8 py-3 rounded-none font-black uppercase tracking-widest text-[10px] shadow-2xl">Connect</button>
       </div>
    </nav>

    <!-- Content -->
    <main class="flex-1">
       <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
             <component :is="Component" />
          </transition>
       </router-view>
    </main>

    <!-- Footer -->
    <footer class="py-24 px-10 border-t border-arch-border dark:border-white/5 bg-slate-50 dark:bg-arch-dark">
       <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div class="space-y-8 max-w-sm">
             <h3 class="font-display font-black text-3xl tracking-tighter uppercase dark:text-white text-arch-primary dark:text-white">The Blueprint Collective.</h3>
             <p class="text-slate-500 font-medium leading-relaxed italic">A technical publication dedicated to the geometry of high-fidelity frontend systems.</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-20 text-[10px] font-black uppercase tracking-[0.3em]">
             <div class="space-y-6">
                <p class="text-arch-accent">Journal</p>
                <div class="flex flex-col gap-4">
                   <a href="#" class="hover:text-arch-primary dark:hover:text-white text-slate-400 transition-colors">Frameworks</a>
                   <a href="#" class="hover:text-arch-primary dark:hover:text-white text-slate-400 transition-colors">Design Ops</a>
                </div>
             </div>
             <div class="space-y-6">
                <p class="text-arch-accent">Social</p>
                <div class="flex flex-col gap-4 text-slate-500">
                   <a href="https://github.com/mk-knight23/57-Gatsby-Blog-Starter" target="_blank" rel="noopener noreferrer" class="hover:text-white flex items-center transition-colors">Github <svg class="ml-1" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg></a>
                   <a href="#" class="hover:text-white flex items-center transition-colors">Twitter <svg class="ml-1" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg></a>
                </div>
             </div>
          </div>
       </div>
       <div class="max-w-7xl mx-auto mt-24 pt-10 border-t border-arch-border dark:border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
          <p>© 2026 Architectural Media Group.</p>
          <p>Staff Engineering Architecture</p>
       </div>
    </footer>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
