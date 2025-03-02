export default function AdventuresLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="pt-12">{children}</div>
}
