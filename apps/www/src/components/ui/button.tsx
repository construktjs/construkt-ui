import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 gap-x-2 disabled:opacity-50 dark:focus-visible:ring-gray-600 disabled:pointer-events-none dark:focus-visible:ring-offset-gray-900",
  {
    variants: {
      variant: {
        default:
          "bg-sky-500 text-gray-100 hover:bg-sky-500/90 dark:bg-sky-400 dark:text-gray-900 dark:hover:bg-sky-400/90",
        destructive: "bg-red-500 text-red-50 hover:bg-red-500/90",
        outline:
          "border border-gray-200 hover:bg-gray-200/50 dark:border-gray-800 dark:hover:bg-gray-800/50 dark:text-gray-100",
        ghost: "hover:bg-gray-100 dark:hover:bg-gray-800/50",
        link: "underline-offset-2 hover:underline decoration-dashed",
      },
      size: {
        default: "h-10 py-2 px-4 text-sm",
        xs: "h-8 px-3 text-xs",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-8 text-sm",
        xl: "h-12 px-8 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
