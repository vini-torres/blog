'use client'

import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import ProgressBar from '@/components/ProgressBar'
import Tag from '@/components/Tag'

export default function Post() {
  const mainRef = useRef<HTMLElement | null>(null)

  return (
    <section className="mx-auto max-w-7xl px-2 pt-24" ref={mainRef}>
      <ProgressBar target={mainRef} />
      <header className="border-b border-light-100 py-5 dark:border-light-700 dark:bg-dark-600">
        <Link href="/blog" className="flex items-center gap-[0.625rem]">
          <ArrowLeft size={16} className="text-light-500 dark:text-light-300" />
          <span className="text-sm font-light leading-none text-light-500 dark:text-light-300">
            Back to blog
          </span>
        </Link>

        <div className="mt-10">
          <Tag />
          <span className="mt-5 block text-sm font-light text-light-500 dark:text-dark-200">
            Monday, April 22, 2024
          </span>
          <h1 className="mt-1 w-full max-w-[34.0625rem] text-xl font-extrabold sm:text-3xl">
            TailwindCSS e Next.js: dominando o desenvolvimento web com estilo
          </h1>

          <div className="mt-5 flex flex-col gap-[0.625rem]">
            <span className="text-sm font-light text-light-500 dark:text-dark-200">
              Posted by
            </span>
            <div className="flex items-center gap-2">
              <Image src="/avatar.svg" width={40} height={40} alt="" />
              <h4 className="text-sm text-dark-500 dark:text-light-300">
                Diego Fernandes
              </h4>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className="h-screen w-full" />
        <div className="h-screen w-full" />
        <div className="h-screen w-full" />
        <div className="h-screen w-full" />
      </div>
    </section>
  )
}
