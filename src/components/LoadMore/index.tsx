interface LoadMoreProps {
  onClick: () => void
  isActive?: boolean
}

export default function LoadMore({ onClick, isActive }: LoadMoreProps) {
  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className="mx-auto h-9 w-60 rounded border border-light-100 text-sm text-light-700 transition-colors duration-200 hover:bg-light-100 dark:border-dark-500 dark:text-light-100 dark:hover:bg-dark-500"
    >
      Load more posts
    </button>
  )
}
