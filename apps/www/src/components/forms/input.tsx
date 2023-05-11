import { InputHTMLAttributes, forwardRef } from "react"

import { cn } from "~/lib/utils"

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "block w-full appearance-none rounded-md border border-gray-300 bg-transparent px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-800 dark:text-gray-300 sm:text-sm",
        className
      )}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
