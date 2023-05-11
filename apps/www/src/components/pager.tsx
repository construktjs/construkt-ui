import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import type { Doc } from "contentlayer/generated"

import type { NavItem, SidebarNavItem } from "~/types/nav"
import { docsConfig } from "~/config/docs"
import { cn } from "~/lib/utils"
import { buttonVariants } from "~/components/ui/button"

type DocsPagerProps = {
  doc: Doc
}

export function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [null, ...flatten(docsConfig.items), null]

  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href
  )
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null
  return {
    prev,
    next,
  }
}

export function flatten(links: SidebarNavItem[], depth: number = 0): NavItem[] {
  return links.reduce<NavItem[]>((flat, link) => {
    const newItems = link.items?.length
      ? depth < 1
        ? flatten(link.items, depth + 1)
        : [link, ...flatten(link.items, depth + 1)]
      : link
    return flat.concat(newItems)
  }, [])
}

export default function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc)

  if (!pager) return null

  return (
    <div
      className={cn(
        "flex flex-row items-center",
        !pager.prev ? "justify-end" : "justify-between"
      )}
    >
      {pager?.prev?.href && (
        <Link
          href={pager.prev.href}
          className={buttonVariants({ variant: "outline" })}
        >
          <ChevronLeftIcon className="mr-2 h-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className={buttonVariants({ variant: "outline" })}
        >
          {pager.next.title}
          <ChevronRightIcon className="ml-2 h-4" />
        </Link>
      )}
    </div>
  )
}
