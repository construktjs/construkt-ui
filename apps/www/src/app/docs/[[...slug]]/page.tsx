import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { allDocs } from "contentlayer/generated"

import { cn } from "~/lib/utils"
import { Mdx } from "~/components/mdx-components"
import DocsPager from "~/components/pager"
import TOC from "~/components/toc"
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
        <Separator className="my-6" />
        <DocsPager doc={doc} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-14">
          <ScrollArea className="-mt-6 pt-6 lg:-mt-8 lg:pt-8">
            <div className="space-y-2">
              <p className="font-medium">On This Page</p>
              {/* <ul className="mt-2 space-y-0.5">
              {doc.headings.map((heading: { level: number; value: string }) => (
                <li key={heading.value}>
                  <Link
                    data-level={heading.level}
                    href={`/docs/${params.slug?.join("/") || ""}#${
                      heading.value
                    }`}
                    className={cn(
                      "font-medium text-gray-700 data-[level='2']:pl-2 data-[level='3']:pl-4 dark:text-gray-400"
                    )}
                  >
                    {heading.value}
                  </Link>
                </li>
              ))}
            </ul> */}
              <TOC
                items={doc.headings.map(
                  (heading: {
                    level: number
                    value: string
                    slug: string | undefined
                  }) => ({
                    url: `#${heading.slug}`,
                    title: heading.value,
                    level: heading.level,
                  })
                )}
              />
            </div>
          </ScrollArea>
          <Separator className="my-6" />
          <div className="text-xs font-medium">
            <Link href="/">contribute</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
