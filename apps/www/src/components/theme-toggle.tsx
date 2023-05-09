"use client"

import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <>
      <button
        className="flex items-center gap-1 text-gray-600 dark:text-gray-400"
        onClick={() => setTheme("system")}
      >
        <span>System</span>
      </button>
      <button
        className="flex items-center gap-1 text-gray-600 dark:text-gray-400"
        onClick={() => setTheme("light")}
      >
        <span>Light</span>
      </button>
      <button
        className="flex items-center gap-1 text-gray-600 dark:text-gray-400"
        onClick={() => setTheme("dark")}
      >
        <span>Dark</span>
      </button>
    </>
  )
}
