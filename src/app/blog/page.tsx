'use client'

import { useState } from 'react'

import Article from '@/components/Article'
import LoadMore from '@/components/LoadMore'
import Post from '@/components/Post'
import Tag from '@/components/Tag'
import { api } from '@/lib/api'

export default function Blog() {
  const [peerPage, setPeerPage] = useState(0)

  const allTags = [
    { label: 'All Posts', isActive: true },
    { label: 'Front-end' },
    { label: 'Back-end' },
    { label: 'Mobile' },
  ]

  const allPosts = api.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  )
  const trendingPosts = allPosts.slice(0, 5)
  const othersPosts = allPosts.slice(5, 9 + peerPage)

  const handleLoadMore = () => {
    setPeerPage((state) => state + 4)
  }

  return (
    <section className="mx-auto mb-16 max-w-7xl space-y-6 px-2 pt-24">
      <header className="space-y-10 border-b border-light-100 pb-3 dark:border-dark-500">
        <h1 className="text-xl dark:text-light-100">All Posts</h1>
        <div className="flex flex-wrap items-center gap-[0.625rem] sm:flex-nowrap">
          {allTags.map((tag, index) => (
            <Tag key={index} label={tag.label} isActive={tag.isActive} />
          ))}
        </div>
      </header>

      <div className="space-y-5">
        <h2 className="text-lg text-light-700 dark:text-light-200">
          Trending Posts
        </h2>
        <div className="xsm:grid-cols-2 xmd:grid-cols-3 xsm:[&>*:first-child]:row-span-2 grid grid-cols-1 gap-4">
          {trendingPosts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <h2 className="text-lg text-light-700 dark:text-light-200">
          Others Posts
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {othersPosts.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </div>

      <div className="flex">
        <LoadMore onClick={handleLoadMore} />
      </div>
    </section>
  )
}
