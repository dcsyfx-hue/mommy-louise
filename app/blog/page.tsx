'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { CalendarDays, Tag, TrendingUp } from 'lucide-react'

export const dynamic = 'force-dynamic'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  featured_image: string
  category: string
  tags: string[]
  is_published: boolean
  view_count: number
  created_at: string
  updated_at: string
  author_id: string
  profiles: {
    full_name: string
  }
}

const BLOG_CATEGORIES = [
  'All Posts',
  'Budgeting Tips',
  'Savings Strategies',
  'Financial Wellness',
  'Success Stories',
  'Product Updates',
]

export default function BlogPage() {
  const [supabase, setSupabase] = useState<any>(null)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setSupabase(createClient())
  }, [])

  useEffect(() => {
    if (supabase) {
      loadBlogPosts()
    }
  }, [supabase])

  useEffect(() => {
    filterPosts()
  }, [posts, selectedCategory, searchQuery])

  const loadBlogPosts = async () => {
    if (!supabase) return
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*, profiles(full_name)')
        .eq('is_published', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      console.error('Failed to load blog posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterPosts = () => {
    let filtered = posts

    // Filter by category
    if (selectedCategory !== 'All Posts') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    setFilteredPosts(filtered)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">Budget Blog</h1>
          <p className="text-xl text-gray-600">Tips, strategies, and success stories from our community</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <Input
            type="search"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full border-pink-200 focus:border-pink-600"
          />

          <div className="flex gap-2 overflow-x-auto pb-2">
            {BLOG_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white'
                    : 'bg-white border border-pink-200 text-gray-700 hover:border-pink-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <Card className="border-pink-200">
            <CardContent className="p-12 text-center">
              <p className="text-gray-600 text-lg">No posts found. Check back soon!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="border-pink-200 h-full hover:shadow-lg transition-shadow cursor-pointer">
                  {post.featured_image && (
                    <div className="h-48 bg-gradient-to-br from-pink-100 to-rose-100 overflow-hidden">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold px-3 py-1 bg-pink-100 text-pink-700 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <TrendingUp size={14} />
                        {post.view_count}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-900 line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-gray-600">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>By {post.profiles?.full_name || 'Mommy Louise'}</span>
                        <div className="flex items-center gap-1">
                          <CalendarDays size={14} />
                          {new Date(post.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
