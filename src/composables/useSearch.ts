import { ref } from 'vue'
import Fuse from 'fuse.js'
import type { Post } from '../types/content'

export function useSearch() {
  const searchQuery = ref('')
  const searchResults = ref<Post[]>([])
  const isSearching = ref(false)
  const fuse = ref<Fuse<Post> | null>(null)

  const searchOptions = {
    keys: [
      { name: 'frontmatter.title', weight: 0.4 },
      { name: 'frontmatter.tags', weight: 0.2 },
      { name: 'frontmatter.category', weight: 0.2 },
      { name: 'content', weight: 0.1 }
    ],
    threshold: 0.3,
    distance: 100,
    includeScore: true
  }

  /**
   * Initialize Fuse.js with posts data
   */
  const initializeFuse = async (posts: Post[]) => {
    fuse.value = new Fuse(posts, searchOptions)
  }

  /**
   * Perform search
   */
  const performSearch = async (query: string, posts: Post[]) => {
    if (!query.trim()) {
      searchResults.value = []
      return
    }

    isSearching.value = true
    searchQuery.value = query

    try {
      // Initialize if not already initialized
      if (!fuse.value) {
        await initializeFuse(posts)
      } else {
        // Update data if posts changed
        fuse.value.setCollection(posts)
      }

      if (!fuse.value) return

      const results = fuse.value.search(query)
      searchResults.value = results.map(result => result.item)
    } catch (error) {
      console.error('Search error:', error)
      searchResults.value = []
    } finally {
      isSearching.value = false
    }
  }

  /**
   * Clear search
   */
  const clearSearch = () => {
    searchQuery.value = ''
    searchResults.value = []
    isSearching.value = false
  }

  /**
   * Get search suggestions
   */
  const getSuggestions = (query: string, posts: Post[], limit = 5): Post[] => {
    if (!query.trim()) return []

    const fuseInstance = new Fuse(posts, {
      ...searchOptions,
      threshold: 0.5 // Higher threshold for suggestions
    })

    const results = fuseInstance.search(query)
    return results.slice(0, limit).map(result => result.item)
  }

  return {
    searchQuery,
    searchResults,
    isSearching,
    performSearch,
    clearSearch,
    getSuggestions,
    initializeFuse
  }
}