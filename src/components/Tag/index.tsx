import cx from 'classnames'

interface TagProps {
  label: string
  isActive?: boolean
}

export default function Tag({ label, isActive = false }: TagProps) {
  return (
    <button
      className={cx(
        'h-7 min-w-20 rounded border border-[transparent] px-4 text-sm transition-colors duration-200 hover:bg-light-700 hover:text-white dark:border-dark-500 dark:hover:bg-light-100 dark:hover:text-dark-400',
        {
          'bg-light-700 text-white dark:bg-light-100 dark:text-dark-400':
            isActive,
          'bg-light-100 text-light-500 dark:bg-dark-400 dark:text-light-300':
            !isActive,
        },
      )}
    >
      {label}
    </button>
  )
}
