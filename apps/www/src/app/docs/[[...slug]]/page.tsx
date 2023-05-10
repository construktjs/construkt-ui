import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { allDocs } from "contentlayer/generated"

import { Mdx } from "~/components/mdx-components"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Separator } from "~/components/ui/separator"

type DocPageProps = {
  params: {
    slug: string[]
  }
}

async function getDocFromSlug(slug: string[]) {
  const path = slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === path)
  if (!doc) return null
  return doc
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({ slug: doc.slugAsParams.split("/") }))
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromSlug(params.slug)

  if (!doc) notFound()

  return (
    <main className="py-6 lg:py-8 xl:grid xl:grid-cols-[1fr_14rem] xl:gap-16">
      <div className="mx-auto w-full min-w-0">
        <div className="space-y-2.5">
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <span>Docs</span>
            <ChevronRightIcon className="w-4" />
            <span className="font-medium text-gray-900 dark:text-gray-200">
              {doc.title}
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{doc.title}</h1>
          {doc.description && (
            <p className="text-lg text-gray-700 dark:text-gray-400">
              {doc.description}
            </p>
          )}
        </div>
        <Separator className="my-6" />
        <Mdx code={doc.body.code} />
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
