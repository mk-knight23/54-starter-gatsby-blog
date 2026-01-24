<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeft, Share2, Compass } from 'lucide-vue-next'

const props = defineProps<{ slug: string }>()

const article = ref({
  title: 'Modular Foundations in Web Design',
  author: 'M. Kazi',
  date: 'Dec 15, 2025',
  content: `
    <p>Architecture in the digital realm requires the same rigor as physical construction. We must define our foundations with immutable primitives before layering complex interactions.</p>
    <h2>The Atomic Layer</h2>
    <p>By defining our systems at the atomic level, we ensure that every subsequent component inherits the structural integrity of the base. This is the essence of modular scalability.</p>
    <blockquote>"Complexity is built from simple parts, rigorously integrated."</blockquote>
    <p>This Vue-powered SSG environment allows us to maintain these architectural standards while delivering instant, edge-cached experiences to the global user base.</p>
  `
})
</script>

<template>
  <article class="max-w-4xl mx-auto px-10 py-24 space-y-20">
    <router-link to="/" class="inline-flex items-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-arch-accent transition-colors">
       <ArrowLeft class="mr-3" :size="14" /> Return to Base
    </router-link>

    <header class="space-y-12">
       <div class="flex items-center space-x-6 text-[10px] font-black uppercase tracking-widest text-arch-accent">
          <span class="px-3 py-1 bg-arch-primary text-white dark:bg-white dark:text-black">Foundation 01</span>
          <span class="flex items-center gap-1.5 italic text-slate-500"><Compass :size="12" /> Systems Exploration</span>
       </div>
       <h1 class="text-7xl md:text-9xl font-display font-black tracking-tighter leading-[0.8] uppercase text-black dark:text-white">
          {{ article.title }}
       </h1>
       <div class="flex items-center justify-between py-12 border-y border-arch-border dark:border-white/10">
          <div class="flex items-center space-x-6">
             <div class="w-14 h-14 bg-slate-100 dark:bg-white/5 border border-arch-border dark:border-white/10 rounded-none rotate-12 flex items-center justify-center font-black">MK</div>
             <div>
                <p class="text-sm font-black uppercase tracking-tight dark:text-white">{{ article.author }}</p>
                <p class="text-[10px] text-slate-500 font-black uppercase tracking-widest">{{ article.date }}</p>
             </div>
          </div>
          <button class="w-14 h-14 border border-arch-border dark:border-white/10 flex items-center justify-center hover:bg-arch-accent hover:text-white transition-all"><Share2 :size="18" /></button>
       </div>
    </header>

    <div class="prose prose-2xl prose-slate dark:prose-invert max-w-none font-medium text-slate-700 dark:text-slate-300 italic" v-html="article.content"></div>

    <footer class="pt-40 pb-20">
       <div class="border-t-4 border-black dark:border-white pt-12 grid md:grid-cols-2 gap-20">
          <div class="space-y-6">
             <h4 class="text-2xl font-display font-black uppercase tracking-tight dark:text-white">Expand the Network.</h4>
             <p class="text-slate-500 text-sm font-medium leading-relaxed italic">Join the collective to receive technical blueprints and architectural breakdowns twice monthly.</p>
          </div>
          <div class="flex items-end">
             <button class="w-full bg-arch-primary dark:bg-white text-white dark:text-black py-5 font-black uppercase tracking-widest text-xs hover:bg-arch-accent transition-all shadow-2xl">Subscribe to Dispatch</button>
          </div>
       </div>
    </footer>
  </article>
</template>
