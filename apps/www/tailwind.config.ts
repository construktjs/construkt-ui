import type { Config } from "tailwindcss"

import baseConfig from "../../tailwind.config"

export default {
  ...baseConfig,
  content: [...baseConfig.content, "content/**/*.mdx"],
} satisfies Config
