import { ref, computed } from 'vue'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import type { Post, PostFrontmatter } from '../types/content'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

// Cache for loaded posts
const postsCache = ref<Map<string, Post>>(new Map())
const allPostsCache = ref<Post[]>([])
const isLoaded = ref(false)

export function useContent() {
  /**
   * Calculate reading time from content
   */
  const calculateReadingTime = (content: string): number => {
    const wordsPerMinute = 200
    const words = content.split(/\s+/).length
    return Math.ceil(words / wordsPerMinute)
  }

  /**
   * Parse markdown file with frontmatter
   */
  const parseMarkdown = (raw: string): Post => {
    const { data, content } = matter(raw)
    const frontmatter = data as PostFrontmatter
    const htmlContent = md.render(content)

    return {
      frontmatter,
      content: htmlContent,
      readingTime: calculateReadingTime(content),
    }
  }

  /**
   * Load a single post by slug
   */
  const loadPost = async (slug: string): Promise<Post | null> => {
    // Check cache first
    if (postsCache.value.has(slug)) {
      return postsCache.value.get(slug)!
    }

    try {
      // In a real implementation, this would fetch from an API or import modules
      // For now, we'll use a dynamic import pattern
      const modules = import.meta.glob('/content/posts/**/*.md', { as: 'raw' })
      const postPath = `/content/posts/${slug}.md`

      if (!modules[postPath]) {
        return null
      }

      const raw = await modules[postPath]()
      const post = parseMarkdown(raw)
      postsCache.value.set(slug, post)
      return post
    } catch (error) {
      console.error(`Failed to load post: ${slug}`, error)
      return null
    }
  }

  /**
   * Load all published posts
   */
  const loadAllPosts = async (): Promise<Post[]> => {
    if (isLoaded.value && allPostsCache.value.length > 0) {
      return allPostsCache.value
    }

    try {
      const modules = import.meta.glob('/content/posts/**/*.md', { as: 'raw' })
      const posts: Post[] = []

      for (const path in modules) {
        const raw = await modules[path]!() as string
        const post = parseMarkdown(raw)

        // Only include published posts
        if (post.frontmatter.published) {
          posts.push(post)
        }
      }

      // Sort by date (newest first)
      posts.sort(
        (a, b) =>
          new Date(b.frontmatter.date).getTime() -
          new Date(a.frontmatter.date).getTime()
      )

      allPostsCache.value = posts
      isLoaded.value = true
      return posts
    } catch (error) {
      console.error('Failed to load posts', error)
      return []
    }
  }

  /**
   * Get all unique categories
   */
  const getCategories = computed(() => {
    const categoryMap = new Map<string, number>()

    allPostsCache.value.forEach((post) => {
      const category = post.frontmatter.category
      categoryMap.set(category, (categoryMap.get(category) || 0) + 1)
    })

    return Array.from(categoryMap.entries())
      .map(([name, count]) => ({
        slug: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        count,
      }))
      .sort((a, b) => b.count - a.count)
  })

  /**
   * Get all unique tags
   */
  const getTags = computed(() => {
    const tagMap = new Map<string, number>()

    allPostsCache.value.forEach((post) => {
      post.frontmatter.tags.forEach((tag) => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
      })
    })

    return Array.from(tagMap.entries())
      .map(([name, count]) => ({
        slug: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        count,
      }))
      .sort((a, b) => b.count - a.count)
  })

  /**
   * Get posts by category
   */
  const getPostsByCategory = (categorySlug: string): Post[] => {
    return allPostsCache.value.filter(
      (post) =>
        post.frontmatter.category.toLowerCase().replace(/\s+/g, '-') ===
        categorySlug
    )
  }

  /**
   * Get posts by tag
   */
  const getPostsByTag = (tagSlug: string): Post[] => {
    return allPostsCache.value.filter((post) =>
      post.frontmatter.tags.some(
        (tag) => tag.toLowerCase().replace(/\s+/g, '-') === tagSlug
      )
    )
  }

  /**
   * Get related posts by tags
   */
  const getRelatedPosts = (currentSlug: string, limit = 3): Post[] => {
    const currentPost = postsCache.value.get(currentSlug)
    if (!currentPost) return []

    const currentTags = new Set(currentPost.frontmatter.tags)

    return allPostsCache.value
      .filter(
        (post) =>
          post.frontmatter.slug !== currentSlug &&
          post.frontmatter.tags.some((tag) => currentTags.has(tag))
      )
      .slice(0, limit)
  }

  return {
    loadPost,
    loadAllPosts,
    getCategories,
    getTags,
    getPostsByCategory,
    getPostsByTag,
    getRelatedPosts,
    isLoaded,
  }
}
