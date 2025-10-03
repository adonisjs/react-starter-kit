import { Link } from '@inertiajs/react'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <header>
        <Link href="/">Home</Link>
      </header>
      <main>{children}</main>
    </>
  )
}
