import { Send } from 'lucide-react'
import moment from 'moment'
import Link from 'next/link'

interface ArticleProps {
  title: string
  tag: string
  description: string
  href?: string
  createdAt: Date
}

interface Props {
  article: ArticleProps
}

export default function Article({ article }: Props) {
  const date = moment(article.createdAt).format('LL')
  return (
    <Link
      href=""
      className="h-[16.875rem] space-y-4 rounded border border-light-100 p-10 transition-colors duration-200 hover:bg-light-100 dark:border-dark-500 dark:hover:bg-dark-500"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold capitalize text-dark-600 dark:text-light-300">
            {article.tag}
          </span>
          <span className="text-sm font-light text-light-600 dark:text-dark-100">
            {String(date)}
          </span>
        </div>
        <Send size={14} className="text-dark-600 dark:text-white" />
      </div>
      <h3 className="text-xl font-semibold text-black dark:text-white sm:text-2xl">
        {article.title}
      </h3>
      <p className="line-clamp-3 text-sm text-light-700 dark:text-dark-100">
        {article.description}
      </p>
    </Link>
  )
}
