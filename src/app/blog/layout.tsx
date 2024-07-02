'use client'

import { usePathname } from 'next/navigation'
import { useRef } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProgressBar from '@/components/ProgressBar'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const mainRef = useRef<HTMLElement | null>(null)
  const pathName = usePathname()

  return (
    <main ref={mainRef}>
      <Header />
      {pathName !== '/blog' && <ProgressBar target={mainRef} />}
      {children}
      <Footer />
    </main>
  )
}
