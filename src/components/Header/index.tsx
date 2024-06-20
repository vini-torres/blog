import Link from 'next/link'

import DarkMode from '../Darkmode'

export default function Header() {
  return (
    <header className="fixed top-0 z-10 h-14 w-full border-b border-light-100 bg-white dark:border-light-700 dark:bg-dark-600">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between p-2">
        <span>Logo</span>
        <div className="flex items-center gap-[0.625rem]">
          <DarkMode />
          <Link
            href="/auth"
            className="flex w-20 items-center justify-center rounded-md border border-light-100 py-1 text-light-700 transition-colors duration-200 hover:bg-dark-400 hover:text-white dark:border-light-700 dark:text-light-300 dark:hover:border-dark-400"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}
