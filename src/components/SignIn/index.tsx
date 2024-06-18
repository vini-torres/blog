import cx from 'classnames'
import Image from 'next/image'

interface SignInProps {
  className?: string
}

export default function SignIn({ className }: SignInProps) {
  return (
    <button
      className={cx(
        'flex h-10 min-w-52 items-center justify-center gap-[0.625rem] rounded border border-dark-100 px-3 text-sm text-light-400 transition-colors duration-200 hover:bg-light-100 dark:border-dark-500 dark:hover:bg-dark-400 dark:hover:text-light-300',
        className,
      )}
    >
      <Image src="../google.svg" width={20} height={20} alt="Icon Google" />
      Sign in with Google
    </button>
  )
}
