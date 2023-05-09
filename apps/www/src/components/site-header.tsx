import Link from "next/link"

import { Icons } from "~/components/icons"
import ThemeToggle from "~/components/theme-toggle"

export default function SiteHeader() {
  return (
    <header>
      <nav className="container flex h-14 items-center gap-4 border-b dark:border-gray-800">
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
