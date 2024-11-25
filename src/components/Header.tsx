import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="max-w-1440px relative left-1/2 flex -translate-x-1/2 items-center justify-between px-4 py-2 md:px-8 lg:px-10">
      <Link href="/">
        <Image
          src="/e-commerce-logo-B0AE7EE720-seeklogo.com.png"
          alt="logo"
          height={40}
          width={40}
        />
      </Link>

      <nav className="flex">
        <Link href="/produtos" className="hover:text-blue-500">
          produtos
        </Link>
      </nav>
    </header>
  )
}
