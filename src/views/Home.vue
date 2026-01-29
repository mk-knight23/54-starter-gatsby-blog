<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, Calendar } from 'lucide-vue-next'

const articles = ref([
  { slug: 'raw-html', title: 'Return to Raw HTML', excerpt: 'Why we abandoned semantic markup for div soup.', date: '2026-01-15', category: 'Manifesto' },
  { slug: 'no-radius', title: 'Against Border Radius', excerpt: 'Sharp edges are honest edges. Roundness is deception.', date: '2026-01-12', category: 'Opinion' },
  { slug: 'system-fonts', title: 'System Fonts Only', excerpt: 'Web fonts are bloat. Use what is already there.', date: '2026-01-08', category: 'Design' },
  { slug: 'high-contrast', title: 'Maximum Contrast', excerpt: 'Accessibility through visual aggression.', date: '2026-01-05', category: 'Theory' },
])
</script>

<template>
  <div class="max-w-7xl mx-auto px-0 py-0">
    <!-- Hero -->
    <header class="px-6 py-20 border-b-4 border-black dark:border-white">
       <div class="flex items-center gap-4 mb-8">
          <span class="brutal-badge bg-brutal-accent">STATUS: ONLINE</span>
          <span class="font-mono text-xs font-bold uppercase tracking-widest animate-blink">_</span>
       </div>

       <h2 class="brutal-title mb-8">
          RAW<br/>
          <span class="bg-brutal-fg text-brutal-bg px-4">HONEST</span><br/>
          <span class="italic">AESTHETIC</span>
       </h2>

       <p class="font-mono text-lg max-w-xl leading-relaxed mb-12">
          Deconstructing the digital environment. No smooth transitions. No gradients. No mercy.
       </p>

       <button class="brutal-button flex items-center gap-2">
          START READING <ArrowRight :size="16" />
       </button>
    </header>

    <!-- Featured Article -->
    <section class="grid lg:grid-cols-2 border-b-4 border-black dark:border-white">
       <div class="brutal-card !border-0 !rounded-0 !border-r-4 h-full">
          <div class="brutal-badge bg-brutal-accent mb-6">FEATURED</div>
          <h3 class="brutal-title text-4xl mb-6">THE MANIFESTO OF BRUTALISM</h3>
          <p class="font-mono text-sm leading-relaxed mb-8 opacity-80">
             We return to the source. Before smooth transitions. Before rounded corners. Before the web became a polished shopping mall. This is raw HTML. This is brutal.
          </p>
          <router-link to="/article/manifesto" class="brutal-button inline-flex items-center gap-2">
             READ NOW <ArrowRight :size="16" />
          </router-link>
       </div>

       <div class="bg-brutal-fg text-brutal-bg p-12 flex flex-col justify-center items-center border-l-4 border-black dark:border-white">
          <div class="text-9xl font-black mb-4">01</div>
          <div class="font-mono text-sm font-bold uppercase tracking-widest">JANUARY 2026</div>
       </div>
    </section>

    <!-- Articles Grid -->
    <section class="grid grid-cols-1 md:grid-cols-2">
       <div v-for="(article, index) in articles" :key="article.slug" class="brutal-card !border-0 !rounded-0 group cursor-pointer">
          <div class="flex items-center justify-between mb-6">
             <span class="brutal-badge" :class="index % 2 === 0 ? 'bg-black text-white' : 'bg-brutal-accent'">{{ article.category }}</span>
             <span class="font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Calendar :size="14" /> {{ article.date }}
             </span>
          </div>

          <h3 class="brutal-title text-2xl mb-4 group-hover:underline decoration-4">{{ article.title }}</h3>

          <p class="font-mono text-sm leading-relaxed mb-6 opacity-70">
             {{ article.excerpt }}
          </p>

          <router-link :to="'/article/' + article.slug" class="brutal-link flex items-center gap-2">
             READ <ArrowRight :size="14" />
          </router-link>
       </div>
    </section>

    <!-- Stats Section -->
    <section class="grid grid-cols-2 md:grid-cols-4 border-t-4 border-black dark:border-white">
       <div class="brutal-grid-item text-center">
          <div class="text-5xl font-black mb-2">12</div>
          <div class="font-mono text-xs font-bold uppercase tracking-widest">ARTICLES</div>
       </div>
       <div class="brutal-grid-item text-center">
          <div class="text-5xl font-black mb-2">3</div>
          <div class="font-mono text-xs font-bold uppercase tracking-widest">MANIFESTOS</div>
       </div>
       <div class="brutal-grid-item text-center">
          <div class="text-5xl font-black mb-2">0</div>
          <div class="font-mono text-xs font-bold uppercase tracking-widest">COOKIES</div>
       </div>
       <div class="brutal-grid-item text-center">
          <div class="text-5xl font-black mb-2">100%</div>
          <div class="font-mono text-xs font-bold uppercase tracking-widest">RAW HTML</div>
       </div>
    </section>
  </div>
</template>

<style scoped>
.gap-1px { gap: 1px; }
</style>
