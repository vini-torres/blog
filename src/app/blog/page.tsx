'use client'

import Article from '@/components/Article'
import Post from '@/components/Post'
import Tag from '@/components/Tag'
import { api } from '@/lib/api'

export default function Blog() {
  const allTags = [
    { label: 'All Posts', isActive: true },
    { label: 'Front-end' },
    { label: 'Back-end' },
    { label: 'Mobile' },
  ]

  const getLatestPosts = api.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  )

  const trendingPosts = getLatestPosts.slice(0, 5)
  const othersPosts = getLatestPosts.slice(5, 9)

  console.log(getLatestPosts)
  return (
    <section className="mx-auto max-w-7xl space-y-6 px-2 py-24">
      <header className="space-y-10 border-b border-light-100 pb-3 dark:border-dark-500">
        <h1 className="text-xl dark:text-light-100">All Posts</h1>
        <div className="flex items-center gap-[0.625rem]">
          {allTags.map((tag, index) => (
            <Tag key={index} label={tag.label} isActive={tag.isActive} />
          ))}
        </div>
      </header>

      <div className="space-y-5">
        <h2 className="text-lg text-light-700 dark:text-light-200">
          Trending Posts
        </h2>
        <div className="grid grid-cols-3 gap-4 [&>*:first-child]:row-span-2">
          {trendingPosts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <h2 className="text-lg text-light-700 dark:text-light-200">
          Others Posts
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {othersPosts.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
