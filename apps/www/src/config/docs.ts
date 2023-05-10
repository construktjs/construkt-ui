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
          href: "/docs",
        },
        {
          title: "Installation",
          href: "/docs/installation",
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
