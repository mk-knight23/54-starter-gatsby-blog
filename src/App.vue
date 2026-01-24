<script setup lang="ts">
import { ref } from 'vue'
import { 
  Sun, 
  Moon, 
  ArrowUpRight
} from 'lucide-vue-next'
import { useHead } from '@vueuse/head'

const isDarkMode = ref(true)
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark')
}

useHead({
  title: 'Architecture | Modern SSG Collective',
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
          <button @click="toggleTheme" class="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-slate-400 hover:text-arch-accent transition-all">
             <Sun v-if="isDarkMode" :size="18" />
             <Moon v-else :size="18" />
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
                   <a href="#" class="hover:text-white flex items-center transition-colors">Github <ArrowUpRight class="ml-1" :size="10" /></a>
                   <a href="#" class="hover:text-white flex items-center transition-colors">Twitter <ArrowUpRight class="ml-1" :size="10" /></a>
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
