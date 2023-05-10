import { SidebarNavItem } from "~/types/nav"

type DocsConfig = {
  items: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  items: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
        {
          title: "Release Notes",
          href: "/docs/release-notes",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Input",
          href: "/docs/components/input",
          items: [
            {
              title: "Password",
              href: "/docs/components/input/password",
            },
            {
              title: "Card",
              href: "/docs/components/input/card",
            },
          ],
        },
        {
          title: "Number",
          href: "/docs/components/number",
        },
      ],
    },
  ],
}
