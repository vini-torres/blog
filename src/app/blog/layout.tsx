export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-white dark:bg-dark-600">
      <span>header</span>
      {children}
      <span>footer</span>
    </div>
  )
}
