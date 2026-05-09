'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export const dynamic = 'force-dynamic'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, User } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  featured_image: string
  category: string
  tags: string[]
  view_count: number
  created_at: string
  updated_at: string
  author_id: string
  profiles: {
    full_name: string
  }
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const supabase = createClient()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    loadPost()
  }, [slug])

  const loadPost = async () => {
    try {
      const { data: postData, error: postError } = await supabase
        .from('blog_posts')
        .select('*, profiles(full_name)')
        .eq('slug', slug)
        .eq('is_published', true)
        .single()

      if (postError) throw postError
      setPost(postData)

      // Increment view count
      await supabase
        .from('blog_posts')
        .update({ view_count: (postData.view_count || 0) + 1 })
        .eq('id', postData.id)

      // Load related posts
      const { data: related } = await supabase
        .from('blog_posts')
        .select('*, profiles(full_name)')
        .eq('category', postData.category)
        .neq('id', postData.id)
        .eq('is_published', true)
        .limit(3)

      setRelatedPosts(related || [])
    } catch (error) {
      console.error('Failed to load post:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-2xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
          <Link href="/blog" className="text-pink-600 hover:text-pink-700">
            Back to blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8">
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold px-3 py-1 bg-pink-100 text-pink-700 rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>

          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>By {post.profiles?.full_name || 'Mommy Louise'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              <span>{new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="mb-8 rounded-lg overflow-hidden h-96 bg-gradient-to-br from-pink-100 to-rose-100">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-pink max-w-none mb-12">
          <div
            className="text-gray-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{
              __html: post.content.replace(/\n/g, '<br />'),
            }}
          />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-12 pb-12 border-b border-pink-200">
            <h3 className="font-semibold text-gray-900 mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Link
                  key={tag}
                  href={`/blog?search=${encodeURIComponent(tag)}`}
                  className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm hover:bg-pink-200 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card className="border-pink-200 h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                        {relatedPost.content?.substring(0, 100)}...
                      </p>
                      <div className="text-xs text-gray-500">
                        {new Date(relatedPost.created_at).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
