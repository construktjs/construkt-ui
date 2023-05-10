import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/20/solid"

import { ScrollArea } from "~/components/ui/scroll-area"
import { Separator } from "~/components/ui/separator"

type DocPageProps = {
  params: {
    slug: string[]
  }
}

export default function DocPage({ params }: DocPageProps) {
  return (
    <main className="py-6 lg:py-8 xl:grid xl:grid-cols-[1fr_14rem] xl:gap-16">
      <div className="mx-auto w-full min-w-0">
        <div className="space-y-2.5">
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <span>Docs</span>
            <ChevronRightIcon className="w-4" />
            <span className="font-medium text-gray-900 dark:text-gray-200">
              {params.slug.join("/")}
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            {params.slug.join("/")}
          </h1>
        </div>
        <Separator className="my-6" />
        <h1>Doc Page</h1>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-14 h-[calc(100vh-3.5rem)]">
          <ScrollArea className="pb-6">
            <ul>
              <li>
                <a href="#introduction">Introduction</a>
              </li>
              <li>
                <a href="#introduction">Introduction</a>
              </li>
              <li>
                <a href="#introduction">Introduction</a>
              </li>
            </ul>
          </ScrollArea>
          <Separator className="my-2" />
          <div className="text-xs font-medium">
            <Link href="/">contribute</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
