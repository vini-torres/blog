import React, { useCallback, useEffect, useState } from 'react'

interface ProgressBarProps {
  target: React.RefObject<HTMLElement>
}

export default function ProgressBar({ target }: ProgressBarProps) {
  const [progress, setProgress] = useState(0)

  const scrollListener = useCallback(() => {
    if (!target.current) {
      return
    }

    const { clientHeight } = target.current
    const totalHeight = clientHeight - window.innerHeight
    const scrollY = window.scrollY || document.documentElement.scrollTop

    const scrollProgress = Math.min(
      Math.max((scrollY / totalHeight) * 100, 0),
      100,
    )

    setProgress(scrollProgress)
  }, [target])

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [scrollListener])

  return (
    <div className="fixed left-0 right-0 top-[3.5rem]">
      <div
        className={`h-[0.1875rem] rounded bg-[#29518d]`}
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  )
}
