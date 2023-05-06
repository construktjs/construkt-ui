import { Analytics } from "@vercel/analytics/react"

import { fontSans } from "~/lib/fonts"
import { cn } from "~/lib/utils"
import { ThemeProvider } from "~/components/theme-provider"

import "~/styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "construkt-ui",
    template: "%s | construkt-ui",
  },
  authors: [
    { name: "jeyprox", url: "https://twitter.com/jyprx" },
    { name: "piros", url: "https://twitter.com/piros_dev" },
  ],
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            {/* <SiteHeader /> */}
            <div className="flex-1">{children}</div>
            {/* <SiteFooter /> */}
          </div>
        </ThemeProvider>
        <Analytics />
        {/* <Toaster /> */}
      </body>
    </html>
  )
}
