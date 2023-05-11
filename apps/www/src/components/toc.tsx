"use client"

import { useEffect, useMemo, useState } from "react"

import { cn } from "~/lib/utils"

type TOCProps = {
  items: {
    url: string
    title: string
    level: number
  }[]
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    itemIds?.forEach((id) => {
      const element = document.getElementById(id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}

export default function TOC({ items }: TOCProps) {
  const itemIds = useMemo(
    () => items.map((item) => item.url.split("#")[1]),
    [items]
  )

  const activeId = useActiveItem(itemIds)

  if (typeof window === "undefined") return null

  return (
    <ul className="space-y-0.5">
      {items.map((item) => (
        <li key={item.url}>
          <a
            href={item.url}
            data-level={item.level}
            className={cn(
              "font-medium text-gray-700 data-[level='2']:pl-2 data-[level='3']:pl-4 dark:text-gray-400",
              `#${activeId}` === item.url && "text-sky-500 dark:text-sky-400"
            )}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  )
}
