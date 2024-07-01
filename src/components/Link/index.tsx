import cx from 'classnames'

interface LinkProps {
  isActive?: boolean
  content: string
  href: string
}

export default function LinkItem({
  isActive = false,
  content,
  href,
}: LinkProps) {
  return (
    <a
      href={href}
      className={cx(
        'line-clamp-2 block w-full truncate rounded border border-[transparent] px-5 py-2 text-sm text-light-400 transition-colors duration-200 dark:text-light-300',
        {
          'bg-light-100 dark:border-dark-500 dark:bg-dark-400 dark:text-light-300':
            isActive,
          'bg-[transparent] hover:bg-light-100 dark:hover:bg-dark-500':
            !isActive,
        },
      )}
    >
      {content}
    </a>
  )
}
