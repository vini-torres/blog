import SignIn from '../SignIn'

export default function Footer() {
  return (
    <footer className="border-t border-light-100 p-8 dark:border-dark-500">
      <div className="mx-auto my-7 flex max-w-7xl flex-col justify-center gap-8 px-2 sm:flex-row sm:gap-24">
        <span>Logo</span>
        <div className="max-w-[28.125rem]">
          <span className="text-sm font-medium text-[#4785e2] sm:text-base">
            Newsletter
          </span>
          <h3 className="mt-1 bg-[linear-gradient(70deg,#000,#666)] bg-clip-text fill-[transparent] text-xl font-semibold text-[transparent] dark:bg-[linear-gradient(70deg,#FFFFFF,80%,#4E4A4A)] sm:mt-2 sm:text-2xl">
            Tenha acesso aos conteúdos inéditos
          </h3>
          <p className="mb-5 text-sm font-medium text-light-400 dark:text-light-500">
            Crie sua conta ou acesse para ter acesso a todos os nosso conteúdos
            do mundo da programação.
          </p>
          <SignIn />
        </div>
      </div>
      <p className="w-full text-center text-sm font-medium text-light-500 dark:text-dark-200">
        Todos os direitos reservados
      </p>
    </footer>
  )
}
