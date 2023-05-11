import Link from "next/link"

import { Icons } from "~/components/icons"
import ThemeToggle from "~/components/theme-toggle"

export default function SiteHeader() {
  return (
    <header>
      <nav className="container fixed inset-x-0 top-0 z-50 flex h-14 items-center gap-4 border-b bg-gray-50/80 backdrop-blur-sm supports-[backdrop-filter]:bg-gray-50/70 dark:border-gray-800 dark:bg-gray-950/90 dark:supports-[backdrop-filter]:bg-gray-950/80">
        <Link
          href="/"
          className="flex items-center gap-1 text-lg font-semibold"
        >
          <Icons.icon width={32} height={32} />
          construkt-ui
        </Link>
        <ul className="grow">
          <li>
            <Link href="/docs">Docs</Link>
          </li>
        </ul>
        <div className="flex gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
