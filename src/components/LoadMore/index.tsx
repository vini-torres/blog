interface LoadMoreProps {
  onClick: () => void
  isActive?: boolean
}

export default function LoadMore({ onClick, isActive = false }: LoadMoreProps) {
  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className="mx-auto h-9 w-60 rounded border border-light-100 bg-white text-sm text-light-700 transition-colors duration-200 hover:bg-light-100 disabled:cursor-not-allowed disabled:border-light-200 disabled:bg-light-200 disabled:text-light-400 dark:border-light-700 dark:bg-dark-500 dark:text-light-100 dark:hover:bg-dark-400 disabled:dark:border-dark-500 disabled:dark:bg-dark-500 disabled:dark:text-light-600"
    >
      Load more posts
    </button>
  )
}
