import Tag from '@/components/Tag'

export default function Blog() {
  const allTags = [
    { label: 'All Posts', isActive: true },
    { label: 'Front-end' },
    { label: 'Back-end' },
    { label: 'Mobile' },
  ]

  return (
    <section className="mx-auto h-screen max-w-7xl px-2 py-24">
      <header className="space-y-10 border-b border-light-100 pb-3 dark:border-dark-500">
        <h1 className="text-xl dark:text-light-200">All Posts</h1>
        <div className="flex items-center gap-[0.625rem]">
          {allTags.map((tag, index) => (
            <Tag key={index} label={tag.label} isActive={tag.isActive} />
          ))}
        </div>
      </header>
    </section>
  )
}
