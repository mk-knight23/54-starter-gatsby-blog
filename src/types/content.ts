export interface PostFrontmatter {
  title: string
  slug: string
  date: string
  excerpt: string
  author?: string
  featuredImage?: string
  category: string
  tags: string[]
  published: boolean
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: string
  }
}

export interface Post {
  frontmatter: PostFrontmatter
  content: string
  readingTime: number
}

export interface Category {
  slug: string
  name: string
  count: number
}

export interface Tag {
  slug: string
  name: string
  count: number
}
