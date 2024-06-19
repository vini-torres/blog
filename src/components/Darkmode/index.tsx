'use client'

import cx from 'classnames'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function DarkMode() {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    const themeStorage = localStorage.getItem('theme')

    if (themeStorage) {
      setTheme(themeStorage === 'dark')
      if (themeStorage === 'dark') {
        document.body.classList.add('dark')
      }
    }
  }, [])

  const handleThemeChange = () => {
    const newTheme = !theme
    setTheme(newTheme)

    document.body.classList.toggle('dark', newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  return (
    <button
      onClick={handleThemeChange}
      className="relative flex h-[1.875rem] w-16 items-center justify-center gap-3 rounded-3xl border border-light-100 focus:outline-none dark:border-dark-500"
    >
      <Sun
        size={17}
        className="rounded-full text-light-300 dark:text-dark-200"
      />
      <div
        className={cx(
          'absolute h-6 w-6 rounded-full bg-light-600 transition-transform duration-500 dark:bg-light-700',
          {
            'translate-x-4': theme,
            '-translate-x-4': !theme,
          },
        )}
      />
      <Moon size={17} className="text-light-300 dark:text-dark-200" />
    </button>
  )
}
