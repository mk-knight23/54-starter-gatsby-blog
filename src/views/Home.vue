<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useContent } from '../composables/useContent'
import { Calendar, Clock, ArrowRight } from 'lucide-vue-next'
import { useHead } from '@vueuse/head'

const { loadAllPosts, getCategories } = useContent()

const posts = ref<any[]>([])
const loading = ref(true)
const selectedCategory = ref<string>('all')
const selectedTag = ref<string>('all')

const categories = computed(() => getCategories.value)

const filteredPosts = computed(() => {
  let result = posts.value

  if (selectedCategory.value !== 'all') {
    result = result.filter(post =>
      post.frontmatter.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory.value
    )
  }

  if (selectedTag.value !== 'all') {
    result = result.filter(post =>
      post.frontmatter.tags.some((tag: string) =>
        tag.toLowerCase().replace(/\s+/g, '-') === selectedTag.value
      )
    )
  }

  return result
})

onMounted(async () => {
  posts.value = await loadAllPosts()
  loading.value = false
})

useHead({
  title: 'Home | Creative Visual Blog',
  meta: [
    { name: 'description', content: 'Explore creative articles on photography, design, and visual storytelling.' }
  ]
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <!-- Hero Section -->
    <section class="creative-hero p-12 md:p-20 mb-16 animate-fade-in">
      <div class="creative-hero-overlay"></div>
      <div class="relative z-10 text-white">
        <span class="creative-badge !bg-white !text-creative-accent mb-6 inline-block">
          Welcome to Creative Blog
        </span>
        <h1 class="creative-title text-5xl md:text-7xl mb-6">
          Visual Stories That<br>Inspire
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-2xl opacity-90 font-light">
          Discover the art of photography, design, and creative expression through our curated collection of visual narratives.
        </p>
        <div class="flex gap-4">
          <router-link to="/gallery" class="creative-button bg-white text-creative-accent hover:bg-gray-100">
            View Gallery
          </router-link>
          <router-link to="/about" class="px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-creative-accent transition-all">
            Learn More
          </router-link>
        </div>
      </div>
    </section>

    <!-- Filters -->
    <section v-if="!loading" class="mb-12">
      <div class="flex flex-wrap gap-3 items-center">
        <span class="text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2">Category:</span>
        <button
          @click="selectedCategory = 'all'"
          class="creative-badge"
          :class="selectedCategory === 'all' ? '!bg-creative-accent !text-white' : ''"
        >
          All
        </button>
        <button
          v-for="category in categories"
          :key="category.slug"
          @click="selectedCategory = category.slug"
          class="creative-badge"
          :class="selectedCategory === category.slug ? '!bg-creative-accent !text-white' : ''"
        >
          {{ category.name }} ({{ category.count }})
        </button>
      </div>
    </section>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-20">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-creative-accent border-t-transparent"></div>
      <p class="mt-4 text-gray-600 dark:text-gray-400">Loading stories...</p>
    </div>

    <!-- Posts Grid -->
    <section v-else class="creative-masonry">
      <article
        v-for="post in filteredPosts"
        :key="post.frontmatter.slug"
        class="creative-card group cursor-pointer"
      >
        <router-link :to="`/article/${post.frontmatter.slug}`">
          <!-- Featured Image -->
          <div class="creative-image-container aspect-[4/3] overflow-hidden">
            <img
              v-if="post.frontmatter.featuredImage"
              :src="post.frontmatter.featuredImage"
              :alt="post.frontmatter.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div
              v-else
              class="w-full h-full bg-gradient-to-br from-creative-accent to-creative-tertiary flex items-center justify-center"
            >
              <span class="text-white text-6xl font-display font-bold">
                {{ post.frontmatter.title.charAt(0) }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Meta -->
            <div class="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
              <span class="creative-badge">{{ post.frontmatter.category }}</span>
              <span class="flex items-center gap-1">
                <Calendar :size="14" />
                {{ new Date(post.frontmatter.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
              </span>
              <span class="flex items-center gap-1">
                <Clock :size="14" />
                {{ post.readingTime }} min read
              </span>
            </div>

            <!-- Title -->
            <h2 class="creative-title text-2xl mb-3 group-hover:text-creative-accent transition-colors">
              {{ post.frontmatter.title }}
            </h2>

            <!-- Excerpt -->
            <p class="creative-subtitle mb-4 line-clamp-3">
              {{ post.frontmatter.excerpt }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in post.frontmatter.tags.slice(0, 3)"
                :key="tag"
                class="text-xs text-gray-500 dark:text-gray-400"
              >
                #{{ tag }}
              </span>
            </div>

            <!-- Read More -->
            <span class="inline-flex items-center gap-2 text-creative-accent font-semibold text-sm group-hover:gap-3 transition-all">
              Read More <ArrowRight :size="16" />
            </span>
          </div>
        </router-link>
      </article>
    </section>

    <!-- Empty State -->
    <section v-if="!loading && filteredPosts.length === 0" class="text-center py-20">
      <p class="text-gray-600 dark:text-gray-400 text-lg">No stories found matching your filters.</p>
      <button
        @click="selectedCategory = 'all'; selectedTag = 'all'"
        class="creative-button mt-4"
      >
        Clear Filters
      </button>
    </section>

    <!-- Newsletter Section -->
    <section class="mt-20 creative-card !bg-gradient-to-br !from-creative-accent !to-creative-tertiary !border-0">
      <div class="p-12 text-center text-white">
        <h2 class="creative-title text-4xl mb-4">Stay Inspired</h2>
        <p class="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Get the latest creative stories, photography tips, and design inspiration delivered to your inbox.
        </p>
        <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            class="creative-input flex-1 !bg-white !text-creative-accent !border-0"
          />
          <button type="submit" class="creative-button !bg-creative-accent-hover !text-white">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
