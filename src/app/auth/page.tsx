import SignIn from '@/components/SignIn'

export default function Auth() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center space-y-10">
      <span>Logo</span>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold text-dark-500">Welcome back!</h2>
        <p className="text-light-400">Sign in to your account</p>
        <SignIn className="mt-6 w-72" />
      </div>
    </section>
  )
}
