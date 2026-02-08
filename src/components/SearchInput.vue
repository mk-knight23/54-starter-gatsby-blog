<template>
  <div class="relative max-w-md mx-auto">
    <div class="relative">
      <input
        type="text"
        v-model="query"
        @input="onInput"
        @focus="showResults = true"
        @blur="onBlur"
        placeholder="Search articles..."
        class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>

    <!-- Search Results Dropdown -->
    <div
      v-if="showResults && results.length > 0"
      class="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
    >
      <a
        v-for="result in results"
        :key="result.frontmatter.slug"
        :href="`/posts/${result.frontmatter.slug}`"
        class="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
      >
        <div class="font-medium text-gray-900">{{ result.frontmatter.title }}</div>
        <div class="text-sm text-gray-600 mt-1 line-clamp-2">
          {{ result.frontmatter.excerpt || result.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...' }}
        </div>
        <div v-if="result.frontmatter.tags && result.frontmatter.tags.length > 0" class="flex flex-wrap gap-1 mt-2">
          <span
            v-for="tag in result.frontmatter.tags.slice(0, 3)"
            :key="tag"
            class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </a>
    </div>

    <!-- No Results -->
    <div
      v-if="showResults && query && results.length === 0"
      class="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4"
    >
      <p class="text-gray-500 text-sm">No articles found for "{{ query }}"</p>
      <p class="text-gray-400 text-xs mt-1">Try different keywords</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useSearch } from '../composables/useSearch'

interface Props {
  posts: any[]
}

const props = defineProps<Props>()

const { searchResults, performSearch } = useSearch()
const query = ref('')
const showResults = ref(false)
const blurTimeout = ref<number | null>(null)

const results = computed(() => searchResults.value)

const onInput = async () => {
  if (blurTimeout.value) {
    clearTimeout(blurTimeout.value)
    blurTimeout.value = null
  }

  if (query.value.length > 2) {
    await performSearch(query.value, props.posts)
  } else {
    searchResults.value = []
  }
}

const onBlur = () => {
  blurTimeout.value = window.setTimeout(() => {
    showResults.value = false
  }, 200)
}

onMounted(() => {
  // Initialize with current posts
  if (props.posts.length > 0) {
    // You could initialize here if needed
  }
})

onUnmounted(() => {
  if (blurTimeout.value) {
    clearTimeout(blurTimeout.value)
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>