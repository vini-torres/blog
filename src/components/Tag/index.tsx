import cx from 'classnames'

interface TagProps {
  label: string
  isActive?: boolean
}

export default function Tag({ label, isActive = false }: TagProps) {
  return (
    <button
      className={cx(
        'h-7 min-w-20 rounded border border-[transparent] px-4 text-sm transition-colors duration-200 hover:bg-light-700 dark:border-dark-500 dark:hover:bg-dark-400 dark:hover:text-light-300',
        {
          'bg-light-700 text-white dark:bg-dark-400 dark:text-light-300':
            isActive,
          'bg-light-100 text-light-500 dark:bg-[transparent]': !isActive,
        },
      )}
    >
      {label}
    </button>
  )
}
