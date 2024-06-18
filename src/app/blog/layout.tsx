import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-white dark:bg-dark-600">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
