import Link from "next/link"

import { Icons } from "./icons"

export default function SiteFooter() {
  return (
    <footer className="border-t dark:border-gray-800">
      <div className="container flex items-center py-8">
        <Link href="/">
          <Icons.icon />
        </Link>
        <span className="text-gray-600 dark:text-gray-500">
          An open source{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/construktjs"
            className="text-gray-700 underline underline-offset-4 dark:text-gray-400"
          >
            construktjs
          </a>{" "}
          project built by{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/jyprx"
            className="text-gray-700 underline underline-offset-4 dark:text-gray-400"
          >
            Jeyprox
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/piros_dev"
            className="text-gray-700 underline underline-offset-4 dark:text-gray-400"
          >
            Piros
          </a>
          .
        </span>
      </div>
    </footer>
  )
}
