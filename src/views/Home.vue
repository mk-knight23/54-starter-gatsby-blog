<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

const articles = ref([
  { slug: 'modular-foundations', title: 'Modular Foundations in Web Design', excerpt: 'Exploring the base layer of scalable design systems.', date: 'Dec 15, 2025', category: 'Foundation' },
  { slug: 'computational-geometry', title: 'Computational Geometry on the Edge', excerpt: 'The math behind ultra-fast rendering pipelines.', date: 'Dec 12, 2025', category: 'Systems' },
  { slug: 'kinetic-typography', title: 'Kinetic Typography Strategies', excerpt: 'Dynamic motion patterns for modern technical journals.', date: 'Dec 08, 2025', category: 'Design' },
])
</script>

<template>
  <div class="max-w-7xl mx-auto px-10 py-24 space-y-32">
    <!-- Hero -->
    <header class="max-w-4xl space-y-12">
       <div class="inline-flex items-center space-x-4">
          <span class="text-[10px] font-black uppercase tracking-[0.6em] text-arch-accent">Status // Operational</span>
          <div class="h-px w-20 bg-arch-border dark:bg-white/10"></div>
       </div>
       <h2 class="text-7xl md:text-9xl font-display font-black tracking-tighter leading-[0.8] uppercase dark:text-white">
          Structural <br />
          <span class="italic font-light text-arch-accent underline decoration-4 underline-offset-8 decoration-arch-accent/20">Insights.</span>
       </h2>
       <p class="text-2xl text-slate-500 font-medium max-w-xl italic leading-relaxed">
          Deconstructing the digital built environment through high-performance engineering.
       </p>
    </header>

    <!-- Grid List -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-arch-border dark:bg-white/5 border border-arch-border dark:border-white/5">
       <div v-for="article in articles" :key="article.slug" class="bg-white dark:bg-arch-dark p-12 space-y-10 group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
          <div class="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
             <span class="text-arch-accent">{{ article.category }}</span>
             <span>{{ article.date }}</span>
          </div>
          <div class="space-y-6">
             <h3 class="text-4xl font-serif font-black leading-tight tracking-tight dark:text-white group-hover:underline decoration-arch-accent transition-all">{{ article.title }}</h3>
             <p class="text-slate-500 font-medium leading-relaxed italic">{{ article.excerpt }}</p>
          </div>
          <router-link :to="'/article/' + article.slug" class="inline-flex items-center text-[10px] font-black uppercase tracking-[0.4em] pt-8 group-hover:text-arch-accent transition-colors">
             Examine <ArrowRight class="ml-3" :size="14" />
          </router-link>
       </div>
    </section>
  </div>
</template>

<style scoped>
.gap-1px { gap: 1px; }
</style>
