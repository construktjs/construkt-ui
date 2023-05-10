import { Icon } from "~/components/icons"

export type NavItem = {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: Icon
  label?: string
}

export type NavItemWithChildren = NavItem & {
  items?: NavItemWithChildren[]
}

export type SidebarNavItem = NavItemWithChildren
