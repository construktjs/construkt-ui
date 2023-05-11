"use client"

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { cva } from "class-variance-authority"

import { SidebarNavItem } from "~/types/nav"
import { cn } from "~/lib/utils"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"

type SidebarNavProps = {
  items: SidebarNavItem[]
}

const sidebarLinkVariants = cva(
  "group inline-flex w-full items-center rounded-md px-2 py-1.5 transition hover:bg-gray-100 dark:hover:bg-gray-900 justify-between",
  {
    variants: {
      variant: {
        disabled: "cursor-not-allowed opacity-60",
        active: "font-medium",
        inactive: "text-gray-700 dark:text-gray-400",
      },
    },
    defaultVariants: {
      variant: "inactive",
    },
  }
)

const SidebarLink = forwardRef<
  ElementRef<typeof Link>,
  ComponentPropsWithoutRef<"a"> & {
    item: SidebarNavItem
    withChevron?: boolean
    pathname?: string
  }
>(({ item, withChevron = false, pathname, ...props }, ref) => {
  return item.href ? (
    <Link
      ref={ref}
      href={item.href}
      className={cn(
        sidebarLinkVariants({
          variant: pathname === item.href ? "active" : "inactive",
        })
      )}
      target={item.external ? "_blank" : ""}
      rel={item.external ? "noreferrer" : ""}
      {...props}
    >
      <span className="inline-flex grow items-center gap-1.5">
        {item.title}
        {item.label && (
          <span className="rounded-md bg-sky-500 px-1.5 py-0.5 text-xs leading-none text-gray-950">
            {item.label}
          </span>
        )}
      </span>
      {withChevron && (
        <ChevronDownIcon className="h-4 text-gray-500 transition-transform group-data-[state=closed]:-rotate-90 dark:text-gray-400" />
      )}
    </Link>
  ) : (
    <span
      ref={ref}
      className="text-muted-foreground flex w-full cursor-not-allowed items-center rounded-md px-2 py-1.5"
    >
      {item.title}
    </span>
  )
})

export default function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname()

  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-4")}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {item.title}
          </h4>
          {item?.items?.length && (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  ) : null
}

type DocsSidebarNavItemsProps = {
  items: SidebarNavItem[]
  pathname: string
  depth?: number
}

function DocsSidebarNavItems({
  items,
  pathname,
  depth = 0,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <ul
      className={cn(
        "relative flex flex-col gap-1 text-sm",
        depth > 0 && "ml-3 pl-3"
      )}
    >
      {depth > 0 && (
        <div className="absolute inset-y-1 left-0 w-px bg-gray-300 dark:bg-gray-700" />
      )}
      {items.map((item, index) =>
        item.items?.length ? (
          <Collapsible key={index} asChild>
            <li>
              <CollapsibleTrigger asChild>
                <SidebarLink item={item} pathname={pathname} withChevron />
              </CollapsibleTrigger>
              <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                <DocsSidebarNavItems
                  items={item.items}
                  pathname={pathname}
                  depth={depth + 1}
                />
              </CollapsibleContent>
            </li>
          </Collapsible>
        ) : (
          <SidebarLink key={index} item={item} pathname={pathname} />
        )
      )}
    </ul>
  ) : null
}
